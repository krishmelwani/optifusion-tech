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
    logo: 'data:image/png;base64,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',
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
