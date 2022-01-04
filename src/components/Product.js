import React from 'react'
import { shortName } from '../helper/shortenName'
import style from "./product.module.css"
import Rating from './Rating'
import { Link } from "react-router-dom"
function Product({ image, name, price, rating, id }) {
    return (
        <Link to={`/products/${id}`} className={style.product_card_container}>
            <div className={style.card}>
                <img src={image} alt={name} />
                <p className={style.product_price}>${price}</p>
                <h3 className={style.product_name}>{shortName(name)}</h3>
                <span className={style.product_raiting}>
                    <Rating rating={rating} /> Rating {rating}
                </span>
                <div className={style.detail_btn_container}>
                    <button>Detail</button>
                </div>

            </div>
        </Link>
    )
}

export default Product
