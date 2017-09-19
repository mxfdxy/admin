<template>
  <main>
        <!-- 左侧导航 -->
      <div class="main-left" style="padding-top: 30px">
        <el-menu default-active="/revenue" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
          <el-menu-item index="/revenue"><i class="el-icon-menu"></i>日常营收</el-menu-item>
          <el-menu-item index="/revenue/course"><i class="el-icon-menu"></i>课程营收</el-menu-item>
          <el-menu-item index="/revenue/teacher"><i class="el-icon-menu"></i>教师营收</el-menu-item>
          <el-menu-item index="/revenue/trade"><i class="el-icon-menu"></i>交易记录</el-menu-item>
          <!-- <el-menu-item index="/revenue/finance"><i class="el-icon-menu"></i>财务管理</el-menu-item> -->
        </el-menu>
      </div>

        <!-- 右侧主内容区 -->
        <div  class="main-right" >
            <router-view class="view"></router-view>
        </div>
  </main>
</template>

<script>

  export default {
    data() {
      return {
        active: true,
      }
    }
  }
</script>

<style>
  /* 导航栏菜单选中效果 */
  .isActive{color: #20a0ff!important;}
   #app main .aside .is-active{color: #475669;}
</style>
