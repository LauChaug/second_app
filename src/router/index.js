import Vue from "vue";
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import HomePage from '@/components/HomePage'
import WelcomePage from '@/components/WelcomePage'
import UserPage from '@/components/user/UserPage'
import rightsPage from '@/components/power/rightsPage'
import rolesPage from '@/components/power/rolesPage'
import CatePage from '@/components/goods/CatePage'
import goodsPage from '@/components/goods/goodsPage'
import paramsPage from '@/components/goods/paramsPage'
import addPage from '@/components/goods/addPage'
import orderPage from '@/components/order/orderPage'
import reportPage from '@/components/report/reportPage'
Vue.use(Router)

const router = new Router({
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      // name:LoginPage,
      component:LoginPage
    },
    {
      path:'/home',
      // name:HomePage,
      component:HomePage,
      redirect:'/welcome',
      children:[
        {
          path:'/welcome',
          // name:WelcomePage,
          component:WelcomePage
        },
        {
          path:'/users',
          // name:UserPage,
          component:UserPage
        },
        {
          path:'/rights',
          component:rightsPage
        },
        {
          path:'/roles',
          component:rolesPage
        },
        {
          path:'/categories',
          component:CatePage
        },
        {
          path:'/params',
          component:paramsPage
        },
        {
          path:'/goods',
          component:goodsPage
        },
        {
          path:'/goods/add',
          component:addPage
        },
        {
          path:'/orders',
          component:orderPage
        },
        {
          path:'/reports',
          component:reportPage
        },
      ]
    }
  ]
})
/*
// 路由导航守卫控制访问权限，如果用户没有登录，直接通过URL地址访问特定的页面，需要重新导航到登录页面
router.beforeEach((to,from,next)=>{
  // 如果访问的是登录页面，则直接放行
  if(to.path === '/login') return next()
  // 从session storage中获取到保存token的值
  const tokenStr = window.sessionStorage.getItem('token')
  // 判断保存的token是否有值
  if(!tokenStr) return next('/login')
  // 如果有值则进行跳转
  next()
})
*/
router.beforeEach((to,from,next)=>{
  if(to.path === '/login') return next()
  const tokenString = window.sessionStorage.getItem('token')
  if(!tokenString) return next('/login')
  next()
})
export default router