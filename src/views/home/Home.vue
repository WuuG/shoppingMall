<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:mid>首页</template>
    </nav-bar>
    <home-swiper :banner="banner" class="swiper"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <week-pop></week-pop>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";

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
  .swiper {
    padding-top: 44px;
  }
}
</style>