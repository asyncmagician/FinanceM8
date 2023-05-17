<template>
    <div class="container mx-auto px-4">
      <Header />
  
        <NuxtPage />
  
      <Footer />
    </div>
  </template>
  
  
  <script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Main from '@/components/Main.vue';
  
  const useMain = true; 
  </script>
  
  <style>
  </style>
  