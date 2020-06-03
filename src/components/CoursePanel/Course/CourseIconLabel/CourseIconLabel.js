import React from 'react'
import styles from './CourseIconLabel.module.scss'

function CourseIconLabel(props) {
    return (
        <div className={styles.CourseIconLabel}>
            <img src={props.icon} alt={props.label}></img>
            <p className={styles.Label}>{props.label}</p>
        </div>
    )
}

export default CourseIconLabel
