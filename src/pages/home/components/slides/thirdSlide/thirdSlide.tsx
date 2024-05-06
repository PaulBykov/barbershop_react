import React from 'react';
import styles from './thirdSlide.module.css'

import {barbers} from "../../../../../api/data/barbers";
import BarberList from "../../barbers/barberList/barberList";

const ThirdSlide = () => {
    return (
        <section className={styles.section}>
            <BarberList data={barbers}/>
        </section>
    );
};

export default ThirdSlide;