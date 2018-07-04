import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#box',
  router, //vue 与 vue 路由模块结合。
  components: { App },
  template: '<App></App>'
})


