import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  PenTool,
  TrendingUp,
  Image,
  Layout,
  Smartphone
} from 'lucide-react';
import ServiceCard from './ServiceCard';

// Service data
const services = [
  {
    title: 'Web Development',
    description: 'Crafting sleek, responsive websites that not only look great but are built to perform flawlessly across all devices.',
    detailedDescription: 'We create sleek, responsive websites that deliver seamless user experiences and fast performance across all devices.',
    icon: Globe
  },
  {
    title: 'Content Writing',
    description: 'Powerful, SEO-driven content that grabs attention and fuels growth.',
    detailedDescription: 'Combining creativity with strategic keywords, our content drives engagement and conversions while staying true to your brand voice.',
    icon: PenTool
  },
  {
    title: 'Digital Marketing',
    description: 'Crafting targeted marketing campaigns that boost your reach and turn audiences into loyal customers.',
    detailedDescription: 'Our comprehensive digital marketing—SEO, PPC, social media, and email—are expertly tailored to meet your goals and drive results.',
    icon: TrendingUp
  },
  {
    title: 'Logo Designing',
    description: 'Distinctive logo designs that embody your brand\'s identity and values.',
    detailedDescription: 'Our design team creates memorable, versatile logos that communicate your brand essence and stand out in competitive markets.',
    icon: Image
  },
  {
    title: 'Graphic Designing',
    description: 'Eye-catching visual designs for print and digital materials.',
    detailedDescription: 'From social media graphics to print collateral, we design visually appealing assets that strengthen your brand presence across all channels.',
    icon: Layout
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile apps with intuitive UX/UI.',
    detailedDescription: 'We develop feature-rich mobile applications for iOS and Android using React Native, Flutter, and native technologies with a focus on performance.',
    icon: Smartphone
  }
];

const ServicesList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Item variants for individual card animations
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 xl:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 } 
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="h-full"
        >
          <ServiceCard
            title={service.title}
            description={service.description}
            detailedDescription={service.detailedDescription}
            Icon={service.icon}
            index={index}
            isActive={hoveredIndex === index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesList;