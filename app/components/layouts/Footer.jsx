"use client";
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-8 w-full">
      <div className='flex flex-col items-center text-center w-full max-w-[800px] mx-auto px-4 mt-16'>
        <h6 className='text-xl md:text-2xl text-[#39c6b3]'>
          [ 80+ delivered projects ]
        </h6>
        <h2 className="text-[30px] md:text-[52px] mt-8 leading-none">
          See how Webgrid clients are changing the future of tech.
        </h2>
        <h6 className='text-lg md:text-xl mt-8'>
          Since 2015, we’ve helped 80+ fast-growing companies in over 20 different industries build web, mobile and desktop apps that make an impact.
        </h6>
      </div>

      {/* Divider */}
      <div className="my-8">
        <hr className="border-gray-700" />
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
        <div className="flex flex-col items-center">
          <img src="/images/logo.jpeg" height={150} width={150} alt="Logo" />
          <p className="text-xl mt-2 text-center">Since 2015, we’ve helped 80+ fast-growing companies in over 20 different industries build web, mobile and desktop apps that make an impact.</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg text-[#6f7984] font-semibold">SERVICES</h3>
          <ul className="mt-2 space-y-1 text-center">
            <a href="/web-design" className="block text-black py-2">Web development</a>
            <a href="/app-design" className="block text-black py-2">Mobile app development</a>
            <a href="/ui-ux-design" className="block text-black py-2">UI/UX Development</a>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg text-[#6f7984] font-semibold">Technologies</h3>
          <ul className="mt-2 space-y-1 text-center">
            <a href="#team" className="block text-black py-2">React.js</a>
            <a href="#mission" className="block text-black py-2">Node.js</a>
            <a href="#vision" className="block text-black py-2">React Native</a>
            <a href="#history" className="block text-black py-2">Next.js</a>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg text-[#6f7984] font-semibold">Industries</h3>
          <ul className="mt-2 space-y-1 text-center">
            <a href="#team" className="block text-black py-2">Banking</a>
            <a href="#mission" className="block text-black py-2">Blogging</a>
            <a href="#vision" className="block text-black py-2">Fintech</a>
            <a href="#history" className="block text-black py-2">Insurance</a>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-black text-sm">&copy; {new Date().getFullYear()} WebGrid. All rights reserved.</p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-2 md:mt-0">
            <a href="/privacy-policy" className="text-black text-sm">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-black text-sm">Terms & Conditions</a>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0 justify-center">
            <a href="#" className="text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.512 0-10-4.488-10-10S6.488 2 12 2s10 4.488 10 10-4.488 10-10 10zm-5-10h-3v-4h3v-1.5c0-2.982 1.617-4.5 4.5-4.5 1.167 0 2.317.195 2.317.195v3h-1.307c-1.289 0-1.685.8-1.685 1.613V12h4l-.644 4h-3.356v8h-4v-8z" />
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.354 0-9.75 4.396-9.75 9.75 0 4.348 2.814 8.052 6.689 9.375.5.092.682-.217.682-.482 0-.237-.009-.978-.014-1.774-2.724.592-3.304-1.313-3.304-1.313-.447-1.133-1.091-1.433-1.091-1.433-.891-.607.067-.596.067-.596 1.052.074 1.603 1.081 1.603 1.081.934 1.606 2.448 1.141 3.043.872.094-.676.365-1.141.663-1.4-2.221-.25-4.556-1.113-4.556-4.943 0-1.091.39-1.985 1.032-2.684-.104-.25-.447-1.276.098-2.653 0 0 .84-.27 2.748 1.03a9.558 9.558 0 012.5-.336c.853 0 1.708.115 2.5.336 1.908-1.3 2.748-1.03 2.748-1.03.546 1.377.201 2.403.098 2.653.643.699 1.032 1.593 1.032 2.684 0 3.844-2.339 4.68-4.564 4.932.375.323.709.96.709 1.935 0 1.396-.012 2.52-.012 2.857 0 .268.18.576.688.48A9.753 9.753 0 0021.75 12c0-5.354-4.396-9.75-9.75-9.75z" />
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.049c-5.186 0-9.5 4.314-9.5 9.5 0 4.244 2.663 7.847 6.363 9.128.466.085.635-.204.635-.455 0-.225-.008-.978-.013-1.774-2.743.596-3.323-1.325-3.323-1.325-.448-1.137-1.09-1.44-1.09-1.44-.89-.607.067-.596.067-.596 1.052.074 1.603 1.081 1.603 1.081.934 1.606 2.448 1.141 3.043.872.094-.676.365-1.141.663-1.4-2.221-.25-4.556-1.113-4.556-4.943 0-1.091.39-1.985 1.032-2.684-.104-.25-.447-1.276.098-2.653 0 0 .84-.27 2.748 1.03a9.558 9.558 0 012.5-.336c.853 0 1.708.115 2.5.336 1.908-1.3 2.748-1.03 2.748-1.03.546 1.377.201 2.403.098 2.653.643.699 1.032 1.593 1.032 2.684 0 3.844-2.339 4.68-4.564 4.932.375.323.709.96.709 1.935 0 1.396-.012 2.52-.012 2.857 0 .268.18.576.688.48A9.753 9.753 0 0021.75 12c0-5.354-4.396-9.75-9.75-9.75z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
