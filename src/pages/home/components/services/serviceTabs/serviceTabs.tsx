import React from 'react';

import Tab from "../../../../../components/ui/tab/Tab";

import styles from "./serviceTabs.module.css"

import {categories} from "../../../../../api/data/categories";
import {ISetState} from "../../../../../helpers/types/ISetState";

function ServiceTabs({selectedCategory, setCategory} : ISetState){
    return (
        <nav className={styles.nav}>
            {categories.map(category =>
                <Tab key={category.id} tabData={category} currCat={selectedCategory} setCat={setCategory}/>
            )}
        </nav>
    );
}

export default ServiceTabs;