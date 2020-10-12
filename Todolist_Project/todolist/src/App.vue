<template>
  <div id="app">
      <home></home>
      <router-view />
  </div>
</template>

<script>
import home from './components/Home'
export default {
  data () {
    return {
      name: 'ss'
    }
  },
  components: {
    home
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
