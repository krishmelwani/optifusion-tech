import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ServicesList from './ServicesList';

interface ServiceModalProps {
  onClose: () => void;
}

const ServiceModal = ({ onClose }: ServiceModalProps) => {
  const navigate = useNavigate();

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleServicePageClick = () => {
    navigate('/services');
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        />
        
        <motion.div
          className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative z-10"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6 md:p-8 bg-rose-50 rounded-t-xl flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Services</h2>
              <p className="text-gray-600 mt-2">Discover how we can help your business grow</p>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full p-2 hover:bg-white/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6 md:p-8">
            <ServicesList />
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Want to explore all our services in detail?</p>
              <button 
                onClick={handleServicePageClick}
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Visit Services Page
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceModal;
