export default {
  addCart(state, item) {
    state.cart.push(item)
  },
  addCount(state, item) {
    //这里遇到一个无比棘手的问题，这里的count在vuex中虽然变化了，但是必然是没有动态绑定到与页面双向绑定的。因为在之前传入state的cart数组中时，并没有count，所以count无法绑定到页面上去，也就无法实时响应。
    //1.解决方法，在push之前，就需要存在count这个参数。
    //2.我觉得还有一种办法：取出来自己进行双向绑定。
    item.count++;
  },
  setSelect(state, index) {
    state.cart[index].select = !state.cart[index].select;
  },
  selectAll(state, totalSelect) {
    state.cart.forEach((element) => {
      console.log(totalSelect);
      element.select = totalSelect;
    });
  }
}