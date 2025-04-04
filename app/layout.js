import LayoutWrapper from "./components/LayoutWrapper"; 
import "./globals.css";

export const metadata = {
  title: "WebGrid",
  description: "Tailored Solutions for Growing Brands",
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
