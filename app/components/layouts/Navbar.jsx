"use client"
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex'>
      <ul className='flex '>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
