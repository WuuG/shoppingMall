<template>
  <tab-bar class="tab-bar-menu">
    <tab-bar-item :path="'/home'" :color="color">
      <!-- 父组件通过定义v-slot:子组件名称="自定义的对象" 通过 对象.子组件传递过来的参数 来进行使用
      在本例中, 自定义slot a是子组件传递来的参数 故可以表示为slot.a -->
      <template v-slot:text="slot">{{ slot.a.second }}</template>
      <!-- 标签内部别名的使用 -->
      <template v-slot:img
        ><img src="~assets/img/tabbar/home.svg" alt=""
      /></template>
      <template v-slot:img-active>
        <img src="~assets/img/tabbar/home-active.svg" alt="" />
      </template>
    </tab-bar-item>
    <tab-bar-item :path="'/see'" :color="color">
      <template v-slot:text>分类</template>
      <template v-slot:img
        ><img src="~assets/img/tabbar/eye.svg" alt=""
      /></template>
      <template v-slot:img-active>
        <img src="~assets/img/tabbar/eye-active.svg" alt="" />
      </template>
    </tab-bar-item>
    <tab-bar-item :path="'/cart'" :color="color">
      <template v-slot:text>购物车</template>
      <template v-slot:img>
        <img src="~assets/img/tabbar/shopCart.svg" alt="" />
      </template>
      <template v-slot:img-active>
        <img src="~assets/img/tabbar/shopCart-active.svg" alt="" />
      </template>
    </tab-bar-item>
    <tab-bar-item :path="'/profile'" :color="color">
      <template v-slot:text>我的</template>
      <template v-slot:img
        ><img src="~assets/img/tabbar/user.svg" alt=""
      /></template>
      <template v-slot:img-active>
        <img src="~assets/img/tabbar/user-active.svg" alt="" />
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "components/common/tabBar/TabBar";
import tabBarItem from "components/common/tabBar/TabBarItem";
export default {
  data() {
    return {
      color: "#ff5777",
    };
  },
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style lang="less" scoped>
.tab-bar-menu {
  display: none;
  position: fixed;
  bottom: 0;
}
</style>