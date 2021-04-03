<template>
  <div>
    <section v-for="item in cart" :key="item.id" class="cart-item">
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
import { mapState } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
  },
};
</script>

<style scoped lang="less">
.cart-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ececec;
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