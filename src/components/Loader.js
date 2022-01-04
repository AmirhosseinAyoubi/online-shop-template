import React from 'react'
import style from "./Loader.module.css"
import spinner from "../assets/Spin-0.6s-164px.gif"
function Loader() {
    return (
        <div className={style.loader_container}>
            <img src={spinner} alt="Laoder" />
        </div>
    )
}

export default Loader
