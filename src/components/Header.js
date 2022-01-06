import React, { useEffect } from 'react'
import { GrCart } from "react-icons/gr"
import { GoThreeBars } from "react-icons/go"
import { TiTimes } from "react-icons/ti"
import { Link } from "react-router-dom"
import style from "./header.module.css"
import Dropdown from './Dropdown'
import { useSelector, useDispatch } from "react-redux"
import { getProductsCategories } from '../actions/productsAction'


function Header() {

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    const cart = useSelector(state => state.cart)
    const { categories } = useSelector(state => state.categoriesList)
    const dispatch = useDispatch()
    const { cartItems } = cart
    const totalQnt = cartItems.reduce((total, item) => total += Number(item.quantity), 0)
    const userLogin = useSelector(state => state.userLogin)
    const { user } = userLogin

    useEffect(() => {
        dispatch(getProductsCategories())
    }, [])

    return (
        <header>
            <div className={click ? style.main_container : ""} onClick={() => Close()} />
            <nav className={style.navbar} onClick={e => e.stopPropagation()}>
                <div className={style.nav_container}>
                    <Link to="/" className={style.nav_logo}>
                        <span className='text-dark'>On</span>line Shop
                    </Link>
                    <div >
                        <ul className={click ? `${style.nav_menu} ${style.active}` : style.nav_menu}>
                            {categories.length > 0 ? categories.map(item =>
                                <li key={item} className={style.nav_item}>
                                    <Link to={`/category/${item}`} onClick={click ? handleClick : null}>
                                        {item}
                                    </Link>
                                </li>
                            )
                                : null}

                            <li className={`${style.shopping_cart_icon} ${style.nav_item}`}>

                                <Link to="/cart" onClick={click ? handleClick : null}>
                                    Cart <GrCart />
                                    {
                                        totalQnt > 0 && <span className={style.cart_badge}>{totalQnt}</span>
                                    }

                                </Link>
                            </li>

                            {
                                (user && user.data.token) ?
                                    <Dropdown name={JSON.parse(user.config.data).username} /> :
                                    <li className={style.nav_item}><Link to={"/login"} onClick={click ? handleClick : null} >Login</Link></li>

                            }


                        </ul>

                    </div>

                    <div className={style.nav_icon} onClick={handleClick}>

                        {click ? <TiTimes /> : <GoThreeBars />}

                    </div>

                </div>
            </nav>


        </header >
    )
}

export default Header
