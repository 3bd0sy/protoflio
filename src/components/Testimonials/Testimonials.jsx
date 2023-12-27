import React from 'react'
import "./Testimonials.css"

import img1 from "./profile2.jpg";
import img2 from "./profile5.jpg";
import img3 from "./profile6.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css"
import "swiper/css/pagination";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const Clients = [
        {
            img: img1,
            review: "Outstanding customer service! The support team went above and beyond to assist me, providing quick and effective solutions. Truly impressed with their dedication and professionalism."
        },
        {
            img: img2,
            review: "Exceptional product quality and reliability. From design to functionality, this product surpassed my expectations. I highly recommend it for its durability and user-friendly features."
        }, {
            img: img3,
            review: "Flawless shopping experience! The website's interface is intuitive, making my purchase smooth and enjoyable. The product arrived on time, well-packaged, and lived up to its high standards. Overall, a fantastic buying journey!"
        },
    ]
    return (
        // 
        <div className="t-wrapper d-flex align-i-button justify-content-center flex-column position-relative vh-100">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work</span>
                <span>from me</span>
                <div className='blur t-blur1' style={{ zIndex: "-6", width: "22rem", height: "14rem", borderBottom: "50%", filter: "blur(92px)", top: "+23%", left: "66%", position: "absolute", background: "#a0a0a0" }}> </div>
                <div className='blur t-blur2' style={{ Index: "-6", width: "22rem", height: "14rem", borderBottom: "50%", filter: "blur(82px)", top: "+53%", left: "06%", position: "absolute",background: "#a01aa0" }}> </div>
            </div>
            <Swiper
                modules={[Pagination]}
                slidePreview={1}
                pagination={{ clickable: true }}
            >
                {
                    Clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial d-flex flex-column align-items-center justify-content-evenly">
                                    <img className="rounded-circle" src={client.img} alt="" />
                                    <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}


export default Testimonials