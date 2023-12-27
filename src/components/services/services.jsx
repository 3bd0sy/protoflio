import React from 'react'
import resume from "./abdulbasit abdulghani.pdf"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'

import img from "./crown.png"
function Card({ image, heading, details }) {
    return <div className="card position-absolute d-flex flex-column text-center rounded-20 align-items-center justify-content-center"
        style={{ width: "200px", height: "300px", gap: "15px", padding: "0px 26px 50px 26px", boxShadow: " var(--boxShadow)", border: "4px solid var(--orangeCard)", background: "rgba(red, green, blue, 0.26)" }}>
        <img  style={{ width: "80px",marginTop:"30px" }} src={image} alt="" />
        <span>{heading}</span>
        <span
            style={{ color: "var(--gray)", fontSize: "14px" }}
            className='c-details '>{details}</span>

        <button className='c-button bg-white'
            style={{boxShadow: '0px 19px 60px rgba(0, 0, 0, 0.08)',borderRadius: '7px',border: 'none',padding: '10px',fontSize: '16px',color: '#5290fd'}}
        >learn more</button>
    </div>
}

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: "spring" }

    return (
        <div className='services d-flex vh-100'
            style={{ padding: "0 2rem 0 3rem", marginTop: "9rem", marginBottom: "13rem" }}>
            <div className="awesome d-flex flex-column position-relative">
                <span style={{ color: darkMode ? "white" : "", fontSize: "2.5rem", fontWeight: "bold" }}>MY Awesome</span>
                <span style={{ color: "var(--orange)", fontSize: "2.5rem", fontWeight: "bold" }}>Services</span>
                <span style={{ color: "var(--gray)", fontSize: "14px", marginTop: "1rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem? Obcaecati veritatis maxime eius commodi nobis sequi ipsa iste
                    <br />
                    esse quisquam dolores mollitia, et at sit quis nesciunt, velit odit.
                </span>
                <a href={resume} download>
                    <button className='button s-button'
                        style={{ width: "8rem", height: "2rem", marginTop: "1rem" }}>Download CV</button>
                </a>
                <div className="blur s-blur" style={{ background: "#ABF1ff94" }}></div>
            </div>
            <div className="cards position-relative">

                <motion.div className="position-absolute"
                    initial={{ top: "0rem", left: "29rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    style={{ left: "14rem" }}>
                    <Card
                        image={img}
                        heading="python"
                        details={"lorejd fdgjfd df s df skjdfn sdf dsjkfns dfsdfksfs"}
                    />
                </motion.div>
                <motion.div className="position-absolute"
                    initial={{ top: "12rem", left: "29rem" }}
                    whileInView={{ left: "-12rem" }}
                    transition={transition}
                    style={{ top: "12rem", left: "-12rem" }}>
                    <Card
                        image={img}
                        heading="python"
                        details={"lorejd fdgjfd df s df skjdfn sdf dsjkfns dfsdfksfs"}
                    />
                </motion.div>
                <div className="position-absolute" style={{ top: "25rem", left: "8rem" }}>
                    <Card
                        image={img}
                        heading="python"
                        details={"lorejd fdgjfd df s df skjdfn sdf dsjkfns dfsdfksfs"}
                    />
                </div>
                <motion.div className="position-absolute"
                    initial={{ top: "25rem", left: "29rem" }}
                    whileInView={{ left: "-35rem" }}
                    transition={transition}
                    style={{ top: "25rem", left: "-35rem" }}>
                    <Card
                        image={img}
                        heading="python"
                        details={"lorejd fdgjfd df s df skjdfn sdf dsjkfns dfsdfksfs"}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Services