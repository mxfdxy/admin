<template>
  <main>
        <!-- 左侧导航 -->
      <div class="main-left" style="padding-top: 30px">
        <el-menu default-active="/user" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
          <el-menu-item index="/user"><i class="el-icon-menu"></i>用户列表</el-menu-item>
          <el-menu-item index="/user/vip"><i class="el-icon-menu"></i>会员管理</el-menu-item>
          <el-menu-item index="/user/integral"><i class="el-icon-menu"></i>积分管理</el-menu-item>
          <el-menu-item index="/user/card"><i class="el-icon-menu"></i>打卡管理</el-menu-item>
        </el-menu>
      </div>

        <!-- 右侧主内容区 -->
        <div  class="main-right">
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
    }
  }
</script>

<style>
  /* 导航栏菜单选中效果 */
  .isActive{color: #20a0ff!important;}
   #app main .aside .is-active{color: #475669;}
</style>
