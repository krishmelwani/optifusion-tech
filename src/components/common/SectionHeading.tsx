import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeading;