import React from 'react';

import styles from "./review.module.css"

import {IReview} from "../../../../helpers/types/IReview";

function Review(review: IReview) {
    return (
        <div className={styles.review}>
            <div className={styles.top}>
                <span className={styles.rating}>
                    {"★".repeat(review.rating)}
                </span>
                <span className={styles.date}>
                    {review.date}
                </span>
            </div>
            <div className={styles.text}>
                <p className={styles.barberName}>Мастер: {review.barberName}  </p>
                <hr/>
                <div className={styles.message}>
                    <strong>
                        {review.from}:
                    </strong>
                    {review.text}
                </div>
            </div>
        </div>
    );
}

export default Review;