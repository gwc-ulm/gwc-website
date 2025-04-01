import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Top from '../components/Top';
import Events from './Events'
import Join from './Join'
import Navbar from '../components/Navbar';


function Home(){
    return(
        <>
            <Navbar />
            <Hero/>
            <Footer/>
        </>
        
    );
}
export default Home