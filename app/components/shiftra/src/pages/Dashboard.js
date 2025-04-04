import React from "react";
import ImageSlider from "../components/Dashboard/ImageSlider";
import TodaysDealsSection from "../components/Dashboard/TodaysDeals";
import BestSellersSection from "../components/Dashboard/BestSellers";
import TopCategories from "../components/Dashboard/TopCategories";
import OurProducts from "../components/Dashboard/OurProducts";
import SVGIcon from "../components/SvgIcon";
import ListCard from "../components/ListCard";

const service = [
  { title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140", icon: "/assets/icons/secure.svg" },
  { title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support", icon: "/assets/icons/secure.svg" },
  { title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days", icon: "/assets/icons/secure.svg" }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <div>
        <ImageSlider />
        <TodaysDealsSection />
        <TopCategories />
        <BestSellersSection />
        <SVGIcon
          src='/assets/images/speaker-banner.png'
          alt="Slider"
          zoomOut={60}
          className=" my-20 object-cover transition-opacity duration-500"
        />
        <OurProducts />
        <div className="mt-16">
          <hr className="border-t border-gray-300 mb-10 md:mb-16" />
          <div className="mb-8">
            <ListCard title="Featured" textColor="red-500"/>
          </div>
          <div className="flex items-center justify-between mb-0 md:mb-12">
            <div className="flex items-center space-x-6">
              <h2 className="text-3xl font-bold">New Arrival</h2>
            </div>
          </div>
                <div className="grid grid-cols-4 grid-rows-6 gap-2 md:gap-6 w-full h-[250px] md:h-[600px] mt-10">
                    <div className="col-span-2 row-span-6">
                        <SVGIcon src="/assets/images/ps5.png" alt="Grid 1" className="w-full h-full object-cover rounded-sm" />
                    </div>
                    <div className="col-span-2 row-span-3">
                        <SVGIcon src="/assets/images/womens-hat.png" alt="Grid 2" className="w-full h-full object-cover rounded-sm" />
                    </div>
                    <div className="col-span-1 row-span-3">
                        <SVGIcon src="/assets/images/speaker.png" alt="Grid 3" className="w-full h-full object-cover rounded-sm" />
                    </div>
                    <div className="col-span-1 row-span-3">
                        <SVGIcon src="/assets/images/perfume.png" alt="Grid 4" className="w-full h-full object-cover rounded-sm" />
                    </div>
                </div>
        </div>
        <div className="max-w-6xl mx-auto p-8 px-24 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-6 mx-auto">
                {service.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                                <SVGIcon src={item.icon} className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold mt-3">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}