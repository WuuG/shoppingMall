<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
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
.recommend {
  display: flex;
  padding: 20px 0 30px;
  border-bottom: 10px solid #ececec;
  .recommend-item {
    text-align: center;
    flex: 1;
    img {
      width: 90%;
    }
    p {
      color: @text-color;
      font-size: 12px;
    }
  }
}
</style>