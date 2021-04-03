<template>
  <div>
    <div v-for="item in $store.state.cart" :key="item.id">
      {{ item }}
    </div>
    <button @click="changeCart">修改Cart</button>
    <button @click="addCart">添加Cart</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$store.commit("addCart", this.cartInfo);
    },
    changeCart() {
      this.$store.commit("changeCart", this.cartInfo);
    },
  },
};
</script>

