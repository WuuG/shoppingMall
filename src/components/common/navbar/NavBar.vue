<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="mid"><slot name="mid"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  .left,
  .right {
    width: 50px;
  }
  .mid {
    flex: 1;
  }
}
</style>