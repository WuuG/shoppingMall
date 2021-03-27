<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:mid>首页</template>
    </nav-bar>
    <!-- 这个自定义事件完全没有必要啊 -->
    <!-- <scroll class="wrapper" @refresh="refresh" ref="scroll"> -->
    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      @scroll="setToTopShow"
      :pullUpLoad="true"
      @pullingUp="getGoods(tabTypes[currentIndex])"
    >
      <!-- 这里的class千万不能用swiper呀，swiper内部已经有这个类名了，而轮播图挂载的时候，还会用这个类，所以会报错的哦 -->
      <home-swiper :banner="banner" class="content"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <week-pop></week-pop>
      <tab-ctrl
        :tabTypes="['流行', '新品', '热销']"
        @tabClick="setCurrentIndex"
      ></tab-ctrl>
      <goods :good="goods[tabTypes[currentIndex]]" />
    </scroll>
    <to-top v-show="toTopShow" @click.native="toPos(0, 0)"></to-top>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import tabCtrl from "components/content/tabCtrl/TabCtrl";
import goods from "components/content/goods/Goods";
import Scroll from "../../components/common/betterScroll/Scroll.vue";
import ToTop from "../../components/common/toTop/ToTop";

import homeSwiper from "./childComps/HomeSwiper";
import homeRecommend from "./childComps/HomeRecommend";
import weekPop from "./childComps/WeekPop";

import { getHomeDatas, getHomeGoods } from "network/home.js";
import { debounce } from "common/utils";

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
      currentIndex: 0, //根据currentIndex来判断进行tab选项。
      tabTypes: ["pop", "new", "sell"], //用以判断getgoods的类别，进行展示。
      toTopShow: false, // 返回按钮的显示。
    };
  },

  components: {
    navBar,
    tabCtrl,
    goods,
    Scroll,
    ToTop,
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
  mounted() {
    //这里还会使用返回回来的函数的，同时这个是个局部变量，理论上是会被销毁的，但是因为底下有个闭包所以之后使用的refresh还是同一个refresh,
    const refresh = debounce(this.$refs.scroll.refresh); //注意这个debounce函数只是调用了一次而已
    this.$bus.$on("goodsImageLoad", () => {
      //防止图片已经刷新了，scroll还没有被挂载
      // 若是没有在上面没有进行refresh的定义的话，每次直接调用，都是一个新的函数，timer是不会一致的，相当于有两次闭包？
      // this.$refs.scroll && debounce(this.$refs.scroll.refresh);
      this.$refs.scroll && refresh();
    });
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
        // 这应该是比较合理的封装方法了，我只是面向scroll这个组件，调用了他的refresh方法  这里不来个异步加载的话，可能来不及push进去。  但是如果异步的话，更新数据时，可能会有一瞬间是白的
        // setTimeout(() => {
        //   this.$refs.scroll.refresh();
        // }, 200);
        //并不合理，想太多了兄弟。
      });
    },
    /*
     **  事件监听方法
     */
    //  index from TabCtrl.vue custom events
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    // 这里压根不需要自定义时间传值出来，ref完全就可以解决这个问题的
    // refresh(bscroll) {
    //   this.bscroll = bscroll;
    // },
    //toTop组件是否显示，以及回到顶端
    setToTopShow(pos) {
      this.toTopShow = -pos.y > 1200 ? true : false;
    },
    toPos(x, y) {
      this.$refs.scroll.scrollTo(x, y);
    },
    // 来封装一下。
    //   debounce(func, delay = 200) {
    //     let timer = null;
    //     //我有预感，这个函数的目的也是为了闭包。试了一下，没有这个闭包的话，每次的timer都是重新定义的
    //     return function (...arg) {
    //       if (timer) {
    //         clearTimeout(timer);
    //       }
    //       timer = setTimeout(() => {
    //         //原来这样才是传入函数的真正写法啊
    //         func.apply(this, arg);
    //       }, delay);
    //     };
    //   },
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
  // 底下这两个样式有点意思，这里content并没有被wrapper中的content使用，但是wapper却被scroll的warpper使用了
  > .content {
    padding-top: 44px;
  }
  > .wrapper {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
}
</style>