import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import Lottie from 'lottie-react';
import downArrow from '../../assets/icons/swipe-down-arrows.json';

const Header = () => {
  return (
    <header className='header' id='header'>
      <div className="container header__container">
        <div className='part-1'>
          <h2>Hello there!</h2>
          <div className="headline">
            <h2 className='this'>This is</h2>
            <h2 className='name'>
              <span>Erkin Gönültaş</span>
            </h2>
          </div>

          {/* <h4 className="text-light">Flutter Developer & UI/UX Designer</h4> */}
          <h4 className='word-carousel'>
            <div>
              <ul className='flip2'>
                <li>UI/UX Designer</li>
                <li>Web Developer</li>
                <li>Software Developer</li>
                <li>Mobile Developer</li>
              </ul>
            </div>
          </h4>
        </div>
        <ul className='headerlinks'>
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
        </ul>
        <HeaderSocials />
        <a href="#about">
          <Lottie className='scroll-down' animationData={downArrow} loop={true} />
        </a>
      </div>
    </header>
  )
}

export default Header