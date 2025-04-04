"use client"; 
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CommonButton from "../components/CommonButton";
// import { useRouter } from "next/router";
import CommonInput from "../components/CommonInput";
import SVGIcon from "../components/SvgIcon";
import routes from "../utils/routes";
import ResponsiveContainer from "../components/ResponsiveContainer";

export const Contact = () => {
  // const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md p-4 md:p-0"></nav>
      <div className="max-w-7xl mx-auto p-4 md:p-8 mt-16 md:mt-24">
        <Breadcrumb paths={["Contact"]} />
        <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0 md:space-x-6 mt-10">
          <ResponsiveContainer className="md:w-[400px] md:h-[412px]">
            <div className="flex items-center space-x-4 mb-4">
              <SVGIcon src="/assets/icons/call.svg" className="mt-5 md:mt-10" zoomOut={1.4} />
              <h2 className="text-lg font-normal mt-5 md:mt-10">Call To Us</h2>
            </div>
            <p className="text-gray-600 text-sm mb-2 text-left">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-600 text-sm text-left mb-6 md:mb-10">
              Phone: +8801611112222
            </p>
            <hr className="my-4 border-black" />
            <div className="flex items-center space-x-4 mb-3">
              <SVGIcon src="/assets/icons/call.svg" className="mt-3 md:mt-5" zoomOut={1.4} />
              <h2 className="text-lg font-normal mt-3 md:mt-5">Write To Us</h2>
            </div>
            <p className="text-gray-600 text-sm text-left mb-4">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-600 text-sm text-left">Email: customer@exclusive.com</p>
            <p className="text-gray-600 text-sm text-left">Email: support@exclusive.com</p>
          </ResponsiveContainer>
          <ResponsiveContainer className="md:w-[800px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-5">
              <CommonInput type="text" placeholder="Your Name *" className="w-full" />
              <CommonInput type="email" placeholder="Your Email *" className="w-full" />
              <CommonInput type="text" placeholder="Your Phone *" className="w-full" />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-gray-100 mt-2 placeholder-black/30 p-3 w-full h-36 md:h-52 focus:outline-none focus:ring-2 focus:ring-red-500 pl-2.5"
            ></textarea>
            <div className="mt-4 flex justify-end">
              <CommonButton text="Send Message" filled />
            </div>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
