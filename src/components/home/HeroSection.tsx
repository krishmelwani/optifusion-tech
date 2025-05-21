import { motion } from 'framer-motion';
import HeroAnimation from './HeroAnimation';
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';          
import Img3 from './img3.jpeg';
import Img4 from './img4.jpeg';

const HeroSection = ({ openServicesModal }: { openServicesModal: () => void }) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#F4DDC9] to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Innovation <span className="text-[#A56F76]">Meets Intelligence</span>
            </h1>
            <p className="text-xl text-[#704F55] mb-8 leading-relaxed">
              At Optifusion Technologies, we create visually stunning and user-focused digital experiences that drive business growth and boost your brand. Our expert team combines creativity with smart technology to deliver innovative solutions tailored to your unique goals. Whether you're launching or scaling, we turn your vision into impactful digital success.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
              href="https://wa.me/9928610677"
              target="_blank"
              rel="noopener noreferrer"
                onClick={openServicesModal}
                className="btn-primary text-base"
              >
                Get Started
              </a>
              <a href="#client-showcase" className="btn-outline text-base">
                View Our Work
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[Img1, Img2, Img3, Img4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-[#F4DDC9] flex items-center justify-center overflow-hidden"
                  >
                    <img 
                      src={i} 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#704F55]">Trusted by 500+ clients worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease : "easeInOut" }}
            className="flex justify-center lg:justify-end"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
