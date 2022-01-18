import instance from "../axios"
import { ADD_TO_CART, ADD_TO_CART_REQUEST, REMOVE_FROM_CART } from "../constants/cartConstants"

export const addToCart = (id, quantity) =>  (dispatch, getState) => {
    dispatch({ type: ADD_TO_CART_REQUEST })
     instance.get(`/products/${id}`)
        .then(res => dispatch({
            type: ADD_TO_CART, payload: {
                id: res.data.id,
                title: res.data.title,
                image: res.data.image,
                price: res.data.price,
                category: res.data.category,
                quantity: quantity

            }
        }))
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart = (id) =>  (dispatch, getState) => {
     instance.get(`/products/${id}`)
        .then(res => dispatch({
            type: REMOVE_FROM_CART, payload: res.data
        }))
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

}