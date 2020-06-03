import React from 'react'
import styles from './Footer.module.scss'
import youtube from '../../assets/youtube.png'
import pinterest from '../../assets/pinterest.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import SocialMedia from './SocialMedia/SocialMedia'
import downarrow from '../../assets/downarrow.png'

function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterLinks}>
                <h3>Company</h3>
                <a href="/">About</a>
                <a href="/">Contact Us</a>
                <a href="/">Careers</a>
            </div>
            <div className={styles.FooterLinks}>
                <h3>Account</h3>
                <a href="/">Log In</a>
                <a href="/">Create Account</a>
            </div>
            <div className={styles.FooterLinks}>
                <h3>Support</h3>
                <a href="/">Help Center</a>
                <a href="/">Accessibility</a>
            </div>
            <div className={styles.Line}></div>
            <div>
                <SocialMedia icon={youtube}></SocialMedia>
                <SocialMedia icon={pinterest}></SocialMedia>
                <SocialMedia icon={facebook}></SocialMedia>
                <SocialMedia icon={twitter}></SocialMedia>
                <SocialMedia icon={instagram}></SocialMedia>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.CopyrightPanel}>
                <div className={styles.Language}>
                    <p>English <img src={downarrow} alt="Down Arrow"></img></p>
                </div>
                <div className={styles.Links}>
                    <p>© iFit.com. All Rights Reserved.</p>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Use</a>
                </div>
                <div style={{flexBasis: "8%"}}></div>
            </div>
        </div>
    )
}

export default Footer
