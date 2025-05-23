import { useRef } from 'react';
import { motion } from 'framer-motion';

// Client logos data type
interface Client {
  id: number;
  name: string;
  logo: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: 'Healthfab',
    logo: 'https://www.healthfab.in/cdn/shop/files/LogoTransparent.png?v=1699085488&width=180',
  },
  {
    id: 2,
    name: 'FITTR',
    logo: 'https://www.fittr.com/static-content/header_logo_58dcc03f6e.svg',
  },
  {
    id: 3,
    name: 'Veey Much Indian',
    logo: 'https://www.verymuchindian.com/cdn/shop/files/VMI-Logo_200x.png?v=1639207659',
  },
  {
    id: 4,
    name: 'Expertons',
    logo: 'https://www.expertrons.com/wp-content/uploads/2023/04/logo.svg',
  },
  {
    id: 5,
    name: 'TailBlaze',
    logo: 'https://tailblaze.in/cdn/shop/files/Group_4.svg?height=140&v=1740107006',
  },
  {
    id: 6,
    name: 'Pickrr',
    logo: 'https://d10srchmli830n.cloudfront.net/1645333441395_New-logo_c.svg',
  },
  {
    id: 7,
    name: 'Auli',
    logo: 'https://aulilifestyle.com/cdn/shop/files/Auli_Logo_Black_1_a1840822-d7dc-4dc0-a43b-a0bfde754c91.png?height=70&v=1746806300',
  },
  {
    id: 8,
    name: 'Galgotias University',
    logo: 'https://cdn.dribbble.com/userupload/24344349/file/original-d651422d1b78f09ea8358349368687a4.png',
  },
  {
    id: 9,
    name: 'VGU Jaipur',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPHkXG-J_GMu8RuSJJ71w55Jrk9loRN6INg&s',
  },
  {
    id: 10,
    name: 'ITS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbZ8p6eb0HpRAJOOnsfAheWCKlo2kfi18Tg&s',
  },
  {
    id: 11,
    name: 'Poornima University',
    logo: 'https://poornima.edu.in/assets/images/PULogo.png',
  }
];

const OurClients: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements - Matching ServicesList */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Partners
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
              Trusted By
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with innovative businesses across various industries to deliver exceptional digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling logos */}
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex animate-slide-infinite"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: 'fit-content' }}
        >
          {/* First set of logos */}
          <div className="flex">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex">
            {clients.map((client) => (
              <div
                key={`duplicate-${client.id}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-infinite {
          animation: slide-infinite 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurClients;
