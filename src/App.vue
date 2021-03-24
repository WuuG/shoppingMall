<template>
  <div id="app">
    <h2>完成项目的创建</h2>
    <router-view></router-view>
    <tab-bar-menu></tab-bar-menu>
  </div>
</template>

<script>
import tabBarMenu from "./components/TabbarMenu";
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
