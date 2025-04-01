import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Top from '../components/Top';
import {Link} from 'react-router-dom';
import back from "../assets/other/background.jpg"
import './JoinStyle.css'

function Join(){
    return(
        <div>
            <Navbar/>
            <h1>Join Us</h1>
            <Footer/>
        </div>
    );
}
export default Join;