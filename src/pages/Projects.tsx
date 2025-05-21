import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';

// Project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    client: 'One Mile',
    description: 'A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747551602362-Screenshot_2025-05-17_213205_tFBFxeHuug.png',
    country: 'India',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    client: 'Primary Health',
    description: 'A digital healthcare platform enabling patients to book appointments, access medical records, and consult with doctors online.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747551699525-Screenshot_2025-05-18_123124_3OWz2yMqM.png',
    country: 'India',
    category: 'web',
    technologies: ['Vue.js', 'Express', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    client: 'Vena Solution',
    description: 'An interactive financial dashboard with real-time data visualization, portfolio management, and investment tracking.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747551792334-Screenshot_2025-05-18_123247_-SitmZffsW.png',
    country: 'USA',
    category: 'web',
    technologies: ['Angular', 'Django', 'D3.js']
  },
  {
    id: 4,
    title: 'Educational Mobile App',
    client: 'Educate',
    description: 'A comprehensive learning app with interactive courses, quizzes, progress tracking, and certificate generation.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747552839811-WhatsApp_Image_2025-05-18_at_12.50.16_960a3823_d8it35n8g.jpg',
    country: 'India',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    client: 'Eazy Dinner',
    description: 'A restaurant management system with table reservations, menu management, and customer loyalty programs.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747553289436-WhatsApp_Image_2025-05-18_at_12.57.54_01861fdf_zi4g9I1ZxM.jpg',
    country: 'India',
    category: 'web',
    technologies: ['React', 'Express', 'MongoDB']
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    client: 'On The Market',
    description: 'A property listing and management platform with virtual tours, mortgage calculators, and agent portals.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747553195195-WhatsApp_Image_2025-05-18_at_12.56.10_32d9099e_M_kZTEnAw.jpg',
    country: 'UK',
    category: 'web',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL']
  },
  {
    id: 7,
    title: 'Travel Companion App',
    client: 'Clear Trip',
    description: 'A travel app with itinerary planning, local recommendations, offline maps, and expense tracking.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747553511989-WhatsApp_Image_2025-05-18_at_13.01.21_2aabb681_3XwZyWhn6A.jpg',
    country: 'India',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Google Maps API']
  },
  {
    id: 8,
    title: 'Fitness Tracker',
    client: 'Home Fitness',
    description: 'A fitness application with workout plans, nutrition tracking, progress monitoring, and social challenges.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747553581897-WhatsApp_Image_2025-05-18_at_13.02.48_c181e3da_IrjKhG3GV.jpg',
    country: 'India',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MongoDB']
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'india') return project.country === 'India';
    if (filter === 'international') return project.country !== 'India';
    return project.category === filter;
  });

  return (
    <div className="pt-32">
      <section className="section bg-orange-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Projects"
            subtitle="Explore our portfolio of successful projects across various industries"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'india', label: 'Indian Clients' },
              { id: 'international', label: 'International' },
              { id: 'web', label: 'Web Development' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'design', label: 'Design' }
            ].map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                className="card overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm">
                    {project.country}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-sm text-orange-500 mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                    
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-orange-600 text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Client Success Stories"
            subtitle="Hear what our clients have to say about working with us"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl italic mb-8 text-orange-50">
                "Working with Optifusion Technologies was a game-changer for our business. Their team delivered an exceptional e-commerce platform that exceeded our expectations and significantly improved our online sales."
              </p>
              <cite className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                  <img 
                    src="https://ik.imagekit.io/6ilngyaqa/1747555001297-WhatsApp_Image_2025-05-18_at_13.26.06_a5f524e5_CNZtXcUCK.jpg" 
                    alt="Rajesh Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold">Pravin Agarwal</span>
                <span className="text-orange-200">Director, Vastrado</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors"
              onClick={() => window.location.href = 'mailto:info@optifusiontechnologies.in'}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
