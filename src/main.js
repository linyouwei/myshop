// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import api from './api/index.js'

//
// 全局引入Toast
import './components/Toast/toast.css';
import Toast from './components/Toast/toast';
Vue.use(Toast);

//rem使用
import 'lib-flexible/flexible'

//添加bookstrap使用的
import $ from 'jquery'

import './assets/ulite/ulite.css'
import './assets/ulite/ulite.js'

import './assets/common/common.css'





//
//import Mint from 'mint-ui'       //固定路径，类似vuerouter
//
//import 'mint-ui/lib/style.css'      //固定路径


//Vue.use(Mint)
Vue.use(VueResource)
// 将API方法绑定到全局
Vue.prototype.$api = api


Vue.config.productionTip = false

Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
