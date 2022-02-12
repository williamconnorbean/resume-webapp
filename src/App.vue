<template>
  <nav-bar />
  <home />
  <about />
  <projects />
  <work-experience />
  <contact />
  <custom-footer />
</template>

<script>
import About from './components/sections/about.vue';
import Home from './components/sections/home.vue';
import NavBar from './components/sections/nav-bar.vue';
import Projects from './components/sections/projects.vue';
import WorkExperience from './components/sections/work-experience.vue';
import Contact from './components/sections/contact.vue';
import CustomFooter from './components/sections/custom-footer.vue';

export default {
  name: 'App',
  components: {
    About,
    Home,
    NavBar,
    Projects,
    WorkExperience,
    Contact,
    CustomFooter
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

.container {
  max-width: 78rem !important;
  padding-left: 7.62% !important;
  padding-right: 7.62% !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
