import React from 'react';
import styles from './TopMenu.module.css';
import {NavLink, useHistory} from "react-router-dom";


function TopMenu({getter, setter, auth}) {
    const history = useHistory();

    const logOutClick = (e) => {
        setter(!getter);
        history.push("/");

    }


    return (
        <nav>
            <div className={styles.navBar}>

                <ul className={styles.navBarItems}>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        {auth === true ?
                            <NavLink to="/blogposts" activeClassName="active-link">Blogposts</NavLink> : ""}
                    </li>
                    <li>
                        {auth === true ? <button type="button" onClick={logOutClick}>Uitloggen
                        </button> : <NavLink to="/login" activeClassName="active-link">Login</NavLink>}
                    </li>

                </ul>
            </div>
        </nav>
    );
}


export default TopMenu;