import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import ServicesList from '../components/services/ServicesList';
import ServicesDetailed from '../components/services/ServicesDetailed';

const Services = () => {
  return (
    <div className="pt-32">
      {/* Services Section */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Services"
            subtitle="Tailored digital solutions to help your business thrive in the digital era"
          />
          
          <ServicesDetailed />
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Process"
            subtitle="How we turn your ideas into successful digital solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { number: '01', title: 'Discovery', description: 'We start by understanding your business, goals, and target audience.' },
              { number: '02', title: 'Strategy', description: 'Developing a tailored plan that aligns with your objectives and timeline.' },
              { number: '03', title: 'Implementation', description: 'Bringing your project to life with our expert team and continuous updates.' },
              { number: '04', title: 'Evaluation', description: 'Measuring results, gathering feedback, and making improvements.' }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="mb-4">
                  <span className="text-5xl font-bold text-amber-300">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/4 right-0 transform translate-x-1/2">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#F4A261"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <SectionHeading 
            title="Technologies We Use"
            subtitle="The latest tools and technologies to deliver high-quality solutions"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {[
              { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
              { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
              { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-orange-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 text-orange-100">
              Contact us today to discuss your project requirements and get a free consultation.
            </p>
            <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/9928610677" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white text-orange-600 font-medium py-3 px-8 rounded-lg hover:bg-orange-100 transition-colors duration-300"
              >
                Chat Now
              </a>
              <button className="bg-orange-500 text-white font-medium py-3 px-8 rounded-lg hover:bg-orange-400 transition-colors duration-300">
                <a
                  href="mailto:info@optifusiontechnologies.in?subject=Request%20for%20Quote&body=Hi,%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20project."
                  className="bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-400 transition-colors duration-300 inline-block text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Quote
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
