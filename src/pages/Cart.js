import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import CartItems from '../components/CartItems'
import Container from '../components/Container'
import style from "./cart.module.css"
import Message from "../components/Message"
import { Link, useNavigate } from "react-router-dom"
import Loader from '../components/Loader'
import { shortName } from "../helper/shortenName"
function Cart() {
    const cart = useSelector(state => state.cart)
    const userLogin = useSelector(state => state.userLogin)
    const { user } = userLogin
    const { cartItems, loading } = cart
    const subTotal = cartItems && cartItems.reduce((total, item) => total += Number(item.quantity) * Number(item.price), 0).toFixed(2)
    const navigate = useNavigate()
    const handleCheckout = () => {
        if (!user) {
            navigate('/login')
        }
        else {
            navigate('/shipping')
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Container>
            {loading ? <Loader /> :
                <div className={style.cart_container}>
                    {cartItems.length > 0 ?

                        <>
                            <h3>Shopping Cart</h3>
                            <div className={style.cart_content}>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                Product
                                            </td>
                                            <td>
                                                Price
                                            </td>
                                            <td>
                                                Quantity
                                            </td>
                                            <td>
                                                Subtotal
                                            </td>
                                            <td>
                                                Remove
                                            </td>
                                            <td>
                                                Update
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map(item => <CartItems
                                                key={item.id}
                                                id={item.id}
                                                name={shortName(item.title)}
                                                image={item.image}
                                                price={item.price}
                                                quantity={item.quantity}
                                            />)
                                        }
                                    </tbody>
                                </table>
                                <div className={style.checkout_container}>
                                    <div className={style.checkout}>
                                        <div className={style.checkout_items}>
                                            <span>Subtotal</span>
                                            <span>${subTotal}</span>
                                        </div>
                                        <div className={style.checkout_items}>
                                            <ol>
                                                {
                                                    cartItems.map(item => {
                                                        return (
                                                            <li>
                                                                <span>{shortName(item.title)}</span><br />
                                                                <span>x{item.quantity}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div>
                                        <div className={style.checkout_items}>
                                            <span>Total</span>
                                            <span>${subTotal}</span>
                                        </div>
                                    </div>
                                    <button className={style.checkout_btn} onClick={handleCheckout}>Proceed to checkout</button>
                                </div>

                            </div>
                        </>
                        :
                        <>
                            <Message message={"your cart is empty!"} alert='alert' />
                            <Link to={"/"} className={style.back_to_shop}>back to shop</Link>
                        </>
                    }
                </div>

            }




        </Container>
    )
}

export default Cart
