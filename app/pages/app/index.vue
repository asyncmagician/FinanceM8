<template>
    <div class="min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-gray-900">Welcome, {{ firstName }} {{ lastName }}!</h1>
  
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900">Recent Expenses</h2>
          <ul class="mt-4 space-y-4">
            <li v-for="(expense, index) in recentExpenses" :key="index" class="p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-semibold text-gray-900">{{ expense.description }}</h3>
              <p class="text-gray-700">{{ expense.amount }} | {{ expense.date }}</p>
            </li>
          </ul>
        </div>
  
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900">Recent Refunds</h2>
          <ul class="mt-4 space-y-4">
            <li v-for="(refund, index) in recentRefunds" :key="index" class="p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-semibold text-gray-900">{{ refund.description }}</h3>
              <p class="text-gray-700">{{ refund.amount }} | {{ refund.date }}</p>
            </li>
          </ul>
        </div>
  
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900">Upcoming Subscription Payments</h2>
          <ul class="mt-4 space-y-4">
            <li v-for="(payment, index) in upcomingPayments" :key="index" class="p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-semibold text-gray-900">{{ payment.description }}</h3>
              <p class="text-gray-700">{{ payment.amount }} | {{ payment.dueDate }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const firstName = ref('John');
  const lastName = ref('Doe');
  const recentExpenses = ref([
    {
      description: 'Groceries',
      amount: '50 €',
      date: '2023-05-15'
    },
    {
      description: 'Electricity bill',
      amount: '70 €',
      date: '2023-05-12'
    },
    {
      description: 'Internet subscription',
      amount: '30 €',
      date: '2023-05-10'
    },
    {
      description: 'Dinner at restaurant',
      amount: '60 €',
      date: '2023-05-08'
    },
    {
      description: 'Gasoline',
      amount: '40 €',
      date: '2023-05-06'
    }
  ]);
  const recentRefunds = ref([
    {
      description: 'Refund for returned shoes',
      amount: '80 €',
      date: '2023-05-14'
    },
    {
      description: 'Refund for canceled event',
      amount: '50 €',
      date: '2023-05-10'
    },
    {
      description: 'Tax refund',
      amount: '3000 €',
      date: '2023-05-05'
    },
    {
      description: 'Refund for delayed flight',
      amount: '150 €',
      date: '2023-05-03'
    },
    {
      description: 'Refund for faulty product',
      amount: '20 €',
      date: '2023-05-01'
    }
  ]);
  const upcomingPayments = ref([
    {
      description: 'Netflix Subscription',
      amount: '12 €',
      dueDate: '2023-05-20'
    },
    {
      description: 'Gym Membership',
      amount: '30 €',
      dueDate: '2023-05-25'
    },
    {
      description: 'Mobile Phone Plan',
      amount: '20 €',
      dueDate: '2023-05-28'
    },
    {
      description: 'Internet Subscription',
      amount: '30 €',
      dueDate: '2023-06-10'
    },
    {
      description: 'Electricity bill',
      amount: '70 €',
      dueDate: '2023-06-12'
    }
  ]);
  
  </script>
  
  <style scoped>
  </style>
  