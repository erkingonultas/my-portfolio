import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const boxVariant = {
  visible: {opacity: 1, transition: {duration: .85}},
  hidden: {opacity: 0,}
};

const Box = ({child, isFirst}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView, isFirst]);
  if (isFirst) {
    return <motion.div
  className='box'
  ref={ref}
  variants = {boxVariant}
  initial="visible"
  animate = {control}
  >{child}</motion.div>
  } else {
    return <motion.div
    className='box'
    ref={ref}
    variants = {boxVariant}
    initial="hidden"
    animate = {control}
    >{child}</motion.div>  
  }
  
}

const App = () => {
  return (
    <>
        <Box child={<Header/>} isFirst={true} />
        <Box child={<About />} isFirst={false}/>
        <Box child={<Portfolio />} isFirst={false}/>
        <Box child={<Footer />} isFirst={true}/>
    </>
  )
}

export default App