function CartList(CartService) {
    const ctrl = this;
  
  //     ctrl.getList = () => {
  //         CartService.getCartData()
  //         .then( (data) => {
  //             ctrl.cartItems = data;
  //         })
  //         .catch( (err) => {
  //             console.log(err);
  //         })
  //     };
  //     ctrl.getList();
  // }
  
  ctrl.addItem = (addedProduct, totalPrice, updateQuantity) => {
      let addedItem = {
          product: addedProduct,
          price: totalPrice,
          quantity: updateQuantity
      }
      CartService.addItem(addedItem)
          .then( (data) => {
              ctrl.cartData = data;
          })
  }
  
  ctrl.removeItem = (item) => {
      CartListService.removeItem(item)
          .then( (data) => {
              ctrl.cartData = data;
          })
  }
  
  ctrl.updateItem = (item) => {
      CartService.updateItem(item)
          .then( (data) => {
              ctrl.cartData = data;
          })
      }
  }
  
  
  
  angular
  .module('CartApp')
  .component('cartList', {
    controller: cartList,
    template:
    `
      "addedProduct"
      "totalPrice"
      "updateQuantity"
    <div>
        <h2>Shopping Cart<h2>
        </div>
    <div>
        <form ng-submit="addItem(item)">
            Add Item
            <input type="text" ng-model="form.text1">
        </form>
        <form ng-submit="removeItem(id)">
            Remove Item
            <input type="number" ng-model="form.number1">
        </form>
        <form ng-submit="updateItem(item)">
            Update Item
            <input type="text" ng-model="form.text2"
        </form>
    </div>
    `
  })