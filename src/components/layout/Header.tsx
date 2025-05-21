import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, CornerUpRight } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  scrolled: boolean;
  openServicesModal: () => void;
}

const Header = ({ scrolled, openServicesModal }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            ['/', 'Home'],
            ['/services', 'Services'],
            ['/pricing', 'Pricing'],
            ['/projects', 'Projects'],
            ['/about', 'About'],
            ['/blog', 'Blog'],
            ['/careers', 'Careers'],
            ['/team', 'Team'],
          ].map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `lg:text-md xl:text-lg font-medium hover:text-rose-500 transition-colors ${
                  isActive ? 'text-rose-500' : 'text-gray-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button 
          onClick={openServicesModal}
          className="hidden lg:flex bg-rose-500 text-white px-5 py-2 rounded-lg hover:bg-rose-600 transition-all items-center gap-2"
        >
          Get Started <CornerUpRight size={18} />
        </button>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu size={24} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white shadow-lg absolute w-full"
        >
          <nav className="container-custom py-5 flex flex-col space-y-4">
            {[
              ['/', 'Home'],
              ['/services', 'Services'],
              ['/pricing', 'Pricing'],
              ['/projects', 'Projects'],
              ['/about', 'About'],
              ['/blog', 'Blog'],
              ['/careers', 'Careers'],
              ['/team', 'Team'],
            ].map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-lg p-2 font-medium hover:bg-rose-100 rounded-md ${
                    isActive ? 'text-rose-500' : 'text-gray-700'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                openServicesModal();
              }}
              className="bg-rose-500 text-white w-full mt-4 px-4 py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-rose-600 transition-all"
            >
              Get Started <CornerUpRight size={18} />
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
