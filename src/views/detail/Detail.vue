<template>
  <div>
    <detail-nav
      :currentIndex="currentIndex"
      @navTitleClick="navTitleClick"
    ></detail-nav>
    <scroll class="detail-content" ref="detailScroll">
      <detail-swiper
        :images="topImages"
        @swiperImageLoad="scrollRefresh"
      ></detail-swiper>
      <item-info :itemInfo="itemInfo"></item-info>
      <shop-info :shopInfo="shopInfo"></shop-info>
      <detail-images
        :detailImages="detailImages"
        @detailImagesLoad="scrollRefresh"
      ></detail-images>
      <detail-params :itemParams="itemParams"></detail-params>
    </scroll>
  </div>
</template>

<script>
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailNav from "./childComps/DetailNav.vue";
import ItemInfo from "./childComps/ItemInfo";
import ShopInfo from "./childComps/ShopInfo";
import DetailImages from "./childComps/DetailImage";
import DetailParams from "./childComps/DetailParams";

import Scroll from "components/common/betterScroll/Scroll";

import { getDetailDatas, itemInfo, shopInfo } from "network/detail";
import { debounce } from "common/utils";

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
      detailImages: [],
      itemParams: {},
    };
  },
  components: {
    DetailSwiper,
    DetailNav,
    ItemInfo,
    ShopInfo,
    Scroll,
    DetailImages,
    DetailParams,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailDatas(this.iid);
  },
  computed: {
    //防抖函数需要一个
    debounceRefresh() {
      return debounce(this.$refs.detailScroll.refresh);
    },
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
        this.detailImages = data.detailInfo.detailImage;
        this.itemParams = data.itemParams;
      });
    },
    /*
     **  事件监听方法
     */
    navTitleClick(index) {
      this.currentIndex = index;
    },
    scrollRefresh() {
      this.debounceRefresh();
    },
  },
};
</script>

<style lang="less" scoped>
.detail-content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
}
</style>
