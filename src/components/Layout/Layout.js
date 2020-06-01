import React from 'react'
import Navigation from '../Navigation/Navigation';
import MainImage from '../MainImage/MainImage';
import Menu from '../Menu/Menu';

function Layout() {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Menu></Menu>
            <MainImage></MainImage>
            <div>Review carrosel</div>
            <div>Videos</div>
            <div>Interested in our exciting iFit-enabled equipment?</div>
            <div>Footer</div>
            <div>Social media links</div>
            <div>Language support/copyright</div>
        </React.Fragment>
    );
}

export default Layout;