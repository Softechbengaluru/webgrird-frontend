import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import './globals.css';

export const metadata = {
  title: 'WebGrid',
  description: 'Generated by create-next-app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <Navbar />
          <div className="mt-24 w-full">
            {children}
            <Footer />
          </div>
        </div></body>
    </html>
  );
}
