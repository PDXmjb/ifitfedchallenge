import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styles from './Menu.module.scss';
import logo from '../../assets/ifit-coach-logo.svg';

function Menu() {
    return (
        <div className={styles.Menu}>
            <div className={styles.Logo}><img src={logo} alt="Logo"></img></div>
            <nav>
                <ul className={styles.MenuNavigation}>
                    <MenuItem>Exercise</MenuItem>
                    <MenuItem>Nutrition</MenuItem>
                    <MenuItem>Activity</MenuItem>
                    <MenuItem>Sleep</MenuItem>
                </ul>
            </nav>
            <a href="/" className={styles.SignUpButton}>Sign up</a>
        </div>
    )
}

export default Menu;
