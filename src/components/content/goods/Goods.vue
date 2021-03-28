<template>
  <div>
    <!-- 官网说驼峰命名无法在html中识别，为什么我这里可以直接用呢？因为字符串模板，单文件组件（也就是vue文件），以及script的type为"text/x-template"三种情况都可以直接用驼峰 -->
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
  mounted() {
    console.log(this.good);
  },
};
</script>

<style lang="less" scoped>
</style>