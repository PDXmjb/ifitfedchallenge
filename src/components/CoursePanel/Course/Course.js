import React from 'react'
import styles from './Course.module.scss';
import CourseImage from './CourseImage/CourseImage';
import CourseOverlay from './CourseOverlay/CourseOverlay';
import clock from '../../../assets/clock.png';
import views from '../../../assets/views.png';
import CourseIconLabel from './CourseIconLabel/CourseIconLabel';


function Course(props) {
    let overlay = null;
    
    if (props.hasOverlay) {
        overlay = <CourseOverlay number={props.number}></CourseOverlay>
    }

    let labels = null;

    if (props.timeLabel)
    {
        labels = (
            <React.Fragment>
                <CourseIconLabel
                    icon={clock}
                    label={props.timeLabel}
                ></CourseIconLabel>
                <CourseIconLabel
                    icon={views}
                    label={props.viewsLabel}
                ></CourseIconLabel>
            </React.Fragment>
        )
    }

    let detailsLink = null;

    if (props.hasDetailsLink) {
        detailsLink = <a href="/" className={styles.ViewDetailsLink}>View Details</a>
    }

    return (
        <div className={styles.Course}>
            <CourseImage courseImage={props.courseImage}></CourseImage>
            {overlay}
            <div className={styles.CourseDetails}>
                <div className={styles.CourseDetailsInfo}>
                    <p className={styles.CourseNameLabel}>{props.courseLabel}</p>
                    {labels}
                    {detailsLink}
                </div>
                <div className={styles.CourseDetailsTrainer}>
                    <img src={props.trainerImage} alt="Trainer"></img>
                </div>                
            </div>            
        </div>
    )
}

export default Course
