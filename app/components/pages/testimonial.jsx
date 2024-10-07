'use client'
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';


const testimonials = [
    {
        id: 1,
        text: "Ramotion has been a highly talented, adaptive and collaborative design partner ranging from an entire site re-brand to highly responsive and extensible page, component, graphic and icon designs as we evolved our site.",
        author: "Chris Bank",
        title: "Sr. Manager of Customer Online Experience at Okta",
        image: '/Images/Pixels-Wallpaper (38).jpg',
        companyLogo: "/Images/Pixels-Wallpaper (38).jpg",
    },
    {
        id: 2,
        text: "We’ve worked with Ramotion on a large-scale redesign project and the team has been incredibly thoughtful and professional throughout the process. The results speak for themselves!",
        author: "Jane Doe",
        title: "VP of Product at Another Company",
        image: "/Images/Pixels-Wallpaper (39).jpg",
        companyLogo: "/Images/Pixels-Wallpaper (39).jpg",
    },
    {
        id: 3,
        text: "Ramotion was fast and efficient without sacrificing quality. Their team of designers and developers brought our vision to life and we are thankful for their expertise.",
        author: "Chris Chen",
        title: "Head of ColorOS Design Department at Oppo",
        image: "/Images/Pixels-Wallpaper (40).jpg",
        companyLogo: "/Images/Pixels-Wallpaper (39).jpg",
    },
    {
        id: 4,
        text: "They’re very responsive and go above and beyond to meet our needs. We continue working with them, which is the best sign of our satisfaction.",
        author: "Andrew Mason",
        title: "CEO at Descript",
        image: "/Images/Pixels-Wallpaper (41).jpg",
        companyLogo: "/Images/Pixels-Wallpaper (39).jpg",
    },

];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-2xl p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center">
                    <div className="text-center text-black">
                        <div className='w-full flex justify-between items-center'>
                            <Image
                                width={20}
                                height={20}
                                src={testimonials[currentIndex].companyLogo}
                                alt="Company Logo"
                                className="h-16 w-28  mb-4 "
                            />
                            <div className='flex'>
                                <button onClick={handlePrev} className="text-gray-600 flex items-center hover:text-black">
                                    <ArrowBackIcon />
                                </button>
                                <div className="text-center mx-4 text-xl ">
                                    {currentIndex + 1} / {testimonials.length}
                                </div>
                                <button onClick={handleNext} className="text-gray-600 flex items-center hover:text-black">
                                    <ArrowForwardIcon />
                                </button>
                            </div>
                        </div>
                        <p className=" mb-6 h-32 text-left">
                            "{testimonials[currentIndex].text}"
                        </p>
                        <div className="flex justify-start items-center">
                            <Image
                                width={40}
                                height={40}
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].author}
                                className="size-20 object-fill rounded-full mr-4"
                            />
                            <div className='text-xl'>
                                <h3 className="font-bold ">{testimonials[currentIndex].author}</h3>
                                <p className="">{testimonials[currentIndex].title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
