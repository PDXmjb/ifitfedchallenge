import React from 'react'
import styles from './CourseOverlay.module.scss'
import playQueue from '../../../../assets/Rectangle_4.png'

function CourseOverlay(props) {
    return (
        <div className={styles.CourseOverlay}>
            <p className={styles.NumberOfCoursesLabel}>{props.number}</p>
            <p className={styles.WorkoutsLabel}>Workouts</p>
            <img src={playQueue} alt="Play Queue"></img>
        </div>
    )
}


export default CourseOverlay