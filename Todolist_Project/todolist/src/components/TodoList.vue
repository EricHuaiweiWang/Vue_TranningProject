<template>
  <div>
    my todo list
    <el-row>
      <el-col :span="8">待办事项</el-col>
      <el-col :span="8">
        <el-input v-model="content" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" @click="saveTodo">add</el-button>
      </el-col>
    </el-row>

    <template v-for="item in list">
      <el-row :key="item.id">
        <el-col :span="8">
          <el-checkbox
            v-model="item.value"
            class="el-col-5"
            @change="changStatus(item.id,''+item.value+'')"
          ></el-checkbox>
        </el-col>
        <el-col :span="8" class="el-col-5">
          <div>{{item.content}}</div>
        </el-col>
        <el-col :span="8">
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteItem(item.id)"></el-button>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: !localStorage.getItem('todoData')
        ? []
        : JSON.parse(localStorage.getItem('todoData')),
      content: ''
    }
  },
  methods: {
    deleteItem (id) {
      for (let i = 0, len = this.list.length; i < len; i++) {
        if (this.list[i].id === id) {
          this.list.splice(i, 1)
        }
      }
      this.saveLocal()
    },
    changStatus (id, status) {
      this.saveLocal()
    },
    saveTodo () {
      console.log('clicked')
      this.list.push({
        id: this.list.length,
        content: this.content,
        value: ''
      })
      this.content = ''
      this.saveLocal()
    },
    saveLocal () {
      localStorage.setItem('todoData', JSON.stringify(this.list))
    }
  }
}
</script>
