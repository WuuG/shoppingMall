<template>
  <div>
    <section v-for="(item, index) in cart" :key="item.id" class="cart-item">
      <div class="item-select">
        <img
          src="~assets/img/cart/tick.svg"
          alt=""
          :class="{ active: item.select }"
          @click="clickSelect(index)"
          @load="cartImgLoad"
        />
      </div>
      <div class="cart-item-img">
        <img :src="item.image" alt="" />
      </div>
      <div class="cart-item-content">
        <h2>
          {{ item.title }}
        </h2>
        <p>
          {{ item.desc }}
        </p>
        <div class="content-params">
          <span class="price">￥{{ item.lowNowPrice }}</span>
          <span class="count">x {{ item.count }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    clickSelect(index) {
      this.$store.commit("setSelect", index);
    },
    cartImgLoad() {
      this.$emit("cartImgLoad");
    },
  },
};
</script>

<style lang="less" scoped>
.cart-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ececec;
  .item-select {
    padding-right: 5px;
    display: flex;
    flex: 0.5;
    img {
      align-self: center;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      border: 2px solid #aaa;
    }
  }
  .active {
    background-color: @tint-color;
    border: 2px solid @tint-color !important;
  }
  .cart-item-img {
    flex: 1.4;
    padding-right: 10px;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .cart-item-content {
    overflow: hidden;
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2,
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    h2 {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
    }
    p {
      flex: 1;
      color: #aaa;
    }
    .content-params {
      flex: 1;
      display: flex;
      justify-content: space-between;
      .price {
        color: @high-text-color;
      }
    }
  }
}
</style>