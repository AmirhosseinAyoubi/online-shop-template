import { SLIDER_LIST_FAIL, SLIDER_LIST_REQUEST, SLIDER_LIST_SUCCESS } from "../constants/sliderConstants"



const initialState = {
    sliderList: [],
    loading: false,
    error: ""
}


export const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SLIDER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SLIDER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                sliderList: action.payload
            }
        case SLIDER_LIST_FAIL:
            return {
                ...state,
                loading:false,
                error: action.payload
            }



        default:
            return state
    }

}