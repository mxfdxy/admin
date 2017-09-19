<template>
  <main>
        <!-- 左侧导航 -->
      <div class="main-left" style="padding-top: 30px">
        <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
          <el-menu-item index="/oam"><i class="el-icon-menu"></i>通知管理</el-menu-item>
          <el-menu-item index="/oam/page"><i class="el-icon-menu"></i>页面管理</el-menu-item>
          <el-menu-item index="/oam/discussion"><i class="el-icon-menu"></i>讨论管理</el-menu-item>
          <!-- <el-menu-item index="/oam/data"><i class="el-icon-menu"></i>数据统计</el-menu-item> -->
          <el-menu-item index="/oam/crontab"><i class="el-icon-menu"></i>定时任务</el-menu-item>
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
