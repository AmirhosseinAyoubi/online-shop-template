import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer.js";
import { categoryReducer, productDetailsReducer, productsReducer, specificCategoryProductsReducer } from "./reducers/productsReducer.js";
import { sliderReducer } from "./reducers/sliderReducer.js"
import { userLoginReducer, userSignUpReducer } from "./reducers/userReducer.js";

export const rootReducer = combineReducers({
    sliderList: sliderReducer,
    categoriesList: categoryReducer,
    productsList: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    categoriesProducts: specificCategoryProductsReducer,
    userLogin: userLoginReducer,
    userSignUp: userSignUpReducer
})