import { Link } from 'react-router-dom';
import logo from './logo.png';  // Make sure logo.png is in the same folder as this file

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      {/* Just the logo image, no surrounding blue box */}
      <img src={logo} alt="Optifusion Logo" className="w-15 h-20 object-contain" />

      {/* Text */}
      <span className="lg:text-md xl:text-xl font-bold text-neutral-900">
        Optifusion <span className="text-rose-500">Technologies</span>
      </span>
    </Link>
  );
};

export default Logo;
