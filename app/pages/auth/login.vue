<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="border w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 class="text-center text-3xl font-bold text-gray-900">FinanceMate</h2>
        <h3 class="text-center text-xl font-semibold text-gray-700">Welcome</h3>
  
        <form class="space-y-6" @submit.prevent="submitForm">
          <div>
            <label for="email" class="sr-only">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Email"
              required
              class="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Password"
              required
              class="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
  
          <div class="flex items-center justify-between">
            <label for="remember_me" class="flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
  
            <a href="#" class="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
          </div>
  
          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </form>
  
        <div class="text-center">
          <span class="text-sm text-gray-600">No accounts yet?</span>
          <nuxt-link to="/register" class="ml-1 text-sm text-blue-600 hover:text-blue-500">
              Register
            </nuxt-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  function submitForm() {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
  }
  </script>
  
  <style scoped>
  </style>
  