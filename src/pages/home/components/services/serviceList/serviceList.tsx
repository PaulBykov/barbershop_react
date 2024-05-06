import React, {useState} from 'react';

import styles from "./serviceList.module.css"

import ServiceTable from "../serviceTable/serviceTable";
import ServiceTabs from "../serviceTabs/serviceTabs";

function ServiceList(){
    const [selectedCategory, setCategory] = useState(0);

    return (
        <div className={styles.list}>
            <h2 className={styles.title}> Каталог услуг </h2>

            <div className={styles.selector}>
                <ServiceTabs  selectedCategory={selectedCategory} setCategory={setCategory}/>
                <ServiceTable selectedCategory={selectedCategory} setCategory={setCategory}/>
            </div>
        </div>
    );
}

export default ServiceList;