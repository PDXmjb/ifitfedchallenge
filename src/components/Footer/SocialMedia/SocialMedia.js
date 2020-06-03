import React from 'react'
import styles from './SocialMedia.module.scss'

function SocialMedia(props) {
    return (
        <div className={styles.SocialMedia}>
            <a href="/">
                <img src={props.icon} alt="y"></img>
            </a>
        </div>
    )
}

export default SocialMedia
