import React from 'react'
import style from "./category.module.css"
import { Link } from "react-router-dom"
function Categoty({ category }) {

    return (
        <div className={style.category_container}>
            <div className={style.category_name}>
                {category}
            </div>
            <Link to={`/category/${category}`}>
                <button className={style.category_btn}>
                    See More
                </button>
            </Link>

        </div>
    )
}

export default Categoty
