import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast' //默认导入里面的index.js

Vue.config.productionTip = false
Vue.use(toast)  // 安装toast插件

Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
