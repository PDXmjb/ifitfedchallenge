import React from 'react'
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem/CarouselItem';
import mashableLogo from '../../assets/mashable-logo.svg';
import gearJunkieLogo from '../../assets/gear-junkie-logo.svg';
import wiredLogo from '../../assets/wired-logo.svg';
import OvalButton from '../UI/OvalButton/OvalButton';

function Carousel() {
    return (
        <div className={styles.Carousel}>
            <OvalButton arrowDirection="left"></OvalButton>
            <CarouselItem 
                logoSrc={gearJunkieLogo} 
                quote='"You focus on putting in the work, and the technology handles the rest."'>                
            </CarouselItem>
            <CarouselItem 
                logoSrc={wiredLogo} 
                quote='"Literally transports you from home to wherever you choose to run."'>                
            </CarouselItem>
            <CarouselItem 
                logoSrc={mashableLogo} 
                quote='"Breathes new life into a tired, old running routine."'>                
            </CarouselItem> 
            <OvalButton arrowDirection="right"></OvalButton>           
        </div>
    )
}

export default Carousel;
