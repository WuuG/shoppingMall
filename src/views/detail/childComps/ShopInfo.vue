<template>
  <div class="shop-info-content">
    <div class="border"></div>
    <h1 class="title">
      <img :src="shopInfo.shopLogo" alt="" />
      {{ shopInfo.name }}
    </h1>
    <section class="shop-info">
      <section>
        <p>
          <span> {{ shopInfo.totalSales }}万 </span>
          <span>总销量</span>
        </p>
        <p>
          <span> {{ shopInfo.totalGoods }}</span>
          <span>全部宝贝</span>
        </p>
      </section>
      <section class="score">
        <div v-for="(item, index) in shopInfo.score" :key="item.id">
          <span>{{ item.name }}</span>
          <span>{{ item.score }}</span>
          <span :class="scoreIsBetter(index)">
            {{ item.isBetter ? "高" : "低" }}
          </span>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    scoreIsBetter(index) {
      return this.shopInfo.score[index].isBetter ? "green" : "red";
    },
  },
};
</script>

<style lang="less" scoped>
.shop-info-content {
  position: relative;
  padding: 10px;
  font-size: 14px;
  border-bottom: 2px solid #ececec;
  .border {
    position: absolute;
    top: 58%;
    left: 47%;
    width: 1px;
    height: 50px;
    background-color: #ececec;
  }
  .title {
    font-size: 16px;
    font-weight: 400;
    height: 80px;
    line-height: 80px;
    img {
      margin-right: 10px;
      overflow: hidden;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #ccc;
      vertical-align: middle;
    }
  }
  //以后别这样写了，不知道谁是谁了
  .shop-info {
    display: flex;
    height: 80px;
    section {
      flex: 1;
      display: flex;
      p {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        justify-content: space-evenly;
        span {
          text-align: center;
          height: 20px;
        }
        span:nth-child(1) {
          font-size: 18px;
          font-weight: 600;
        }
        span:nth-child(2) {
          font-size: 10px;
        }
      }
    }
    .score {
      display: flex;
      font-size: 10px;
      flex-direction: column;
      justify-content: space-evenly;
      div {
        padding-left: 20px;
        display: flex;
        span:nth-child(2) {
          margin-left: 20px;
          margin-right: 10px;
          width: 20px;
        }
        .red,
        .green {
          color: #fff;
        }
        .red {
          background-color: red;
        }
        .green {
          background-color: green;
        }
      }
    }
  }
}
</style>