import { ADD_TO_CART, ADD_TO_CART_REQUEST, REMOVE_FROM_CART } from "../constants/cartConstants";

const cartInitialState = {
    loading: false,
    cartItems: []
}
export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_CART:
            const isExist = state.cartItems.find(item => item.id === action.payload.id)
            if (isExist) {
                return {
                    ...state,
                    loading: false,
                    cartItems: state.cartItems.map(item => item.id === isExist.id ? action.payload : item)
                }
            }
            else {
                return {
                    ...state,
                    loading: false,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        case REMOVE_FROM_CART:
            const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                cartItems: [...newCartItems]
            }
        default:
            return state
    }

}