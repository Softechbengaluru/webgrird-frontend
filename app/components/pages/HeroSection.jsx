import Inter from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Logo from "./logo";
import TestimonialCarousel from "./testimonial";
import Head from "next/head";

export default function Hero() {
  return (
    <>
       <Head>
        <meta name="google-adsense-account" content="ca-pub-6385730756188926" />
      </Head>
      <div className="sm:mx-3 mx-2 container xl:mx-auto 2xl:mt-44 mt-16 xl:mt-36 flex flex-col min-h-screen w-screen item text-xl leading-tight">
        <div className="text-center text-[24px] sm:text-[30px] flex justify-center md:text-[45px] xl:text-[65px] 2xl:text-[100px] font-bold">
          <h1 className="w-[90%] sm:w-[75%] 2xl:w-2/3 xl:w-2/4">
            Tailored Solutions for Growing Brands
          </h1>
        </div>

        <div className="text-base xl:mb-28 sm:text-xl text-center mt-6 sm:mt-8 w-full font-medium text-slate-800">
          We specialize in helping emerging brands unlock their digital
          potential.
        </div>

        <video
          poster="/assets/Images/home-poster.jpg"
          playsInline
          preload="auto"
          muted
          autoPlay
          className="rounded-xl sm:w-full w-[98%]"
        >
          <source src="/assets/videos/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex justify-start mt-10 w-full">
          <div className="text-[22px] sm:text-[30px] font-bold sm:w-[60%] w-full">
            Focused on your brand&apos;s growth
          </div>
        </div>

        <div className="flex justify-between w-full text-sm sm:text-lg mt-6 sm:my-8 text-slate-800">
          <Link className="w-28 sm:w-36" href="/work">
            View Portfolio <ArrowForwardIcon />
          </Link>
          <div className="w-full sm:w-2/4 mt-8 sm:mt-14 mb-20 text-base sm:text-lg">
            From strategy to execution, we help new brands make an impact.
            Whether you're a startup or a growing business, our team ensures
            you’re equipped for digital success.
          </div>
        </div>

        <Logo />
        <div className="flex justify-start mt-20 sm:mt-44 w-full">
          <div className="text-[28px] sm:text-[43px] font-bold w-1/2">
            Proven Results
          </div>
        </div>

        <div className="flex justify-between w-full my-8 text-sm sm:text-lg text-slate-800">
          <div>
            View Our Impact <ArrowForwardIcon />{" "}
          </div>
          <div className="w-full sm:w-2/4 mt-10 sm:mt-0 text-base sm:text-lg">
            Our track record reflects our commitment to measurable, data-driven
            outcomes, enabling our partners to grow with confidence and clarity.
          </div>
        </div>

        <div className="stats grid grid-cols-2 sm:grid-cols-4 mt-10 gap-8">
          <div className="item">
            <p className="text-base sm:text-lg">Our Team</p>
            <strong className="text-4xl sm:text-6xl">5</strong>
          </div>
          <div className="item">
            <p className="text-base sm:text-lg">Founded In</p>
            <strong className="text-4xl sm:text-6xl">2023</strong>
          </div>
          <div className="item">
            <p className="text-base sm:text-lg">Successful Projects</p>
            <strong className="text-4xl sm:text-6xl">12+</strong>
          </div>
          <div className="item">
            <p className="text-base sm:text-lg">Clients' Revenue Growth</p>
            <strong className="text-4xl sm:text-6xl">10K+</strong>
          </div>
        </div>

        <div className="mt-28 text-[36px] sm:text-[48px] font-bold">
          <h1>At the Intersection of Innovation and Impact</h1>
        </div>

        <div className="flex justify-end text-base sm:text-lg mt-12 sm:mt-14 text-slate-800 mb-40">
          <p className="w-[90%] sm:w-1/2">
            With a year in the industry, we provide a suite of services that
            work in harmony to elevate your brand across all digital channels.
            Our goal is to foster growth through seamless, impactful digital
            experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:mx-11">
          <div className="text-[32px] sm:text-[40px] font-bold">
            <h1 className="w-[90%] sm:w-[20rem]">What Our Partners Say</h1>
          </div>
          <div className="flex justify-center">
            <TestimonialCarousel />
          </div>
        </div>

        <div className="flex justify-center mt-16 sm:mt-28 mb-20 sm:mb-44">
          <Link href="/contact">
            <button
              type="submit"
              className="flex px-6 sm:px-11 sm:py-5 2xl:px-28 lg:px-20 lg:h-20 2xl:text-3xl xl:text-2xl xl:h-20 xl:px-20 2xl:h-24 justify-center gap-2 items-center mx-auto shadow-xl font-normal bg-[#262626] backdrop-blur-md text-white isolation-auto border-[#262626] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-[#262626] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-2 overflow-hidden border-2 rounded-full group"
            >
              Let’s Connect
              <ArrowForwardIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
