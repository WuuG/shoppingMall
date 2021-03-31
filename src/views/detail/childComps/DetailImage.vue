<template>
  <div class="detail-images">
    {{ key }}
    <div v-for="item in Imgaes" :key="item.id">
      <img :src="item" alt="" @load="detailImagesLoad" />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailImages",
  data() {
    return {};
  },
  props: {
    detailImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    key() {
      return this.detailImages[0] && this.detailImages[0].key;
    },
    Imgaes() {
      return this.detailImages[0] && this.detailImages[0].list;
    },
  },
  methods: {
    detailImagesLoad() {
      this.$emit("detailImagesLoad");
    },
  },
};
</script>

<style lang="less" scoped>
.detail-images {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>