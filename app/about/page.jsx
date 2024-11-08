"use client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//testing website

const values = [
  {
    title: "Mastery",
    content:
      "Our team constantly refines skills and processes, delivering top-tier services in web development.",
  },
  {
    title: "Dependability",
    content:
      "We are committed to integrity and reliability, ensuring we meet our promises and build long-lasting partnerships.",
  },
  {
    title: "Passion",
    content:
      "Fueled by a deep passion for design and development, we invest our time and energy to drive impactful results.",
  },
  {
    title: "Flexibility",
    content:
      "We stay adaptable, tailoring our approach to each project’s unique needs, fostering innovative and effective solutions.",
  },
  {
    title: "Discipline",
    content:
      "Our disciplined approach maintains high standards, ensuring outcomes that are both dependable and enduring.",
  },
  {
    title: "Creativity",
    content:
      "Combining creativity with structured processes, we consistently deliver exceptional results for our clients.",
  },
];

const testimonials = {
  0: [
    {
      content:
        "WebGrid transformed our digital presence with unmatched expertise!",
      author: "Arjun Patel, Mumbai",
    },
    {
      content: "Their unique approach led to outstanding growth for our brand.",
      author: "Priya Mehta, Bangalore",
    },
  ],
  1: [
    {
      content:
        "Reliable and results-driven, they’re our go-to digital partner!",
      author: "Ravi Kumar, Delhi",
    },
    {
      content: "Highly recommend their professional services!",
      author: "Sneha Desai, Pune",
    },
  ],
  2: [
    {
      content: "Their dedication is truly commendable.",
      author: "Vikram Singh, Chennai",
    },
    {
      content: "A crucial partner in our success story.",
      author: "Aditi Sharma, Hyderabad",
    },
  ],
  3: [
    {
      content: "A team that listens and delivers beyond expectations.",
      author: "Anjali Nair, Kolkata",
    },
    {
      content: "Exceptional support and quality of service!",
      author: "Rajesh Joshi, Jaipur",
    },
  ],
};

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTabTestimonials, setCurrentTabTestimonials] = useState(
    testimonials[0]
  );
  const [hovered, setHovered] = useState(false);

  const capabilities = [
    {
      title: "Refresh and reposition",
      content: (
        <>
          <p>
            Update your brand’s relevance, secure new investments, and engage
            the market.
          </p>
          <ul className="list-disc pl-5">
            <li>Audit and positioning</li>
            <li>Brand strategy and personality</li>
            <li>Creative platform</li>
            <li>Visual identity redesign</li>
            <li>Website or app redesign</li>
          </ul>
        </>
      ),
    },
    {
      title: "Scale up and expansion",
      content: (
        <>
          <p>
            Boost your brand presence, engage new audiences, and expand into new
            markets.
          </p>
          <ul className="list-disc pl-5">
            <li>Brand identity development</li>
            <li>Brand family creation</li>
            <li>Design system development</li>
          </ul>
        </>
      ),
    },
    {
      title: "Team extension",
      content: (
        <>
          <p>
            Integrate with your marketing and product teams for seamless support
            and growth.
          </p>
          <ul className="list-disc pl-5">
            <li>Brand & marketing design support</li>
            <li>UI/UX design services</li>
            <li>Frontend & backend development</li>
            <li>Quality assurance & maintenance</li>
          </ul>
        </>
      ),
    },
    {
      title: "Prepare for M&A or IPO",
      content: (
        <>
          <p>
            Align your brand for mergers, acquisitions, or public offerings.
          </p>
          <ul className="list-disc pl-5">
            <li>Strategic narrative</li>
            <li>Pre-IPO audit & refresh</li>
            <li>Visual asset management</li>
            <li>Brand governance</li>
          </ul>
        </>
      ),
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
    setCurrentTestimonial(0);
    setCurrentTabTestimonials(testimonials[index]);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % currentTabTestimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + currentTabTestimonials.length) %
        currentTabTestimonials.length
    );
  };

  return (
    <>
      <div className="flex flex-col items-center text-center w-full max-w-[800px] mx-auto px-4 mt-16">
        <h2 className="text-[40px] text-4xl font-bold md:text-[68px] mt-8 leading-none">
          We empower brands to succeed in digital
        </h2>
        <h6 className="text-lg md:text-xl mt-8">
          WebGrid is a dedicated digital agency, bringing together expertise in
          design, technology, and psychology to drive measurable outcomes for
          startups and established brands. We focus on partnerships where we can
          deliver distinct, quantifiable results.
        </h6>
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-black-600">2023</h2>
              <p className="text-lg text-gray-700 mt-2">Established</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-black-600">15+</h2>
              <p className="text-lg text-gray-700 mt-2">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-black-600">5+</h2>
              <p className="text-lg text-gray-700 mt-2">Industries Served</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black-600">
                {value.title}
              </h3>
              <p className="text-gray-700 mt-2">{value.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center mb-8 mt-8">
          Capabilities
        </h2>
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            {capabilities.map((capability, index) => (
              <div key={index} className="border-b bg-gray-200">
                <button
                  className={`w-full text-left flex justify-between items-center p-4 hover:bg-gray-200 font-bold text-lg focus:outline-none ${
                    activeTab === index ? "bg-gray-200 font-bold" : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <span>{capability.title}</span>
                  <span
                    className={`transition-transform ${
                      activeTab === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {activeTab === index && (
                  <div className="p-4 border border-gray-300 rounded-md mt-2">
                    {capability.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
              {currentTabTestimonials.length > 0 && (
                <>
                  <p className="text-lg text-gray-700 italic">
                    "{currentTabTestimonials[currentTestimonial].content}"
                  </p>
                  <p className="mt-4 text-right font-semibold">
                    {currentTabTestimonials[currentTestimonial].author}
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-between w-full mt-4">
              <button
                className="text-blue-600 hover:underline"
                onClick={handlePrevTestimonial}
                disabled={currentTabTestimonials.length <= 1}
              >
                Prev
              </button>
              <button
                className="text-blue-600 hover:underline"
                onClick={handleNextTestimonial}
                disabled={currentTabTestimonials.length <= 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 sm:mt-28 mb-20 sm:mb-44">
        <Link
          href="/contact"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          type="submit"
          className="flex px-6 sm:px-11 sm:py-5 2xl:px-28 lg:px-20 lg:h-20 2xl:text-3xl xl:text-2xl xl:h-20 xl:px-20 2xl:h-24 justify-center gap-2 items-center mx-auto shadow-xl font-normal bg-[#262626] backdrop-blur-md text-white isolation-auto border-[#262626] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-[#262626] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-2 overflow-hidden border-2 rounded-full group"
        >
          {hovered ? "Let's get together" : "Shall We Talk?"}
          <ArrowForwardIcon />
        </Link>
      </div>
    </>
  );
};

export default About;
