<template>
  <div>
    <jd-colrow-provider class="my-table">
      <div v-for="(item, index) in testState.list" :key="index" class="my-item">
        <jd-colrow-row v-for="(value, key) in item" :key="key" :groupKey="key" class="my-row">
          <template v-slot="{ state }">
            <div class="test-state">groupKey: {{ key }}</div>
            <div class="test-state">{{ state }}</div>
            <div class="test-value">random text(hight change)<br />{{ value }}</div>
          </template>
        </jd-colrow-row>
      </div>
    </jd-colrow-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onUnmounted, onBeforeMount } from 'vue';
import { JdColrowProvider, JdColrowRow } from '@jood/v-colrow';

export default defineComponent({
  components: {
    JdColrowProvider,
    JdColrowRow
  },
  setup() {
    const testMax = 3;
    const testState = reactive<any>({
      list: []
    });
    const getTestRandomText = () => {
      const date = new Date();
      const len = Math.round(Math.random() * 10 + 1);
      const text = [];
      for (let i = 0; i < len; i++) {
        text.push(Math.ceil(Math.random() * 99999999).toString());
        text.push(Math.ceil(Math.random() * 99999999).toString());
        text.push(Math.ceil(Math.random() * 99999999).toString());
        text.push(Math.ceil(Math.random() * 99999999).toString());
        text.push(Math.ceil(Math.random() * 99999999).toString());
      }
      return text.join('');
    };
    const onChangeState = () => {
      testState.list = [];
      for (let i = 0; i < testMax; i++) {
        testState.list.push({
          key1: getTestRandomText(),
          key2: getTestRandomText(),
          key3: getTestRandomText()
        });
      }
    };
    const testInterval = setInterval(() => {
      onChangeState();
    }, 1000);

    onBeforeMount(() => {
      onChangeState();
    });

    onUnmounted(() => {
      clearInterval(testInterval);
    });
    return {
      testState
    };
  }
});
</script>

<style lang="scss" scoped>
.my-table {
  display: flex;
  margin: 0 auto;
  max-width: 90%;
}
.my-item {
  flex: 1;
  margin: 0 2px;
  border: 1px solid #000000;
  border-radius: 5px;
  .my-row {
    word-break: break-all;
    border-top: 1px dashed #999999;
    transition: height 200ms;
    overflow: hidden;
    &:first-child {
      border-top-width: 0;
    }
  }
  .test-state {
    padding: 5px 10px;
  }
  .test-value {
    padding: 5px 10px;
    color: #999999;
  }
}
</style>
