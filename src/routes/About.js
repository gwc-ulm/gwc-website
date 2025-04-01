import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import {Link} from 'react-router-dom';
import AboutContent from '../components/AboutContent';

function About(){
    return(
        <div>
            <Navbar/>
            <AboutContent/>
            <Footer/>
        </div>
    );
}
export default About;