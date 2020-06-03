import React from 'react';
import styles from './SideDrawer.module.scss'
import Backdrop from '../UI/Backdrop/Backdrop'
import logo from '../../assets/ifit-coach-logo.svg'
import MenuItem from '../Menu/MenuItem/MenuItem';

const SideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];

    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closeHandler}></Backdrop>
            <div className={attachedClasses.join(' ')}>                
                <div className={styles.Logo}>
                    <img src={logo}></img>
                </div>            
                <nav className={styles.ShownLarge}>
                    <ul className={styles.MenuNavigation}>
                        <MenuItem>Exercise</MenuItem>
                        <MenuItem>Nutrition</MenuItem>
                        <MenuItem>Activity</MenuItem>
                        <MenuItem>Sleep</MenuItem>
                    </ul>
                </nav>
                <a href="/" className={styles.SignUpButton + " " + styles.ShownLarge}>Sign up</a>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer;