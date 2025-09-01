import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./NavbarStyle.css";
import logo from "../assets/hero pics/logo.png";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <>

        <div className='header'>
            <img src={logo} className='header-logo' alt=''></img>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link  to="/about">About Us</Link>
                </li>

                <li>
                    <Link  to="/events">Events</Link>
                </li>

                <li>
                    <Link   to="/resources">Resources</Link>
                </li>

                <li>
                    <Link to="/join" >Join Us</Link>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: "#dea437"}}/>) : (<FaBars size={20} style={{color: "#dea437"}}/>)}
                
                
            </div>
        </div>
        

        </>
    );
}
export default Navbar;
