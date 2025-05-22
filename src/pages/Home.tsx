import HeroSection from '../components/home/HeroSection';
import ClientShowcase from '../components/home/ClientShowcase';
import ServicesList from '../components/services/ServicesList';
import { Award, Globe, Heart, Zap, MessageSquare, Sparkles } from 'lucide-react';
import ClientTestimonial from '../components/home/ClientTestimonial';

const Home = () => {

  return (
    <>
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', icon: Globe },
              { number: '25+', label: 'Happy Clients', icon: Heart },
              { number: '3+', label: 'Years Experience', icon: Award },
              { number: '100%', label: 'Success Rate', icon: Zap }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <ServicesList />

      <ClientShowcase />
      <ClientTestimonial/>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss how our services can help you achieve your business goals and drive growth.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/9928610677" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;



