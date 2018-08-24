import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/login/login'
import center from '@/page/center/center'
import test from '@/page/test/test'
import index from '@/page/index/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
      {
          path: '/center',
          component: center,
          name:'center'
      },
	  
      {
          path: '/test',
          component: test,
      },
      ,

      {
          path: '/index',
          component: index,
      }
  ]
})
