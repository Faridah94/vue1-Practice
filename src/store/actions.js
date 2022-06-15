// import axios from "axios";
import products from '@/api/products'

export  const getProducts = ({ commit }) => {
    return new Promise((resolve) => {
        products.getProducts(Products => {                  
            commit('SET_PRODUCTS',Products)
            resolve();
        })
    })
}
export const addToCart = ({ commit },{ Product,quantity })=>{
    commit('ADD_TO_CART',{ Product,quantity })
}

   // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(response => {
    //     commit('SET_PRODUCTS' , response.data)
    // })

  export const  removeProductFromCart = ({commit},Product) =>{
      commit('REMOVE_PRODUCT_FROM_CART',Product)
  }