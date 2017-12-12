// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/reset.css'

// 下面两行引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)                 //Vue.use注册全局组件，不用申明就可以使用
Vue.config.productionTip = false  //设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
  components: { App }
})
