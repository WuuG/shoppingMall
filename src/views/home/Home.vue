<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:mid>首页</template>
    </nav-bar>
    <!-- 这里的class千万不能用swiper呀，swiper内部已经有这个类名了，而轮播图挂载的时候，还会用这个类，所以会报错的哦 -->
    <home-swiper :banner="banner" class="content"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <week-pop></week-pop>
    <tab-ctrl :tabTypes="['流 行', '新 品', '热 销']"></tab-ctrl>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import tabCtrl from "components/content/tabCtrl/TabCtrl";

import homeSwiper from "./childComps/HomeSwiper";
import homeRecommend from "./childComps/HomeRecommend";
import weekPop from "./childComps/WeekPop";

import { getHomeDatas } from "network/home.js";

export default {
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
    };
  },
  components: {
    navBar,
    tabCtrl,
    homeSwiper,
    homeRecommend,
    weekPop,
  },
  created() {
    this.getHomeDatas();
  },
  methods: {
    getHomeDatas() {
      getHomeDatas().then((res) => {
        this.banner = res.data.data.banner.list;
        this.dKeyword = res.data.data.dKeyword.list;
        this.keywords = res.data.data.keywords.list;
        this.recommend = res.data.data.recommend.list;
      });
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
}
#home {
  height: 1200px;
  .content {
    padding-top: 44px;
  }
}
</style>