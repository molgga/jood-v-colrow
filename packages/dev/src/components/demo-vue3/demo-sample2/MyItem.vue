<template>
  <div class="my-item">
    <div class="my-head">
      <strong>my-component</strong>
    </div>
    <div class="my-panel">
      <jd-colrow-row groupKey="my-group-title" :lazyAggregate="0" class="my-row">
        <template v-slot="state">
          <div class="my-test-state">{{ state }}</div>
          <dl class="my-dl">
            <dt class="my-dt">Title</dt>
            <dd class="my-dd">{{ myModel.title }}</dd>
          </dl>
        </template>
      </jd-colrow-row>
      <jd-colrow-row groupKey="my-group-tags" :lazyAggregate="0" class="my-row">
        <template v-slot="state">
          <div class="my-test-state">{{ state }}</div>
          <div class="my-chips">
            <span v-for="(tag, index) in myModel.tags" :key="index" class="chip" label small>
              {{ tag }}
            </span>
          </div>
        </template>
      </jd-colrow-row>
      <jd-colrow-row groupKey="my-group-description" :lazyAggregate="0" class="my-row">
        <template v-slot="state">
          <div class="my-test-state">{{ state }}</div>
          <div class="my-test-resize">
            <div class="resize-head">
              <demo-button @click="onTestToggleContent">toogle content</demo-button>
            </div>
            <div class="resize-content" :style="styleContent">
              {{ myModel.description }}
              {{ myModel.description }}
              {{ myModel.description }}
              {{ myModel.description }}
            </div>
          </div>
        </template>
      </jd-colrow-row>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { JdColrowRow } from '@jood/v-colrow';

export default defineComponent({
  components: {
    JdColrowRow
  },
  props: {
    myModel: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const viewState = reactive({
      isTestContentShow: false
    });
    const styleContent = computed(() => {
      return {
        display: viewState.isTestContentShow ? 'block' : 'none'
      };
    });
    const onTestToggleContent = (evt: Event) => {
      viewState.isTestContentShow = !viewState.isTestContentShow;
    };
    return {
      styleContent,
      onTestToggleContent
    };
  }
});
</script>

<style lang="scss" scoped>
.my-item {
  flex: 1;
  // margin-left: -1px;
  margin: 0 5px;
  word-break: break-all;
  overflow: hidden;
  border: 1px solid #ff0000;

  &:first-child {
    margin-left: 0;
  }

  .my-row {
    padding: 15px;
    border-top: 1px dashed #e0e0e0;
    &:nth-child(odd) {
      background-color: #f9f9f9;
    }
    &:first-child {
      border-top-width: 0;
    }
  }

  .my-dl {
    .my-dt {
      padding-bottom: 2px;
      font-size: 12px;
      font-weight: 600;
      color: #666666;
    }
  }

  .my-chips {
    margin: 0 -2px;
    font-size: 12px;
    .chip {
      display: inline-block;
      margin: 2px;
      padding: 3px 12px;
      border-radius: 12px;
      box-sizing: border-box;
      background-color: #f0f0f0;
    }
  }
  .my-test-state {
    padding: 3px 0;
    font-size: 13px;
  }
  .my-test-resize {
    .resize-head {
      display: block;
    }
    .resize-content {
      display: none;
    }
  }
}
</style>
