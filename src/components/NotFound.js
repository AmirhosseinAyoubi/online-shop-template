import React from 'react'
import error_404 from "../assets/toppng.com-404-error-error-404-transparent-887x286.png"
import style from "./notFound.module.css"
function NotFound() {
    return (
        <div className={style.notFaound_page_container}>
            <img src={error_404} alt="404_Error" />
        </div>
    )
}

export default NotFound
