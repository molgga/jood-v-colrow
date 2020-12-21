<template>
  <div class="jd-colrow-row" ref="elSize" :style="elSizeStyle">
    <div class="colrow-entry" ref="elEntry" :[elEntryDataKey]="groupKey">
      <slot :state="state"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import {
  defineComponent,
  reactive,
  computed,
  inject,
  onMounted,
  onUnmounted,
  shallowRef
} from 'vue';
import {
  JD_COLROW_OBSERVER_TOKEN,
  JdColrowObserver,
  JdColrowGroup,
  GroupState,
  GroupDatasetKey
} from '../modules';

export default defineComponent({
  props: {
    groupKey: {
      type: String,
      default: '',
      required: true
    },
    lazyAggregate: {
      type: Number,
      default: 15
    }
  },
  setup(props) {
    const colrowObserver = inject<JdColrowObserver>(JD_COLROW_OBSERVER_TOKEN);
    const elEntryDataKey = `data-${GroupDatasetKey}`;
    const elSize = shallowRef<HTMLElement>(null);
    const elEntry = shallowRef<HTMLElement>(null);
    const listener = new Subscription();
    let colrowGroup: JdColrowGroup;

    const state = reactive({
      expectHeight: null
    });
    const elSizeStyle = computed(() => {
      const height = state.expectHeight;
      if (height && !isNaN(height)) {
        return { height: `${height}px` };
      } else {
        return {};
      }
    });
    const onChangeGroupState = (groupState: GroupState) => {
      state.expectHeight = groupState.expectHeight;
    };

    onMounted(() => {
      colrowGroup = colrowObserver.joinGroup(props.groupKey, elEntry.value, {
        lazyAggregate: props.lazyAggregate
      });
      const observeState = colrowGroup.observeState().subscribe(onChangeGroupState);
      listener.add(observeState);
    });
    onUnmounted(() => {
      colrowObserver.unjoinGroup(props.groupKey, elEntry.value);
      listener.unsubscribe();
    });
    return {
      state,
      elSize,
      elSizeStyle,
      elEntry,
      elEntryDataKey
    };
  }
});
</script>

<style lang="scss" scoped>
.jd-colrow-row {
  box-sizing: initial;
  .colrow-entry {
    box-sizing: border-box;
  }
}
</style>
