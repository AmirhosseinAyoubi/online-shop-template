import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProductDetails, getProductsCategories } from "../actions/productsAction"
import Loader from '../components/Loader'
import Message from '../components/Message'
import { shortName } from "../helper/shortenName"
import style from "./productDetails.module.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from "../components/Container"
import { addToCart } from '../actions/cartAction'
import Rating from "../components/Rating"

function ProductDetails() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const Details = useSelector(state => state.productDetails)
    const productsCategories = useSelector(state => state.categoriesList)
    const { categories } = productsCategories
    const { loading, error, productDetails } = Details

    const [productCount, setProductCount] = useState(1);
    const [productColor, setProductColor] = useState("choose an option");
    const [productSize, setProductSize] = useState("choose an option");
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getProductDetails(id))
        dispatch(getProductsCategories())
        window.scrollTo(0,0)
    }, [id]);

    const addToCartHandler = (e) => {
        e.preventDefault()
        dispatch(addToCart(id, productCount))
        navigate("/cart")
    }

    return (
        <Container>
            {
                loading ? <Loader /> :
                    error ? <Message message={error} error='error' /> :

                        <div className={style.product_details_container}>
                            <div className={style.product_info_cart_container}>
                                <div>
                                    <h2 className={style.product_name}>{productDetails.title && shortName(productDetails.title)}</h2>
                                    <div className={style.product_info}>
                                        <img src={productDetails.image} alt={productDetails.title} />
                                        <div className={style.product_detail_info}>
                                            <h3 className={style.product_price}>${productDetails.price}</h3>
                                            <form >
                                                <span className={style.product_details_inputs}>
                                                    <label>select color:</label>
                                                    <select name="color" disabled value={productColor}
                                                        onChange={(e) => setProductColor(e.target.value)}>
                                                        <option selected>choose an option</option>

                                                    </select>
                                                </span>
                                                <span className={style.product_details_inputs}>
                                                    <label >select size:</label>
                                                    <select name="size" disabled value={productSize}
                                                        onChange={(e) => setProductSize(e.target.value)}>
                                                        <option selected>choose an option</option>
                                                    </select>
                                                </span>
                                                <span className={style.product_details_inputs}>
                                                    <input type={"number"} name='count'
                                                        value={productCount}
                                                        min={1}
                                                        max={10}
                                                        onChange={(e) => e.target.value > 0 && setProductCount(e.target.value)}
                                                    />
                                                    <button type='submit'
                                                        onClick={(e) => addToCartHandler(e)}
                                                    >ADD TO CART</button>

                                                </span>

                                            </form>
                                            <p className={style.product_category}>category: <span>{productDetails.category}</span></p>
                                            {productDetails.rating && <Rating rating={productDetails.rating.rate} />}
                                        </div>
                                    </div>
                                </div>
                                <div className={style.product_details_tab}>
                                    <Tabs>
                                        <TabList >
                                            <Tab className={style.tab} selectedClassName={style.selectedTab}>DESCRIPTION</Tab>
                                            <Tab className={style.tab} selectedClassName={style.selectedTab}>Additional information</Tab>
                                        </TabList>
                                        <TabPanel className={style.tabPanel}>
                                            <h2>Description</h2>
                                            <p>{productDetails.description}</p>
                                        </TabPanel>
                                        <TabPanel>
                                            <h2>Additional information</h2>
                                            <table>
                                                <tr>
                                                    <td>weight</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>Dimensions</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>Select Color</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>Select Sizes</td>
                                                    <td>-</td>
                                                </tr>
                                            </table>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                            <div className={style.category_box_container}>
                                <h3>Product categories</h3>
                                <ul>
                                    {
                                        categories && categories.map((item, index) => <Link to={`/category/${item}`}>
                                            <li key={index}>{item}</li>
                                        </Link>)
                                    }
                                </ul>
                            </div>
                        </div>
            }
        </Container>

    )
}

export default ProductDetails
