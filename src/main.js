import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Router from 'vue-router';
import RouterConfig from './router-config.js'


Vue.use(Router)
Vue.use(ElementUI)

const router = new Router({
  routes: RouterConfig
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
