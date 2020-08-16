<template>
  <div class="my-item">
    <div class="my-head">
      <strong>my-component</strong>
    </div>
    <div class="my-panel">
      <jd-colrow-row groupKey="my-group-title" class="my-row">
        <template v-slot="state">
          <div class="my-test-state">
            {{ state }}
          </div>
          <dl class="my-dl">
            <dt class="my-dt">Title</dt>
            <dd class="my-dd">{{ myModel.title }}</dd>
          </dl>
        </template>
      </jd-colrow-row>
      <jd-colrow-row groupKey="my-group-tags" class="my-row">
        <template v-slot="state">
          <div class="my-test-state">
            {{ state }}
          </div>
          <div class="my-chips">
            <v-chip v-for="(tag, index) in myModel.tags" :key="index" class="chip" label small>
              {{ tag }}
            </v-chip>
          </div>
        </template>
      </jd-colrow-row>
      <jd-colrow-row groupKey="my-group-description" class="my-row">
        <template v-slot="state">
          <div class="my-test-state">
            {{ state }}
          </div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>row resize</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ myModel.description }}
                {{ myModel.description }}
                {{ myModel.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
      </jd-colrow-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { JdColrowRow } from '@/lib-package';

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
    return {};
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
    .chip {
      margin: 2px;
    }
  }
  .my-test-state {
    padding: 3px 0;
    font-size: 13px;
  }
}
</style>
