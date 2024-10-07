import Inter from '@next/font/google';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Logo from './logo';
import TestimonialCarousel from './testimonial';
export default function Hero() {
  return (
    <>
      <div className="container mx-auto mt-44 flex flex-col min-h-screen w-screen item space-y-4s-center text-2xl leading-tight ">
        <div className='text-center flex justify-center text-[100px] font-bold '>
          <h1 className='w-2/3'>Digital product & brand agency</h1>
        </div>
        <div className=' text-xl text-center mb-32 mt-8 w-full font-medium text-slate-800'>
          We empower businesses to succeed in the digital space
        </div>
        <video
          poster="https://www.datocms-assets.com/22695/1721808442-main-reel.jpg"
          playsInline
          preload="auto"
          muted
          autoPlay
          className='rounded-xl'
        >
          <source src="https://stream.mux.com/usSb01nHvu4pT01e5qFmoll61TqYzq5tQR/low.mp4" type="video/mp4" media="(max-width: 600px)" />
          <source src="https://stream.mux.com/usSb01nHvu4pT01e5qFmoll61TqYzq5tQR/medium.mp4" type="video/mp4" media="(min-width: 601px) and (max-width: 1023px)" />
          <source src="https://www.datocms-assets.com/22695/1715091338-30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='flex justify-start mt-44 w-full'>
          <div className='text-[70px] text-start font-bold w-1/3'>
            For companies with
            tech leverage
          </div>
        </div>
        <div className='flex justify-between w-full my-8 text-xl text-slate-800'>
          <Link href='/work'>All works <ArrowForwardIcon /> </Link>
          <div className='w-2/4 text-lg'>
            We specialize in working with digital products and brands, regardless of the size and lifecycle stage, from startups to established businesses striving to achieve significant tech leverage.</div>
        </div>
        {/* 2 */}
        <Logo />
        {/* 3 */}
        <div className='flex justify-start mt-44 w-full'>
          <div className='text-[70px] text-start font-bold w-1/3'>
            Proven by numbers
          </div>
        </div>
        <div className='flex justify-between w-full my-32 text-xl text-slate-800'>
          <div>All works <ArrowForwardIcon /> </div>
          <div className='w-2/4 text-lg font-medium'>

            Facts and figures confirm our expertise and contribution to the success of our partners. We always encourage to set clear, measurable goals and analyze data to achieve quantifiable results and make informed decisions.</div>
        </div>
        <div className="stats grid grid-cols-4 grid-rows-2  gap-y-10">
          <div className="item">
            <p className='text-xl'>Team experts</p>
            <strong className="animated text-[90px]">70</strong>
          </div>
          <div className="item">
            <p className='text-xl'>In the industry since</p>
            <strong className="animated text-[90px]">2009</strong>
          </div>
          <div className="item">
            <p className='text-xl'>Exits by our clients</p>
            <strong className="animated text-[90px]">$6B+</strong>
          </div>
          <div className="item">
            <p className='text-xl'>Startup clients raised</p>
            <strong className="animated text-[90px]">$1B+</strong>
          </div>
          <div className="item">
            <p className='text-xl'>IPO for Cellebrite</p>
            <strong className="animated text-[90px]">$2.4B</strong>
          </div>
          <div className="item">
            <p className='text-xl'>Improvement in self-service for Turo</p>
            <strong className="animated text-[90px]">58%</strong>
          </div>
          <div className="item">
            <p className='text-xl'>Ninox after-trial retention increased</p>
            <strong className="animated text-[90px]">+30%</strong>
          </div>
          <div className="item">
            <p className='text-xl'>Completed sessions in Tile onboarding</p>
            <strong className="animated text-[90px]">+60%</strong>
          </div>
        </div>
        <div className='mt-48 text-[48px] font-bold w-[40rem]'>
          <h1>
            At the intersection of
            product and brand</h1>
        </div>
        <div className='flex justify-end text-xl text-slate-800 mb-40'>
          <p className='w-1/2'>With over 15 years of experience in the industry, our offerings have evolved into a set of services that complement each other and allow us to design, develop, implement, maintain, and extend a consistent experience across all touchpoints.</p>
        </div>
        <div className='grid grid-cols-2'>
          <div className='text-[50px] font-bold'>
            <h1 className='w-[40rem]'>What our
              partners say</h1>
          </div>
          <div>
            <TestimonialCarousel />
          </div>
        </div>
        <div className='flex justify-center mt-72 mb-44'>
          <button
            type="submit"
            class="flex px-28 text-3xl h-24 justify-center gap-2 items-center mx-auto shadow-xl font-normal bg-[#262626] backdrop-blur-md text-white isolation-auto border-[#262626] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-[#262626] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-2 overflow-hidden border-2 rounded-full group"
          >
            Shall we Talk?
            <ArrowForwardIcon />
          </button>
        </div>
      </div >
    </>
  );
}
