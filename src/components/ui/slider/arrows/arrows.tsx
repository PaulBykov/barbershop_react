import React, {Dispatch, SetStateAction} from 'react';

import styles from "./arrows.module.css"

interface IArrowsProps{
    currentSlide: number,
    setCurrentSlide: Dispatch<SetStateAction<number>>,
    reviewsOnSlideCount: number,
    dataSize:number,
}
function Arrows({dataSize, currentSlide, setCurrentSlide, reviewsOnSlideCount} : IArrowsProps) {
    return (
        <div className={styles.container}>
            <button className={styles.arrow} onClick={() =>
                currentSlide - reviewsOnSlideCount > 0 ?
                    setCurrentSlide(currentSlide - reviewsOnSlideCount):
                    0
            }>
                ◄
            </button>
            <button className={styles.arrow} onClick={() =>
                currentSlide < dataSize ?
                    setCurrentSlide(currentSlide + reviewsOnSlideCount):
                    0
            }>
                ►
            </button>
        </div>
    );
}

export default Arrows;