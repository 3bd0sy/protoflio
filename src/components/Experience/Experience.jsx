import React from 'react'
import "./Experience.css";

import { themeContext } from '../../Context';
import { useContext } from 'react';
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return <div
        style={{
            gap: "5rem",
            marginTop: "8rem"
        }}
        className="experience d-flex align-items-center justify-content-center vh-30">
        <div className="achievement d-flex flex-column align-items-center">
            <div
                style={{ width: "4rem", height: "4rem", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem" }}
                className="circle d-flex align-items-center position-relative justify-content-center text-black rounded-circle bg-white">8+</div>
            <span>years</span>
            <span>Experoence</span>
        </div>
        <div className="achievement d-flex flex-column align-items-center">
            <div
                style={{ width: "4rem", height: "4rem", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem" }}
                className="circle  d-flex align-items-center position-relative justify-content-center text-black rounded-circle bg-white">8+</div>
            <span>years</span>
            <span>Experoence</span>
        </div>
        <div className="achievement d-flex flex-column align-items-center">
            <div
                style={{ width: "4rem", height: "4rem", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem" }}
                className="circle  d-flex align-items-center position-relative justify-content-center text-black rounded-circle bg-white">8+</div>
            <span>years</span>
            <span>Experoence</span>
        </div>

    </div>

}

export default Experience