import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [{ "iid": "1m8jzwo", "lowNowPrice": "55.00", "desc": "新品", "title": "chic港味秋装女套装新款2018韩版格子西装外套+显瘦高腰破洞小脚裤学院风时尚套装两件套", "image": "//s11.mogucdn.com/mlcdn/c45406/180914_4k0k14g1608gc04k3jh1c6jac47fi_640x960.jpg", "count": 2, "select": 0 }, { "iid": "1m8ekkc", "lowNowPrice": "48.00", "desc": "新品", "title": "秋季新款套装两件套秋装2018新款韩版chic泡泡袖衬衫上衣+高腰显瘦牛仔裤学院风时尚套装", "image": "//s11.mogucdn.com/mlcdn/c45406/180910_72kcibhh4i275l73ik681kbed19aj_640x960.jpg", "count": 2, "select": 0 }, { "iid": "1m4s06m", "lowNowPrice": "27.90", "desc": "新款短袖t恤上衣女学生条纹复古港味女", "title": "t恤女短袖2018新款夏学生宽松韩版ulzzang百搭条纹ins超火的上衣", "image": "//s11.mogucdn.com/mlcdn/c45406/180623_1l8jlga277egb5cih5ilkdge0kb61_800x1200.jpg", "count": 3, "select": 0 }, { "iid": "1m81ha6", "lowNowPrice": "69.00", "desc": "时尚 百搭 新款", "title": "2018秋季新款韩版慵懒简约宽松长袖针织衫毛衣上衣+百搭显瘦长款吊带裙连衣裙两件套时尚套装", "image": "//s5.mogucdn.com/mlcdn/c45406/180902_2f3hfibh6gaijjebi0a8li30ld7lb_640x960.jpg", "count": 2, "select": 0 }, { "iid": "1m743l2", "lowNowPrice": "65.80", "desc": "这款娃娃衫真的是越看越喜欢\n\n上年纪了 就喜欢这种甜美的衣服 hiahiahia\n\n娃娃衫上身真的是炒鸡减龄\n\n衣服还有系带设计 可拆卸的哦\n\n宝宝们可以随意的打个蝴蝶结~\n\n下身也是很好搭配的\n\n牛仔裤or半身裙 都是灰常甜美的\n\n秋季女装韩版撞色娃娃领蝴蝶结绑带衬衫学院风宽松长袖衬衣上衣潮。火爆推荐", "title": "秋季2018新款韩版小清新撞色娃娃领蝴蝶结绑带衬衫学生休闲宽松长袖衬衣上衣潮", "image": "//s3.mogucdn.com/mlcdn/c45406/180810_6d7lk5cg5gacfb6leih6a96h3e87c_640x960.jpg", "count": 1, "select": 0 }]
  },
  mutations,
  actions,
})
