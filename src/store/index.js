import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [
      { "iid": "1m8ogsc", "lowNowPrice": "119.00", "desc": "优质现货，下单送运费险，店铺支持七天无理由退换货，收到不满意退货均有运费补贴，亲们赶快下单吧！", "title": "网红同款实拍秋季女装2018新款女初恋复古中长款针织连衣裙半身裙时尚套装两件套", "image": "//s5.mogucdn.com/mlcdn/c45406/180917_24666f4kgi486191382ikh2lhc8cg_640x862.jpg", "count": 1 }
    ],
  },
  mutations,
  actions,
})
