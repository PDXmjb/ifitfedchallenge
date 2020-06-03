import React, { Component } from 'react'
import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem/CarouselItem';
import mashableLogo from '../../assets/mashable-logo.svg';
import gearJunkieLogo from '../../assets/gear-junkie-logo.svg';
import wiredLogo from '../../assets/wired-logo.svg';
import OvalButton from '../UI/OvalButton/OvalButton';

const DATA = [
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

export default class Carousel extends Component {
    state = {
        currentCenter: 1
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.currentCenter !== this.state.currentCenter;
    }

    leftClickHandler = (e) => {
        e.preventDefault();
        
        this.setState((prevState) => {
            let center = prevState.currentCenter;

            if (center === 0) {
                center = 2;
            }
            else {
                center--;
            }

            return {currentCenter: center};
        })        
    }

    rightClickHandler = (e) => {
        e.preventDefault();
        
        this.setState((prevState) => {
            let center = prevState.currentCenter;

            if (center === 2) {
                center = 0;
            }
            else {
                center++;
            }

            return {currentCenter: center};
        })
    }

    render() {
        const carouselItems = DATA.map((item, index) => {
            return <CarouselItem key={index} logoSrc={item.logoSrc} quote={item.quote}></CarouselItem>
        })

        let orderedItems = [];
        for (let i = 0; i < 3; i++)
        {
            orderedItems[i] = carouselItems[(this.state.currentCenter + i) % 3];
        }    
        
        return (
            <div className={styles.Carousel}>
                <div className={styles.CarouselItems}>
                    <OvalButton arrowDirection="left" click={this.leftClickHandler}></OvalButton>
                    {orderedItems}
                    <OvalButton arrowDirection="right" click={this.rightClickHandler}></OvalButton>
                </div>
            </div>
        )
    }
}

