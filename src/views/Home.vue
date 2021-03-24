<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:mid>首页</template>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    navBar,
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.nav-bar {
  text-align: center;
  color: #fff;
  background-color: @tint-color;
}
</style>