
import Goods from "components/content/goods/Goods";
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
  methods: {
    debounceRefresh() {
      const refresh = debounce(this.$refs.scroll.refresh); //注意这个debounce函数只是调用了一次而已
      console.log(this.$refs.scroll);
      this.Imagelistener = () => {
        //防止图片已经刷新了，scroll还没有被挂载
        // 若是没有在上面没有进行refresh的定义的话，每次直接调用，都是一个新的函数，timer是不会一致的，相当于有两次闭包？
        // this.$refs.scroll && debounce(this.$refs.scroll.refresh);
        this.$refs.scroll && refresh();
      };
    }
  },
}