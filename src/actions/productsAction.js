import instance from "../axios"
import {
    ALL_PRODUCTS_LIST_FAIL,
    ALL_PRODUCTS_LIST_REQUEST,
    ALL_PRODUCTS_LIST_SUCCESS,
    PRODUCTS_CATEGORY_LIST_FAIL,
    PRODUCTS_CATEGORY_LIST_REQUEST,
    PRODUCTS_CATEGORY_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    SPECIFIC_CATEGORIES_PRODUCTS_FAIL,
    SPECIFIC_CATEGORIES_PRODUCTS_REQUEST,
    SPECIFIC_CATEGORIES_PRODUCTS_SUCCESS
} from "../constants/productsConstants"

//get products  categories

export const getProductsCategories = () => async (dispatch) => {
    dispatch({ type: PRODUCTS_CATEGORY_LIST_REQUEST })
    await instance.get('https://fakestoreapi.com/products/categories')
        .then(res => dispatch({ type: PRODUCTS_CATEGORY_LIST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: PRODUCTS_CATEGORY_LIST_FAIL, payload: err.message }))
}
//get all products list

export const getALLProducts = () => async (dispatch) => {
    dispatch({ type: ALL_PRODUCTS_LIST_REQUEST })
    await instance.get('https://fakestoreapi.com/products')
        .then(res => dispatch({ type: ALL_PRODUCTS_LIST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ALL_PRODUCTS_LIST_FAIL, payload: err.message }))
}
//get product details

export const getProductDetails = (id) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    await instance.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: PRODUCT_DETAILS_FAIL, payload: err.message }))
}


//get all products of a specific category

export const getCategoryProducts = (category) => async (dispatch) => {
    dispatch({ type: SPECIFIC_CATEGORIES_PRODUCTS_REQUEST })
    await instance.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => dispatch({ type: SPECIFIC_CATEGORIES_PRODUCTS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SPECIFIC_CATEGORIES_PRODUCTS_FAIL, payload: err.message }))
}
