import React from 'react';
import styles from "../login/loginPage.module.css"


function LoginPage({getter, setter, auth}) {
    function Login() {
        setter(!getter);

        console.log("Knop wordt geklikt")
    }


    return (
        <div className={styles.loginPage}>
            <h1>Loginpagina</h1>

            <p>{auth === true ? "hoi, je bent wel ingelogd" : "Je bent niet ingelogd"}</p>


            <button
                type="button"
                onClick={Login}>
                {auth === true ? "Uitloggen" : "Inloggen"}
            </button>

        </div>

    )

}

export default LoginPage;