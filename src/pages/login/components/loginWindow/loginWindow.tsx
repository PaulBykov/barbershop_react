import React from 'react';
import IChildren from "../../../../helpers/types/IChildren";

import styles from "./loginWindow.module.css"
import {Link} from "react-router-dom";

function LoginWindow({children} : IChildren) {
    return (
        <div className={styles.loginWindow}>
            <Link to="/" className={styles.goBack}>
                Назад
            </Link>

            <h2>
                Admin panel login form
            </h2>

            {children}
        </div>
    );
}

export default LoginWindow;