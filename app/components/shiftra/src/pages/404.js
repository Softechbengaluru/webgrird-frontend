"use client"; 
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CommonButton from "../components/CommonButton";
// import { useRouter } from "next/router";

export const NotFound = () => {
  // const router = useRouter();
    
  return (
    <div className="min-h-screen bg-white"> 
      <nav className="bg-white shadow-md p-4"></nav>
      <div className="max-w-5xl mx-auto p-8 mt-24">
      <Breadcrumb paths={["404 Error"]} />
      <div className="max-w-5xl mx-auto p-8 mt-24">
      <h1 className="text-8xl font-normal text-sm text-black mt-8">404 Not Found</h1>
      <p className="text-black text-sm mt-4 mb-16">
          Your visited page not found. You may go to the home page.
      </p>
        <CommonButton
          text="Back to Home Page"
          filled
          className="mt-6"
          // onClick={() => router.push("/")}
        />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
