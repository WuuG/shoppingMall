import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [
      {
        aName: 'luck',
      },
      {
        aName: 'bob'
      }
    ]
  },
  mutations: {
    addCart(state, payload) {
      //将第一个对象赋值给obj，并新增一个属性count，然后push进数组中。
      let obj = state.cart[0]
      obj.count = 0;
      state.cart.push(obj);
    },
    changeCart(state) {
      //vuex里的值变动了，但是并没有双向绑定。
      state.cart[state.cart.length - 1].count++;
    }
  },
  actions,
})
