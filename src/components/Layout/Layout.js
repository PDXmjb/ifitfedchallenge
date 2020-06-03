import React from 'react'
import Navigation from '../Navigation/Navigation';
import MainImage from '../MainImage/MainImage';
import Menu from '../Menu/Menu';
import Carousel from '../Carousel/Carousel';
import CoursePanel from '../CoursePanel/CoursePanel';
import EquipmentPanel from '../EquipmentPanel/EquipmentPanel';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

function Layout() {
    return (
        <div className={styles.Layout}>
            <Navigation></Navigation>
            <Menu></Menu>
            <MainImage></MainImage>
            <Carousel></Carousel>
            <CoursePanel></CoursePanel>
            <EquipmentPanel></EquipmentPanel>
            <Footer></Footer>
        </div>
    );
}

export default Layout;