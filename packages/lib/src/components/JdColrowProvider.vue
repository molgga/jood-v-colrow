<template>
  <div class="jd-colrow-provider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api';
import { JdColrowObserver, JD_COLROW_OBSERVER_TOKEN } from '../modules';

export default defineComponent({
  setup() {
    const colrowObserver = new JdColrowObserver();
    provide(JD_COLROW_OBSERVER_TOKEN, colrowObserver);
    return {};
  }
});
</script>

<style lang="scss" scoped>
</style>