<template>
  <div class="page-view">
    <div class="panel">
      <demo-preview-code v-bind="Codes.install" />

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.simple" />

      <demo-panel-devider :half="true" />

      <div class="panel-desc">
        <p class="pg">
          <a
            href="https://www.google.com/search?q=COMPARISON+TABLE&safe=off&rlz=1C5CHFA_enKR901KR901&source=lnms&tbm=isch&sa=X&ved=2ahUKEwji6IblncLrAhW5xosBHTLFAuQQ_AUoAXoECA0QAw&biw=1771&bih=852"
            target="_blank"
            >comparison table</a
          >
          형식의 테이블 구현시 열(column)을 한 개의 컴포넌트 단위로 만들어내기 위해 제작 되었습니다.
        </p>
        <p class="pg">
          <em>JdColrowProvider</em>는 한 개의 테이블, <em>JdColrowRow</em>는 한 개의 행이라 생각하면
          됩니다.
        </p>
        <ul class="panel-list">
          <li><em>동일한 groupKey</em>를 가진 row의 높이를 맞춥니다.</li>
        </ul>
      </div>

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.sample" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Codes from '@/codes/getting-started';

export default defineComponent({
  setup() {
    return {
      Codes
    };
  }
});
</script>

<style lang="scss" scoped>
.page-view {
  > .panel {
    width: 100%;
  }
  .panel-desc {
    padding: 0 15px;
    line-height: 1.7;
    .pg {
      margin: 10px 0 0 0;
      &:first-child {
        margin-top: 0;
      }
    }
    em {
      color: #2a9e64;
      font-style: normal;
    }
  }
  .panel-list {
    margin: 20px 10px;
    li {
      padding-top: 7px;
      &:first-child {
        padding-top: 0;
      }
    }
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
