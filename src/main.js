import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全局样式
import './assets/css/global.css'

// 引入图标库样式文件
import './assets/fonts/iconfont.css'

// 引入element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
