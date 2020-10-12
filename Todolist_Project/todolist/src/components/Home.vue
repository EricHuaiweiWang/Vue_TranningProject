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
