import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styles from './Menu.module.scss';

function Menu() {
    return (
        <div className={styles.Menu}>
            <div className={styles.Logo}>Logo</div>
            <nav>
                <ul className={styles.MenuNavigation}>
                    <MenuItem>Exercise</MenuItem>
                    <MenuItem>Nutrition</MenuItem>
                    <MenuItem>Activity</MenuItem>
                    <MenuItem>Sleep</MenuItem>
                </ul>
            </nav>
            <a>Sign up</a>
        </div>
    )
}

export default Menu;
