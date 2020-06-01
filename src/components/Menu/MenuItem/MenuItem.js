import React from 'react'
import styles from './MenuItem.module.scss'

function MenuItem(props) {
    return (
        <li className={styles.MenuItem}>
            <a>{props.children}</a>
        </li>
    )
}

export default MenuItem;
