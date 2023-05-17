<template>
    <footer class="text-center py-4 text-sm">
      <p>&copy; {{ currentYear }} FinanceMate.app </p>
    </footer>
  </template>
  
  <script setup>
  const currentYear = new Date().getFullYear();
  </script>
  
  <style scoped>
  </style>
  