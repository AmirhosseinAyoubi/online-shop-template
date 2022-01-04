import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./dropdown.module.css"
import { MdArrowDropDown } from "react-icons/md"
import { useDispatch } from "react-redux"
import { userLogout } from '../actions/userAction';

function Dropdown({ name }) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(userLogout())
    }
    return (
        <>
            <div className={isActive ? style.main_container : ""} onClick={() => onClick()} />
            <div className={style.container}>
                <div className={style.menu_container}>
                    <button onClick={onClick} className={style.menu_trigger}>

                        <span>{name}</span>
                        <span><MdArrowDropDown /></span>

                    </button>
                    <nav
                        ref={dropdownRef}
                        className={`${style.menu} ${isActive ? style.active : style.inactive}`}>
                        <ul>
                            <li  >
                                <span onClick={isActive ? onClick : null}>Profile</span>
                            </li>
                            <li onClick={()=>logOutHandler()}>
                                <span onClick={isActive ? onClick : null}>logOut</span>

                            </li>

                        </ul>
                    </nav>
                </div>
            </div >
        </>
    );
}

export default Dropdown
