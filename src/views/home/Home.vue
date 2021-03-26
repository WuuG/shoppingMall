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
    //这里用goods的page比较合适一点，当然直接用1也是可以的
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
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
    //这种函数的封装方法可能不太好啊,应该到底下去再封装一层。因为这个函数是要不断调用的。（其实就是为了数据加载啦）
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //这里不加...
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
      });
    },
    /*
     **  事件监听方法
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