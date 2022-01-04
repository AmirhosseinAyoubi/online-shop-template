import { ALL_PRODUCTS_LIST_FAIL, ALL_PRODUCTS_LIST_REQUEST, ALL_PRODUCTS_LIST_SUCCESS, PRODUCTS_CATEGORY_LIST_FAIL, PRODUCTS_CATEGORY_LIST_REQUEST, PRODUCTS_CATEGORY_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, SPECIFIC_CATEGORIES_PRODUCTS_FAIL, SPECIFIC_CATEGORIES_PRODUCTS_REQUEST, SPECIFIC_CATEGORIES_PRODUCTS_SUCCESS } from "../constants/productsConstants";



// all categories reducer

const categoryInitialState = {
    loading: false,
    categories: [],
    error: ""
}


export const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
        case PRODUCTS_CATEGORY_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCTS_CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case PRODUCTS_CATEGORY_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


//all products list reducer

const productsInitialState = {
    loading: false,
    products: [],
    error: ""
}


export const productsReducer = (state = productsInitialState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ALL_PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case ALL_PRODUCTS_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


//product details reducer 

const productDetailsInitialState = {
    loading: false,
    productDetails: {},
    error: ""
}


export const productDetailsReducer = (state = productDetailsInitialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetails: action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

// specific category products

const specificCategoryProductsInitialState = {
    loading: false,
    products: [],
    error: ""
}


export const specificCategoryProductsReducer = (state = specificCategoryProductsInitialState, action) => {
    switch (action.type) {
        case SPECIFIC_CATEGORIES_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SPECIFIC_CATEGORIES_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case SPECIFIC_CATEGORIES_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}