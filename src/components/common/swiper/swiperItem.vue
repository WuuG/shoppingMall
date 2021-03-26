<template>
  <div class="slider">
    <slot name="swiperItem"><img src="~assets/logo.png" alt="" /></slot>
  </div>
</template>

<script>
export default {
  name: "swiperItem",
};
</script>

<style lang="less" scoped>
.slider {
  width: 100%;
  flex-shrink: 0; //不允许flex元素进行压缩
}
.slider img {
  width: 100%;
  vertical-align: top;
}
</style>