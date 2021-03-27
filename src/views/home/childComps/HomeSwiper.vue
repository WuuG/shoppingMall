<template>
  <swiper>
    <template v-slot:swiper>
      <swiper-item v-for="item in banner" :key="item.id">
        <template v-slot:swiperItem>
          <a :href="item.link">
            <img :src="item.image" alt="" @load="homeSwiperImageLoad" />
          </a>
        </template>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
import { swiper, swiperItem } from "components/common/swiper/swiper.js";

export default {
  props: {
    banner: {
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
    homeSwiperImageLoad() {
      this.$emit("homeSwiperImageLoad");
    },
  },
};
</script>

<style lang="less" scoped>
</style>