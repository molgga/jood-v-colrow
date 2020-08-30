export default {
  install: {
    title: 'package install',
    description: '',
    lang: 'bash',
    code: `$ npm install @jood/v-colrow
# or $ yarn add @jood/v-colrow`
  },
  sample: {
    title: 'Sample.vue',
    description: '',
    lang: 'html',
    code: `
<template>
  <div>
    <jd-colrow-provider class="my-table">
      <div v-for="(item, index) in testState.list" :key="index" class="my-item">
        <jd-colrow-row v-for="(value, key) in item" :key="key" :groupKey="key" class="my-row">
          <template v-slot="{ state }">
            <div class="test-state">{{ state }}</div>
            <div class="test-value">{{ value }}</div>
          </template>
        </jd-colrow-row>
      </div>
    </jd-colrow-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onUnmounted } from '@vue/composition-api';
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
  border: 1px solid #ff0000;
  border-radius: 5px;
}
.my-item {
  flex: 1;
  border-left: 1px dashed #ff0000;
  &:first-child {
    border-left-width: 0;
  }
  .my-row {
    word-break: break-all;
    border-top: 1px solid #ff0000;
    transition: height 200ms;
    overflow: hidden;
    &:first-child {
      border-top-width: 0;
    }
  }
  .test-state {
    padding: 10px;
  }
  .test-value {
    padding: 10px;
    color: #999999;
  }
}
</style>
    `
  },
  simple: {
    title: 'simple use',
    description: '',
    lang: 'html',
    code: `
<template>
  <jd-colrow-provider>
    <div class="my-item">
      <jd-colrow-row groupKey="title" class="my-row">{{ item[0].title }}</jd-colrow-row>
      <jd-colrow-row groupKey="desc" class="my-row">{{ item[0].desc }}</jd-colrow-row>
      <jd-colrow-row groupKey="name" class="my-row">{{ item[0].name }}</jd-colrow-row>
    </div>
    <div class="my-item">
      <jd-colrow-row groupKey="title" class="my-row">{{ item[1].title }}</jd-colrow-row>
      <jd-colrow-row groupKey="desc" class="my-row">{{ item[1].desc }}</jd-colrow-row>
      <jd-colrow-row groupKey="name" class="my-row">{{ item[1].name }}</jd-colrow-row> 
    </div>
  </jd-colrow-provider>
</template>
`
  }
};
