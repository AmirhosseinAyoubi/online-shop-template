import React from 'react'
import style from "./category.module.css"
import Container from './Container'
function Categoty({ category }) {

    return (
            <div className={style.category_container}>
                <div className={style.category_name}>
                    {category}
                </div>
                <button className={style.category_btn}>
                    See More
                </button>
            </div>
    )
}

export default Categoty
