import React from 'react'
import "./footer.css";
import img from "./wave.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Footer = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="footer curved-box d-flex align-self-center position-relative">
            <img src={img} style={{ width: "100%" }} alt="" />
            <div className="f-content d-flex align-items-center justify-content-center flex-column position-absolute">
                <span>test@test.com</span>
                <div className="f-icons">
                    <div class="">
                        <p>Hello, I'm a curved box!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer