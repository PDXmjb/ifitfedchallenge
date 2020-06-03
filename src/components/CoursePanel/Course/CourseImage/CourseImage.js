import React from 'react'
import styles from './CourseImage.module.scss'

function CourseImage(props) {
    return (
        <div className={styles.CourseImage}>
            <img src={props.courseImage} alt="Course"></img>          
        </div>
    )
}

export default CourseImage
