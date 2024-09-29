import React from 'react';
import Navbar from './components/layouts/Navbar';
import Hero from './components/pages/HeroSection';
import Footer from './components/layouts/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
