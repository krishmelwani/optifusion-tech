import {
  Globe,
  PenTool,
  TrendingUp,
  Image,
  Layout,
  Smartphone,
  Sparkles
} from 'lucide-react';
import ServiceCard from './ServiceCard';

// Service data
const services = [
  {
    title: 'Web Development',
    description: 'Crafting sleek, responsive websites that not only look great but are built to perform flawlessly across all devices.',
    detailedDescription: 'We create sleek, responsive websites that deliver seamless user experiences and fast performance across all devices.',
    icon: Globe,
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    title: 'Content Writing',
    description: 'Powerful, SEO-driven content that grabs attention, drives engagement, and fuels business growth.',
    detailedDescription: 'Combining creativity with strategic keywords, our content drives engagement and conversions while staying true to your brand voice.',
    icon: PenTool,
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Digital Marketing',
    description: 'Crafting targeted marketing campaigns that boost your reach and turn audiences into loyal customers.',
    detailedDescription: 'Our comprehensive digital marketing—SEO, PPC, social media, and email—are expertly tailored to meet your goals and drive results.',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Logo Designing',
    description: 'Distinctive logo designs that embody your brand\'s identity and values.',
    detailedDescription: 'Our design team creates memorable, versatile logos that communicate your brand essence and stand out in competitive markets.',
    icon: Image,
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    title: 'Graphic Designing',
    description: 'Eye-catching visual designs for print and digital materials.',
    detailedDescription: 'From social media graphics to print collateral, we design visually appealing assets that strengthen your brand presence across all channels.',
    icon: Layout,
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile apps with intuitive UX/UI.',
    detailedDescription: 'We develop feature-rich mobile applications for iOS and Android using React Native, Flutter, and native technologies with a focus on performance.',
    icon: Smartphone,
    gradient: 'from-purple-500 to-blue-500'
  }
];

const ServicesList = () => {

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
            Connecting Business Goals
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            with Creative Solutions

            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business growth and success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              index={index}
              gradient={service.gradient}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-8 text-gray-600">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/9928610677', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 mx-auto"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;