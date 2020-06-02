import React from 'react'
import styles from './OvalButton.module.scss';
import leftArrow from '../../../assets/left.png';
import rightArrow from '../../../assets/right.png';

function OvalButton(props) {
    let arrow = <img src={rightArrow}></img>
    if (props.arrowDirection === "left") {
        arrow = <img src={leftArrow}></img>
    }
    return (
        <div className={styles.OvalButton}>
            {arrow}
        </div>
    )
}

export default OvalButton
