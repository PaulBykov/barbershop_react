import React, {Dispatch, SetStateAction} from 'react';
import styles from './barberCard.module.css'
import {IBarberCard} from "../../../../../helpers/types/IBarberCard";

interface BarberCardProps{
    cardObject: IBarberCard;
    setModal: Dispatch<SetStateAction<boolean>>;
    modalState: boolean;
}

function BarberCard(props : BarberCardProps){
    const card = props.cardObject;

    return (
        <div className={styles.card}>
            <img src={card.image} alt={card.name} className={styles.img}/>

            <button className={styles.button}
                    onClick={() => props.setModal(!props.modalState)}>
                Записаться
            </button>

            <div className={styles.onImgText}>
                <span className={styles.name}>
                    {card.name}
                </span>

                <span className={styles.stars}>
                    {'★'.repeat(Math.round(card.rating.rate))}
                    {'☆'.repeat(5 - Math.round(card.rating.rate))}
                </span>

                <div className={styles.rating}>
                    {card.rating.rate} / 5.0 ({card.rating.count})
                </div>
            </div>
        </div>
    );
}

export default BarberCard;