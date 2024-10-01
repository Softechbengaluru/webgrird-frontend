"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex'>
      <p >&copy; 2024 MyApp. All rights reserved.</p>
      <ul className='flex'>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;