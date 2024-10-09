import Inter from "next/font/google";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Logo from './logo';
import TestimonialCarousel from './testimonial';
export default function Hero() {
  return (
    <>
      <div className="sm:mx-3 mx-2 container xl:mx-auto 2xl:mt-44 mt-16 xl:mt-36 flex flex-col min-h-screen w-screen item text-xl leading-tight">
        <div className='text-center text-[24px] sm:text-[30px] flex justify-center md:text-[45px] xl:text-[65px] 2xl:text-[100px] font-bold '>
          <h1 className='w-[90%] sm:w-[75%] 2xl:w-2/3 xl:w-2/4'>Digital product & brand agency</h1>
        </div>
        <div className='text-base xl:mb-28 sm:text-xl text-center mt-6 sm:mt-8 w-full font-medium text-slate-800'>
          We empower businesses to succeed in the digital space
        </div>
        <video
          poster="https://www.datocms-assets.com/22695/1721808442-main-reel.jpg"
          playsInline
          preload="auto"
          muted
          autoPlay
          className='rounded-xl w-full sm:w-auto'
        >
          <source src="https://stream.mux.com/usSb01nHvu4pT01e5qFmoll61TqYzq5tQR/low.mp4" type="video/mp4" media="(max-width: 600px)" />
          <source src="https://stream.mux.com/usSb01nHvu4pT01e5qFmoll61TqYzq5tQR/medium.mp4" type="video/mp4" media="(min-width: 601px) and (max-width: 1023px)" />
          <source src="https://www.datocms-assets.com/22695/1715091338-30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='flex justify-start mt-10 w-full'>
          <div className='text-[22px] sm:text-[30px] font-bold sm:w-[60%] w-full'>
            For companies with tech leverage
          </div>
        </div>
        <div className='flex justify-between w-full text-sm sm:text-lg mt-6 sm:my-8 text-slate-800'>
          <Link className='w-28 sm:w-36' href='/work'>
            All works <ArrowForwardIcon />
          </Link>
          <div className='w-full sm:w-2/4 mt-8 sm:mt-14 mb-20  text-base sm:text-lg'>
            We specialize in working with digital products and brands, regardless of the size and lifecycle stage, from startups to established businesses striving to achieve significant tech leverage.
          </div>
        </div>
        <Logo />
        <div className='flex justify-start mt-20 sm:mt-44 w-full'>
          <div className='text-[28px] sm:text-[43px] font-bold w-1/2'>
            Proven by numbers
          </div>
        </div>
        <div className='flex justify-between w-full my-8 text-sm sm:text-lg text-slate-800'>
          <div>All works <ArrowForwardIcon /> </div>
          <div className='w-full sm:w-2/4 mt-10 sm:mt-0 text-base sm:text-lg'>
            Facts and figures confirm our expertise and contribution to the success of our partners. We always encourage setting clear, measurable goals and analyzing data to achieve quantifiable results.
          </div>
        </div>
        <div className="stats grid grid-cols-2 sm:grid-cols-4 mt-10 gap-8">
          <div className="item">
            <p className='text-base sm:text-lg'>Team experts</p>
            <strong className="text-4xl sm:text-6xl">70</strong>
          </div>
          <div className="item">
            <p className='text-base sm:text-lg'>In the industry since</p>
            <strong className="text-4xl sm:text-6xl">2009</strong>
          </div>
          <div className="item">
            <p className='text-base sm:text-lg'>Exits by our clients</p>
            <strong className="text-4xl sm:text-6xl">$6B+</strong>
          </div>
          <div className="item">
            <p className='text-base sm:text-lg'>Startup clients raised</p>
            <strong className="text-4xl sm:text-6xl">$1B+</strong>
          </div>
        </div>
        <div className='mt-28 text-[36px] sm:text-[48px] font-bold'>
          <h1>At the intersection of product and brand</h1>
        </div>
        <div className='flex justify-end text-base sm:text-lg mt-12 sm:mt-14 text-slate-800 mb-40'>
          <p className='w-[90%] sm:w-1/2'>
            With over 15 years of experience in the industry, our offerings have evolved into a set of services that complement each other and allow us to design, develop, implement, maintain, and extend a consistent experience across all touchpoints.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-4 lg:mx-11'>
          <div className='text-[32px] sm:text-[40px] font-bold'>
            <h1 className='w-[90%] sm:w-[20rem]'>What our partners say</h1>
          </div>
          <div className='flex justify-center'>
            <TestimonialCarousel />
          </div>
        </div>
        <div className='flex justify-center mt-16 sm:mt-28 mb-20 sm:mb-44'>
          <button
            type="submit"
            className="flex px-6 sm:px-11 sm:py-5 2xl:px-28 lg:px-20 lg:h-20 2xl:text-3xl xl:text-2xl xl:h-20 xl:px-20 2xl:h-24 justify-center gap-2 items-center mx-auto shadow-xl font-normal bg-[#262626] backdrop-blur-md text-white isolation-auto border-[#262626] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-[#262626] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-2 overflow-hidden border-2 rounded-full group"
          >
            Shall we Talk?
            <ArrowForwardIcon />
          </button>
        </div>
      </div >
    </>
  );
}
