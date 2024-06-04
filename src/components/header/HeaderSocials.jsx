import React from 'react'
import './header.css';
import BehanceLogo from '../../assets/icons/behance-light.svg'
import GithubLogo from '../../assets/icons/github-light.svg'
import GmailLogo from '../../assets/icons/gmail-light.svg'
import LinkedinLogo from '../../assets/icons/linkedin-light.svg'
import ResumeLogo from '../../assets/icons/resume-light.svg'
import CV from '../../assets/Erkin-Gonultas-Resume.pdf'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="mailto:erkingonultas@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={GmailLogo} alt="gmail" />
      </a>
      <a href="https://www.behance.net/erkingnlta1" target="_blank" rel="noopener noreferrer">
        <img src={BehanceLogo} alt="behance" />
      </a>
      <a href="https://github.com/erkingonultas" target="_blank" rel="noopener noreferrer">
        <img src={GithubLogo} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/erkin-gönültaş-ba0940258/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedinLogo} alt="linkedin" />
      </a>
      <a href={CV} target="_blank" rel="noopener noreferrer">
        <img src={ResumeLogo} alt="github" />
      </a>
    </div>
  )
}

export default HeaderSocials