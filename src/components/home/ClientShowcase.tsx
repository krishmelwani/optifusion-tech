import { useRef } from 'react';
import { motion } from 'framer-motion';

// Example project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    client: 'One Mile',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747551602362-Screenshot_2025-05-17_213205_tFBFxeHuug.png',
    country: 'India'
  },
  {
    id: 2,
    title: 'Healthcare',
    client: 'Primary Health',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747551699525-Screenshot_2025-05-18_123124_3OWz2yMqM.png',
    country: 'India'
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    client: 'Vena Solution',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747551792334-Screenshot_2025-05-18_123247_-SitmZffsW.png',
    country: 'USA'
  },
  {
    id: 4,
    title: 'Educational App',
    client: 'Educate',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747552839811-WhatsApp_Image_2025-05-18_at_12.50.16_960a3823_d8it35n8g.jpg',
    country: 'India'
  },
  {
    id: 5,
    title: 'Restaurant Booking',
    client: 'Eazy Dinner',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747553195195-WhatsApp_Image_2025-05-18_at_12.56.10_32d9099e_M_kZTEnAw.jpg',
    country: 'India'
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    client: 'On the Market',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747553581897-WhatsApp_Image_2025-05-18_at_13.02.48_c181e3da_IrjKhG3GV.jpg',
    country: 'UK'
  }
];

const ClientShowcase = () => {
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
    <section id="client-showcase" className="section bg-[#FFF5EF]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-[#704F55]">Our Latest Work</h2>
          <p className="section-subtitle text-[#A56F76]">
            Explore our recent projects delivering innovative solutions for clients across industries
          </p>
        </motion.div>
      </div>

      <div className="overflow-hidden mt-12">
        <div 
          ref={containerRef} 
          className="flex animate-slide-left"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: 'fit-content' }}
        >
          <div className="flex">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-96 mx-4 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.03] duration-300 bg-white"
              >
                <div className="relative h-full group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#704F55]/80 via-[#A56F76]/40 to-transparent group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-1 text-sm text-[#F4DDC9] font-medium">
                        {project.client} • {project.country}
                      </div>
                      <h3 className="text-xl text-white font-bold mb-2">
                        {project.title}
                      </h3>
                      <button className="text-sm font-medium text-[#F4DDC9] border-b border-[#F4DDC9]/50 hover:border-[#F4DDC9] transition-all pb-0.5">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
