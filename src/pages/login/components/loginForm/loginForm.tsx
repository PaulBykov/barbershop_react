import React from 'react';

import style from "./loginForm.module.css"

function LoginForm() {
    return (
        <form action="" className={style.loginForm}>
            <input type="login" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <button> Отправить </button>
        </form>
    );
}

export default LoginForm;