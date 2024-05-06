import React from 'react';

import styles from './login.module.css'
import LoginForm from "./components/loginForm/loginForm";
import LoginWindow from "./components/loginWindow/loginWindow";

function Login() {
    return (
        <div className={styles.loginWindow}>
            <LoginWindow>
                <LoginForm/>
            </LoginWindow>
        </div>
    );
}

export default Login;