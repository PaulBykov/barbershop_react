import React, {useState} from 'react';
import styles from "./barberList.module.css"

import BarberCard from "../barberCard/barberCard";
import {IBarberCard} from "../../../../../helpers/types/IBarberCard";

import Modal from "../../../../../components/ui/modal/modal"
import modal from "../../../../../components/ui/modal/modal";

interface BarberListProps{
    data: IBarberCard[];
}
function BarberList(props : BarberListProps){

    const barbers = props.data;
    const [modalVisibility,
           setModalVisibility] = useState(false);

    return(
        <div className={styles.list}>
            {modalVisibility ? <Modal></Modal> : <></>}
            {barbers.map(barber =>
                <BarberCard cardObject={barber}
                            key={barber.id}
                            setModal={setModalVisibility}
                            modalState={modalVisibility}
                />
            )}
        </div>
    );
}

export default BarberList;