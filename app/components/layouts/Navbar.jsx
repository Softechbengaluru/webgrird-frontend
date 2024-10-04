"use client"
import React from 'react';
import Link from 'next/link'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
