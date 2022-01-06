import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {signUpUser } from '../actions/userAction';
import style from "./loginPage.module.css"
import { signUpValidation } from "../validation/signUpValidation"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FaFacebookF } from "react-icons/fa"
import { ImGooglePlus } from "react-icons/im"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"
import { notify } from '../components/Toastify';

function SignUp() {
    const dispatch = useDispatch()
    const userSignUp = useSelector(state => state.userSignUp)
    const userLogin = useSelector(state => state.userLogin)

    const { error, loading, user } = userSignUp

    const location = useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(signUpValidation)
        })
    useEffect(() => {
        user && notify("You Signed Up Successfully", "success")
        window.scrollTo(0,0)

    }, [user]);

    const loginSubmithandler = (data) => {

        dispatch(signUpUser(data.userName, data.email, data.password))

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

                <h3>Create Your Account</h3>
                <div className={style.form_group}>
                    <input type="text" placeholder='username' {...register("userName")} />
                    {errors.userName && <span className={style.error}>*{errors.userName.message}</span>}
                </div>
                <div className={style.form_group}>
                    <input type="email" placeholder='email' {...register("email")} />
                    {errors.email && <span className={style.error}>*{errors.email.message}</span>}
                </div>
                <div className={style.form_group}>
                    <input type="password" placeholder='password'  {...register("password")} />
                    {errors.password && <span className={style.error}>*{errors.password.message}</span>}

                </div>
                <div className={style.form_group}>
                    <input type="password" placeholder='confirm password'  {...register("confirmPassword")} />
                    {errors.confirmPassword && <span className={style.error}>*{errors.confirmPassword.message}</span>}

                </div>
                <div className={style.form_group}>
                    <button >
                        SignUp
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

export default SignUp
