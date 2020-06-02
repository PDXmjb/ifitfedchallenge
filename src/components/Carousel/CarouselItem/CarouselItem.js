import React from 'react';
import styles from './CarouselItem.module.scss';

function CarouselItem(props) {
    return (
        <div className={styles.CarouselItem}>
            <img src={props.logoSrc}></img>
            <p>{props.quote}</p>
        </div>
    )
}

export default CarouselItem;