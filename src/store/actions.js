export default {
  addToCart(context, productInfo) {
    let oldProduct = context.state.cart.find(item => {
      return item.iid == productInfo.iid
    })
    if (!oldProduct) { //如果在购物车中没有找到此产品
      productInfo.count = 1;
      context.commit('addCart', productInfo)
    } else {
      context.commit('addCount', oldProduct)
    }
  }
}