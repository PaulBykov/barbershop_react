import React from 'react';

import styles from "./serviceTable.module.css"

import services from "../../../../../api/data/services";
import {ISetState} from "../../../../../helpers/types/ISetState";

function ServiceTable({selectedCategory} : ISetState){
    const categoryServices = services.filter((service) => service.category === selectedCategory);

    return (
        <table className={styles.table}>
            <tbody>
            {categoryServices.map(service =>
                <tr className={styles.tr} key={service.id}>
                    <td className={styles.td}>{service.title}</td>
                    <td className={styles.td}>{service.price}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default ServiceTable;