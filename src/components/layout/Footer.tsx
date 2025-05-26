import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import logo from './logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-4 md:px-0 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo & Socials */}
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center space-x-2">
                {/* Just the logo image, no surrounding blue box */}
                <img src={logo} alt="Optifusion Logo" className="w-15 h-20 object-contain" />

                {/* Text */}
                <span className="lg:text-md xl:text-xl font-bold text-grey-500">
                  Optifusion <span className="text-rose-500">Technologies</span>
                </span>
              </Link>
            </div>
            <p className="mb-6 text-gray-400 leading-relaxed">
              At the heart of every digital transformation, we craft intelligent experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/optifusiontechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/9928610677"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/about', label: 'About Us' },
                { to: '/blog', label: 'Blog' },
                { to: '/careers', label: 'Careers' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300" size={18} />
                <span className="text-gray-400">267B Sindhi Colony, Raja Park, Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={18} />
                <span className="text-gray-400">+91 992-861-0677</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={18} />
                <span className="text-gray-400">info@optifusiontechnologies.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Newsletter
            </h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              {subscribed && (
                <p className="text-blue-400 text-sm">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mt-12 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Optifusion Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
