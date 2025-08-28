import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import JoinContent from '../components/JoinContent';

function Join(){
    return(
        <div>
            <Navbar/>
            <JoinContent/>
            <Footer/>
        </div>
    );
}
export default Join;