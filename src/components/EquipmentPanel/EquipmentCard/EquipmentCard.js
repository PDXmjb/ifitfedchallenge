import React from 'react'
import styles from './EquipmentCard.module.scss'

function EquipmentCard(props) {
    return (
        <div className={styles.EquipmentCard}>
            <img src={props.image} alt="Equipment"></img>
            <p>{props.children}</p>
        </div>
    )
}

export default EquipmentCard
