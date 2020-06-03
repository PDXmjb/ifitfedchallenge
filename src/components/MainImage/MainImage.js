import React from 'react'
import styles from './MainImage.module.scss'
import mainImage from '../../assets/images/reach-your-goals-bg.jpg'

function MainImage() {
    return (
        <div className={styles.MainImage}>
            <div className={styles.CenterText}>
                <img src={mainImage} alt="Main"></img>
                <p>The best personal training, right in your own home</p>                
            </div>
            <div className={styles.Darkening}></div>
            <div>
                <a href="/" className={styles.Button}>Join iFit Coach</a>
            </div>            
        </div>
    )
}

export default MainImage
