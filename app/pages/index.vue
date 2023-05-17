<template>
    <div class="min-h-screen">
      <header>
      </header>
  
      <main class="pt-10 pb-16">
        <section class="container mx-auto px-4 mb-12">
          <div class="text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to FinanceMate</h1>
            <p class="text-lg">
                Your personal assistant for managing your budget and finances.
            </p>
          </div>
        </section>
  
        <section class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <h2 class="text-2xl font-bold mb-4">Budget tracking</h2>
              <p>
                Keep tabs on your expenses and income, set budget limits, and view your progress in real time.
              </p>
            </div>
            <div class="text-center">
              <h2 class="text-2xl font-bold mb-4">Spend analysis</h2>
              <p>
                See where your money is going with detailed charts and reports on your spending by category and time period.
              </p>
            </div>
            <div class="text-center">
              <h2 class="text-2xl font-bold mb-4">Financial planning</h2>
              <p>
                Plan your financial future by setting savings goals and tracking your progress toward your goals.
              </p>
            </div>
          </div>
        </section>
  
        <section class="container mx-auto px-4 mt-12 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to take control of your finances?</h2>
          <p class="mb-8">
            Register now and find out how FinanceMate can help you manage your budget and achieve your financial goals.
          </p>
          <div>
            <nuxt-link to="/register" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Register
            </nuxt-link>
            <nuxt-link to="/auth/login" class="ml-4 text-blue-500 hover:text-blue-600">
              Login
            </nuxt-link>
          </div>
        </section>
      </main>
  
      <footer>
      </footer>
    </div>
</template>
  
<script>
</script>

<style scoped>
</style>