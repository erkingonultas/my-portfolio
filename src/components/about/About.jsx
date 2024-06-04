import React from 'react'
import { motion } from "framer-motion"
import './about.css'
import Lottie from 'lottie-react';
import flutterLogo from '../../assets/icons/flutter-logo.json';
import reactLogo from '../../assets/icons/react-logo.json';
import djangoLogo from '../../assets/icons/django.png';
import angularLogo from '../../assets/icons/angular.png';
import UXLogo from '../../assets/icons/ux-design-animated.json';

const About = () => {
  return (
    <section className='about' id='about'>
      <h2 style={{ 'fontWeight': "900" }} >ABOUT ME</h2>
      <p>
        An experienced <b>Mobile and Frontend Developer</b> based in Istanbul, Turkey <br /> with a strong background in <b>Flutter, JavaScript, and UI/UX design</b>. <br />
        Proven track record of developing <b>innovative mobile applications</b> and <b>leading development teams</b>.
        Currently doing a <b>Master's Degree</b> at <b>Boğaziçi University</b> in <b>Software Engineering</b>,
        while being a <b>Frontend Developer @ Diji.Tech</b>.
      </p>
      {/* <p>
        I am a <strong>Software Developer</strong> based in <strong>Istanbul, Turkey</strong>.<br />Currently doing a <strong>Master's Degree</strong> at <strong>Boğaziçi University</strong> in <strong>Software Engineering.</strong><br/>
        I've been developing mobile apps since early 2020. A passion started as a hobby... <br /><br />
        While building my own projects;<br /> I started freelancing, built several apps for many clients.
      </p> */}
      <div className="about__content">
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='about__item'
              key={about.title + index}
            >
              {/* <img src={about.imgUrl} alt={about.title} /> */}
              {about.isStaticImg ? <img src={about.imgUrl} alt={about.title} /> : <Lottie className='about__img' animationData={about.imgUrl} loop={true} />}
              <h2 style={{ 'fontWeight': '500' }} >{about.title}</h2>
              {/* <p>{about.description}</p> */}
            </motion.div>
          ))
        }
      </div>
    </section >
  )
}

const abouts = [
  { title: 'ReactJS', description: 'My second go to framework. I had a few projects but nothing commercial.', isStaticImg: false, imgUrl: reactLogo },
  { title: 'Flutter', description: 'My main framework. Can be said that I\'ve been using it since the beginning!', isStaticImg: false, imgUrl: flutterLogo },
  { title: 'UI/UX Design', description: 'I design all of the apps I\'ve built. I believe in designs that: Pixel perfect, responsive and modern and clean.', isStaticImg: false, imgUrl: UXLogo },
  { title: 'Django', description: '', isStaticImg: true, imgUrl: djangoLogo },
  { title: 'Angular', description: '', isStaticImg: true, imgUrl: angularLogo },

];

export default About