<template>
  <div>
    <div class="toast" v-show="isShow">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    message: {
      type: String,
      default: "这是默认的Toast",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  color: #fff;
}
</style>