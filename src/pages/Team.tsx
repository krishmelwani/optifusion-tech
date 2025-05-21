import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';

// Team Members Data
const teamMembers = [
  {
    id: 1,
    name: 'Krish Melwani',
    role: 'CEO & Founder',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747550595176-WhatsApp_Image_2025-05-18_at_12.11.46_7dd7323a_VqmZRh_wxP.jpg',
    bio: 'Krish Melwani founded Optifusion Technologies in 2022 with a vision to innovate and transform the digital landscape. With a passion for technology and enterpreneurship, he leads the company towards delivering cutting-edge solutions that empower businesses worldwide.'
  },
  {
    id: 2,
    name: 'Harshita Mishra',
    role: 'HR Manager',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747549466955-WhatsApp_Image_2025-05-18_at_11.54.14_5341521a_RwysGYi_Zv.jpg',
    bio: 'Harshita Mishra is the HR Manager at Optifusion Technologies, responsible for overseeing all human resource functions. She manages recruitment, employee relations, and ensures a positive work environment to support the company’s growth and success. Additionally, she is actively involved in developing the company’s official website to showcase our services, team, and innovations with a user-friendly and modern design.'
  },
  {
    id: 3,
    name: 'Anshika Gupta ',
    role: 'Head of Marketing',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747550732550-WhatsApp_Image_2025-05-18_at_12.15.12_2d6be74a_FrkoEfR0JO.jpg',
    bio: 'Anshika Gupta is the Head of Marketing @ Optifusion Technologies, steering the company’s brand strategy, demand-generation campaigns, and digital presence. With a data-driven mindset and a flair for creative storytelling, she crafts marketing initiatives that amplify Optifusion’s voice across global markets, strengthen customer engagement, and fuel sustainable growth.'
  },
  {
    id: 4,
    name: 'Pratyaksha Pandey',
    role: 'HR Executive',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747554466336-WhatsApp_Image_2025-05-18_at_12.40.54_5f2eeb59_zUmSvLDBn.jpg',
    bio: 'Pratyksha Pandey is an HR Executive at Optifusion Technologies, responsible for supporting recruitment, onboarding, and employee engagement initiatives. With strong communication skills and a detail-oriented mindset, she plays a key role in fostering a collaborative and productive workplace culture.'
  }
]; 

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    position: 'CEO',
    company: 'TechSprint Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 5,
    text: 'Optifusion transformed our digital presence with a stunning website and effective marketing strategy. Their team was professional, responsive, and delivered beyond our expectations.'
  },
  {
    id: 2,
    name: 'Anjali Desai',
    position: 'Marketing Director',
    company: 'UrbanStyle',
    avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    rating: 5,
    text: 'Working with Optifusion has been a game-changer for our brand. Their attention to detail and creative approach helped us stand out in a competitive market. The results have been exceptional!'
  },
  {
    id: 3,
    name: 'Sandeep Jain',
    position: 'Founder',
    company: 'HealthVista',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    rating: 4,
    text: 'The mobile app developed by Optifusion has significantly improved our customer engagement. Their team took the time to understand our requirements and delivered a product that exceeded our expectations.'
  },
  {
    id: 4,
    name: 'Meera Krishnan',
    position: 'COO',
    company: 'EduBridge',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    rating: 5,
    text: 'Optifusion helped us reimagine our digital learning platform. Their expertise in UX design and development created an intuitive experience that our users love. Highly recommended!'
  },
  {
    id: 5,
    name: 'Ravi Patel',
    position: 'CTO',
    company: 'FinTrack',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4,
    text: 'The team at Optifusion delivered a complex financial dashboard with impressive attention to detail. They were responsive to feedback and provided excellent technical support throughout the project.'
  }
];

const TeamMember = ({ member }: { member: typeof teamMembers[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden group"
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <p className="text-white text-sm">{member.bio}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-amber-600">{member.role}</p>
      </div>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
              <p className="text-gray-600">
                {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
              </p>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={20} 
                className={i < testimonials[activeIndex].rating ? 'text-yellow-500' : 'text-gray-300'} 
                fill={i < testimonials[activeIndex].rating ? 'currentColor' : 'none'} 
              />
            ))}
          </div>
        </div>
        <blockquote className="text-xl italic text-gray-700 mb-6">
          "{testimonials[activeIndex].text}"
        </blockquote>
        <div className="flex justify-between">
          <button 
            onClick={prevTestimonial} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextTestimonial} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="pt-32">
      {/* Testimonials Section */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <SectionHeading 
            title="Client Testimonials"
            subtitle="What our clients say about working with us"
          />
          
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Team"
            subtitle="The talented individuals behind our success"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <SectionHeading 
            title="Our Values"
            subtitle="The principles that guide our work and culture"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from the quality of our work to how we interact with clients and team members.'
              },
              {
                title: 'Innovation',
                description: 'We embrace creativity and innovative thinking to solve complex problems and deliver cutting-edge solutions.'
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest level of integrity in our work, being honest, transparent, and ethical in all our dealings.'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and foster a collaborative environment where diverse ideas are valued.'
              },
              {
                title: 'Client Success',
                description: 'We measure our success by the success of our clients and are committed to helping them achieve their goals.'
              },
              {
                title: 'Continuous Learning',
                description: 'We encourage continuous learning and personal growth, staying updated with the latest technologies and industry trends.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h4 className="text-xl font-bold text-amber-600 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="section bg-amber-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-lg mb-8 text-amber-100">
              We're always looking for talented individuals who share our values and passion for excellence.
            </p>
            <a 
              href="/careers" 
              className="bg-white text-amber-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
