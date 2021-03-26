<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:mid>首页</template>
    </nav-bar>
    <!-- 这里的class千万不能用swiper呀，swiper内部已经有这个类名了，而轮播图挂载的时候，还会用这个类，所以会报错的哦 -->
    <home-swiper :banner="banner" class="content"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <week-pop></week-pop>
    <tab-ctrl
      :tabTypes="['流行', '新品', '热销']"
      @tabClick="setCurrentIndex"
    ></tab-ctrl>
    <goods :good="goods[tabTypes[currentIndex]]" />
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import tabCtrl from "components/content/tabCtrl/TabCtrl";
import goods from "components/content/goods/Goods";

import homeSwiper from "./childComps/HomeSwiper";
import homeRecommend from "./childComps/HomeRecommend";
import weekPop from "./childComps/WeekPop";

import { getHomeDatas, getHomeGoods } from "network/home.js";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] }, // 对应流行
        new: { page: 0, list: [] }, //对应新品
        sell: { page: 0, list: [] }, //对应热销
      },
      currentIndex: 0,
      tabTypes: ["pop", "new", "sell"],
    };
  },

  components: {
    navBar,
    tabCtrl,
    goods,
    homeSwiper,
    homeRecommend,
    weekPop,
  },
  created() {
    this.getHomeDatas();
    this.getGoods("pop", 1);
    this.getGoods("new", 1);
    this.getGoods("sell", 1);
  },
  methods: {
    /*
     **  网络请求相关方法
     */
    getHomeDatas() {
      getHomeDatas().then((res) => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getGoods(type, page) {
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list = res.data.data.list;
      });
    },
    /*
     **  其他方法
     */
    //  index from TabCtrl.vue custom events
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";
.nav-bar {
  text-align: center;
  color: #fff;
  background-color: @tint-color;
  z-index: 10;
}
#home {
  .content {
    padding-top: 44px;
  }
}
</style>