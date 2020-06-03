import React from 'react';
import styles from './NavigationButton.module.scss';

function NavigationButton(props) {
    return (
        <a href="/" className={styles.NavigationButton}>
            {props.children}
        </a>
    )
}

export default NavigationButton;
