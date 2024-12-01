<template>
  <div class="jd-colrow-provider" ref="elContainer">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, onMounted, onUnmounted, shallowRef, defineProps, watch } from 'vue';
import { JdColrowObserver, JD_COLROW_OBSERVER_TOKEN } from '../modules';

const props = defineProps({
  allowAggregateWitoutIntersect: {
    type: Boolean,
    default: false
  }
});

const elContainer = shallowRef<HTMLElement>(null);
const colrowObserver = new JdColrowObserver();
provide(JD_COLROW_OBSERVER_TOKEN, colrowObserver);

watch(
  () => props.allowAggregateWitoutIntersect,
  () => {
    colrowObserver.setAllowAggregateWitoutIntersect(props.allowAggregateWitoutIntersect);
  }
);

onMounted(() => {
  colrowObserver.setAllowAggregateWitoutIntersect(props.allowAggregateWitoutIntersect);
  colrowObserver.attachContainer(elContainer.value);
});
onUnmounted(() => {
  colrowObserver.destroy();
});
</script>

<style lang="scss" scoped></style>
