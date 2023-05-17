<template>
    <div v-if="!isLoginPage && !isIndex && !isRegisterPage">
      <Menu />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Menu from '@/components/Menu.vue';
  
  const route = useRoute();
  const isLoginPage = computed(() => route.path === '/auth/login');
  const isIndex = computed(() => route.path === '/');
  const isRegisterPage = computed(() => route.path === '/register');
  </script>
  
  <style scoped>
  </style>
  