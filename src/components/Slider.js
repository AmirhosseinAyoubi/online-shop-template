import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import style from "./slider.module.css"
import { useSelector, useDispatch } from "react-redux"
import { getSliderList } from '../actions/sliderAction';
import Loader from './Loader';
import Message from './Message';
import { Link } from "react-router-dom"

function Slider() {
    const dispatch = useDispatch()

    const slider = useSelector(state => state.sliderList)
    const { loading, error, sliderList } = slider
    useEffect(() => {
        dispatch(getSliderList())
    }, [dispatch]);



    return (
        <div className={style.slider_container}>
            {
                loading ? <Loader /> :
                    error ? <Message message={error} error='error' /> :
                        <Carousel className={style.carousel} autoPlay={true} infiniteLoop={true} showThumbs={false} width={"100%"} dynamicHeight={true}>
                            {
                                sliderList.map(item => {
                                    return (
                                        <Link to={`/products/${item.id}`} key={item.id}>
                                            <div className={style.slide_content}>
                                                <img src={item.image} alt={item.title} />
                                                <div className={style.lable}>
                                                    <p className={style.category}>{item.category}</p>

                                                    <h3 className={style.name}>
                                                        {item.title}<span className={style.price}>${item.price}</span>
                                                    </h3>

                                                    <button className={style.shop_btn}>shop Now</button>
                                                </div>
                                            </div>
                                        </Link>

                                    )
                                })
                            }



                        </Carousel >
            }

        </div >
    )
}

export default Slider
