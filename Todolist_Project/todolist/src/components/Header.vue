<template>
  <el-header>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <h1>Eric's Todo list</h1>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item style="float:right">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </el-menu-item>
    </el-menu>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="empty"></div>
      </el-col>
      <el-col :span="8">
        <div class="block">
          <el-carousel height="200px" indicator-position="none" :autoplay="false">
            <el-carousel-item v-for="item of imgArray" :key="item.url" :label="123">
              <el-image fit="fill" :src="item.url" style=""></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="empty"></div>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      imgArray: [
        {
          url: require('../assets/banner/designers-desk-with-coffee-wireframes.jpg')
        },
        {
          url: require('../assets/banner/tech-group-meeting-flatlay.jpg')
        },
        { url: require('../assets/banner/b1.jpg') },
        {
          url: require('../assets/banner/making-a-budget-tracking-finances.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped>
.empty {
  width: 1px;
  height: 1px;
}
.el-header {
  width: 100%;
  height: 280px !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item {
  border-radius: 4px !important;
}
</style>
