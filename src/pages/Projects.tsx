import { useState } from 'react';
import { ChevronRight, Globe, MapPin, Calendar, Star, Users, ArrowUpRight, Sparkles } from 'lucide-react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  country: string;
  category: string;
  technologies: string[];
  year?: string;
  rating?: number;
  teamSize?: number;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    client: 'One Mile',
    description: 'A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.',
    image: 'https://ik.imagekit.io/6ilngyaqa/1747551602362-Screenshot_2025-05-17_213205_tFBFxeHuug.png',
    country: 'India',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB'],
    year: '2024',
    rating: 4.9,
    teamSize: 5
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    client: 'Primary Health',
    description: 'A digital healthcare platform enabling patients to book appointments, access medical records, and consult with doctors online.',
    image: '/src/assets/medical.jpeg',
    country: 'India',
    category: 'web',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    year: '2024',
    rating: 4.8,
    teamSize: 6
  },
  {
    id: 3,
    title: 'Bike Club Website',
    client: 'Rider\'s Hub',
    description: 'A dynamic website for a biking community featuring event management, ride tracking, member profiles, and social interaction features.',
    image: '/src/assets/bike club.jpeg',
    country: 'USA',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB'],
    year: '2023',
    rating: 4.7,
    teamSize: 4
  },
  {
    id: 4,
    title: 'Food Delivery App',
    client: 'QuickBite',
    description: 'A feature-rich food delivery application with real-time order tracking, in-app payments, restaurant ratings, and personalized recommendations.',
    image: '/src/assets/food-delivery.png',
    country: 'Bangladesh',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    year: '2024',
    rating: 4.9,
    teamSize: 7
  },
  {
    id: 5,
    title: 'Astrology Portal',
    client: 'Cosmic Insights',
    description: 'A comprehensive astrology platform offering personalized horoscopes, birth chart analysis, compatibility matching, and live consultation booking.',
    image: '/src/assets/astrology.jpeg',
    country: 'India',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB'],
    year: '2023',
    rating: 4.6,
    teamSize: 5
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    client: 'FitLife',
    description: 'A comprehensive fitness tracking application with workout plans, nutrition tracking, progress monitoring, and social challenges.',
    image: 'https://i.pinimg.com/736x/7b/5d/ff/7b5dffb7138b3e9a904dda4ac8ac8497.jpg',
    country: 'UK',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    year: '2024',
    rating: 4.8,
    teamSize: 6
  },
  {
    id: 7,
    title: 'Luxury Jewelry E-Commerce',
    client: 'Sparkle & Shine',
    description: 'An elegant e-commerce platform for fine jewelry featuring 3D product visualization, virtual try-on, custom design tools, and secure payment processing.',
    image: '/src/assets/jwellery.jpeg',
    country: 'India',
    category: 'web',
    technologies: ['React', 'Node.js', 'Three.js'],
    year: '2024',
    rating: 4.9,
    teamSize: 8
  },
  {
    id: 8,
    title: 'Brand Identity Design',
    client: 'TechVision',
    description: 'Complete brand identity design including logo design, color palette, typography, and brand guidelines for a technology startup.',
    image: 'https://media.coschedule.com/uploads/2023/03/Visual-Identity-design-logos-layout-color-font.png',
    country: 'India',
    category: 'design',
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    year: '2023',
    rating: 4.7,
    teamSize: 3
  },
  {
    id: 9,
    title: 'Luxury Hotel Booking Platform',
    client: 'Surya Hotels',
    description: 'A sophisticated hotel booking platform featuring room management, online reservations, virtual tours, and integrated payment processing.',
    image: '/src/assets/hotel surya.jpeg',
    country: 'India',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB'],
    year: '2024',
    rating: 4.8,
    teamSize: 6
  },
];

const categoryColors = {
  web: 'from-blue-500 to-cyan-500',
  mobile: 'from-purple-500 to-pink-500',
  design: 'from-yellow-500 to-orange-500'
} as const;

const FancyProjects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'india') return project.country === 'India';
    if (filter === 'international') return project.country !== 'India';
    return project.category === filter;
  });

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'india', label: 'Indian Clients', icon: MapPin },
    { id: 'international', label: 'International', icon: Globe },
    { id: 'web', label: 'Web Development', icon: ChevronRight },
    { id: 'mobile', label: 'Mobile Apps', icon: ChevronRight },
    { id: 'design', label: 'Design', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Portfolio Showcase
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of innovative digital solutions that have transformed businesses across the globe
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 border border-gray-200/50'
                  }`}
                  onClick={() => setFilter(category.id)}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    {category.label}
                  </div>
                  {filter === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                    {project.category.toUpperCase()}
                  </div>

                  {/* Country Badge */}
                  {/* <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    <MapPin className="w-3 h-3" />
                    {project.country}
                  </div> */}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-orange-500">{project.client}</p>
                    </div>
                    {project.rating && (
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-yellow-700">{project.rating}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                    {project.year && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.teamSize} members
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200/50 hover:shadow-sm transition-shadow duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-blue-500/20 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-light text-white/95 mb-8 leading-relaxed italic">
              "Working with Optifusion Technologies was a game-changer for our business. Their team delivered an exceptional e-commerce platform that exceeded our expectations."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-white/30">
                <img 
                  src="https://ik.imagekit.io/6ilngyaqa/1747555001297-WhatsApp_Image_2025-05-18_at_13.26.06_a5f524e5_CNZtXcUCK.jpg" 
                  alt="Pravin Agarwal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <cite className="not-italic">
                <div className="font-bold text-white text-lg">Pravin Agarwal</div>
                <div className="text-white/80">Director, Vastrado</div>
              </cite>
            </div>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ready to Start?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Transform your vision into reality with our expertise in digital solutions and cutting-edge technology.
          </p>
          <button
            className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 mx-auto"
            onClick={() => window.location.href = 'mailto:info@optifusiontechnologies.in'}
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FancyProjects;