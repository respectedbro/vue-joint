/*************  ✨ Codeium Command 🌟  *************/
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Hello App!</h1>
 <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
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

/******  a6a43244-4a70-440c-97d7-f9cdd48f75c1  *******/ 