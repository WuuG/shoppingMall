export default {
  addCart(state, item) {
    state.cart.push(item)
  },
  addProduct(state, item) {
    item.count++;
  }
}