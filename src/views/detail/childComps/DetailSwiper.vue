<template>
  <div>
    <swiper class="detail-swiper">
      <template v-slot:swiper>
        <swiper-item v-for="item in images" :key="item.id">
          <template v-slot:swiperItem>
            <img :src="item" alt="图片加载中" />
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
    return {};
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
};
</script>

<style lang="less" scoped>
.detail-swiper {
  padding-top: 44px;
  width: 100%;
  height: 400px;
}
</style>