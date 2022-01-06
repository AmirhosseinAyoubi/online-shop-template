import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { rootReducer } from "./rootReducer"



const cartItemsLocalStorage = (localStorage.cartItems&& localStorage.cartItems.length > 0) ? JSON.parse(localStorage.cartItems) : []

const initialState = {
    cart: { cartItems: cartItemsLocalStorage }

}


const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store