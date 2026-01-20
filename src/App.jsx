import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import StarsCanvas from './components/canvas/Stars';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Works from './components/sections/Works';
import BlogSection from './components/sections/BlogSection'; // New Blog section
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Works />
        <BlogSection /> {/* Add Blog section */}
        <Contact />
        <StarsCanvas />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;