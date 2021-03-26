<template>
  <div>
    <goods-item :goodList="good.list"></goods-item>
  </div>
</template>

<script>
import goodsItem from "./GoodsItem";
export default {
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    goodsItem,
  },
  created() {
    console.log(this.good);
  },
};
</script>

<style lang="less" scoped>
</style>