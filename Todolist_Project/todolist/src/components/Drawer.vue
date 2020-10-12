<template>
  <el-drawer title="details" :visible.sync="Visble" :with-header="true">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="empty"></div>
      </el-col>
      <el-col :span="12" style="text-align:center">
        <el-input
        prefix-icon="el-icon-s-claim"
          type="textarea"
          placeholder="请输入内容"
          v-model="Title"
          @change="changStatus(Item)"
          autosize="true"
          clearable
        ></el-input>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </el-drawer>
</template>
<script>
export default {
  data () {
    return {
      Title: '',
      Visble: false,
      Item: {}
    }
  },
  methods: {
    triggerChange (visble, item) {
      this.Title = item.content
      this.Visble = visble
      this.Item = item
    },
    changStatus (item) {
      let self = this
      self.$emit('changestatus', {title: self.Title, item: self.Item})
    }
  }
}

</script>
