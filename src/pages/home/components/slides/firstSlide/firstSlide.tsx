import React from "react";
import styles from "./firstSlide.module.css"

function FirstSlide(){
    return(
        <section className={styles.firstSlide}>
            <div className={styles.blr}>

            </div>

            <div className={styles.leftSide}>
                <h1>БАРБЕРШОП БЕРСЕРК</h1>

                <span>
                    Стрижём для вашего счастья!
                </span>
            </div>
        </section>
    );

}


export default FirstSlide;