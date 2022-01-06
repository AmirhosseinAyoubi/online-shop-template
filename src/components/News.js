import React from 'react'
import style from "./news.module.css"
import { Link } from "react-router-dom"
function News({ image, name, iseven, id }) {

    return (
        
            <div className={`${style.news_container} ${iseven ? style.reverse_news_container : null}`}>
                <div className={`${style.news_card} ${iseven ? style.reverse_box : null}`}>
                    <img src={image} alt={name} />
                    <div className={style.news_box}>
                        <h3>What's News?</h3>
                        <p>discover our range of products</p>
                       <Link to={`/products/${id}`}> <button>Shop Now</button></Link>
                    </div>
                </div>
            </div>
        

    )
}

export default News
