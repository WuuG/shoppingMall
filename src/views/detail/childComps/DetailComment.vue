<template>
  <div class="detail-comment">
    <div v-if="detailRate.user">
      <section class="detail-comment-top">
        <span>用户评价</span>
        <span>更多</span>
      </section>
      <section class="detail-comment-user">
        <img :src="user.avatar" alt="" />
        <span>{{ user.uname }}</span>
      </section>
      <section class="detail-comment-content">
        <p>{{ data.content }}</p>
      </section>
      <section class="detail-comment-about">
        <span>{{ date }}</span>
        <span>{{ data.style }}</span>
      </section>
      <section class="detail-comment-img clearfix">
        <img :src="item" v-for="item in data.images" alt="" :key="item.id" />
      </section>
    </div>
    <div v-else>暂时没有评论</div>
  </div>
</template>

<script>
import { format } from "common/utils";

export default {
  name: "DetailComment",
  data() {
    return {};
  },
  props: {
    detailRate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    data() {
      return this.detailRate ? this.detailRate : {};
    },
    user() {
      return this.data.user ? this.data.user : {};
    },
    date() {
      let date = this.data.created;
      date = new Date(date * 1000);
      date = format(date, "yyyy-MM-dd hh:mm:ss");
      return date;
    },
  },
};
</script>

<style lang="less" scoped>
.detail-comment {
  padding: 20px;
  border-bottom: 5px solid #ececec;
  .detail-comment-top {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ececec;
  }
  .detail-comment-user {
    height: 60px;
    line-height: 60px;
    img {
      margin-right: 10px;
      width: 50px;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      color: black;
    }
  }
  .detail-comment-content {
    margin-top: 10px;
  }
  .detail-comment-about {
    margin-top: 10px;
    color: rgb(168, 168, 168);
    span:nth-child(1) {
      padding-right: 20px;
    }
  }
  .detail-comment-img {
    img {
      width: 30%;
    }
  }
}
</style>