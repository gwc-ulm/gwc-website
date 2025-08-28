import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import EventContent from '../components/EventContent';


function Events(){
    return(
        <div>
            <Navbar/>
            <EventContent/>
            <Footer/>
        </div>
    );
}
export default Events;