export default {
  addToCart(context, productInfo) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cart.find(item => {
        return item.iid == productInfo.iid
      })
      if (!oldProduct) { //如果在购物车中没有找到此产品
        productInfo.count = 1;
        context.commit('addCart', productInfo)
        resolve('添加新商品')
      } else {
        context.commit('addCount', oldProduct)
        resolve('商品数量+1')
      }
    })
  }
}