import React from 'react'
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem/CarouselItem';
import mashableLogo from '../../assets/mashable-logo.svg';
import gearJunkieLogo from '../../assets/gear-junkie-logo.svg';
import wiredLogo from '../../assets/wired-logo.svg';
import OvalButton from '../UI/OvalButton/OvalButton';

function Carousel() {
    const carouselItemsData = [
        {
            logoSrc: gearJunkieLogo,
            quote: '"You focus on putting in the work, and the technology handles the rest."'
        },
        {
            logoSrc: wiredLogo,
            quote: '"Literally transports you from home to wherever you choose to run."'
        },
        {
            logoSrc: mashableLogo,
            quote: '"Breathes new life into a tired, old running routine."'
        }
    ]

    const carouselItems = carouselItemsData.map((item) => {
        return <CarouselItem logoSrc={item.logoSrc} quote={item.quote}></CarouselItem>
    })

    // leftClickHandler = () => {
    //     alert("CLICKED LEFT");
    // }

    // rightClickHandler = () => {
    //     alert("CLICKED RIGHT");
    // }

    return (
        <div className={styles.Carousel}>
            <div className={styles.CarouselItems}>
                <OvalButton arrowDirection="left"></OvalButton>
                {carouselItems}
                <OvalButton arrowDirection="right"></OvalButton>
            </div>
        </div>
    )
}

export default Carousel;
