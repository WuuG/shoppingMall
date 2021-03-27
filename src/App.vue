<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-menu></tab-bar-menu>
  </div>
</template>

<script>
import tabBarMenu from "components/content/TabbarMenu";
export default {
  data() {
    return {};
  },

  components: {
    tabBarMenu,
  },
};
</script>
<style lang="less" scoped>
@import "./assets/css/base.less";
</style>
