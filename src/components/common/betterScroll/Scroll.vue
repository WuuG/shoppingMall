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
    //这里可以用异步来等待数据加载完成后，再挂载scroll，但是时间是个问题，20ms有时候数据不一定请求完成,可以通过bs.refresh()对数据更新后，进行dom的刷新。
    //这是一种方法
    // setTimeout(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     click: true,
    //   });
    //   this.$emit("refresh", this.scroll);
    // }, 1000);
    //betterscroll作者推荐的方法,此时dom已经渲染完了,但是数据没更新啊所以结果还是要用refresh()
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, //  防止tabCtrl无法使用
      });
      console.log(this.scroll);
      this.$emit("refresh", this.scroll);
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>