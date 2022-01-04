import React, { useState } from 'react'
import style from "./cartItems.module.css"
import { FaRegTrashAlt } from "react-icons/fa"
import { GrUpdate } from "react-icons/gr"
import { useDispatch } from "react-redux"
import { removeFromCart } from '../actions/cartAction'
import { addToCart } from '../actions/cartAction'
import { Link } from 'react-router-dom'
function CartItems({ name, image, price, quantity, id }) {
    const subTotal = (Number(price) * Number(quantity)).toFixed(2)
    const dispatch = useDispatch()
    const removeItemHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const [productCnt, setProductCnt] = useState(quantity);
    return (

        <tr className={style.cart_item_container}>
            <td className={style.cart_item_product_name_image}>
                <Link to={`/products/${id}`}>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </Link>
            </td>
            <td>
                ${price}
            </td>

            <td>
                <input type="number"
                    value={productCnt}
                    className={style.cart_items_count_input}
                    onChange={(e) => e.target.value > 0 && setProductCnt(e.target.value)}
                />
            </td>
            <td>
                ${subTotal}
            </td>
            <td onClick={() => removeItemHandler(id)} className={style.tarsh}>
                <FaRegTrashAlt />
            </td>
            <td onClick={() => dispatch(addToCart(id, productCnt))} className={style.update}>
                <GrUpdate />
            </td>
        </tr>

    )
}

export default CartItems
