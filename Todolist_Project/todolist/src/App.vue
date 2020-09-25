<template>
  <div id="app">
    <todolist></todolist>
    <router-view/>
  </div>
</template>

<script>
import hello from './components/Hello'
import todolist from './components/TodoList'
import elementUI from './components/elementUI'

export default{
  data () {
    return {
      name: 'ss'
    }
  },
  components: {
    hello,
    todolist,
    elementUI
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
