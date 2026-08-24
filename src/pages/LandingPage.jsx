import React from 'react';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Works from '../components/sections/Works';
import Certificates from '../components/sections/Certificates';
import BlogSection from '../components/sections/BlogSection';
import Contact from '../components/sections/Contact';
import StarsCanvas from '../components/canvas/Stars';
import Footer from '../components/ui/Footer';

const LandingPage = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-primary bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>

            <About />
            <Experience />
            <Works />
            <Certificates />
            <BlogSection />
            <Contact />
            <StarsCanvas />

            <Footer />
        </div>
    );
};

export default LandingPage;
