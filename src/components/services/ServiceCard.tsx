import { useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ServiceCardProps {
  title: string
  description: string
  Icon: LucideIcon
  index: number
  gradient?: string
}

const ServiceCard = ({ title, description, Icon, index, gradient = 'from-orange-500 to-pink-500' }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative rounded-3xl p-8 bg-white/80 backdrop-blur-sm shadow-lg border border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Icon */}
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} mb-6`}>
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Service Title */}
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600">
        {title}
      </h3>

      {/* Service Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Action Button */}
      <div className="mt-auto">
        <Link
          to="/services"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-xl"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl pointer-events-none`}></div>
    </motion.div>
  )
}

export default ServiceCard
