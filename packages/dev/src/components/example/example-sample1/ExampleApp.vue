<template>
  <v-container>
    <v-card>
      <v-card-title>sample demo</v-card-title>
      <v-card-text>
        <v-btn color="primary" @click="onTestAdd">add</v-btn> |
        <v-btn color="primary" @click="onTestRemove">remove</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <jd-colrow-provider class="test-container">
      <my-item v-for="(data, index) in testState.list" :key="index" :myModel="data" />
    </jd-colrow-provider>
  </v-container>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { JdColrowProvider } from '@/lib-package';
import MyItem from './MyItem.vue';

const TEST_STRING_1 = [
  'javascript',
  'css',
  'html',
  'typescript',
  'scss',
  'vue',
  'react',
  'angular'
];
const TEST_STRING_2 = [
  'JavaScript(JS)는 가벼운 인터프리터 또는 JIT 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다.',
  '웹 페이지의 스크립트 언어로서 제일 유명하지만 Node.js, Apache CouchDB, Adobe Acrobat처럼 많은 비 브라우저 환경에서도 사용하고 있습니다.',
  'JavaScript는 프로토타입 기반의 동적 다중 패러다임 스크립트 언어로, 객체지향형, 명령형, 선언형(함수형 프로그래밍 등) 스타일을 지원합니다.',
  'JavaScript의 표준은 ECMAScript입니다.',
  ' 2012년 기준 최신 브라우저는 모두 ECMAScript 5.1을 온전히 지원합니다.'
];

const createTestString = (arr: string[]) => {
  const index = Math.round(Math.random() * (arr.length - 1));
  return arr[index];
};

const createTestStringList = (arr: string[]) => {
  const len = Math.round(Math.random() * 10);
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push(createTestString(arr));
  }
  return list;
};

const createTestData = () => {
  return {
    id: Math.round(Math.random() * 999999),
    title: createTestString(TEST_STRING_1),
    description: createTestString(TEST_STRING_2),
    tags: createTestStringList(TEST_STRING_1)
  };
};

export default defineComponent({
  components: {
    JdColrowProvider,
    MyItem
  },
  setup() {
    const testState = reactive({
      list: [createTestData(), createTestData(), createTestData(), createTestData()]
    });

    const onTestAdd = () => {
      testState.list.push(createTestData());
    };
    const onTestRemove = () => {
      testState.list.pop();
    };
    return {
      testState,
      onTestAdd,
      onTestRemove
    };
  }
});
</script>

<style lang="scss" scoped>
.partition {
  display: block;
  margin: 0;
  padding: 20px 0;
  border: none;
}
.test-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  box-sizing: border-box;
}
</style>
