"use client";
import Link from "next/link";
import React, { useState } from "react";
import TestimonialCarousel from "../components/pages/testimonial";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Logo from "../components/pages/logo";
import Faq from "../components/Faq";

const logosData = [
  {
    logo: "https://www.datocms-assets.com/22695/1715843667-netflix-c.svg",
    description: "Series of visual concepts for improving the user experience",
  },
  {
    logo: "https://www.datocms-assets.com/22695/1715859094-cbre-c.svg",
    description:
      "Marketing website for a subsidiary of the CBRE Group's co-working space company",
  },
  {
    logo: "https://www.datocms-assets.com/22695/1715843686-stripe-c.svg",
    description:
      "Iconography design for a payments infrastructure company with 250M+ API requests per day",
  },
  {
    logo: "https://www.datocms-assets.com/22695/1715859145-nbc-c.svg",
    description: "Official Apple tvOS app user interface development",
  },
  {
    logo: "https://www.datocms-assets.com/22695/1715843699-mozilla-c.svg",
    description:
      "Official Firefox rebrand and ongoing support for design projects at Mozilla",
  },
];

const page = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="bg-black h-[400px] md:pt-0 pt-10">
        <div className="text-center flex justify-center pt-24 pb-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            App design
          </h1>
        </div>
        <div className="text-base xl:mb-28 sm:text-xl text-center mt-2 md:mt-6 sm:mt-4 max-w-[640px] mx-auto w-full font-medium text-slate-200">
          Our app design company studio create mobile apps and web products with
          great conversion, low cost of maintenance and consistent user
          experience.
        </div>
      </div>
      <div className=" flex flex-col min-h-screen w-full item text-xl leading-tight">
        <section className="mx-auto max-w-7xl md:px-0 px-4 py-20">
          <div className="flex justify-start md:mt-10 w-full">
            <div className="text-[33px] sm:text-[40px] font-bold sm:w-[50%] w-full">
              Application design company approach
            </div>
          </div>
          <div className="flex justify-between w-full mt-4 text-lg text-slate-800">
            <Link className="w-28 sm:w-36" href="/work"></Link>
            <div className="w-full sm:w-2/4 text-lg">
              We specialize in working with digital products and brands,
              regardless of the size and lifecycle stage, from startups to
              established businesses striving to achieve significant tech
              leverage.
            </div>
          </div>
        </section>

        <section className="lg:h-[740px] h-fit bg-black text-white md:py-20 py-10 px-4">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-bold md:text-4xl text-[26px]">Case studies</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-14 gap-10 py-14">
              <div
                onMouseEnter={(e) =>
                  e.currentTarget.querySelector("video").play()
                }
                onMouseLeave={(e) =>
                  e.currentTarget.querySelector("video").pause()
                }
              >
                <video
                  playsInline
                  muted
                  className="rounded-md w-[400px] md:h-[300px] h-[200px] object-cover"
                >
                  <source
                    src="https://www.datocms-assets.com/22695/1688546078-salesforce_work_teaser.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div>
                  <h4 className="text-3xl font-bold mt-6">Salesforce</h4>
                  <p className="mt-2 opacity-50">
                    Developing micro-interactions for the Lightning Design
                    System
                  </p>
                </div>
              </div>

              <div
                onMouseEnter={(e) =>
                  e.currentTarget.querySelector("video").play()
                }
                onMouseLeave={(e) =>
                  e.currentTarget.querySelector("video").pause()
                }
              >
                <video
                  playsInline
                  muted
                  className="rounded-md w-[400px] md:h-[300px] h-[200px] object-cover"
                >
                  <source
                    src="https://www.datocms-assets.com/22695/1688546285-turo_work_teaser.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div>
                  <h4 className="text-3xl font-bold mt-6">Turo</h4>
                  <p className="mt-2 opacity-50">
                    Redesign of the support portal and 30% improvement in users’
                    ability to get the answers they want
                  </p>
                </div>
              </div>

              <div
                onMouseEnter={(e) =>
                  e.currentTarget.querySelector("video").play()
                }
                onMouseLeave={(e) =>
                  e.currentTarget.querySelector("video").pause()
                }
              >
                <video
                  playsInline
                  muted
                  className="rounded-md w-[400px] md:h-[300px] h-[200px] object-cover"
                >
                  <source
                    src="https://www.datocms-assets.com/22695/1688546472-tile_work_teaser.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div>
                  <h4 className="text-3xl font-bold mt-6">Tile</h4>
                  <p className="mt-2 opacity-50">
                    Designing a new onboarding flow that increased completed
                    sessions to over 60%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto">
          <h2 className="font-bold md:text-[40px] text-3xl px-10 text-center">
            Capabilities in web and mobile app design services
          </h2>
          <p className="py-4 text-center max-w-5xl md:px-10 px-2 text-lg mx-auto">
            From{" "}
            <a href="#" className="underline">
              competitive analysis to interactive prototypes
            </a>
            , our agency implements engaging and simple-to-use user interfaces.
            Our user-friendly product design helps companies achieve
            quantifiable business goals through output that captivates the
            customer and sets them apart from the competition.
          </p>
          <div className="flex md:flex-row flex-col justify-center px-6 gap-10">
            <div>
              <h4 className="md:text-[34px] text-2xl font-semibold py-6">
                User experience design
              </h4>
              <ul className="list-disc ms-6 text-lg">
                <li>Discovery</li>
                <li>UI/UX audit</li>
                <li>User interface structure</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl md:text-[34px] font-semibold py-6">
                User interface design
              </h4>
              <ul className="list-disc ms-6 text-lg">
                <li>Visual interface & interactions</li>
                <li>High-fidelity clickable prototypes</li>
                <li>UI Kit based on atomic design principles</li>
              </ul>
            </div>
            <div></div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto md:py-20 py-16">
          <h2 className="font-bold md:text-[40px] text-4xl text-center">
            Additional services
          </h2>
          <p className="text-center py-6 text-lg md:px-0 px-2">
            Employ design services to attain rapid growth, refined user
            experiences, and measurable success for business.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:px-10 px-4">
            <div>
              <h4 className="text-2xl md:text-[34px] underline font-semibold py-6">
                Branding
              </h4>
              <p className="text-lg">
                Ignite your brand's potential and captivate audiences with our
                strategic design approach.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-[34px] underline font-semibold py-6">
                Web design
              </h4>
              <p className="text-lg">
                Stand out in the digital landscape with our innovative website
                design that combine aesthetics and usability.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-[34px] underline font-semibold py-6">
                UI/UX design
              </h4>
              <p className="text-lg">
                Maximize user engagement with our cutting-edge UI/UX design that
                align with user needs.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-[34px] underline font-semibold py-6">
                Web app development
              </h4>
              <p className="text-lg">
                Leverage our strategic{" "}
                <a href="#" className="underline">
                  web app development
                </a>{" "}
                to create powerful and intuitive online experiences.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-[34px] underline font-semibold py-6">
                Design system
              </h4>
              <p className="text-lg">
                Create robust{" "}
                <a href="#" className="underline">
                  design system to unify teams
                </a>
                , enhance collaboration, and drive product success.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-[34px] underline font-semibold py-6">
                Startup web app development
              </h4>
              <p className="text-lg">
                Boost your startup's digital reach with our team's expertise in
                delivering custom{" "}
                <a href="#" className="underline">
                  web app solutions
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* <section className="max-w-7xl w-full mx-auto md:py-20 py-10 px-4">
          <div className="flex justify-start w-full">
            <div className="text-3xl sm:text-[40px] font-bold sm:w-[50%] w-full">
              Why WebGrid?
            </div>
          </div>
          <div className="flex justify-between w-full text-sm mt-4 sm:text-lg text-slate-800">
            <Link className="w-28 sm:w-36" href="/work"></Link>
            <div className="w-full sm:w-2/4 text-lg">
              At WebGrid, we blend innovative web design with practical
              functionality, ensuring each project is visually appealing and
              user-centric. Our experienced team excels at transforming your
              vision into a digital reality, prioritizing your brand identity
              and audience engagement. With a proven track record of delivering
              bespoke, high-quality web solutions, we customize our services to
              align with your unique needs and goals.
            </div>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 pt-10">
            {logosData?.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative before:absolute before:w-max before:max-w-[280px] text-lg before:p-2 before:rounded before:opacity-0 before:transition-all before:duration-[0.6s] before:transform before:top-40 before:pointer-events-none group-hover:before:opacity-100 group-hover:before:top-4 ${
                    index < logosData.length - 1
                      ? "before:-right-72"
                      : "before:-left-72"
                  } before:content-[attr(data-description)]`}
                  data-description={item.description}
                >
                  <img
                    src={item.logo}
                    alt="logo"
                    className={`w-[300px] transition-opacity duration-300 ${
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "opacity-5"
                        : "opacity-100"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section className="max-w-7xl w-full mx-auto py-10 md:py-20 px-4">
          <div className="flex justify-start w-full">
            <div className="text-3xl sm:text-[40px] font-bold sm:w-[50%] w-full">
              Our app design agency clients
            </div>
          </div>
          <div className="flex justify-between w-full text-sm mt-4 sm:text-lg text-slate-800">
            <Link className="w-28 sm:w-36" href="/work">
              {/* All works <ArrowForwardIcon /> */}
            </Link>
            <div className="w-full sm:w-2/4 text-xl">
              We work with established companies and growing startups around the
              world.
            </div>
          </div>
        </section>

        <section className="max-w-7xl w-full mx-auto">
          <Logo />
        </section>
        <section className=" max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-4 lg:mx-11 mt-20">
            <div className="text-[32px] sm:text-[40px] font-bold">
              <h1 className="w-[90%] sm:w-full">What our partners say</h1>
            </div>
            <div className="flex justify-center">
              <TestimonialCarousel />
            </div>
          </div>
          <div className="md:py-10 md:mt-10">
            <h2 className="font-bold md:text-5xl text-4xl text-center">FAQ</h2>
            <Faq />
          </div>
          <div className="flex justify-center mt-10 sm:mt-28 mb-10 sm:mb-10">

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
        </section>
      </div>
    </>
  );
};

export default page;
