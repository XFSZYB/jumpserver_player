import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

// if (!process.env.IS_WEB) Vue.use(require('vue-electron')) //源
if (!process.env.IS_WEB) Vue.use(VUE_ELECTRON) // 改
Vue.use(Element)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
