<template>
  <main>
        <!-- 左侧导航 -->
      <div class="main-left" style="padding-top: 30px">
        <el-menu default-active="" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/setting"><i class="el-icon-menu"></i>系统设置</el-menu-item>
          <el-menu-item index="/setting/payment"><i class="el-icon-menu"></i>支付设置</el-menu-item>
          <el-menu-item index="/setting/role"><i class="el-icon-menu"></i>角色设置</el-menu-item>
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
    }
  }
</script>

<style>
  /* 导航栏菜单选中效果 */
  .isActive{color: #20a0ff!important;}
   #app main .aside .is-active{color: #475669;}
</style>
