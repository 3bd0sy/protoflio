import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.css"
import "swiper/css"
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'



const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: "spring" }
    return <div className="portfolio overflow-visible d-flex align-items-center flex-column justify-content-center">
        <span style={{color:darkMode?"white":""}}>
            recent project
        </span>

        <span>Portfolio</span>
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={img4} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={img5} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={img6} alt="" />
            </SwiperSlide>


        </Swiper>
    </div>
}

export default Portfolio