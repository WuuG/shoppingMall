<template>
  <div>
    <detail-nav
      :currentIndex="currentIndex"
      @navTitleClick="navTitleClick"
    ></detail-nav>
    <detail-swiper :images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailNav from "./childComps/DetailNav.vue";

import { getDetailDatas } from "network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      data: {},
      topImages: [],
      currentIndex: 0,
    };
  },
  components: {
    DetailSwiper,
    DetailNav,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailDatas(this.iid);
  },
  methods: {
    getDetailDatas(iid) {
      getDetailDatas(iid).then((res) => {
        this.data = res.data.result;
        this.topImages = this.data.itemInfo.topImages;
      });
    },
    navTitleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
