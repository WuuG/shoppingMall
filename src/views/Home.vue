<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:mid>首页</template>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";

import { getHomeDatas } from "network/home.js";

export default {
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
    };
  },
  components: {
    navBar,
  },
  created() {
    getHomeDatas().then((res) => {
      this.banner = res.data.data.banner.list;
      this.dKeyword = res.data.data.dKeyword.list;
      this.keywords = res.data.data.keywords.list;
      this.recommend = res.data.data.recommend.list;
    });
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