import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import SVGIcon  from "../components/SvgIcon";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const stats = [
    { icon: <SVGIcon src="/assets/icons/home.svg" zoomOut={2.6}/>, value: "10.5k", label: "Sellers active our site" },
    { icon: <SVGIcon src="/assets/icons/dollar.svg" zoomOut={2.6}/>, value: "33k", label: "Monthly Product Sale" },
    { icon: <SVGIcon src="/assets/icons/bag-black.svg" zoomOut={2.6}/>, value: "45.5k", label: "Customer active in our site" },
    { icon: <SVGIcon src="/assets/icons/half_bag.svg" zoomOut={2.6}/>, value: "25k", label: "Annual gross sale in our site" }
  ];
  
  const imageData = [
    { src: "/assets/icons/person.svg", title: "Tom Cruise", description: "Founder & Chairman" },
    { src: "/assets/icons/person.svg", title: "Emma Watson", description: "Managing Director" },
    { src: "/assets/icons/person.svg", title: "Will Smith", description: "Product Designer" }
  ];
  
  const service = [
      { title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140", icon: "/assets/icons/secure.svg" },
      { title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support", icon: "/assets/icons/secure.svg" },
      { title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days", icon: "/assets/icons/secure.svg" }
  ];
  
export const About = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto p-4 md:p-8 mt-16 md:mt-24">
        <Breadcrumb paths={["About"]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div className="text-left max-w-[650px] tracking-wide">
            <h2 className="font-medium text-5xl mb-10">Our Story</h2>
            <p className="mt-4 font-normal text-base leading-relaxed">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace 
              with an active presence in Bangladesh. Supported by a wide range of tailored 
              marketing, data, and service solutions, Exclusive has 10,500 sellers and 
              300 brands and serves 3 million customers across the region.
            </p>
            <p className="mt-4 font-normal text-base leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a very fast rate. 
              Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="flex justify-end w-[800px] ml-12 overflow-hidden">
            <SVGIcon 
                src="https://img.freepik.com/free-photo/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone_181624-31562.jpg?t=st=1743077643~exp=1743081243~hmac=218bf1b98b4179fd878f921d23b217234f834c2721d8f625bedc89a998453afd&w=2000" 
                alt="Shopping" 
                className="w-[800px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              className={`w-[237px] h-[200px] flex flex-col items-center justify-center border border-black/30 p-4 transition-all cursor-pointer ${
                index === activeIndex ? "bg-red-500 text-white" : "bg-white border-black"
              }`}
            >
              <div className="mb-2">{stat.icon}</div>
              <h3 className="text-xl font-semibold">{stat.value}</h3>
              <p className="text-sm text-center">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-40"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
        {imageData.map((image, index) => (
            <div key={index} className="flex flex-col items-start">
            <SVGIcon src={image.src} zoomOut={16} className="mb-4" />
            <h3 className="text-2xl font-normal tracking-[2px]">{image.title}</h3>
            <p className="text-xs font-normal">{image.description}</p>
            <div className="flex items-center space-x-4 mt-3">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaTwitter size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                <FaInstagram size={18} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                <FaLinkedin size={18} />
                </a>
            </div>
            </div>
        ))}
        </div>
        <div className="mt-10"></div>
        <div className="flex justify-center items-center space-x-1 mt-6">
            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
            <div className="h-3 w-3 border border-gray-400 rounded-full flex items-center justify-center">
                <div className="h-1.5 w-1.5 bg-red-500 rounded-full"></div>
            </div>
            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
      <div className="mt-32"></div>
      <div className="grid md:grid-cols-5 text-center mt-10 gap-3 mx-auto translate-x-72">
        {service.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
                <div className="h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
                        <SVGIcon src={item.icon} className="h-6 w-6 text-white" />
                    </div>
                </div>
                <h3 className="text-lg font-bold mt-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
        ))}
    </div>
    <div className="mt-32"></div>
    </div>
  );
};

export default About;
