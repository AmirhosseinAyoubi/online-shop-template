import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from '../actions/userAction';
import style from "./loginPage.module.css"
import Container from "../components/Container"
import { LoginValidation } from '../validation/loginValidation';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FaFacebookF } from "react-icons/fa"
import { ImGooglePlus } from "react-icons/im"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import Message from "../components/Message"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { notify } from '../components/Toastify';
import Loader from '../components/Loader';
import spinner from "../assets/Spin-0.6s-164px.gif"

function LoginPage() {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, user, success } = userLogin
    const location = useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(LoginValidation)
        })

    const navigate = useNavigate()
    useEffect(() => {
        if (user && user.data.token) {
            navigate("/")
        }
    }, [user]);


    const loginSubmithandler = (data) => {

        dispatch(loginUser(data.userName, data.password))

    }

    return (

        <div className={style.loginPage_container}>
            <ul className={style.login_register_path}>
                <li >
                    <Link to="/login"
                        className={location.pathname == "/login" ? style.active : ""}>
                        Login</Link>
                </li>
                <li >
                    <Link to="/signup"
                        className={location.pathname == "/signup" ? style.active : ""}>
                        Register</Link>
                </li>
            </ul>
            
            <form onSubmit={handleSubmit(loginSubmithandler)} >
                {error && <span className={style.login_error}>{error}</span>}
                {loading && <div className={style.login_loader}><img src={spinner}  alt="loader" /></div> }
                <h3>Log In Your Account</h3>
                <div className={style.form_group}>
                    {/* <label>UserName</label> */}
                    <input type="text" placeholder='username' {...register("userName")} />
                    {errors.userName && <span className={style.error}>*{errors.userName.message}</span>}
                </div>
                <div className={style.form_group}>
                    {/* <label>Password</label> */}
                    <input type="password" placeholder='password'  {...register("password")} />
                    {errors.password && <span className={style.error}>*{errors.password.message}</span>}

                </div>
                <div className={style.form_group}>
                
                    <button >
                        Login
                    </button>
                </div>
                <div className={style.form_group}>
                    <p>Connect with:</p>
                    <div className={style.socialMedia}>
                        <span className={style.faceBook}><FaFacebookF /></span>
                        <span className={style.google}><ImGooglePlus /></span>
                        <span className={style.twitter}><BsTwitter /></span>
                        <span className={style.instagram}><AiOutlineInstagram /></span>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default LoginPage
