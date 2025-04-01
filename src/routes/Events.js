import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Top from '../components/Top';
import back from "../assets/other/background.jpg"
import './EventsStyle.css'
import pimg1 from "../assets/hero pics/12.jpg"
import pimg2 from "../assets/hero pics/11.JPG"
import pimg3 from "../assets/hero pics/13.jpg"

import {Link} from 'react-router-dom';

function Events(){
    return(
        <div>
            <Navbar/>
            <h1>Events</h1>
            <Footer/>
        </div>
    );
}
export default Events;