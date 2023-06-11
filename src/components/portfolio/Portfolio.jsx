import React from 'react'
import './portfolio.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Slide from './projectSlide/work'
import ApolloBg from '../../assets/apollo_bg.jpg'
import ApolloSS1 from '../../assets/apollo-ss1.png'
import ApolloSS2 from '../../assets/apollo-ss2.png'
import CalorimeterBg from '../../assets/calorimeter_bg.png'
import CalorimeterSS1 from '../../assets/calorimeter-ss1.png'
import CalorimeterSS2 from '../../assets/calorimeter-ss2.png'
import TimpleBg from '../../assets/timple_bg.jpg'
import TimpleSS1 from '../../assets/timple-ss1.png'
import TimpleSS2 from '../../assets/timple-ss2.png'
import SchuldenexBg from '../../assets/schuldenex_bg.png'
import SchuldenexSS1 from '../../assets/schuldenex-ss1.png'
import SchuldenexSS2 from '../../assets/schuldenex-ss2.png'

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h2 style={{ 'fontWeight': "900" }}>MY CREATIVE PORTFOLIO</h2>
      <div className="portfolio-work">
        <Swiper
          modules={[Pagination]}
          spaceBetween={550}
          slidesPerView={1}
          pagination={{ clickable: true }}
          parallax={false}
          scrollbar={{ draggable: true }}
        >
          {
            slideData.map((slide) => {
              return <SwiperSlide key={slide['headline']}>
                <Slide data={slide} />
              </SwiperSlide>
            })
          }
          {/* <SwiperSlide>
            <Slide data={slideData[0]}></Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={slideData[1]}></Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={slideData[2]}></Slide>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  )
}


const slideData = [
  {
    headline: 'APOLLO Music Player',
    desc: 'a fully functional music player.',
    comments: [
      "\"I like this app it works very well I was impressed enough with it to buy the pro version I recommend you do it too it catalogs all my music.\" - John C.",
      "\"It's been years old friend I finally found you. This is for anyone but a must for 100gb plus music libraries.\" - F. B.",
    ],
    href1: "https://play.google.com/store/apps/details?id=com.erkingonultas.apollo_music_player",
    button1: 'Available on Google Play Store',
    href2: "https://www.behance.net/gallery/153721441/Apollo-Music-Player-Re-imagined",
    button2: 'Explore on Behance',
    src: ApolloBg,
    picOne: ApolloSS1,
    picTwo: ApolloSS2,
    // store, behance.
  }, {
    headline: 'TIMPLE',
    desc: 'a social media project.',
    comments: [],
    button1: 'Check out on Github',
    href1: "",
    button2: 'Explore on Behance',
    href2: "https://www.behance.net/gallery/155703251/Social-Concert-App-UI-Project",
    src: TimpleBg,
    picOne: TimpleSS1,
    picTwo: TimpleSS2,
    //github, behance
  },
  {
    headline: 'SCHULDENEX',
    desc: 'a commercial customer servise app for a German law office.',
    comments: [],
    button1: 'Unavailable',
    href1: "",
    button2: 'Unavailable',
    href2: "",
    src: SchuldenexBg,
    picOne: SchuldenexSS1,
    picTwo: SchuldenexSS2,
    // store, github
  },
  {
    headline: 'CALORIMETER',
    desc: 'a calori tracker with local storage and FoodData Central API.',
    comments: [
      "\"Simple and smart. Thank you Calorimeter👌\" - N. T.",
      "\"What a great app. Congrats!\" - R. I.",
      "\"A useful program for tracking calories we take daily. I found it successful.\" - F. A.",
      "\"An easy to use and useful application back🙏\" - Selin",
    ],
    button1: 'Available on Google Play Store',
    href1: "https://play.google.com/store/apps/details?id=com.erkingonultas.CALORIMETER",
    button2: 'Check out on Github',
    href2: "https://github.com/erkingonultas/CALORIEMETER",
    src: CalorimeterBg,
    picOne: CalorimeterSS1,
    picTwo: CalorimeterSS2,
    // store, github
  },
]

export default Portfolio