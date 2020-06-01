import React from 'react';
import styles from './NavigationButton.module.scss';

function NavigationButton(props) {
    return (
        <a href="/" className={styles.NavigationButton}>
            <span>{props.children}</span>
        </a>
    )
}

export default NavigationButton;
