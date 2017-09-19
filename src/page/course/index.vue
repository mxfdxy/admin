<template>
  <main>
        <!-- 左侧导航 -->
        <div class="main-left" style="padding-top: 30px">

            <el-menu default-active="/course" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
              <el-menu-item index="/course"><i class="el-icon-menu"></i>课程列表</el-menu-item>
              <el-menu-item index="/course/recommend"><i class="el-icon-menu"></i>推荐课程</el-menu-item>
              <el-menu-item index="/course/category"><i class="el-icon-menu"></i>分类管理</el-menu-item>
              <el-menu-item index="/course/payment"><i class="el-icon-menu"></i>付费管理</el-menu-item>
              <el-menu-item index="/course/comment"><i class="el-icon-menu"></i>评价管理</el-menu-item>
            </el-menu>

        </div>

        <!-- 右侧主内容区 -->
        <div  class="main-right" >
          <!-- <transition name="fade"> -->
            <router-view class="view"></router-view>
          <!-- </transition> -->
        </div>
  </main>
</template>

<script>

  export default {
    data() {
      return {
        active: true,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  /* 导航栏菜单选中效果 */
  .isActive{color: #20a0ff!important;}
   #app main .aside .is-active{color: #475669;}
</style>
