import React from 'react'
import EquipmentCard from './EquipmentCard/EquipmentCard'
import styles from './EquipmentPanel.module.scss'
import treadmills from '../../assets/images/treadmillperson.png'
import bikes from '../../assets/images/bikeperson.png'
import ellipticals from '../../assets/images/ellipticalperson.png'
import strengths from '../../assets/images/strengthperson.png'

function EquipmentPanel(props) {
    return (
        <div className={styles.EquipmentPanel}>
            <h2>Interested in our exciting iFit-enabled equipment?</h2>
            <div className={styles.EquipmentCards}>
                <EquipmentCard image={treadmills}>Treadmills</EquipmentCard>
                <EquipmentCard image={bikes}>Bikes</EquipmentCard>
                <EquipmentCard image={ellipticals}>Ellipticals</EquipmentCard>
                <EquipmentCard image={strengths}>Strength</EquipmentCard>
            </div>
        </div>
    )
}

export default EquipmentPanel
