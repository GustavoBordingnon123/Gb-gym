import React from 'react'
import './Footer.css';

import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='footerContainer'>
        
        <hr />

        <div className="footer">
            <div className="socialLinks">
                <img src={Github} alt="githubIcon" />
                <img src={Instagram} alt="instagramIcon" />
                <img src={Linkedin} alt="linkedinIcon" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer;
