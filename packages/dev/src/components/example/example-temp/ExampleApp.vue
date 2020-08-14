<template>
  <v-container>
    <v-card>
      <v-card-title>temp</v-card-title>
      <v-card-text>foo</v-card-text>
      <v-card-text>
        <v-btn @click="onTestAdd">onTestAdd</v-btn>
        <v-btn @click="onTestPop">onTestPop</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <div>
      <jd-colrow-provider class="test-container">
        <div v-for="(data, index) in testState.list" :key="index" class="test-list-item">
          <jd-colrow-row groupKey="key1" class="test-row">
            <div class="my-item">{{ data.key1 }}</div>
          </jd-colrow-row>
          <jd-colrow-row groupKey="key2" class="test-row">
            <div class="my-item">{{ data.key2 }}</div>
          </jd-colrow-row>
          <jd-colrow-row groupKey="key3" class="test-row">
            <div class="my-item">{{ data.key3 }}</div>
          </jd-colrow-row>
          <!--
          <jd-colrow-row v-for="(value, key) in data" :key="key" :groupKey="key">
            <div class="my-item">{{ value }}</div>
          </jd-colrow-row>
          -->
        </div>
      </jd-colrow-provider>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { JdColrowProvider, JdColrowRow } from '@/lib-package';

export default defineComponent({
  components: {
    JdColrowProvider,
    JdColrowRow
  },
  setup() {
    const createTestString = () => {
      const arr = [
        '환영합니다! 이곳에서 다루는 문서들은 웹개발을 처음 접하는 초보자를 대상으로 합니다. 그리고 간단한 웹사이트를 만들기 위해 필요한 모든 것들을 담고 있습니다.',
        '여기에서는 여러분을 "초보자"에서 "전문가"로 이끄는 걸 목표로 하지 않습니다. 다만, 여러분을 "초보자"에서 "익숙한 단계"로 이끄는 걸 목표로 합니다. 그 이후에는 자신만의 스타일을 찾아야만 합니다. 그리고 그때 보게 될 MDN의 나머지 문서들이나 다른 문서들은 많은 사전지식을 필요로 할 것입니다.',
        '코딩을 처음 접하는 분들에게 웹개발은 어려울 수 있습니다(그렇지만 저희가 최선을 다해 설명해드릴께요!). 그렇지만 당신이 웹 개발을 배우고 싶은 학생이든, 수업 자료를 찾는 선생님이든, 그리고 취미로 웹기술을 알고 싶은 사람이든 상관없이 편하게 공부할 수 있도록 하겠습니다.',
        '이 곳의 내용은 정기적으로 추가되고 있습니다. 변경점을 추적하기 위해 Learning area release note를 관리하기 시작했으니, 정기적으로 확인해주세요!',
        '원하는 주제나 빠진 것 같은 부분에 대한 질문은 저희의 Discourse 포럼에 남겨주세요.'
      ];
      const index = Math.round(Math.random() * (arr.length - 1));
      return arr[index];
    };
    const createTestData = () => {
      return {
        key1: createTestString(),
        key2: createTestString(),
        key3: createTestString()
      };
    };
    const testState = reactive({
      list: [createTestData(), createTestData()]
    });
    const onTestAdd = () => {
      testState.list.push(createTestData());
    };
    const onTestPop = () => {
      testState.list.pop();
    };
    return {
      testState,
      onTestAdd,
      onTestPop
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
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.1);
}
.test-list-item {
  flex: 1;
  padding: 10px;
  word-break: break-all;
  box-sizing: border-box;
  background-color: rgba(0, 0, 255, 0.1);
}
.test-row {
  box-sizing: border-box;
  border-top: 1px dashed rgba(0, 0, 0, 1);
  background-color: rgba(255, 0, 0, 0.1);
  &:first-child {
    border-top-width: 0;
  }
}
.my-item {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
