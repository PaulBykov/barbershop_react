import React, {useState} from 'react';

import styles from "./fifthSlide.module.css"

import Slider from "../../../../../components/ui/slider/slider/Slider";

import {reviews} from "../../../../../api/data/reviews";
import Arrows from "../../../../../components/ui/slider/arrows/arrows";

function FifthSlide() {
    const [currentSlide, setSlide] = useState(reviews.length-1);
    const reviewsOnSlideCount = 3;


    return (
        <section className={styles.section}>
            <span className={styles.header}>
                <h1 className={styles.title}>
                    ОТЗЫВЫ:
                </h1>
                <Arrows dataSize={reviews.length}
                        currentSlide={currentSlide}
                        setCurrentSlide={setSlide}
                        reviewsOnSlideCount={reviewsOnSlideCount}
                />
            </span>
            <Slider reviews={reviews} currentSlide={currentSlide} reviewsOnSlideCount={reviewsOnSlideCount}/>
        </section>
    );
}

export default FifthSlide;