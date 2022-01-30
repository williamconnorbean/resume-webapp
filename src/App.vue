<template>
  <nav-bar />
  <home />
</template>

<script>
import Home from './components/sections/home.vue';
import NavBar from './components/sections/nav-bar.vue';

export default {
  name: 'App',
  components: {
    Home,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
