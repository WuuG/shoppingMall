<template>
  <div class="tab">
    <div
      v-for="(tabType, index) in tabTypes"
      :key="tabType.id"
      class="tab-item"
      @click="setCurrentIndex(index)"
    >
      <span :class="{ active: index === currentIndex }">{{ tabType }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabCtrl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    tabTypes: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    setCurrentIndex(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";
.tab {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .tab-item {
    text-align: center;
    flex: 1;
    span {
      padding: 7px;
      width: 70%;
    }
  }
  .active {
    color: @high-text-color;
    border-bottom: 2px solid @tint-color;
  }
}
</style>