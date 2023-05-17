<template>
    <div class="min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-gray-900">Dashboard</h1>
  
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-gray-900">Your Balance</h2>
            <p class="mt-4 text-xl text-gray-700">{{ balance }}</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-gray-900">Total Expenses</h2>
            <p class="mt-4 text-xl text-gray-700">{{ totalExpenses }}</p>
          </div>
        </div>
  
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900">Quick Actions</h2>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <button class="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:bg-blue-700">
              Add Expense
            </button>
            <button class="bg-green-600 text-white p-6 rounded-lg shadow-md hover:bg-green-700">
              Add Refund
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const balance = ref('1 234,56 €');
  const totalExpenses = ref('567,89 €');
  
  </script>
  
  <style scoped>
  </style>
  