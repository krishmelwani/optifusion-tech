import { useState } from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  Icon: LucideIcon;
  index: number;
}

const ServiceCard = ({ title, description, detailedDescription, Icon, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        rounded-lg w-16 h-16 flex items-center justify-center mb-5
        ${isHovered ? 'bg-neutral-800 text-white' : 'bg-rose-100 text-rose-500'}
        transition-colors duration-300
      `}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <div className="relative flex-grow">
        <p className={`
          text-gray-600 transition-opacity duration-300 absolute inset-0
          ${isHovered ? 'opacity-0' : 'opacity-100'}
        `}>
          {description}
        </p>
        <p className={`
          text-gray-600 transition-opacity duration-300 absolute inset-0
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          {detailedDescription}
        </p>
      </div>
      
      <div className="mt-5 pt-4 border-t border-gray-100">
        <button className={`
          font-medium transition-colors duration-300
          ${isHovered ? 'text-neutral-800' : 'text-rose-500'}
        `}>
        
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
