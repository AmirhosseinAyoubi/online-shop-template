import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'
import { getCategoryProducts } from '../actions/productsAction'
import Container from '../components/Container'
import style from "./categoriesPage.module.css"
import News from "../components/News"

function CategoriesPage() {
    const { category } = useParams()
    const dispatch = useDispatch()
    const categoryProducts = useSelector(state => state.categoriesProducts)
    const { products, error, loading } = categoryProducts
    useEffect(() => {
        dispatch(getCategoryProducts(category))
        window.scrollTo(0, 0)
    }, [category, dispatch]);

    return (
        <Container>
            <div className={style.categories_products_container}>
                {
                    loading ? <Loader />
                        : error ? <Message message={error} error="error" /> :
                            products.map((product, index) => {
                                if (index + 1 === products.length) {
                                    return <>
                                        <Product
                                            id={product.id}
                                            name={product.title}
                                            image={product.image}
                                            price={product.price}
                                            rating={product.rating.rate}
                                        />
                                        <News id={product.id} image={product.image} name={product.title} />
                                    </>
                                }
                                return (
                                    <Product
                                        key={product.id}
                                        id={product.id}
                                        name={product.title}
                                        image={product.image}
                                        price={product.price}
                                        rating={product.rating.rate}
                                    />
                                )

                            })


                }
            </div>




        </Container >
    )
}

export default CategoriesPage
