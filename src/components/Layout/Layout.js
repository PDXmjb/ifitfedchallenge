import React from 'react'
import Navigation from '../Navigation/Navigation';
import MainImage from '../MainImage/MainImage';
import Menu from '../Menu/Menu';
import Carousel from '../Carousel/Carousel';

function Layout() {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Menu></Menu>
            <MainImage></MainImage>
            <Carousel></Carousel>
            <div>Videos</div>
            <div>Interested in our exciting iFit-enabled equipment?</div>
            <div>Footer</div>
            <div>Social media links</div>
            <div>Language support/copyright</div>
        </React.Fragment>
    );
}

export default Layout;