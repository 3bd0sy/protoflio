import React from 'react'
import "./intro.css"
import github from "./github.png"
import boy from "./boy.png"
import crown from "./crown.png"
import FloatingDiv from '../floatingdiv/floatingdiv'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'

const Intro = () => {
  const transition = { duration: 2, type: "spring" }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return <>
    <div
      style={{ height: "77vh", marginTop: "6rem" }} className="intro d-flex">
      <div
        style={{ flex: "1", gap: "2rem" }} className="i-left d-flex position-relative flex-column align-items-center">
        <div className="i-name d-flex flex-column">
          <span style={{ color: "black", fontSize: "3rem", fontWeight: "bold" }}>hey i am</span>
          <span style={{ color: "#00f0f0", fontSize: "3rem", fontWeight: "bold" }}>3bdo</span>
          <span style={{ color: "#aaa", fontSize: "14px", fontWeight: "bold" }}>site step-by-step. We learn React hooks, modern CSS, swiper js, framer motion, and many more. For contact, we will use the Email js library. To make this site more functional and practical, we will implement dark and light mode with the useContext hook.</span>
        </div>
        <button
          style={{ width: "6rem", height: "2rem" }} className="button i-button">
          Hire me
        </button>
        <div
          style={{ marginTop: "3rem", gap: "0rem" }}
          className="i-icones d-flex">
          <a href="">
            <img style={{ width: "60px" }} src={github} alt="" />
          </a>
          <a href="">
            <img style={{ width: "60px", marginLeft: "50px", marginRight: "50px" }} src={github} alt="" />
          </a>
          <a href="">
            <img style={{ width: "60px" }} src={github} alt="" />
          </a>
        </div>
      </div>
      <div style={{ flex: "1" }} className="i-right position-relative">
        <div style={{ left: "20%", top: "0px", position: "absolute", zIndex: "1" }}>
          <div
            style={{ background: "linear-gradient(45deg, #88D5BF 0%, #5D6BF8 100%)", width: "400px", height: "400px", transition: "all 1s ease-in-out", animation: " animation: morph 8s ease-in-out infinite", borderRadius: " 60% 40% 30% 70% / 60% 30% 70% 40%" }}
            className='shape'></div>
        </div>
        <img style={{ left: "25%", position: "absolute", zIndex: "1" }} src={boy} className='boyimg ' alt="" />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%", position: "absolute", zIndex: "1" }}
        >

          <FloatingDiv image={crown} txt1={"web"} txt2={"developer"} />
        </motion.div>

        <motion.div
          initial={{ top: "15rem", left: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem", position: "absolute", zIndex: "1" }}>
          <FloatingDiv image={crown} txt1={"best Design"} txt2={"Award"} />
        </motion.div>

        <div className='position-absolute ' style={{ zIndex: "-6", width: "22rem", height: "14rem", borderBottom: "50%", filter: "blur(72px)", background: "rgb(238 210 255)", top: "-18%", left: "56%", position: "absolute" }} ></div>
        <div className='position-absolute ' style={{ zIndex: "-6", width: "22rem", height: "14rem", borderBottom: "50%", filter: "blur(72px)", background: "#c1f5ff", top: "15rem", left: "-7rem", position: "absolute" }}></div>
      </div>
    </div>
  </>
}

export default Intro