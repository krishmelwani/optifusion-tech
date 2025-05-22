import { useState } from "react"
import { motion } from "framer-motion"
import type { FC } from "react"

interface ServiceCardProps {
  title: string
  description: string
  Icon: FC<{ size?: number }>
  index: number
}

const ServiceCard = ({ title, description, Icon, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 h-full flex flex-col bg-white rounded-lg shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          rounded-lg w-16 h-16 flex items-center justify-center mb-5
          ${isHovered ? "bg-neutral-800 text-white" : "bg-rose-100 text-rose-500"}
          transition-colors duration-300
        `}
      >
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <div className="relative flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <a
          href="/services"
          className={`
    font-medium transition-colors duration-300 flex items-center
    ${isHovered ? "text-neutral-800" : "text-rose-500"}
  `}
        >
          Know more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

      </div>
    </motion.div>
  )
}

export default ServiceCard
