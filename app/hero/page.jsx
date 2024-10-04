import Inter from '@next/font/google';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '@/app/components/pages/logo';
export default function Hero() {
  return (
    <>
      <div className="container mx-auto mt-14 flex flex-col min-h-screen w-screen items-center text-2xl leading-tight ">
        <div className='text-center text-[100px] font-bold w-2/3'>
          Digital product & brand agency
        </div>
        <div className='my-6 text-xl font-medium text-slate-800'>
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
          <div className='text-[50px] text-start font-bold w-1/3'>
            For companies with
            tech leverage
          </div>
        </div>
        <div className='flex justify-between w-full my-8 text-xl text-slate-800'>
          <div>All works <ArrowForwardIcon /> </div>
          <div className='w-2/4 text-lg'>
            We specialize in working with digital products and brands, regardless of the size and lifecycle stage, from startups to established businesses striving to achieve significant tech leverage.</div>
        </div>
        {/* 2 */}
        <Logo />
        {/* 3 */}
        <div className='flex justify-start mt-44 w-full'>
          <div className='text-[50px] text-start font-bold w-1/3'>
            Proven by numbers
          </div>
        </div>
        <div className='flex justify-between w-full my-32 text-xl text-slate-800'>
          <div>All works <ArrowForwardIcon /> </div>
          <div className='w-2/4 text-lg'>

            Facts and figures confirm our expertise and contribution to the success of our partners. We always encourage to set clear, measurable goals and analyze data to achieve quantifiable results and make informed decisions.</div>
        </div>
      </div>
    </>
  );
}
