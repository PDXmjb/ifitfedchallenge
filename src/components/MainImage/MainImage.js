import React from 'react'
import styles from './MainImage.module.scss'

function MainImage() {
    return (
        <div className={styles.MainImage}>
            <div className={styles.CenterText}>
                <p>The best personal training, right in your own home</p>                
            </div>
            <a className={styles.Button}>Join iFit Coach</a>
        </div>
    )
}

export default MainImage
