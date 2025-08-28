import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import ResourcesContent from '../components/ResourcesContent';

function Join(){
    return(
        <div>
            <Navbar/>
            <ResourcesContent/>
            <Footer/>
        </div>
    );
}
export default Join;