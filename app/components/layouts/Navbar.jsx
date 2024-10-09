"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);

  const handleClickOutside = (event) => {
    if (!event.target.closest('.mobile-menu')) {
      setMobileMenuOpen(false);
      setServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const setServiceTab = () => {
    setServicesOpen(true)
  }

  const navTabClose = () => {
    setServicesOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link href="/">WebGrid</Link></div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex space-x-4 relative h-12`}>
          <Link href="/work" className="text-gray-700 hover:text-black px-3 py-2 rounded">
            Work
          </Link>
          <div className="group relative" ref={servicesRef} onMouseLeave={() => navTabClose()}>
            <button
              onMouseEnter={() => setServiceTab()}
              className="text-black hover:text-[#49ffe6] px-3 py-2 rounded"
            >
              Capablities
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 text-black bg-wheat w-48 rounded mt-1 shadow-lg">
                <a href="#service1" className="block text-gray-600 hover:text-black px-4 py-2">Web development</a>
                <a href="#service2" className="block text-gray-600 hover:text-black px-4 py-2">Mobile app development</a>
                <a href="#service3" className="block text-gray-600 hover:text-black px-4 py-2">UI/UI Development</a>
                <a href="#service4" className="block text-gray-600 hover:text-black px-4 py-2">Desktop app development</a>
                <a href="#service5" className="block text-gray-600 hover:text-black px-4 py-2">Digital product development</a>
              </div>
            )}
          </div>
          <Link href="/about" className="text-gray-700 hover:text-black px-3 py-2 rounded">
            About
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-black px-3 py-2 rounded">
            Blog
          </Link>
        </div>
        <div className='hidden md:flex'>
          <Link href="/contact" className="relative text-lg font-bold overflow-hidden px-6 py-2 border border-black bg-white text-black rounded-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black">
            <span className="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-black z-0 hover:translate-x-0"></span>
            <span className="relative z-10">Contact</span>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white max-h-[80vh] overflow-y-auto mobile-menu">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/work" className="text-gray-600 hover:text-black px-3 py-2 rounded">Work</Link>
            <div className="relative">
              <button onClick={toggleServices} className="text-black bg-white px-3 py-2 rounded flex justify-between w-full">
                Capabilities
                <span>{isServicesOpen ? '-' : '+'}</span>
              </button>
              {isServicesOpen && (
                <div className="bg-wheat w-full rounded mt-1">
                  <Link href="#service1" className="block text-black px-4 py-2">Web development</Link>
                  <Link href="#service2" className="block text-black px-4 py-2">Mobile app development</Link>
                  <Link href="#service3" className="block text-black px-4 py-2">UI/UX development</Link>
                  <Link href="#service4" className="block text-black px-4 py-2">Desktop app development</Link>
                  <Link href="#service5" className="block text-black px-4 py-2">Digital product development</Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-600 hover:text-black px-3 py-2 rounded">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-black px-3 py-2 rounded">Blog</Link>
            <Link href="/contact" className="relative text-lg font-bold overflow-hidden px-6 py-2 border border-black bg-white text-black rounded-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black">
              <span className="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-black z-0 hover:translate-x-0"></span>
              <span className="relative z-10">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

