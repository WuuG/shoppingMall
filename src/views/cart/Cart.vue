<template>
  <div>
    <cart-nav class="cart-nav-bar">
      <template v-slot:mid>购物车({{ cart.length }})</template>
    </cart-nav>
    <scroll class="cart-scroll" ref="scroll">
      <item :cart="cart" @cartImgLoad="cartImgLoad"> </item>
    </scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Item from "./childComps/Item";
import CartNav from "components/common/navbar/NavBar.vue";
import { scrollMix } from "../../common/mixin";

export default {
  name: "Cart",
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
  },
  components: {
    Item,
    CartNav,
  },
  mixins: [scrollMix],
  activated() {
    this.Imagelistener();
  },
  methods: {
    cartImgLoad() {
      this.Imagelistener();
    },
  },
};
</script>

<style scoped lang="less">
.cart-nav-bar {
  background-color: @tint-color;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.cart-scroll {
  position: fixed;
  width: 100%;
  top: 44px;
  bottom: 49px;
}
</style>