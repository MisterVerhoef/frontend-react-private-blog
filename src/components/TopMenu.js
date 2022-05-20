import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './TopMenu.module.css';


function TopMenu() {
    return (
        <nav>
            <div className={styles.navBar}>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blogposts" activeClassName="active-link">Blogposts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;