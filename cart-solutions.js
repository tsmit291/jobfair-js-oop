class Cart {
  constructor() {
    this.itemsInCart = 0;
    this.totalPrice = 0;
  }

  addItem(item){
    this.itemsInCart += item.quantity;
    this.totalPrice += item.quantity * item.price;
  }

  removeItem(item) {
    this.itemsInCart -= item.quantity;
    this.totalPrice -= item.quantity * item.price;
  }
}

module.exports = Cart;
