"use client"; 
import { usePathname } from "next/navigation";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Navbar2 from "./shiftra/src/components/Navbar"; 
import Footer2 from "./shiftra/src/components/Footer"; 

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/shiftra-dashboard"); 

  return (
    <div className="w-full">
      {isDashboard ? <Navbar2 /> : <Navbar />} 
      <div className="mt-32 w-full overflow-x-hidden">
        {children}
      </div>
      {isDashboard ? <Footer2 /> : <Footer />} 
    </div>
  );
}
