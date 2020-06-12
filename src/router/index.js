import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/sign-up.vue'
import Enroll from '../views/enroll.vue'
import EnrollmentStatus from '../views/enrollment-status.vue'
import DownLoadInformation from '../views/download-information.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sign-in.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/enroll',
    name: 'enroll',
    component: Enroll,
    meta: {  
      requiresAuth: true  
    }

  },
  {
    path: '/enrollment-status',
    name: 'enrollment-status',
    component: EnrollmentStatus,
    meta: {  
      requiresAuth: true  
    }
  },
  {
    path: '/download-information',
    name: 'download-information',
    component: DownLoadInformation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导航卫视
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户时候登录
    //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
router.beforeEach((to,from,next) => {
  if(to.path === '/sign-in'){
    next();
  } else{
    if(to.meta.requiresAuth && !localStorage.getItem('Authorization')){
       //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
      next('/sign-in');
    } else {
      //如果不需要登录验证，或者已经登录成功，则直接放行
      next();
    }
  }
})

export default router
