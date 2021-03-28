<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
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
<style lang="less">
//这样引入可以使用样式，但是不能使用变量。
@import "~assets/css/base.less";
</style>
