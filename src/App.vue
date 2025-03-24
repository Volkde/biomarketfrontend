<template>
  <TestConnection />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TestConnection from './components/TestConnection.vue';

export default defineComponent({
  components: {
    TestConnection,
  },
});
</script>
