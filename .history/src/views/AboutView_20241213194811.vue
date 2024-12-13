<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
/*************  ✨ Codeium Command 🌟  *************/
  <nav>
/******  e449cad6-a54c-4721-bcc6-0903adba50e8  *******/
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/home">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
