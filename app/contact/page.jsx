"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-12 px-4">
      <div className="mt-5 p-8 md:px-12 rounded-lg w-full max-w-md md:max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          Become a client
        </h1>
        <p className="text-gray-600 text-left text-sm mb-10 md:mb-20">
          Our clients get the best results when they have our team dedicated to
          their business <br />
          for extended periods of time. This is why we are looking for ongoing
          collaboration <br />
          where our professionals are like your team members who just happen to
          be remote. <br />
          Ready to move forward?
        </p>

        <form>
          <input
            type="text"
            placeholder="First name"
            className="w-full mb-6 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[16px] leading-[1.5] min-h-[50px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full mb-6 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[16px] leading-[1.5] min-h-[50px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Job title"
            className="w-full mb-6 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[16px] leading-[1.5] min-h-[50px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="email@company.com"
            className="w-full mb-6 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[16px] leading-[1.5] min-h-[50px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="How did you find Ramotion"
            className="w-full mb-6 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[16px] leading-[1.5] min-h-[50px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mb-6 text-center text-gray-400 text-xs md:text-sm">
            By filling in the form, you agree to our Privacy Policy, including
            our cookie use.
          </div>

          <div className="text-center">
            <button className="bg-gray-300 text-gray-600 px-8 py-4 rounded-full text-lg hover:bg-gray-400 md:px-24 md:py-6">
              Get in Touch
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-gray-600 hover:underline text-xs md:text-sm mr-4"
          >
            Press Inquiries
          </a>
          <span className="text-gray-600 mr-4">→</span>
          <a
            href="#"
            className="text-gray-600 hover:underline text-xs md:text-sm mr-4"
          >
            Join Ramotion
          </a>
          <span className="text-gray-600">→</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
