<template>
  <el-container>
    <el-container>
      <el-header>
        <h1>My Todo</h1>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8">
            <div class="empty"></div>
          </el-col>
          <el-col :span="8">
            <el-input v-model.trim="content" placeholder="请输入内容" @keyup.enter.native="saveTodo"></el-input>
          </el-col>
          <el-col :span="8">
            <div class="empty"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="empty"></div>
          </el-col>
          <el-col :span="3">
            <el-select v-model="selected" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>

        <transition-group name="flip-list">
          <template v-for="item in list">
            <el-row :key="item.id">
              <el-col :span="8">
                <div class="empty"></div>
              </el-col>
              <el-col :span="8">
                <el-col :span="1">
                  <el-checkbox v-model="item.value" @change="changStatus(item.id,''+item.value+'')"></el-checkbox>
                </el-col>
                <el-col :span="22">{{item.content}}</el-col>
                <el-col :span="1">
                  <template>
                    <el-popconfirm title="这是一段内容确定删除吗？" v-on:onConfirm="deleteItem(item.id)">
                      <el-button
                        type="danger"
                        icon="el-icon-delete"
                        class="delete_btn"
                        slot="reference"
                      ></el-button>
                    </el-popconfirm>
                  </template>
                </el-col>
              </el-col>
              <el-col :span="8">
                <div class="empty"></div>
              </el-col>
            </el-row>
          </template>
        </transition-group>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      list: !localStorage.getItem('todoData')
        ? []
        : JSON.parse(localStorage.getItem('todoData')),
      content: '',
      selected: '',
      options: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '完成'
      }, {
        value: '2',
        label: '未完成'
      }, {
        value: '99',
        label: '其他'
      }]
    }
  },
  methods: {
    changeOption(){
      
    },
    deleteItem (id) {
      for (let i = 0, len = this.list.length; i < len; i++) {
        if (this.list[i].id === id) {
          this.list.splice(i, 1)
        }
      }
      this.saveLocal()
    },
    saveTodo () {
      console.log('clicked')
      if (!this.content) {
        this.$message({
          message: '友情提示，内容不能为空哦',
          type: 'warning'
        })
        return
      }
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
<style lang="css" scoped>
.delete_btn {
  color: black;
  background-color: #409eff00;
  border-width: 0px;
}

.transparent_btn {
  color: black;
  background-color: #f4f7fa00;
  border-width: 0px;
}
.empty {
  width: 1px;
  height: 1px;
}
.flip-list-move {
  transition: transform 1s;
}

.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s;
}
.flip-list-enter, .flip-list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
