<template>
  <div>
    <detail-swiper :images="topImages"></detail-swiper>
  </div>
</template>

<script>
import { getDetailDatas } from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper.vue";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      data: {},
      topImages: [],
    };
  },
  components: {
    DetailSwiper,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailDatas(this.iid);
  },
  methods: {
    getDetailDatas(iid) {
      getDetailDatas(iid).then((res) => {
        this.data = res.data.result;
        this.topImages = this.data.itemInfo.topImages;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>