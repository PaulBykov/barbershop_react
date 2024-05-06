import React from "react";
import styles from "./footer.module.css"

function Footer(){
    return(
        <footer className={styles.footerModule}>
            <div>
                Contact US
            </div>

            <div>
                <a href="">
                    Политика обработки персональных данных
                </a>

                <br/>

                © 1990 - 2023 Berserk.by
            </div>
        </footer>
    );
}


export default Footer;