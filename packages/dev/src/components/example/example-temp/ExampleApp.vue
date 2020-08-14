<template>
  <v-container>
    <v-card>
      <v-card-title>temp</v-card-title>
      <v-card-text>foo</v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
// import { useJdModalService, JdModalRef } from '@/lib-package';
export default defineComponent({
  setup() {
    return {
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
</style>
