<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/Layout/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
html, body {
    width: 100%;
    height:100%;
    margin: 0;
    padding: 0;
    color: gray;
    font-family: "Avenir Next", "Avenir", sans-serif;
}

a, a:visited, a:hover, a:active {
    color : inherit;
    text-decoration: none;
}
</style>
