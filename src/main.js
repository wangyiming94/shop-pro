import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全局样式
import './assets/css/global.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
