"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".mobile-menu") &&
      !servicesRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
      setServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setServicesOpen(false);
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link href="/">
            <img src="/images/logo.jpeg" height={200} width={200} alt="Logo" />
          </Link>
        </div>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`hidden md:flex space-x-4 relative h-12`}
          ref={servicesRef}
        >
          <Link
            href="/work"
            onClick={handleLinkClick}
            className="relative text-gray-700 hover:text-black-900 hover:font-bold group px-3 py-2 rounded"
          >
            Work
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <div
            className="group relative"
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onMouseEnter={() => setServicesOpen(true)}
              className="relative text-gray-700 hover:text-black-900 hover:font-bold group px-3 py-2 rounded"
            >
              Capabilities
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="ml-2" style={{ fontSize: "10px" }}>
                {isServicesOpen ? "▲" : "▼"}
              </span>
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 text-black bg-white w-48 rounded mt-1 shadow-lg">
                {[
                  { name: "Web development", href: "/web-design" },
                  { name: "Mobile app development", href: "/app-design" },
                  { name: "UI/UX Development", href: "/ui-ux-design" },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    onClick={handleLinkClick}
                    className="relative block text-gray-700 hover:text-black-900 hover:font-bold group px-4 py-2"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="relative text-gray-700 hover:text-black-900 hover:font-bold group px-3 py-2 rounded"
          >
            About
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="relative text-lg font-bold overflow-hidden px-6 py-2 border border-black bg-white text-black rounded-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black"
          >
            <span className="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-black z-0 hover:translate-x-0"></span>
            <span className="relative z-10">Contact</span>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white max-h-[80vh] overflow-y-auto mobile-menu">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/work"
              onClick={handleLinkClick}
              className="relative text-gray-600 group px-3 py-2 rounded hover:text-black-900 hover:font-bold"
            >
              Work
            </Link>

            <div className="relative">
              <button
                onClick={toggleServices}
                className="relative text-gray-600 bg-white px-3 py-2 rounded flex justify-between w-full hover:text-black-900 hover:font-bold"
              >
                Capabilities
                <span>{isServicesOpen ? "▲" : "▼"}</span>
              </button>
              {isServicesOpen && (
                <div className="bg-wheat w-full rounded mt-1">
                  {[
                    { name: "Web development", href: "/web-design" },
                    { name: "Mobile app development", href: "/app-design" },
                    { name: "UI/UX Development", href: "/ui-ux-design" },
                  ].map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={handleLinkClick}
                      className="relative block text-black group px-4 py-2 hover:text-gray-900 hover:font-bold"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={handleLinkClick}
              className="relative text-gray-600 group px-3 py-2 rounded hover:text-black-900 hover:font-bold"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="relative text-lg font-bold overflow-hidden px-6 py-2 border border-black bg-white text-black rounded-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black"
            >
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
