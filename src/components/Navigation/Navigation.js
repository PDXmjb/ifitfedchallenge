import React from 'react'
import NavigationButton from './NavigationButton/NavigationButton'
import styles from './Navigation.module.scss'

function Navigation() {
    return (
        <div>
            <nav>
                <ul className={styles.Navigation}>
                    <NavigationButton>Blog</NavigationButton>
                    <NavigationButton>Nourish</NavigationButton>
                    <NavigationButton>Shop</NavigationButton>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navigation
