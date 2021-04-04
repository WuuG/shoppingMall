import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast' //默认导入里面的index.js
import VueLazyLoad from 'vue-lazyload'  //图片懒加载


Vue.config.productionTip = false
Vue.use(toast)  // 安装toast插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png') // 这里图片加载需要用require
})

Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
