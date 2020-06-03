import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styles from './Menu.module.scss';
import logo from '../../assets/ifit-coach-logo.svg';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

function Menu(props) {

    return (
        <div className={styles.Menu}>
            <div className={styles.Logo}><img src={logo} alt="Logo"></img></div>
            <nav className={styles.ShownLarge}>
                <ul className={styles.MenuNavigation}>
                    <MenuItem>Exercise</MenuItem>
                    <MenuItem>Nutrition</MenuItem>
                    <MenuItem>Activity</MenuItem>
                    <MenuItem>Sleep</MenuItem>
                </ul>
            </nav>
            <a href="/" className={styles.SignUpButton + " " + styles.ShownLarge}>Sign up</a>
            <DrawerToggle click={props.openHandler}></DrawerToggle>
        </div>
    )
}

export default Menu;
