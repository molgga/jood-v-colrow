<template>
  <div class="jd-colrow-provider" ref="elContainer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { provide, onMounted, onUnmounted, shallowRef } from 'vue';
import { JdColrowObserver, JD_COLROW_OBSERVER_TOKEN } from '../modules';

export default {
  setup() {
    const elContainer = shallowRef<HTMLElement>(null);
    const colrowObserver = new JdColrowObserver();
    provide(JD_COLROW_OBSERVER_TOKEN, colrowObserver);
    onMounted(() => {
      colrowObserver.attachContainer(elContainer.value);
    });
    onUnmounted(() => {
      colrowObserver.destroy();
    });
    return {
      elContainer
    };
  }
};
</script>

<style lang="scss" scoped></style>
