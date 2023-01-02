import "./HeroimgStyles.css";
import React from 'react'
// import IntroImg from "../assets/backgroung_hero_img2.jpg"
import { Link } from "react-router-dom";


const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img src={"https://media.istockphoto.com/id/1251629816/photo/the-perfect-setting-to-complete-work.jpg?b=1&s=170667a&w=0&k=20&c=e8mSv3z6PhT18EUmzgtdMCbQecYzhHoqu_ts8tFdN6c="} alt="" className="into-img" />
            </div>
            <div className="content">
                <p>HI, I'M A WEB DEVELOPER</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/projects" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg