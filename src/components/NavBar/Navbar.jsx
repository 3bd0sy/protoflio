//rafce
import React from 'react'
import Toggle from '../Toggle/Toggle'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="n-wrapper d-flex justify-content-around vh-10">
            <div className="n-left d-flex align-items-center "
                style={{ flex: "1", gap: "2rem" }}>
                <div className="n-name"
                    style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                >ENG:3BDO</div>
                <Toggle className="" />
            </div>
            <div className="n-right d-flex align-items-center justify-content-center"
                style={{ flex: "1", fontWeight: "400" }}>
                <div className="n-list flex-grow-10">
                    <ul className="d-flex" style={{ listStyleType: "none", gap: "2rem", marginRight: "4rem" }}>
                        <li style={{ cursor: "pointer" }}>Home</li>
                        <li style={{ cursor: "pointer" }}>Services</li>
                        <li style={{ cursor: "pointer" }}>About</li>
                        <li style={{ cursor: "pointer" }}>About</li>
                        <li style={{ cursor: "pointer" }}>About</li>
                    </ul>
                </div>
                <button className="button ">
                    contact us
                </button>
            </div>
        </div>
    )
}

export default Navbar
