import React, { Component } from 'react'
import Navigation from '../../components/Navigation/Navigation';
import MainImage from '../../components/MainImage/MainImage';
import Menu from '../../components/Menu/Menu';
import Carousel from '../../components/Carousel/Carousel';
import CoursePanel from '../../components/CoursePanel/CoursePanel';
import EquipmentPanel from '../../components/EquipmentPanel/EquipmentPanel';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.scss';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }

    sideDrawerClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    menuOpenHandler = () => {
        this.setState({sideDrawerOpen: true});
    }

    render() {        
        return (
            <div className={styles.Layout}>
                <Navigation></Navigation>
                <Menu openHandler={this.menuOpenHandler}></Menu>
                <MainImage></MainImage>
                <Carousel></Carousel>
                <CoursePanel></CoursePanel>
                <EquipmentPanel></EquipmentPanel>
                <Footer></Footer>
                <SideDrawer open={this.state.sideDrawerOpen} closeHandler={this.sideDrawerClickHandler}></SideDrawer>
            </div>
        );
    }
}

export default Layout;