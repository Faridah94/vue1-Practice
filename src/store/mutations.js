export const SET_PRODUCTS = (state, Products) =>{
        state.Products = Products
}

export const ADD_TO_CART = (state, { Product,quantity }) =>{

//check out if item is already exesited in the cart increase the quantity
        let productInCart =state.cart.find(item => {
           return item.Product.id === Product.id             
        })
        if(productInCart){
                productInCart.quantity += quantity
                return;
        }

        state.cart.push({
                Product,
                quantity
        })
}

export const REMOVE_PRODUCT_FROM_CART = (state , Product) =>{
          state.cart = state.cart.filter(item =>{
                  return item.Product.id != Product.id
          })
}