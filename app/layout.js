import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import "./globals.css";

export const metadata = {
  title: "WebGrid - Advanced Web Development Tools and Resources",
  description: "Discover WebGrid's tailored solutions for growing brands. We specialize in innovative web development and design services to elevate your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <Navbar />
          <div className="mt-32 w-full overflow-x-hidden">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
