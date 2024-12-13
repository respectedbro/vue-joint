<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view> <!-- Здесь будут отображаться ваши компоненты -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Ваши стили */
</style>
