import React from 'react'
import "./Works.css"
import img from "./crown.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works d-flex align-items-center">
            <div className="left">
                <div className="awesome d-flex flex-column position-relative">
                    <span style={{ color: darkMode ? "white" : "" }}>Works for all these</span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem?  nobis sequi ipsa iste
                        <br />
                        esse quisquam dolores mollitia, et at sit quis nesciunt, velit odit.
                        <br />
                        esse quisquam dolores mollitia, et at sit quis nesciunt, velit odit.
                        <br />
                        esse quisquam dolores mollitia, et at sit quis nesciunt, velit odit.
                    </span>
                    <button className='button s-button'>Hire me</button>

                    <div className="blur s-blur" style={{ background: "#ABF1ff94" }}></div>
                </div>
            </div>
            <div     className="w-right position-relative">
                <div className="w-mainCircle rounded-circle position-relative bg-white">
                    <div className="w-secCircle d-flex align-items-center justify-content-between rounded-circle  position-absolute" >
                        <img src={img} alt="" />
                    </div>

                    <div className="w-secCircle d-flex align-items-center justify-content-between rounded-circle position-absolute">
                        <img  src={img} alt="" />
                    </div>

                    <div className="w-secCircle d-flex align-items-center justify-content-between rounded-circle position-absolute">
                        <img src={img} alt="" />
                    </div>

                    <div className="w-secCircle d-flex align-items-center justify-content-between rounded-circle position-absolute">
                        <img src={img} alt="" />
                    </div>
                    <div className="w-secCircle d-flex align-items-center justify-content-between rounded-circle position-absolute">
                        <img src={img} alt="" />
                    </div>

                    <div className="w-backCircle blueCircle  position-absolute"></div>
                    <div className="w-backCircle yellowCircle  position-absolute"></div>

                </div>

            </div>
        </div>
    )
}

export default Works