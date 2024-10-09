"use client"
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const items = [
    {
        title: 'Mastery',
        content: "Constant repetition of processes leads to mastery. We've been honing our craft and improving our processes for years, every day.",
    },
    {
        title: 'Dependability',
        content: "You can't create value without a trusted partner. Staying true to our word is an intrinsic need, not just an external obligation.",
    },
    {
        title: 'Passion',
        content: "A true love for what you do manifests in where you invest your time. The passion for our work is quiet and calm, yet potent.",
    },
    {
        title: 'Flexibility',
        content: "We rely on our processes but adapt to the specific needs of projects or partners. Flexibility leads to lasting improvements.",
    },
    {
        title: 'Discipline',
        content: "Discipline starts within and shapes all our processes. Though meticulous, our standards ensure solid long-term delivery.",
    },
    {
        title: 'Creativity',
        content: "We combine inspiration with workflow to foster systematic creativity and deliver predictable results.",
    },
];

const testimonials = {
    0: [
        { content: "Transforming our business! Their expertise is unmatched!", author: "Client A" },
        { content: "A unique approach that leads to remarkable growth.", author: "Client B" },
    ],
    1: [
        { content: "They deliver results and are incredibly reliable!", author: "Client C" },
        { content: "Highly recommend their services!", author: "Client D" },
    ],
    2: [
        { content: "Their dedication is impressive!", author: "Client E" },
        { content: "An essential partner for our success.", author: "Client F" },
    ],
    3: [
        { content: "A great team that understands our needs.", author: "Client G" },
        { content: "Exceptional support and service!", author: "Client H" },
    ],
};

const companyData = {
    startups: [
        "Startup A",
        "Startup B",
        "Startup C",
        "Startup D",
        "Startup E",
        "Startup F",
    ],
    smallBusiness: [
        "Small Biz A",
        "Small Biz B",
        "Small Biz C",
        "Small Biz D",
        "Small Biz E",
        "Small Biz F",
    ],
    enterprises: [
        "Enterprise A",
        "Enterprise B",
        "Enterprise C",
        "Enterprise D",
        "Enterprise E",
        "Enterprise F",
    ],
};

const companiesList = [
    "Company 1",
    "Company 2",
    "Company 3",
    "Company 4",
    "Company 5",
    "Company 6",
    "Company 7",
    "Company 8",
    "Company 9",
    "Company 10",
];

const About = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [currentTabTestimonials, setCurrentTabTestimonials] = useState(testimonials[0]);
    const [hovered, setHovered] = useState(false);

    const [activeCompanyTab, setActiveCompanyTab] = useState('startups');
    const companyTabs = [
        { title: 'Startups', key: 'startups' },
        { title: 'Small & Midsize Business', key: 'smallBusiness' },
        { title: 'Enterprises', key: 'enterprises' },
    ];

    const tabs = [
        {
            title: 'Refresh and reposition', content: (
                <><p>Update your brand and product to maintain relevance, raise a new round of investment, and appeal in a dynamic market.</p>
                    <ul className="list-disc pl-5">
                        <li>Audit and positioning</li>
                        <li>Brand strategy and personality</li>
                        <li>Creative platform</li>
                        <li>Visual identity redesign</li>
                        <li>Website or app redesign</li>

                    </ul></>
            )
        },
        {
            title: 'Scale up and expansion', content: (
                <><p>Amplify your market presence, engage new audiences and branch into new categories.</p><ul className="list-disc pl-5">
                    <li>Brand Identity development</li>
                    <li>Brand family</li>
                    <li>Design system</li>
                </ul></>
            )
        },
        {
            title: 'Team extension', content: (
                <><p>Augment your marketing, brand, or product team to support business growth and transformation.</p><ul className="list-disc pl-5">
                    <li>Brand & marketing design support</li>
                    <li>Ongoing UI/UX design</li>
                    <li>Frontend & backend development</li>
                    <li>QA & maintenance</li>
                </ul></>
            )
        },
        {
            title: 'Prepare for M&A or IPO', content: (
                <><p>Seamlessly integrate and align brands or prepare your brand for public offering and major corporate changes.</p><ul className="list-disc pl-5">
                    <li>Strategic narrative</li>
                    <li>Pre-IPO audit & refresh</li>
                    <li>Visual assets and guides</li>
                    <li>Brand governance</li>
                </ul></>
            )
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
        setCurrentTestimonial((prev) => (prev - 1 + currentTabTestimonials.length) % currentTabTestimonials.length);
    };

    return (
        <>
            <div className='flex flex-col items-center text-center w-full max-w-[800px] mx-auto px-4 mt-16'>
                <h2 className="text-[40px] text-4xl font-bold md:text-[68px] mt-8 leading-none">
                    We empower brands to
                    succeed in digital
                </h2>
                <h6 className='text-lg md:text-xl mt-8'>
                    Ramotion is an agency that combines expertise in design, technology, and psychology to deliver measurable business outcomes for growing startups and established companies. We strategically curate our client roster, focusing on relationships where we can deliver distinct, quantifiable results.
                </h6>
                <div class="container mx-auto px-4 py-10">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div class="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 class="text-5xl font-bold text-black-600">70+</h2>
                            <p class="text-lg text-gray-700 mt-2">Years in the industry</p>
                        </div>

                        <div class="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 class="text-5xl font-bold text-black-600">15</h2>
                            <p class="text-lg text-gray-700 mt-2">Startup clients raised</p>
                        </div>

                        <div class="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 class="text-5xl font-bold text-black-600">$1B+</h2>
                            <p class="text-lg text-gray-700 mt-2">Total funding raised</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10">
                <h2 className="text-4xl font-bold text-center mb-8">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-black-600">{item.title}</h3>
                            <p className="text-gray-700 mt-2">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-4xl font-bold text-center mb-8 mt-8">Capabilities</h2>
                <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col">
                        {tabs.map((tab, index) => (
                            <div key={index} className="border-b bg-gray-200">
                                <button
                                    className={`w-full text-left flex justify-between items-center p-4 hover:bg-gray-200 font-bold text-lg focus:outline-none ${activeTab === index ? 'bg-gray-200 font-bold' : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <span>{tab.title}</span>
                                    <span className={`transition-transform ${activeTab === index ? 'rotate-180' : ''}`}>
                                        &#9660;
                                    </span>
                                </button>
                                {activeTab === index && (
                                    <div className="p-4 border border-gray-300 rounded-md mt-2">
                                        {tab.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
                            {currentTabTestimonials.length > 0 && (
                                <>
                                    <p className="text-lg text-gray-700 italic">"{currentTabTestimonials[currentTestimonial].content}"</p>
                                    <p className="mt-4 text-right font-semibold">{currentTabTestimonials[currentTestimonial].author}</p>
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

            <div className="container mx-auto px-4 py-10">
                <h2 className="text-4xl font-bold mb-4 text-center">Clients</h2>
                <p className="text-center mb-6 text-lg text-gray-700">
                    Explore our diverse portfolio of partners, ranging from dynamic startups to Fortune 500 companies.
                </p>
                <div className="flex justify-center space-x-2 mb-6">
                    {companyTabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`px-4 py-2 text-center rounded-3xl transition-colors ${activeCompanyTab === tab.key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => setActiveCompanyTab(tab.key)}
                        >
                            <h2 className='text-lg font-medium'>{tab.title}</h2>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                    {companyData[activeCompanyTab].map((company, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-100 text-center">
                            {company}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-10 mt-10">
                <h2 className="text-4xl font-bold mb-4 text-center">Exits</h2>
                <p className="text-center mb-6 text-lg text-gray-700">
                    With more than <span className="font-bold">$6 billion</span> in exits and over <span className="font-bold">$1 billion</span> raised by our clients, our design services have become an inseparable part of their success.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {companiesList.map((company, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-100 text-center">
                            {company}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <Link href="/contact" className="relative text-lg font-bold overflow-hidden px-6 py-2 border border-black bg-white text-black rounded-lg transition-all duration-300 ease-in-out hover:text-white hover:bg-black"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <span className="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-black z-0 hover:translate-x-0"></span>
                    <span className="relative z-10">{hovered ? "Let's get together" : 'Shall We Talk?'}</span>
                </Link>
            </div>
        </>
    )
}

export default About;