import React from 'react';
import styles from './fourthSlide.module.css'

import ServiceList from "../../services/serviceList/serviceList";

function FourthSlide(){
    return (
        <section className={styles.slide}>
            <ServiceList/>
        </section>
    );
};

export default FourthSlide;