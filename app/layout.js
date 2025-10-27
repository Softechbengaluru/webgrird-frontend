import LayoutWrapper from "./components/LayoutWrapper"; 
import "./globals.css";

export const metadata = {

  title: "WebGrid - Advanced Web Development Tools and Resources",
  description: "Discover WebGrid's tailored solutions for growing brands. We specialize in innovative web development and design services to elevate your business.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
