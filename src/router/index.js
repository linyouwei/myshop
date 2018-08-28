import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/login/login'
import center from '@/page/center/center'
import test from '@/page/test/test'
import index from '@/page/index/index'
import details from '@/page/details/details'
import confirm from '@/page/cart/confirm'
import cart from '@/page/cart/cart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      name:'login'
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
      {
          path: '/index',
          component: index,
      },
    {
        path: '/details/shopId=:shopId&goodsId=:goodsId&index=:index',
        component: details,
        name:'details'

    },
      ,
      {
          path: '/confirm',
          component: confirm,
          name:'confirm'
      }
      ,
      {
          path: '/cart/shopId=:shopId',
          component: cart,
          name:'cart'

      }
  ]
})
