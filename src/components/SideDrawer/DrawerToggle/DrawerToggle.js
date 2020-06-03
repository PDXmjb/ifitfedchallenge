import React from 'react'
import classes from './DrawerToggle.module.scss'

export default function DrawerToggle(props) {
    return (
        <div onClick={props.click} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
