<template>
  <div>
    <detail-nav
      :currentIndex="currentIndex"
      @navTitleClick="navTitleClick"
    ></detail-nav>
    <scroll class="detail-content" ref="scroll">
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
      <detail-comment :detailRate="detailRate"></detail-comment>
      <goods :good="detailRcommend"></goods>
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
import DetailComment from "./childComps/DetailComment";

import Scroll from "components/common/betterScroll/Scroll";

import {
  getDetailDatas,
  itemInfo,
  shopInfo,
  getRecommend,
} from "network/detail";
import { scrollMix } from "common/mixin";

export default {
  name: "detail",
  data() {
    return {
      iid: null, //商品的id
      topImages: [], //轮播图图片
      currentIndex: 0, //nav-bar目前的索引值
      itemInfo: {}, //商品信息
      shopInfo: {}, //店铺信息
      detailImages: [], //商品图片
      itemParams: {}, //商品参数
      detailRate: {}, //用户评价
      detailRcommend: {}, //商品推荐模块
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
    DetailComment,
  },
  mixins: [scrollMix],
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailDatas(this.iid);
    this.getRecommend();
  },
  mounted() {
    this.debounceRefresh();
  },
  methods: {
    /*
     **  网络请求方法
     */
    getDetailDatas(iid) {
      getDetailDatas(iid).then((res) => {
        const data = res.data.result;
        //2.轮播图数据
        this.topImages = data.itemInfo.topImages;
        //3.商品数据
        this.itemInfo = new itemInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo
        );
        //4.店铺数据
        this.shopInfo = new shopInfo(data.shopInfo);
        //5.商品图片展示
        this.detailImages = data.detailInfo.detailImage;
        //6.商品参数
        this.itemParams = data.itemParams;
        //7.评价
        this.detailRate = data.rate.list ? data.rate.list[0] : {};
        //
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.detailRcommend = res.data.data;
      });
    },
    /*
     **  事件监听方法
     */
    navTitleClick(index) {
      this.currentIndex = index;
    },
    scrollRefresh() {
      this.Imagelistener();
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
