import instance from "../axios"

import { SLIDER_LIST_FAIL, SLIDER_LIST_REQUEST, SLIDER_LIST_SUCCESS } from "../constants/sliderConstants"

const getSliderList = () =>  (dispatch) => {
    dispatch({type:SLIDER_LIST_REQUEST})
     instance.get("/products?limit=3")
        .then(res => dispatch({ type: SLIDER_LIST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SLIDER_LIST_FAIL, payload: err.message }))
}

export { getSliderList }