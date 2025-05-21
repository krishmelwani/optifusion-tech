import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';

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
    <footer className="bg-[#C4A484] text-[#1f1f1f] pt-16 pb-8 text-[16px]">
      <div className="container-custom px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Socials */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-[15px]">
              At the heart of every digital transformation, we craft intelligent experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/optifusiontechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#1f1f1f] mt-1" size={18} />
                <span>267B Sindhi Colony, Raja Park, Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#1f1f1f]" size={18} />
                <span>+91 992-861-0677</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#1f1f1f]" size={18} />
                <span>info@optifusiontechnologies.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="mb-4 text-[15px]">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white text-black rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-[#1f1f1f]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-white text-[#B76E79] font-semibold rounded-md px-3 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              {subscribed && (
                <p className="text-[#1f1f1f] text-sm">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] pt-8 mt-12 text-center text-sm">
          <p>© {new Date().getFullYear()} Optifusion Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
