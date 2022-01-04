import React from 'react'
import StarRatings from 'react-star-ratings';

function Rating({ rating }) {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="rgb(255, 221, 64)"
            numberOfStars={5}
            name='rating'
            starDimension="15px"
            starSpacing="0px"
        />
    )
}

export default Rating
