<template>
  <el-container direction="vertical">
    <v-Header></v-Header>
    <to-Dolist></to-Dolist>
    <v-Footer></v-Footer>
  </el-container>
</template>
<script>
import vHeader from './Header'
import toDolist from './TodoList'
import vFooter from './Footer'

export default {
  components: {
    vHeader,
    toDolist,
    vFooter
  }
}
</script>

<style lang='css' scoped>
body {
  background: #00c9ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
