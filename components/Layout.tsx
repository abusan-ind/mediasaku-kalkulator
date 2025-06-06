// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Mediasaku Kalkulator</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 border-t">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Mediasaku. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
