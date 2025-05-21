import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ClientShowcase from '../components/home/ClientShowcase';
import SectionHeading from '../components/common/SectionHeading';
import ServicesList from '../components/services/ServicesList';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

const Counter = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: false });
  const [key, setKey] = useState(0); // Force re-run of animation

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      if (ref.current) ref.current.innerText = value.toString();
      if (progress < 1) requestAnimationFrame(step);
      else if (ref.current) ref.current.innerText = `${target}+`;
    };

    requestAnimationFrame(step);
  }, [isInView, key, target]);

  useEffect(() => {
    if (isInView) {
      setKey(prev => prev + 1); // Trigger re-run
    }
  }, [isInView]);

  return (
    <span
      ref={(node) => {
        ref.current = node;
        inViewRef.current = node;
      }}
    >
      0
    </span>
  );
};

const Home = () => {
  const { openServicesModal } = useContext(LayoutContext);

  return (
    <>
      <HeroSection openServicesModal={openServicesModal} />

      {/* Services Preview Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <SectionHeading 
            title="What We Offer"
            subtitle="Comprehensive digital solutions to help your business succeed in the digital landscape"
          />
          <ServicesList />
          <div className="mt-12 text-center">
            <button 
              onClick={openServicesModal}
              className="btn-primary flex items-center mx-auto"
            >
              Get Started <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter target={500} />
              </div>
              <div className="text-orange-200">Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter target={750} />
              </div>
              <div className="text-orange-200">Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter target={4} />
              </div>
              <div className="text-orange-200">Years</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter target={25} />
              </div>
              <div className="text-orange-200">Experts</div>
            </motion.div>
          </div>
        </div>
      </section>

      <ClientShowcase />

      {/* CTA Section */}
      <section className="section bg-orange-50">
        <div className="container-custom">
          <div className="rounded-2xl bg-white shadow-xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your business goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={openServicesModal}
                  className="btn-primary"
                >
                  Get Started
                </button>
                <a 
                  href="https://wa.me/9928610677" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  Chat with Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
