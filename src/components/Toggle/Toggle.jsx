import React from 'react'
import "./Toggle.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({ type: "toggle" })
    }
    return (
        <div className="toggle" onClick={handleClick}>
            {darkMode ? <div>Dark</div> : <div>Light</div>}
            {/* <div className='t-button' style={darkMode ? { left: "10px" } : { right: "10px" }}>
            </div> */}
        </div>
    )
}

export default Toggle