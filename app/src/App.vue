<template>
  <div class="container-fluid">
    <header class="d-flex flex-wrap justify-content-between py-3 px-4 mb-4 border-bottom">
      <a
        href="#"
        class="d-flex align-items-center gap-2 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none text-primary"
      >
        <i class="fa-solid fa-wallet fa-2x" />
        <span class="fs-3">FinanceMate</span>
      </a>
      <ul class="nav nav-pills gap-2">
        <li class="nav-item">

          <RouterLink to="/" exact-active-class="active" active-class="active" class="nav-link">
            <i class="fa-solid fa-house" /> Home
          </RouterLink>
        </li>
      </ul>
    </header>

    <main class="container main-router-container">
      <RouterView />
    </main>

    <footer class="py-3 my-4 border-top text-center">
      <span class="mb-3 mb-md-0 text-secondary"
        >&copy;{{ currentYear }} FinanceMate</span
      >
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  computed: {
    currentYear(): number {
      const d = new Date()
      return d.getFullYear()
    }
  }
})
</script>
