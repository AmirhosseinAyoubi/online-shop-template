import React from 'react'
import style from "./productContainer.module.css"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




function ProductContainer({ children }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1200, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <div className={style.product_container}>
            <Carousel responsive={responsive} className={style.prducts_carousel}>
                {children.filter(item => item && item)}
            </Carousel>
        </div >
    )
}

export default ProductContainer
