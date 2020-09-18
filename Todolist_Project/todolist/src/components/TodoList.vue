<template>
  <el-container>
    <el-container>
      <el-header>
        <h1>My Todo</h1>
      </el-header>
      <el-main>
        <el-row style="padding-bottom:10px;">
          <el-col :span="8">
            <div class="empty"></div>
          </el-col>
          <el-col :span="8">
            <el-input
              v-model.trim="content"
              placeholder="请输入内容,enter保存哈"
              @keyup.enter.native="saveTodo"
            ></el-input>
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
            <el-select v-model="selected" placeholder="请选择" tabindex="0">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <div style="height:10px"></div>
        <el-row :gutter="0">
          <el-col :span="8">
            <div class="empty"></div>
          </el-col>
          <el-col :span="3">
            <div class="block">
              <el-pagination
                :small="false"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[5,10,15,20]"
                :page-size.sync="pageSize"
              ></el-pagination>
            </div>
          </el-col>
        </el-row>
        <div style="height:10px"></div>
        <transition-group name="flip-list">
          <template v-for="item in changeOption">
            <el-row :key="item.id">
              <el-col :span="8">
                <div class="empty"></div>
              </el-col>
              <el-col :span="8">
                <el-col :span="1">
                  <el-checkbox v-model="item.value" @change="changStatus(item.id,''+item.value+'')"></el-checkbox>
                </el-col>
                <el-col :span="10">{{item.content}}</el-col>
                <el-col :span="5">
                  <div>
                    <el-link icon="el-icon-edit">编辑</el-link>
                    <el-link>
                      查看
                      <i class="el-icon-view el-icon--right"></i>
                    </el-link>
                  </div>
                </el-col>
                <el-col
                  :span="6"
                  class="color-dark-light"
                  style="font-size:13px"
                >{{item.created | capitalize}}</el-col>
                <el-col :span="2">
                  <template>
                    <el-popconfirm title="这是一段内容确定删除吗？" v-on:onConfirm="deleteItem(item.id)">
                      <el-button icon="el-icon-delete" class="delete_btn" slot="reference"></el-button>
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
import './common/base'

export default {
  data () {
    return {
      list: !localStorage.getItem('todoData')
        ? []
        : JSON.parse(localStorage.getItem('todoData')),
      content: '',
      selected: '',
      currentPage: 1,
      pageSize: 5,
      options: [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: '完成'
        },
        {
          value: '',
          label: '未完成'
        }
      ]
    }
  },
  computed: {
    total () {
      let sel = this.selected === '1' ? true : this.selected
      let result
      if (sel === '0') {
        result = this.list
      } else {
        result = this.list.filter(function (item) {
          return item.value === sel
        })
      }
      return result.length
    },
    changeOption () {
      let sel = this.selected === '1' ? true : this.selected
      let result
      if (sel === '0') {
        result = this.list
      } else {
        result = this.list.filter(function (item) {
          return item.value === sel
        })
      }
      return result.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      )
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      return new Date(value).Format('yyyy-MM-dd hh:mm:ss')
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    deleteItem (id) {
      for (let i = 0, len = this.list.length; i < len; i++) {
        if (this.list[i].id === id) {
          this.list.splice(i, 1)
        }
      }
      this.saveLocal()
    },
    changStatus (id, value) {
      console.log('id:' + id + ',' + 'value:' + value)
      for (let item of this.list) {
        if (item.id === id) item.value = value === 'true' ? true : ''
      }
      this.saveLocal()
      // return;
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
        value: '',
        created: new Date()
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
  padding: 0px;
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

.flip-list-enter-active {
  transition: none;
}
.flip-list-leave-active {
  transition: all 1s;
}
.flip-list-enter, .flip-list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
