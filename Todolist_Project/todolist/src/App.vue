<template>
  <div id="app">
    <h1>hello app</h1>
    <hello/>
    <todolist></todolist>
    <router-view/>
  </div>
</template>

<script>
import hello from './components/Hello'
import todolist from './components/TodoList'
export default{
  data () {
    return {
      name: 'ss'
    }
  },
  components: {
    hello,
    todolist
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
  margin-top: 60px;
}
</style>
