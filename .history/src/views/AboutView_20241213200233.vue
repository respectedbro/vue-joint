<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <h1>Hello App!</h1>

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
