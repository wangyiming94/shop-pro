import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全局样式
import './assets/css/global.css'

// 引入图标库样式文件
import './assets/fonts/iconfont.css'

// 引入axios
import axios from 'axios'

// 引入element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 给axios做配置
axios.defaults.baseURL = 'http://127.0.0.1:11333/api/private/v1/'
axios.interceptors.request.use(
  function(config) {
    var token = window.sessionStorage.getItem('token')
    config.headers.Authorization = token
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
