<template>
  <div>
    <detail-nav
      :currentIndex="currentIndex"
      @navTitleClick="navTitleClick"
    ></detail-nav>
    <scroll
      class="detail-content"
      ref="scroll"
      :probeType="3"
      @scroll="detailScroll"
    >
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
      <detail-params
        :itemParams="itemParams"
        ref="detailParams"
      ></detail-params>
      <detail-comment
        :detailRate="detailRate"
        ref="detailComment"
      ></detail-comment>
      <goods :good="detailRcommend" ref="detailRcommend"></goods>
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
import { debounce } from "common/utils";

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
      detailNavBarY: [], //nav对应模块的Y值。
      detailNavBarYPush: null, //用于记录navY值的函数
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
    this.navYDebounce();
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
      this.$refs.scroll.scrollTo(0, -this.detailNavBarY[index], 500);
    },
    navYDebounce() {
      const getDebounceY = debounce(() => {
        this.detailNavBarY = [];
        this.detailNavBarY.push(0);
        this.detailNavBarY.push(this.$refs.detailParams.$el.offsetTop);
        this.detailNavBarY.push(this.$refs.detailComment.$el.offsetTop);
        this.detailNavBarY.push(this.$refs.detailRcommend.$el.offsetTop);
        this.detailNavBarY.push(Number.MAX_VALUE); // 多加一个值，为了判断时，判断条件的统一
      });
      this.detailNavBarYPush = getDebounceY;
    },
    scrollRefresh() {
      this.Imagelistener();
      //若是在这里调用this.navYDebounce函数，就失效了，因为此时每次图片发射的命令，都会重新将this.detaiNavBarYPush重新进行赋值吗？
      this.detailNavBarYPush();
    },
    detailScroll(pos) {
      let posY = -pos.y;
      for (let i = 0; i < this.detailNavBarY.length - 1; i++) {
        if (
          this.currentIndex != i &&
          posY >= this.detailNavBarY[i] &&
          posY < this.detailNavBarY[i + 1]
        ) {
          this.currentIndex = i;
        }
      }
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
