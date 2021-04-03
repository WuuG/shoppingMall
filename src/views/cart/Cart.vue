<template>
  <div>
    <cart-nav class="cart-nav-bar">
      <template v-slot:mid>购物车({{ cart.length }})</template>
    </cart-nav>
    <scroll class="cart-scroll" ref="scroll">
      <item :cart="cart" @cartImgLoad="cartImgLoad"> </item>
    </scroll>
    <div class="cart-total-info">
      <div class="cart-total-info-left">
        <img
          src="~assets/img/cart/tick.svg"
          alt=""
          @click="selectAll"
          :class="{ active: isSelectAll }"
        />
        <span>全选</span>
        <span>合计:￥{{ totalPrice }}</span>
      </div>
      <div class="cart-total-info-right">去计算({{ cartSelectNum }})</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Item from "./childComps/Item";
import CartNav from "components/common/navbar/NavBar.vue";
import { scrollMix } from "common/mixin";

export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
    totalPrice() {
      return this.cart
        .filter((item) => item.select)
        .reduce((pre, cur) => {
          return pre + cur.count * cur.lowNowPrice;
        }, 0);
    },
    //计算属性里的值不要修改，若要修改请使用setter
    isSelectAll() {
      // return this.cart.findIndex((item) => !item.select) == -1 ? true : false;
      //求求你记住，find是需要return的  箭头函数只有在最简化的情况下，不需要加return 它自动return，操操操。
      return this.cart.find((item) => item.select == 0) ? false : true;
    },
    cartSelectNum() {
      return this.cart.filter((item) => item.select == true).length;
    },
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
    selectAll() {
      //又是一次单词写错的。
      let isTotalSelect = !this.isSelectAll;
      this.$store.commit("selectAll", isTotalSelect);
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
  bottom: 49px + 40px;
}
.cart-total-info {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  bottom: 49px;
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;

  .cart-total-info-left {
    padding-left: 10px;
    flex: 4;
    display: flex;
    text-align: left;
    img {
      border: 2px solid #acacac;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      align-self: center;
    }
    .active {
      background-color: @tint-color;
      border: 2px solid @tint-color !important;
    }
    span {
      flex: 2;
    }
    span:nth-of-type(1) {
      flex: 1;
      padding-left: 5px;
    }
  }
  .cart-total-info-right {
    flex: 2;
    text-align: center;
    background-color: #fa1a00;
    color: #fff;
  }
}
</style>