<template>
  <div>
    <button @click="testConnection">Test Connection</button>
    <button @click="testProducts">Test Products</button>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import api from '../services/api';

export default defineComponent({
  setup() {
    const message = ref('');

    const testConnection = async () => {
      try {
        const response = await api.get('/');
        message.value = 'Connection successful: ' + response.data;
      } catch (error) {
        message.value = 'Connection failed: ' + error;
      }
    };

    const testProducts = async () => {
      try {
        const response = await api.get('/api/products/all'); // Используем GET /all
        message.value = 'Products endpoint: ' + JSON.stringify(response.data);
      } catch (error) {
        message.value = 'Products endpoint failed: ' + error;
      }
    };

    return { message, testConnection, testProducts };
  },
});
</script>
