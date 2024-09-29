"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className='text-2xl text-red-200'>&copy; 2024 MyApp. All rights reserved.</p>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;