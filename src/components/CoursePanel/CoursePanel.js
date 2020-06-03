import React from 'react'
import Course from './Course/Course'
import styles from './CoursePanel.module.scss'
import img1 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(24).png'
import trainer1 from '../../assets/images/puspure_sanita_avatar_002.png'
import img2 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(18).png'
import trainer2 from '../../assets/images/francia_susan_avatar_001.png'
import img3 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(25).png'
import trainer3 from '../../assets/images/_Alex_Silver_Fagan.png'
import img4 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(19).png'
import trainer4 from '../../assets/images/gregory_alex_avatar_01.png'
import img5 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(32).png'
import trainer5 from '../../assets/images/whipple_mary_hero3x_001.png'
import img6 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(20).png'
import trainer6 from '../../assets/images/eden_hannah_avatar_03.png'
import img7 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(35).png'
import trainer7 from '../../assets/images/nanchengwa_desmond_avatar_003.png'
import img8 from '../../assets/images/img_marketing_web_cardimg_marketing_web_card@2x_(21).png'
import trainer8 from '../../assets/images/_Gideon_Akande.png'


function CoursePanel() {
    return (
        <div className={styles.CoursePanel}>
            <Course 
                courseImage={img1} 
                trainerImage={trainer1}
                courseLabel="Lake Inniscarra, Ireland—Pyramid" 
                timeLabel="30:53"
                viewsLabel="6,248 M"></Course>
            <Course 
                courseImage={img2} 
                trainerImage={trainer2} 
                courseLabel="Performance Series"
                hasOverlay 
                number="9"></Course>
            <Course 
                courseImage={img3} 
                trainerImage={trainer3} 
                courseLabel="Slow Pulls and Fast Intervals"
                timeLabel="44:13"
                viewsLabel="9,948 M"></Course>
            <Course 
                courseImage={img4} 
                trainerImage={trainer4} 
                courseLabel="20 Minutes to Toned"
                hasOverlay 
                number="12" 
            ></Course>
            <Course 
                courseImage={img5} 
                trainerImage={trainer5} 
                courseLabel="Charles Race, Boston, Massachusetts"
                timeLabel="36:22"
                viewsLabel="8,648 M"></Course>
            <Course 
                courseImage={img6} 
                trainerImage={trainer6} 
                courseLabel="Full-Body HIIT Series"
                hasOverlay 
                number="12"></Course>
            <Course 
                courseImage={img7} 
                trainerImage={trainer7} 
                courseLabel="Kafue River, Zambia—Power Stroke Pyramid"
                timeLabel="22:22"
                viewsLabel="4,660 M"></Course>
            <Course 
                courseImage={img8} 
                trainerImage={trainer8} 
                courseLabel="Shred & Burn Series"
                hasOverlay 
                number="16" ></Course>
            
        </div>
    )
}

export default CoursePanel
