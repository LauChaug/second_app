import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router/index'
import './plugins/element'
import 'font-awesome/css/font-awesome.css'
import TreeTable from 'vue-table-with-tree-grid'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 设置请求拦截器，添加token令牌，保证拥有获取数据的权限
// axios请求拦截 为每次API的请求挂载一个包含token的authorization字段的
axios.interceptors.request.use(config=>{
  // 为请求头添加token的authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 注册全局的过滤器，第一个参数为过滤器的名称，第二个参数为过滤器的处理函数
Vue.filter('dateFormat',function(originVal){
  const dt =  new Date(originVal)
  const y =  dt.getFullYear()
  const m = (dt.getMonth() + 1 +'').padStart(2,'0')
  const d = (dt.getDate() + '').padStart(2,'0')
  const hh = (dt.getHours() + '').padStart(2,'0')
  const mm = (dt.getMinutes() + '').padStart(2,'0')
  const ss = (dt.getSeconds() + '').padStart(2,'0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

// 全局注册 vue-table-with-tree-grid
Vue.component('tree-table',TreeTable)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
