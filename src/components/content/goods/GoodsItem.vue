<template>
  <div class="good-items">
    <div v-for="item in goodList" :key="item.id" class="good-item">
      <a :href="item.link">
        <img :src="item.show.img" alt="" />
        <div class="good-info">
          <p>{{ item.title }}</p>
          <span class="price">{{ item.orgPrice }}</span>
          <span class="cfav">{{ item.cfav }}</span>
        </div>
      </a>
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
    a {
      width: 100%;
      img {
        width: 100%;
      }
      .good-info {
        position: absolute;
        bottom: 0;
        width: 100%;
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
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>