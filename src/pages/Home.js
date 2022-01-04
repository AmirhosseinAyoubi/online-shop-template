import React, { useEffect } from 'react'
import Categoty from '../components/Categoty'
import Slider from '../components/Slider'
import { useSelector, useDispatch } from 'react-redux'
import { getALLProducts, getProductsCategories } from '../actions/productsAction'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductContainer from '../components/ProductContainer'
import Product from '../components/Product'
import Container from '../components/Container'
import News from '../components/News'
function Home() {
    const dispatch = useDispatch()
    const categoriesList = useSelector(state => state.categoriesList)
    const productsList = useSelector(state => state.productsList)
    const { error, loading, categories } = categoriesList
    const { products } = productsList
    let cnt_products = 0
    let cnt_news = 0
    useEffect(() => {
        dispatch(getProductsCategories())
        dispatch(getALLProducts())
    }, []);

    return (
        <div>
            <Slider />
            <Container>
                {
                    loading ? "" :
                        error ? <Message message={error} error='error' /> :
                            categories.map(item => {
                                cnt_products = 0
                                cnt_news = 0
                                return (
                                    <div key={item} >
                                        <Categoty category={item} />
                                        <ProductContainer>
                                            {
                                                products.map(product => {
                                                    if (item === product.category && cnt_products < 7) {
                                                        cnt_products++
                                                        return <Product key={product.id} id={product.id} rating={product.rating.rate} image={product.image} name={product.title} price={product.price} />
                                                    }



                                                }
                                                )
                                            }
                                        </ProductContainer>
                                        {
                                            products.map(product => {
                                                if (product.category == item && cnt_news < 1) {
                                                    cnt_news++
                                                    return <News key={product.id} image={product.image} name={product.name} iseven={categories.indexOf(item) % 2 !== 0} />
                                                }

                                            })
                                        }
                                    </div>

                                )
                            }
                            )
                }
            </Container>

        </div>
    )
}

export default Home
