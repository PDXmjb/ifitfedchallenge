import React from 'react'
import styles from './MenuItem.module.scss'

function MenuItem(props) {
    return (
        <li className={styles.MenuItem}>
            <a href="/">{props.children}</a>
        </li>
    )
}

export default MenuItem;
