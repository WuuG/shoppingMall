<template>
  <!-- 绑定内联样式的做法，好像有点吃力不讨好 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot>
        <ul>
          <li>这是默认的测试用例1</li>
          <li>这是默认的测试用例2</li>
          <li>这是默认的测试用例3</li>
          <li>这是默认的测试用例4</li>
          <li>这是默认的测试用例5</li>
          <li>这是默认的测试用例6</li>
          <li>这是默认的测试用例7</li>
          <li>这是默认的测试用例8</li>
          <li>这是默认的测试用例9</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
          <li>这是默认的测试用例10</li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      });
      this.$emit("refresh", this.scroll);
      console.log(this.scroll);
    }, 20);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>