import p1 from "../Images/Abstract.jpg"
import p2 from "../Images/oo.jpg"
import p3 from "../Images/Pixels-Wallpaper (1).jpeg"
import p4 from "../Images/Pixels-Wallpaper (15).jpg"
export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Div */}
      <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />

      {/* Hero Section Content */}
      <div className="relative text-white h-full flex flex-col justify-center items-center px-4">
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold">
            High-performing teams of <span className="text-teal-400">vetted software engineers</span>.
          </h1>

          {/* Subheading */}
          <p className="text-gray-300">
            Scale your team up and down with the top 1.36% talent skilled in React, Node.js, .NET, and AWS.
          </p>

          {/* Profile Images */}
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-16 h-16 rounded-full bg-gray-700 flex justify-center items-center overflow-hidden">
              <img src={p1.src} alt="Engineer" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gray-700 flex justify-center items-center overflow-hidden">
              <img src={p2.src} alt="Engineer" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gray-700 flex justify-center items-center overflow-hidden">
              <img src={p3.src} alt="Engineer" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gray-700 flex justify-center items-center overflow-hidden">
              <img src={p4.src} alt="Engineer" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Get Proposal Button */}
          <div className="mt-8">
            <a href="#" className="bg-teal-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-teal-500 transition">
              Get a Proposal
            </a>
          </div>

          {/* Clutch Rating */}
          <div className="text-gray-400 mt-4">
            <span>Clutch 4.9 ⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Floating Logos */}

      </div>
    </div>
  );
}
