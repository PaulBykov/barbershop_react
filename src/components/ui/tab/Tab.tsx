import React from 'react';

import styles from "./Tab.module.css"

import {ITabProps} from "../../../helpers/types/ITabProps";

function Tab({tabData, currCat, setCat} : ITabProps) {

    const updateCategory = (categoryNumber : number) => {
        setCat(categoryNumber);
    }

    return (
        <button className={currCat === tabData.id ? styles.selected : styles.button} id={String(tabData.id)} onClick={() => updateCategory(tabData.id)}>
            <img className={styles.img} src={tabData.image} alt={tabData.title}/>
        </button>
    );
}

export default Tab;