<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
    <el-row>
        <el-col :span="24">
          <el-menu default-active="1" class="el-menu-demo" :router="true" mode="horizontal" @select="">
            <el-menu-item index="/user">用户管理</el-menu-item>
            <el-menu-item index="/course">课程管理</el-menu-item>
            <el-menu-item index="/revenue">营收管理</el-menu-item>
            <el-menu-item index="/oam">运营维护</el-menu-item>
            <!-- <el-menu-item index="/setting">系统设置</el-menu-item> -->
          </el-menu>
        </el-col>
    </el-row>
    </header>
    <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>

    <router-view class="view"></router-view>

  </div>
</template>

<script>

import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'

Vue.use(Element)

export default {
  data() {
    return {
      headerFixed: true
    }
  },
  created() {
    // this.$router.push('/course');
  },
  methods: {

  },
  watch: {
    '$route' (to,from) {
        if(to.path == '/course'){
            this.active = true ;
        }else if(to.path == '/user'){
            this.active = false ;
        }
    }
  }

}


</script>

<style>
body{margin: 0;}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}
/* 头部导航 */
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  /*border-top: solid 4px #3091F2;*/  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .el-menu-demo{padding-left: 300px!important;}

/* 主内容区 */
main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;}
main .main-left{-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px; background-color: #F9FAFC;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; overflow: hidden;}
main .el-menu{background-color: transparent!important;}
/*  */
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }

/* 单选框 */
  .el-form-item .el-radio+.el-radio {
    margin-left: 30px!important;
  }
  /* 路由切换动效 */
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }


  /* 卡片 */
  .el-card{overflow: visible!important;}
</style>
