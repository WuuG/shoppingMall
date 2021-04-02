
import Goods from "components/content/goods/Goods";
import ToTop from "components/common/toTop/ToTop";

import { debounce } from "common/utils";

export const scrollMix = {
  data() {
    return {
      Imagelistener: null,
    }
  },
  components: {
    Goods,
  },
  mounted() {
    this.debounceRefresh();
  },
  methods: {
    debounceRefresh() {
      //这里还会使用返回回来的函数的，同时这个是个局部变量，理论上是会被销毁的，但是因为底下有个闭包所以之后使用的refresh还是同一个refresh,
      const refresh = debounce(this.$refs.scroll.refresh); //注意这个debounce函数只是调用了一次而已
      this.Imagelistener = () => {
        //防止图片已经刷新了，scroll还没有被挂载
        // 若是没有在上面没有进行refresh的定义的话，每次直接调用，都是一个新的函数，timer是不会一致的，相当于有两次闭包？
        // this.$refs.scroll && debounce(this.$refs.scroll.refresh);
        this.$refs.scroll && refresh();
      };
    }
  },
}

export const toTop = {
  data() {
    return {
      toTopShow: false, // 返回按钮的显示。
    }
  },
  components: {
    ToTop,
  },
  methods: {
    toPos(x, y, time = 500) {
      this.$refs.scroll.scrollTo(x, y, time);
    },
  },
}