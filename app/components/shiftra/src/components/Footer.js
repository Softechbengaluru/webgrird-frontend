import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between gap-16 pl-10">
        <div className="w-1/4 text-left ">
          <h2 className="font-bold text-lg">
            <a href="/dashboard">Shiftra</a>
          </h2>
          <p>Subscribe Now and Get 10% off your first order</p>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 text-black w-2/3 focus:outline-none"
            />
            <button className="bg-white text-black px-3 py-2">→</button>
          </div>
        </div>

        <div className="w-1/4 text-left">
          <h3 className="font-bold">
            <a href="#">Support</a>
          </h3>
          <p>No 19, Bhattarahalli</p>
          <p>Bengaluru - 560049</p>
          <p>customercare@shiftra.com</p>
          <p>+91 98765 43210</p>
        </div>

        <div className="w-1/4 text-left">
          <h3 className="font-bold">
            <a href="#">Quick Link</a>
          </h3>
          <ul className="space-y-1">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="w-1/4 text-left">
          <h3 className="font-bold">
            <a href="#">Download App</a>
          </h3>
          <p>Save ₹300 with App New User Only</p>
          <p>
            <a href="#">Play Store</a> | <a href="#">App Store</a>
          </p>
        </div>
      </div>
    </div>
  );
}
