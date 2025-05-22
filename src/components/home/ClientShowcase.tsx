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
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747742807531-Screenshot_2025-05-20_at_5.02.07_PM-removebg-preview_9wGMXFTji.png',
  },
  {
    id: 2,
    name: 'FITTR',
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747742848747-Screenshot_2025-05-20_at_5.22.00_PM-removebg-preview_ABnfX63Xk.png',
  },
  {
    id: 3,
    name: 'Veey Much Indian',
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747743962249-Screenshot_2025-05-20_at_5.40.25_PM-removebg-preview_zwwRQPbCu.png',
  },
  {
    id: 4,
    name: 'Expertons',
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747744004285-Screenshot_2025-05-20_at_5.44.45_PM-removebg-preview_urTwBlq1O.png',
  },
  {
    id: 5,
    name: 'TailBlaze',
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747744028462-Screenshot_2025-05-20_at_5.49.09_PM-removebg-preview_jR1wiYK-Qf.png',
  },
  {
    id: 6,
    name: 'Pickrr',
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747744078340-Screenshot_2025-05-20_at_5.54.56_PM-removebg-preview_WIp00NnaO.png',
  },
  {
    id: 7,
    name: 'Auli',
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747744403833-Screenshot_2025-05-20_at_6.01.01_PM-removebg-preview_7qtQl2w4B.png',
  },
  {
    id: 8,
    name: 'Galgotias University',
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747744624039-Galgotias-University-Logo-removebg-preview__1__2E81EfHCMV.png',
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
    logo: 'https://ik.imagekit.io/6ilngyaqa/1747745590878-PULogo-removebg-preview_92ieP_K70.png',
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
    <section id="our-clients" className="py-20 bg-[#FFF5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#704F55] mb-6">
            Our Clients
          </h2>
          <p className="text-lg text-[#A56F76] max-w-2xl mx-auto">
            Trusted by leading companies worldwide. We're proud to partner with innovative 
            businesses across various industries to deliver exceptional digital solutions.
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
                  className="h-16 w-auto max-w-32 object-contain"
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
                  className="h-16 w-auto max-w-32 object-contain"
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
