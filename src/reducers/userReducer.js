import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS
} from "../constants/userConstants";

//user login reducer

const userLoginInitialState = {
    loading: false,
    user: null,
    error: "",
    success:false
}
export const userLoginReducer = (state = userLoginInitialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                success:true
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: null,
                success:false
            }

        default:
            return state
    }
}
// user signUp reducer

const userSignUpInitialState = {
    loading: false,
    user: null,
    error: "",
    success:false

}
export const userSignUpReducer = (state = userSignUpInitialState, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                success:true
            }
        case USER_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}