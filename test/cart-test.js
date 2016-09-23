var expect = require('chai').expect;
var Cart = require('../cart');

describe('#Cart', function() {
  describe('Adding Items', function() {
    xit('can add an item to a shopping cart', function() {
      var cart = new Cart();
      var peach = {
        price: .99,
        quantity: 2
      }

      cart.addItem(peach);

      expect(cart.itemsInCart).to.equal(2);
    })
  });

  describe('Total Price', function() {
    xit('can get the price of a cart full of one type of item', function(){
      var cart = new Cart();
      var banana = {
        price: .59,
        quantity: 3
      }
      cart.addItem(banana);

      expect(cart.totalPrice).to.equal(1.77);
    })

    xit('can get the total price of a cart with multiple types of items', function() {
      var cart = new Cart();
      var chocolate = {
        price: 4.99,
        quantity: 1
      }
      var steak = {
        price: 8.54,
        quantity: 2
      }

      cart.addItem(chocolate);
      cart.addItem(steak);

      expect(cart.totalPrice).to.equal(22.07);
    })
  })

  describe('Remove Item', function() {
    xit('can remove all of one type of item from the cart', function() {
      var cart = new Cart();
      var pears = {
        price: .20,
        quantity: 5
      }
      var shavingCream = {
        price: 5.97,
        quantity: 1
      }

      cart.addItem(pears);
      cart.addItem(shavingCream);
      cart.removeItem(shavingCream);

      expect(cart.itemsInCart).to.equal(5);
      expect(cart.totalPrice).to.equal(1);

    })
  })
})
