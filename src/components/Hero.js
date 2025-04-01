
import React from 'react';
import "./HeroStyle.css";
import imgback from "../assets/hero pics/background.webp";
import {Link} from "react-router-dom";

function Hero(){
    

    return(
        <>
            <div className='hero'>
                <div className='mask'>
                    <img className='intro-img' src={imgback} alt='imgback'></img>
                </div>

                <div className='content'>
                    <p>Girls Who Code</p>
                    <h1>Loop at ULM</h1>
                    <div>
                        <Link to="/about" className="btn">About Us</Link>
                        <Link to="/join" className="btn btn-light">Join Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero;
