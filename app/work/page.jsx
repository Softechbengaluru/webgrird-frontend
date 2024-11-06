"use client";
import { useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function Home() {
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleMouseEnter = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
      videoRefs[index].current.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen w-screen container mx-auto">
      <div className="min-h-screen bg-white">
        <header className="text-center py-16">
          <h1 className="text-4xl lg:text-8xl my-10 font-bold">
            We take products and brands to the next level
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            {[
              "Featured",
              "B2B",
              "Fintech",
              "SaaS",
              "Security",
              "Healthcare",
              "Entertainment",
              "IoT",
              "Dev tools",
              "AI",
            ].map((tag, index) => (
              <button
                key={index}
                type="button"
                className="flex justify-center gap-2 items-center bg-[#e9e9e9] text-sm lg:text-lg lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#2f77ea] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                {tag}
              </button>
            ))}
          </div>
        </header>
        <main className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <div className="w-full">
              <video
                ref={videoRefs[0]}
                className="w-full h-auto object-cover rounded-lg"
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
                muted
                loop
                preload="metadata"
                poster="https://www.datocms-assets.com/22695/1728340476-firefox_preview.jpg"
              >
                <source
                  src="https://www.datocms-assets.com/22695/1728323207-cover-render-1-3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-start text-lg lg:text-xl font-semibold mt-2">
                Firefox
              </p>
            </div>
            <div className="w-full">
              <video
                ref={videoRefs[1]}
                className="w-full h-auto object-cover rounded-lg"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                muted
                loop
                preload="metadata"
                poster="https://www.datocms-assets.com/22695/1637936818-salesforce-cover-800x600.jpg"
              >
                <source
                  src="https://www.datocms-assets.com/22695/1688546078-salesforce_work_teaser.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-start text-lg lg:text-xl font-semibold mt-2">
                Salesforce
              </p>
            </div>
            <div className="w-full">
              <video
                ref={videoRefs[2]}
                className="w-full h-auto object-cover rounded-lg"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
                muted
                loop
                preload="metadata"
                poster="https://www.datocms-assets.com/22695/1702050508-ramotion-animation-cover-still-1600-1200.jpg"
              >
                <source
                  src="https://www.datocms-assets.com/22695/1724924838-clearbit_work_teaser.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-start text-lg lg:text-xl font-semibold mt-2">
                Clearbit
              </p>
            </div>
            <div className="w-full">
              <video
                ref={videoRefs[3]}
                className="w-full h-auto object-cover rounded-lg"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
                muted
                loop
                preload="metadata"
                poster="https://www.datocms-assets.com/22695/1703792875-citrix-work-cover-1.jpeg"
              >
                <source
                  src="https://www.datocms-assets.com/22695/1703792875-citrix-work-cover-1.mp4" // Correct video source
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-start text-lg lg:text-xl font-semibold mt-2">
                Citrix
              </p>
            </div>
            <div className="w-full">
              <video
                ref={videoRefs[4]}
                className="w-full h-auto object-cover rounded-lg"
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
                muted
                loop
                preload="metadata"
                poster="https://www.datocms-assets.com/22695/1637936894-turo-ff.jpg"
              >
                <source
                  src="https://www.datocms-assets.com/22695/1688546285-turo_work_teaser.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-start text-lg lg:text-xl font-semibold mt-2">
                Series of visual concepts for improving the user experience
              </p>
            </div>
            <div className="w-full">
              <video
                ref={videoRefs[5]}
                className="w-full h-auto object-cover rounded-lg"
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={() => handleMouseLeave(5)}
                muted
                loop
                preload="metadata"
                poster="https://www.datocms-assets.com/22695/1587548593-volusion-800-600.png"
              >
                <source
                  src="https://www.datocms-assets.com/22695/1688546239-volusion_work_teaser.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className="text-start text-lg lg:text-xl font-semibold mt-2">
                Volusion
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16 sm:mt-28 mb-20 sm:mb-44">

          <Link href="/contact">
          <button
            type="submit"
            className="flex px-6 sm:px-11 sm:py-5 2xl:px-28 lg:px-20 lg:h-20 2xl:text-3xl xl:text-2xl xl:h-20 xl:px-20 2xl:h-24 justify-center gap-2 items-center mx-auto shadow-xl font-normal bg-[#262626] backdrop-blur-md text-white isolation-auto border-[#262626] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-[#262626] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-2 overflow-hidden border-2 rounded-full group"
          >
            Shall we Talk?
            <ArrowForwardIcon />
          </button>
          </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
