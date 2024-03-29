import React from 'react'
import './footer.css'
import BehanceLogo from '../../assets/icons/behance.svg'
import GithubLogo from '../../assets/icons/github.svg'
import GmailLogo from '../../assets/icons/gmail.svg'
import ResumeLogo from '../../assets/icons/resume.svg'
import CV from '../../assets/Erkin-Gonultas-Resume.pdf'

const Footer = () => {
  return (
    <footer>
      <a href="#header" aria-current="page" className='scroll_top'>scroll top</a>
      <ul className='permalinks'>
        <li><a href="#header">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
      </ul>
      <div className="footer_socials">
        <a href="mailto:erkingonultas@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={GmailLogo} alt="gmail" />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <img src={BehanceLogo} alt="behance" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={GithubLogo} alt="github" />
        </a>
        <a href={CV} target="_blank" rel="noopener noreferrer">
        <img src={ResumeLogo} alt="github" />
      </a>
      </div>
      <div className="footer__copyright">
        <small>
          Designed/Developed by Erkin Gönültaş<br />
          Last Updated June 2023
        </small>
      </div>
    </footer>
  )
}

export default Footer