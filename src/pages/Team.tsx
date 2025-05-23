import { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  Users, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield, 
  BookOpen,
  ArrowUpRight,
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Krish Melwani',
    role: 'CEO & Founder',
    image: '/assets/ceo-optifusion.jpeg',
    bio: 'Krish Melwani founded Optifusion Technologies in 2022 with a vision to innovate and transform the digital landscape. With a passion for technology, he leads the company towards delivering cutting-edge solutions that empower businesses worldwide.'
  },
  {
    id: 2,
    name: 'Harshita Mishra',
    role: 'HR Manager',
    image: '/assets/harshita-optifusion.jpeg',
    bio: 'Harshita Mishra is the HR Manager at Optifusion Technologies, responsible for overseeing all human resource functions. She manages recruitment, employee relations, and ensures a positive work environment to support the company\'s growth and success.'
  },
  {
    id: 3,
    name: 'Prince',
    role: 'Software Engineer',
    image: '/assets/prince-optifusion.jpeg',
    bio: 'Prince is a skilled Software Engineer at Optifusion Technologies, specializing in developing robust and scalable applications. With expertise in modern programming languages and frameworks, he contributes to building innovative solutions.'
  },
  {
    id: 4,
    name: 'Sourabh',
    role: 'Full Stack Developer',
    image: '/assets/sourav-optifusion.jpeg',
    bio: 'Sourabh is a talented Full Stack Developer at Optifusion Technologies, proficient in both frontend and backend technologies. He plays a crucial role in developing end-to-end solutions with a focus on performance and user experience.'
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from the quality of our work to how we interact with clients and team members.',
    icon: Award,
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Innovation',
    description: 'We embrace creativity and innovative thinking to solve complex problems and deliver cutting-edge solutions.',
    icon: Lightbulb,
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest level of integrity in our work, being honest, transparent, and ethical in all our dealings.',
    icon: Shield,
    gradient: 'from-green-400 to-blue-500'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and foster a collaborative environment where diverse ideas are valued.',
    icon: Users,
    gradient: 'from-pink-400 to-red-500'
  },
  {
    title: 'Client Success',
    description: 'We measure our success by the success of our clients and are committed to helping them achieve their goals.',
    icon: Target,
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Continuous Learning',
    description: 'We encourage continuous learning and personal growth, staying updated with the latest technologies and industry trends.',
    icon: BookOpen,
    gradient: 'from-indigo-400 to-blue-500'
  }
];

const TeamMember = ({ member, index }: { member: TeamMember; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            TEAM
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-orange-500 font-medium mb-4">{member.role}</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Animated Border */}
        <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-blue-500/20 blur-sm"></div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ value, index }: { value: typeof values[0]; index: number }) => {
  const IconComponent = value.icon;
  
  return (
    <div
      className="group relative"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 h-full">
        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${value.gradient} mb-4`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {value.title}
        </h4>
        <p className="text-gray-600 leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
};

const FancyTeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Meet Our Team
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent mb-6">
              The Minds Behind
              <br />
              <span className="text-5xl md:text-7xl">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the talented individuals who drive our success and bring innovative solutions to life every day
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', icon: Globe },
              { number: '25+', label: 'Happy Clients', icon: Heart },
              { number: '3+', label: 'Years Experience', icon: Award },
              { number: '100%', label: 'Success Rate', icon: Zap }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The core principles that guide our work, shape our culture, and define who we are as a team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Join Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            We're always looking for talented individuals who share our passion for innovation and excellence. Join us in building tomorrow's digital solutions.
          </p>
          <Link to="/careers">
          <button className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 mx-auto">
            View Open Positions
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          </Link>
        </div>
      </section>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FancyTeamPage;