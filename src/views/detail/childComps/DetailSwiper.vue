<template>
  <div>
    <swiper class="detail-swiper">
      <template v-slot:swiper>
        <swiper-item v-for="item in images" :key="item.id">
          <template v-slot:swiperItem>
            <img :src="item" alt="图片加载中" @load="swiperImageLoad" />
          </template>
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperItem } from "components/common/swiper/swiper";
export default {
  name: "detailSwiper",
  data() {
    return {
      swiperImageFlag: true, //仅仅发射一次emit
    };
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    swiper,
    swiperItem,
  },
  methods: {
    swiperImageLoad() {
      if (this.swiperImageFlag) {
        this.$emit("swiperImageLoad");
        this.swiperImageFlag = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail-swiper {
  width: 100%;
  height: 400px;
}
</style>