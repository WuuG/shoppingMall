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
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    //scroll移动的监听类型
    probeType: {
      type: Number,
      default: 0,
    },
    //回到顶部的动画时间
    duration: {
      type: Number,
      default: 300,
    },
    //是否需要监听下拉到顶部
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    //商品页面的下拉加载间隔
    loadTime: {
      tyoe: Number,
      default: 500,
    },
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
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      //这里一定要传一个对象吗？不能直接传刷新这个方法出去吗？，得想想。直接用ref就可以取得这个scroll了
      // this.$emit("refresh", this.scroll);
      this.scroll.on("scroll", (pos) => {
        this.$emit("scroll", pos);
      });
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
          setTimeout(() => {
            this.scroll.finishPullUp();
          }, this.loadTime);
        });
      }
    });
  },
  methods: {
    refresh() {
      console.log("refresh");
      this.scroll.refresh();
      return "success";
    },
    scrollTo(x, y, time = this.duration) {
      this.scroll.scrollTo(x, y, time);
    },
    getY() {
      return this.scroll.y;
    },
  },
};
</script>

<style lang="less" scoped>
</style>