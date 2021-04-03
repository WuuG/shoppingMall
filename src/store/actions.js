export default {
  addToCart(context, productInfo) {
    let product = new Object();
    let oldProduct = null;
    oldProduct = context.state.cart.find(item => {
      return item.iid == productInfo.iid
    })
    console.log(oldProduct);
    if (!oldProduct) { //如果在购物车中没有找到此产品
      product = productInfo;
      product.count = 1;
      context.commit('addCart', product)
    }
    else {
      context.commit('addProduct', oldProduct)
    }
  }
}