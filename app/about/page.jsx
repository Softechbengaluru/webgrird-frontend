"use client"
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const items = [
    {
        title: 'Mastery',
        content: "Through continuous practice and dedication, we have refined our skills and processes over the past five years, ensuring we deliver top-notch services.",
    },
    {
        title: 'Dependability',
        content: "Creating value hinges on being a trusted partner. We prioritize integrity and commitment to our clients, ensuring that we meet our promises consistently.",
    },
    {
        title: 'Passion',
        content: "Our deep love for web design and development drives us to invest our time and energy into every project. This passion translates into powerful results for our clients.",
    },
    {
        title: 'Flexibility',
        content: "While we adhere to established processes, we remain adaptable to the unique needs of each project or partner, leading to innovative and effective solutions.",
    },
    {
        title: 'Discipline',
        content: "Our disciplined approach shapes our processes and workflows. By maintaining high standards, we ensure reliable and lasting outcomes for our clients.",
    },
    {
        title: 'Creativity',
        content: "We blend inspiration with systematic workflows to foster creativity, enabling us to deliver exceptional results consistently.",
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
        "https://www.datocms-assets.com/22695/1721390727-10-percent-happier-c.svg",
        "https://www.datocms-assets.com/22695/1721390730-cafex-c.svg",
        "https://www.datocms-assets.com/22695/1721390734-cypress-c.svg",
        "https://www.datocms-assets.com/22695/1721390735-datum-c.svg",
        "https://www.datocms-assets.com/22695/1721390736-descript-c.svg",
        "https://www.datocms-assets.com/22695/1721390738-filecoin-c.svg",
        "https://www.datocms-assets.com/22695/1721390739-flatfile-c.svg",
        "https://www.datocms-assets.com/22695/1721390741-greenfly-c.svg",
        "https://www.datocms-assets.com/22695/1721390746-island-c.svg",
        "https://www.datocms-assets.com/22695/1721390747-justalk-c.svg",
        "https://www.datocms-assets.com/22695/1721390749-kyber-network-c.svg",
        "https://www.datocms-assets.com/22695/1721390753-metaspark-c.svg",
        "https://www.datocms-assets.com/22695/1721390755-nextmv-c.svg",
        "https://www.datocms-assets.com/22695/1721390757-ninox-c.svg",
        "https://www.datocms-assets.com/22695/1721390759-proven-c.svg",
        "https://www.datocms-assets.com/22695/1721886849-puzzle-c.svg",
        "https://www.datocms-assets.com/22695/1721390761-searchable-c.svg",
        "https://www.datocms-assets.com/22695/1721390763-stable-c.svg",
        "https://www.datocms-assets.com/22695/1721390765-transcend-c.svg",
        "https://www.datocms-assets.com/22695/1721390767-vela-c.svg"
    ],
    smallBusiness: [
        "https://www.datocms-assets.com/22695/1721391010-crunchbase-c.svg",
        "https://www.datocms-assets.com/22695/1721391012-emihealth-c.svg",
        "https://www.datocms-assets.com/22695/1721391013-flyr-c.svg",
        "https://www.datocms-assets.com/22695/1721391015-go-forward-c.svg",
        "https://www.datocms-assets.com/22695/1721391017-hackerrank-c.svg",
        "https://www.datocms-assets.com/22695/1721391019-healthtap-c.svg",
        "https://www.datocms-assets.com/22695/1721391020-iterable-c.svg",
        "https://www.datocms-assets.com/22695/1721391022-meyers-research-c.svg",
        "https://www.datocms-assets.com/22695/1721391023-proemion-c.svg",
        "https://www.datocms-assets.com/22695/1721391025-redis-c.svg",
        "https://www.datocms-assets.com/22695/1721391028-tigera-c.svg",
        "https://www.datocms-assets.com/22695/1721391029-turo-dark-c.svg",
        "https://www.datocms-assets.com/22695/1721391031-volley-c.svg",
        "https://www.datocms-assets.com/22695/1721391033-volusion-c.svg",
        "https://www.datocms-assets.com/22695/1721391035-xsolla-c.svg"
    ],
    enterprises: [
        "https://www.datocms-assets.com/22695/1721391211-adobe-c.svg",
        "https://www.datocms-assets.com/22695/1721391214-avast-c.svg",
        "https://www.datocms-assets.com/22695/1721391216-bank-al-etihad-c.svg",
        "https://www.datocms-assets.com/22695/1721391219-cbre-c.svg",
        "https://www.datocms-assets.com/22695/1721391225-itt-c.svg",
        "https://www.datocms-assets.com/22695/1721391227-kindercare-c.svg",
        "https://www.datocms-assets.com/22695/1721391229-mozilla-c.svg",
        "https://www.datocms-assets.com/22695/1715859145-nbc-c.svg",
        "https://www.datocms-assets.com/22695/1721391379-netflix-c.svg",
        "https://www.datocms-assets.com/22695/1721391381-okta-c.svg",
        "https://www.datocms-assets.com/22695/1721391383-opera-c.svg",
        "https://www.datocms-assets.com/22695/1721391386-oppo-c.svg",
        "https://www.datocms-assets.com/22695/1721886872-opswat-c.svg",
        "https://www.datocms-assets.com/22695/1721886874-orca-c.svg",
        "https://www.datocms-assets.com/22695/1721391388-salesforce-c.svg",
        "https://www.datocms-assets.com/22695/1721391391-southern-company-c.svg",
        "https://www.datocms-assets.com/22695/1721391393-stripe-c.svg",
        "https://www.datocms-assets.com/22695/1721391396-universal-music-c.svg",
        "https://www.datocms-assets.com/22695/1721391398-xero-c.svg"
    ]
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
                            <h2 class="text-5xl font-bold text-black-600">5+</h2>
                            <p class="text-lg text-gray-700 mt-2">Years in the industry</p>
                        </div>

                        <div class="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 class="text-5xl font-bold text-black-600">5</h2>
                            <p class="text-lg text-gray-700 mt-2">Startup clients raised</p>
                        </div>

                        <div class="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 class="text-5xl font-bold text-black-600">$11.90</h2>
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
                        // <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-100 text-center">
                        //     {company}
                        // </div>
                        <img src={company} />
                    ))}
                </div>
            </div>

            <div className='flex justify-center mt-16 sm:mt-28 mb-20 sm:mb-44'>
                <Link href="/contact"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    type="submit"
                    className="flex px-6 sm:px-11 sm:py-5 2xl:px-28 lg:px-20 lg:h-20 2xl:text-3xl xl:text-2xl xl:h-20 xl:px-20 2xl:h-24 justify-center gap-2 items-center mx-auto shadow-xl font-normal bg-[#262626] backdrop-blur-md text-white isolation-auto border-[#262626] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-[#262626] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-2 overflow-hidden border-2 rounded-full group"
                >
                    {hovered ? "Let's get together" : 'Shall We Talk?'}
                    <ArrowForwardIcon />
                </Link>
            </div>

        </>
    )
}

export default About;