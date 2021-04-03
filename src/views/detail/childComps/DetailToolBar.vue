<template>
  <div class="detail-tool-bar">
    <div class="tool-bar-item">
      <span class="icon"></span>
      <span>客服</span>
    </div>
    <div class="tool-bar-item">
      <span class="icon"></span>
      <span>店铺</span>
    </div>
    <div class="tool-bar-item">
      <span class="icon"></span>
      <span>收藏</span>
    </div>
    <div class="add-cart" @click="addCart">加入购物车</div>
    <div class="tool-bar-buy">购买</div>
  </div>
</template>

<script>
import { ADDTOCART } from "store/const";
export default {
  name: "DetailToolBar",
  data() {
    return {};
  },
  props: {
    cartInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addCart() {
      this.$store.dispatch(ADDTOCART, this.cartInfo).then((res) => {
        this.$emit("addCart", res);
        setTimeout(() => {
          this.toastShow = false;
        }, 2000);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.detail-tool-bar {
  position: fixed;
  bottom: 0px;
  z-index: 3;
  display: flex;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 49px;
  text-align: center;
  .tool-bar-item {
    padding-top: 2px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .icon {
      width: 22px;
      height: 22px;
      background: url(~assets/img/detail/detail_bottom.png) 0 -52px;
      background-size: 100%;
    }
  }
  .tool-bar-item:nth-child(2) {
    .icon {
      background-position: 0 -98px;
    }
  }
  .tool-bar-item:nth-child(3) {
    .icon {
      background-position: 0 0;
    }
  }
  .add-cart {
    flex: 2;
    background-color: #ffdc10;
    font-size: 16px;
    line-height: 49px;
  }
  .tool-bar-buy {
    flex: 1;
    background-color: #ff7598;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
</style>