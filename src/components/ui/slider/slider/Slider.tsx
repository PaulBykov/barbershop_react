import React from 'react';

import styles from "./Slider.module.css"

import {ISliderProps} from "../../../../helpers/types/ISliderProps";
import Review from "../../../../pages/home/components/reviews/review";

function Slider({reviews, currentSlide, reviewsOnSlideCount} : ISliderProps) {
    if(reviews.length === 0){
        return (<div> NO DATA! </div>);
    }

    let currentSlideReviews = reviews.slice
    (
        Math.max(0, currentSlide - reviewsOnSlideCount + 1),
        currentSlide  + 1
    ).reverse();

    if(currentSlide >= reviews.length){
        currentSlideReviews = reviews.slice
        (
            0,
            reviews.length % reviewsOnSlideCount
    ).reverse();
    }

    return (
    <div className={styles.controller}>
        {currentSlideReviews.map((review) =>
            <Review key={review.id} id={review.id} date={review.date} text={review.text} from={review.from} barberName={review.barberName} rating={review.rating}/>
        )}
    </div>

    );
}

export default Slider;