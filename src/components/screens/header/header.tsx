import React from "react";

import styles from "./header.module.css";

function Header(){
    return(
        <header>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                        <img src='/assets/images/main/berserk.png'
                             className={styles.logo} alt="Logo"/>
                </div>

                <div className={styles.names}>
                    <a>О нас</a>
                    <a>Услуги</a>
                    <a>Барберы</a>
                    <a>Новости</a>
                    <a>Отзывы</a>
                    <a>Контакты</a>
                </div>
            </nav>
        </header>
    );
}


export default Header