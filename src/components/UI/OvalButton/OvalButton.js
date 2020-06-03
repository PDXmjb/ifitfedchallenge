import React from 'react'
import styles from './OvalButton.module.scss';
import leftArrow from '../../../assets/left.png';
import rightArrow from '../../../assets/right.png';

function OvalButton(props) {
    let arrow = <img alt="Arrow" src={rightArrow}></img>
    let classes = [styles.OvalButton, styles.Right];
    if (props.arrowDirection === "left") {
        arrow = <img alt="Arrow" src={leftArrow}></img>
        classes[1] = styles.Left;
    }
    return (
        <button onClick={props.click} className={classes.join(" ")}>
            {arrow}
        </button>
    )
}

export default OvalButton
