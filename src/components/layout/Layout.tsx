import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ServiceModal from '../services/ServiceModal';

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        scrolled={scrolled} 
        openServicesModal={() => setShowModal(true)} 
      />
      <main className="flex-grow overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      
      {showModal && (
        <ServiceModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Layout;
