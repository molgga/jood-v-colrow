<template>
  <div class="jd-colrow-provider" ref="elContainer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, onMounted, onUnmounted } from 'vue';
import { JdColrowObserver, JD_COLROW_OBSERVER_TOKEN } from '../modules';

export default defineComponent({
  setup() {
    const elContainer = ref<HTMLElement>(null);
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
});
</script>

<style lang="scss" scoped></style>
