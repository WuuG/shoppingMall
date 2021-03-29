<template>
  <div>
    <detail-nav
      :currentIndex="currentIndex"
      @navTitleClick="navTitleClick"
    ></detail-nav>
    <detail-swiper :images="topImages"></detail-swiper>
    <item-info :itemInfo="itemInfo"></item-info>
  </div>
</template>

<script>
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailNav from "./childComps/DetailNav.vue";
import ItemInfo from "./childComps/ItemInfo";

import { getDetailDatas, itemInfo } from "network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      data: {},
      topImages: [],
      currentIndex: 0,
      itemInfo: {},
    };
  },
  components: {
    DetailSwiper,
    DetailNav,
    ItemInfo,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailDatas(this.iid);
  },
  methods: {
    /*
     **  网络请求方法
     */
    getDetailDatas(iid) {
      getDetailDatas(iid).then((res) => {
        const data = res.data.result;
        this.data = res.data.result;
        this.topImages = data.itemInfo.topImages;
        this.itemInfo = new itemInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo
        );
        console.log(data.itemInfo, data.columns, data.shopInfo);
      });
    },
    /*
     **  事件监听方法
     */
    navTitleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
