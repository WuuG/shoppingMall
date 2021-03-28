<template>
  <div class="good-items">
    <div
      v-for="item in goodList"
      :key="item.id"
      class="good-item"
      @click="toDetail(item)"
    >
      <img :src="item.show.img" alt="" @load="imageLoad" />
      <div class="good-info">
        <p>{{ item.title }}</p>
        <span class="price">{{ item.orgPrice }}</span>
        <span class="cfav">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("goodsImageLoad");
    },
    toDetail(item) {
      this.$router.push("/detail/" + item.iid);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";
.good-items {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .good-item {
    position: relative;

    overflow: hidden;
    width: 48%;
    text-align: center;
    border-radius: 5px;
    padding-bottom: 40px;
    margin-top: 5px;
    img {
      width: 100%;
    }
    .good-info {
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 14px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        color: @high-text-color;
        margin-right: 5px;
      }
      .cfav {
        &::before {
          content: "";
          display: inline-block;
          width: 14px;
          height: 14px;
          background: url("~assets/img/common/collect.svg") no-repeat;
          background-size: 100%;
        }
      }
    }
  }
}
</style>