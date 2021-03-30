<template>
  <div>
    <detail-nav
      :currentIndex="currentIndex"
      @navTitleClick="navTitleClick"
    ></detail-nav>
    <detail-swiper :images="topImages"></detail-swiper>
    <item-info :itemInfo="itemInfo"></item-info>
    <shop-info :shopInfo="shopInfo"></shop-info>
  </div>
</template>

<script>
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailNav from "./childComps/DetailNav.vue";
import ItemInfo from "./childComps/ItemInfo";
import ShopInfo from "./childComps/ShopInfo";

import { getDetailDatas, itemInfo, shopInfo } from "network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: null, //商品的id
      data: {}, //detial页面所需要获取的所有信息
      topImages: [], //轮播图图片
      currentIndex: 0, //nav-bar目前的索引值
      itemInfo: {}, //商品信息
      shopInfo: {}, //店铺信息
    };
  },
  components: {
    DetailSwiper,
    DetailNav,
    ItemInfo,
    ShopInfo,
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
        this.shopInfo = new shopInfo(data.shopInfo);
        console.log(this.shopInfo);
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
