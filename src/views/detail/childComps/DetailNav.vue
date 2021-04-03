<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <template v-slot:left>
        <div @click="back">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:mid>
        <div class="mid">
          <span
            v-for="(title, index) in titles"
            :key="title.id"
            class="title"
            :class="currentIndex == index ? 'detail-title-active' : ''"
            @click="setCurrentIndex(index)"
          >
            {{ title }}
          </span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    NavBar,
  },
  methods: {
    setCurrentIndex(index) {
      this.$emit("navTitleClick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.detail-nav-bar {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  .mid {
    display: flex;
    span {
      flex: 1;
    }
  }
  img {
    width: 22px;
    vertical-align: middle;
  }
  .detail-title-active {
    color: @high-text-color;
  }
}
</style>