import instance from "../axios"
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS
} from "../constants/userConstants";

// user login 

export const loginUser = (username, password) => async (dispatch, getState) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    await instance.post("/auth/login", { username, password },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => dispatch({ type: USER_LOGIN_SUCCESS, payload: res }))
        .catch(err => dispatch({ type: USER_LOGIN_FAIL, payload: err.response.data.msg }))
}
// user log out

export const userLogout = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT })
}

// user signup 
//this is a fake sign up and doesn't save in database

export const signUpUser = (username, email, password) => async (dispatch, getState) => {
    dispatch({ type: USER_SIGNUP_REQUEST })
    await instance.post("/users",
        {
            "email": email,
            "username": username,
            "password": password,
            "name": {
                "firstname": "",
                "lastname": ""
            },
            "address": {
                "city": "",
                "street": "",
                "number": 0,
                "zipcode": "",
                "geolocation": {
                    "lat": "",
                    "long": ""
                }
            },
            "phone": ""
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: USER_SIGNUP_FAIL, payload: err.response.data.msg }))
}





