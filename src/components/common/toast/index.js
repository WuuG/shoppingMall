import Toast from "./Toast.vue"

const obj = {}

obj.install = function (Vue) { // 安装的方法。当use的时候，会用到这个方法
  const toastConsturctor = Vue.extend(Toast) //创建组件构造器。
  const toast = new toastConsturctor() //使用组件构造器创建组件对象
  toast.$mount(document.createElement('div')) //  手动挂载到div元素上
  document.body.appendChild(toast.$el)  //将toast的模板所挂载的div放到body的屁股后面
  Vue.prototype.$toast = toast
}

export default obj