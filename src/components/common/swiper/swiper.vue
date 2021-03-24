<template>
  <div id="swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot name="swiper"></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          v-for="(item, index) in slideCount"
          :key="index"
          class="indicator-item"
          :class="active(index)"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props: {
    interval: {
      //设置轮播时间，默认3000
      type: Number,
      default: 3000,
    },
    animaDuration: {
      type: Number,
      default: 300,
    },
    moveRatio: {
      type: Number,
      default: 0.3,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slideCount: 0, //轮播图指示器的个数，也是实际的轮播图数量
      swiperWidth: 0, //swiper可是范围的宽度。
      swiperStyle: {}, //用来指向swiper样式对象
      currentIndex: 1,
      scroll: false,
      flag: true,
    };
  },
  //挂载后开始设置轮播图的图片。前后都要添加一个
  mounted() {
    //操作dom添加图片
    console.log(11);
    setTimeout(() => {
      this.handleDom();
      this.starTimer();
    }, 300);
  },
  methods: {
    active(index) {
      if (
        index + 1 == this.currentIndex ||
        (index == 0 && this.currentIndex == this.slideCount + 1) ||
        (index == 3 && this.currentIndex == 0)
      ) {
        return "active";
      } else {
        return "";
      }
    },
    handleDom() {
      let swiper = document.querySelector(".swiper");
      let swipers = document.querySelectorAll(".slider");
      this.slideCount = swipers.length;
      if (this.slideCount > 1) {
        let preItem = swipers[0].cloneNode(true); //硬克隆
        let lastItem = swipers[this.slideCount - 1].cloneNode(true);
        swiper.insertBefore(lastItem, swipers[0]);
        swiper.appendChild(preItem);
        this.swiperWidth = swiper.offsetWidth; //这里的是对象，所以类似指针，可以直接修改该swiperStyle来修改swiper的样式。
        this.swiperStyle = swiper.style;
      }
      this.setTransform(-this.currentIndex * this.swiperWidth); //显示第一张图，因为原先的位置被新加上的元素替代了，所以需要移动位置，来达到第一张图的位置。
    },
    //设置滚动位置
    setTransform(position) {
      this.swiperStyle.transform = "translateX(" + position + "px)";
    },
    //滚动开始
    scrollContent(position) {
      this.scroll = true;
      this.swiperStyle.transition = "all " + this.animaDuration + "ms";
      this.setTransform(position);
      this.checkPosition();
      this.scroll = false;
    },

    //自动轮播
    starTimer() {
      this.timer = setInterval(() => {
        console.log();
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.swiperWidth);
      }, this.interval);
    },
    //关闭自动轮播
    stopTimer() {
      clearInterval(this.timer);
    },
    //用来判断是否到边界
    checkPosition() {
      setTimeout(() => {
        this.swiperStyle.transition = "all 0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.swiperWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.swiperWidth);
        }
      }, this.animaDuration);
    },

    touchStart(e) {
      if (this.scroll) return; //滚动不可拖动
      this.stopTimer();
      this.startX = e.touches[0].pageX; // 这里给vue实例加了一个属性
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPositoin = -this.currentIndex * this.swiperWidth;
      this.setTransform(currentPositoin + this.distance);
    },
    touchEnd() {
      this.flag = false;
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.swiperWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.swiperWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }

      this.scrollContent(-this.currentIndex * this.swiperWidth);
      this.starTimer();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";
#swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  //这里用flex 直接让swiper内部的图片一行展示了
  display: flex;
  width: 100%;
  // transition: all 1s;
}
.indicator {
  z-index: 100;
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 20px;
  line-height: 20px;
  .indicator-item {
    margin: 5px;
    width: 10px;
    height: 10px;
    flex: 1;
    background-color: #fff;
    border-radius: 50%;
  }
  .active {
    background-color: @high-text-color;
  }
}
</style>