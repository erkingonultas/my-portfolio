import React from 'react'
import { motion } from "framer-motion"
import './about.css'
import Lottie from 'lottie-react';
import flutterLogo from '../../assets/icons/flutter-logo.json';
import reactLogo from '../../assets/icons/react-logo.json';
import UXLogo from '../../assets/icons/ux-design-animated.json';

const About = () => {
  return (
    <section className='about' id='about'>
      <h2 style={{ 'fontWeight': "900" }} >ABOUT ME</h2>
      <p>
        I am a mobile app developer based in Istanbul, Turkey.<br />Currently holding a degree from Gazi University in Chemical Engineering. <br /><br />
        I've been developing mobile apps since early 2020. A passion started as a hobby... <br /><br />
        While building my own projects;<br /> I started freelancing, built several apps for clients.
      </p>
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
              <Lottie className='about__img' animationData={about.imgUrl} loop={true} />
              <h2 style={{ 'fontWeight': '500' }} >{about.title}</h2>
              <p>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </section >
  )
}

const abouts = [
  { title: 'ReactJS Development', description: 'My second go to language. I had a few projects but nothing commercial.', imgUrl: reactLogo },
  { title: 'Flutter Development', description: 'My main language. Can be said that I\'ve been using it since the beginning!', imgUrl: flutterLogo },
  { title: 'UI/UX Design', description: 'I design all of the apps I\'ve built. I believe in designs that: Pixel perfect, responsive and modern and clean.', imgUrl: UXLogo },

];

export default About

//  <section id='about'>
//       <h2>A BIT ABOUT ME</h2>
//       <div className="container about__container">
//         <div className="about__me">
//           <div className="about__me-image">
//             <img src={ME} alt="" />
//           </div>
//         </div>
//         <div className="about__content">
//           <div className="about__cards">
//             <article className='about__card'>
//               <h5>Experience</h5>
//               <small>3+ Years working experience</small>
//             </article>
//             <article className='about__card'>
//               <h5>Projects</h5>
//               <small>10+ projects completed</small>
//             </article>
//           </div>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed impedit, libero possimus debitis soluta eligendi. Ipsam sed sunt, laboriosam iusto consectetur, cum obcaecati quibusdam atque, minus voluptatem alias! Labore!</p>
//           <a href="#contact" className='btn btn-primary'>Contact</a>
//         </div>
//       </div>
//     </section >
