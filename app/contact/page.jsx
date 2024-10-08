"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-50">
      <div className="mt-5 p-8 md:px-12 rounded-lg w-full max-w-2xl ">
        <h1 className="text-6xl font-bold mb-10 text-center">
          Become a client
        </h1>
        <p className="text-gray-600 text-left text-sm mb-20">
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
            className="w-full mb-10 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[18px] leading-[1.5] min-h-[60px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" // Applied custom styles using Tailwind CSS
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full mb-10 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[18px] leading-[1.5] min-h-[60px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" // Applied custom styles using Tailwind CSS
          />
          <input
            type="text"
            placeholder="Job title"
            className="w-full mb-10 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[18px] leading-[1.5] min-h-[60px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" // Applied custom styles using Tailwind CSS
          />
          <input
            type="email"
            placeholder="email@company.com"
            className="w-full mb-10 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[18px] leading-[1.5] min-h-[60px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" // Applied custom styles using Tailwind CSS
          />
          <input
            type="text"
            placeholder="How did you find Ramotion"
            className="w-full mb-10 bg-[#f2f2f2] border border-[#f2f2f2] rounded-[8px] text-[#262626] text-[18px] leading-[1.5] min-h-[60px] px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500" // Applied custom styles using Tailwind CSS
          />
          <div className="mb-10 text-center text-gray-400">
            By filling in the form, you agree to our Privacy Policy, including
            our cookie use.
          </div>

          <div className="text-center">
            <button className="bg-gray-300 text-gray-600 px-24 py-6 rounded-full text-lg hover:bg-gray-400">
              Get in Touch
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-grey-600 hover:underline text-sm mr-4">
            Press Inquiries
          </a>
          <span className="text-gray-600 mr-4">→</span>{" "}
          <a href="#" className="text-grey-600 hover:underline text-sm mr-4">
            Join Ramotion
          </a>
          <span className="text-gray-600">→</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
