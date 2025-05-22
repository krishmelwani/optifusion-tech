import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, PenTool, BarChart, ChevronRight, Filter, Palette, Users, Sparkles, MessageSquare } from 'lucide-react';

// Job listings data
const jobListings = [          
  {
    id: 1,
    title: 'Business Development Manager',
    department: 'Business Management.',
    location: 'Jaipur, India (Hybrid)',
    type: 'Part-Time/Full-Time',
    salary: 'Incentive Based',
    description: "We're seeking a motivated Business Development Manager, perfect for fresh graduates or early-career professionals. You'll identify new opportunities, build client relationships, and help grow our market presence.",
    requirements: [
      "Bachelor's degree in Business Administration, Marketing, or related field.",
      'Excellent communication and interpersonal skills.',
      'Strong negotiation and persuasion abilities.',
      'Proficiency in MS Office (Word, Excel, PowerPoint).',
      'Basic understanding of sales and marketing principles is a plus.'
    ],
    icon: Briefcase
  },
  {
    id: 2,
    title: 'Business Development Executives.',
    department: 'Operations',
    location: 'Jaipur, India (Remote Option)',
    type: 'Part-Time/Full-time',
    salary: 'Incentive Based',
    description: "We are looking for energetic and goal-driven Business Development Executives to help us expand our client base. You will play a key role in identifying sales leads, pitching services, and building strong customer relationships.",
    requirements: [
      "Bachelor's degree in Business, Marketing, or a related field.",
      'Strong verbal and written communication skills.',
      'Freshers with a strong interest in business development are encouraged to apply.',
      'Basic knowledge of CRM tools and MS Office is a plus.',
      'Self-motivated, target-oriented, and eager to learn'
    ],
    icon: PenTool
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Jaipur, India (On-site)',
    type: 'Part-Time/Full-Time',
    salary: 'Incentive Based',
    description: 'Drive our digital marketing initiatives to increase brand awareness, generate leads, and support business growth.',
    requirements: [
      '1+ years of experience in digital marketing',
      'Expertise in SEO, SEM, social media marketing, and email campaigns',
      'Experience with analytics tools (Google Analytics, SEMrush)',
      'Knowledge of content marketing and strategy',
      'Familiarity with marketing automation platforms'
    ],
    icon: BarChart
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Jaipur, India (Hybrid)',
    type: 'Part-Time/Full-time',
    salary: 'Incentive Based',
    description: 'Develop and maintain full-stack web applications using modern technologies and best practices.',
    requirements: [
      'Design graphics, illustrations, and layouts for digital and print use',
      'Develop creative concepts and visuals aligned with brand identity',
      'Create banners, posters, infographics, and social media creatives',
      'Edit and retouch images when required',
      'Stay updated with design trends and tools'
    ],
    icon: Code
  },
  {
    id: 5,
    title: 'Graphic Designer',
    department: 'Designing',
    location: 'Jaipur, India (Hybrid)',
    type: 'Part-Time/Full-time',
    salary: 'Incentive Based',
    description: "We are looking for a creative and detail-oriented Graphic Designer to join our team. You will be responsible for creating visually appealing designs for digital and print media, including social media graphics, branding assets, web elements, brochures, and more.",
    requirements: [
      'Freshers with strong knowledge of front-end as well as back-end can apply.',
      'Proficiency in JavaScript/TypeScript, React, Node.js',
      'Experience with databases (SQL and NoSQL)',
      'Knowledge of API design and development',
      'Understanding of DevOps practices and cloud platforms'
    ],
    icon: Palette
  },
  {
    id: 6,
    title: 'Team Leader',
    department: 'Any Department',
    location: 'Jaipur, India (Hybrid)',
    type: 'Part-Time/Full-time',
    salary: 'Incentive Based',
    description: "We are looking for a proactive and result-oriented Team Leader to manage, guide, and support a team of professionals toward achieving project goals and performance targets. You will be responsible for coordinating team efforts, monitoring progress, ensuring timely delivery, and fostering a positive and productive work environment",
    requirements: [
      'Strong leadership, problem-solving, and decision-making skills.',
      'Excellent communication and interpersonal abilities.',
      'Ability to manage multiple tasks and meet deadlines.',
      'Proficient in tools like MS Office, project management software (e.g. Trello, Asana, or Jira)',
      'Freshers with strong leadership qualities are also encouraged to apply'
    ],
    icon: Users
  }
];

const Careers = () => {
  const [department, setDepartment] = useState('All');
  
  const filteredJobs = department === 'All' 
    ? jobListings 
    : jobListings.filter(job => job.department === department);
  
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
                Build Your Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our team of innovators and help shape the future of digital solutions.
            </p>
          </div>
          
          {/* Culture Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Optifusion Technologies, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to take ownership of their work and contribute meaningfully to our clients' success.
              </p>
              <div className="space-y-4">
                {[
                  'Collaborative and supportive work environment',
                  'Continuous learning and professional development',
                  'Work-life balance with flexible working options',
                  'Regular team building activities and events',
                  'Opportunity to work on diverse and challenging projects'
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-orange-500 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team at work" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Open Positions
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
                Find Your Perfect
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Role
              </span>
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center justify-center mb-8 gap-3">
            <div className="text-gray-600 flex items-center">
              <Filter size={18} className="mr-2" />
              <span>Filter by department:</span>
            </div>
            {['All', 'Engineering', 'Design', 'Marketing', 'Operations'].map((dep) => (
              <button
                key={dep}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  department === dep
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-100'
                }`}
                onClick={() => setDepartment(dep)}
              >
                {dep}
              </button>
            ))}
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 sm:p-8">
                  <div className="sm:flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="mr-4 bg-gradient-to-r from-orange-500/10 to-pink-500/10 p-3 rounded-lg text-orange-500">
                        <job.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                        <div className="flex flex-wrap items-center text-sm text-gray-600">
                          <span>{job.department}</span>
                          <span className="mx-2">•</span>
                          <span>{job.location}</span>
                          <span className="mx-2">•</span>
                          <span>{job.type}</span>
                          <span className="mx-2">•</span>
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="mailto:info@optifusiontechnologies.in"
                      className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 mt-4 sm:mt-0"
                    >
                      Apply Now
                      <ChevronRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                  <p className="text-gray-600 mt-4 mb-4">{job.description}</p>
                  <div className="mt-4">
                    <h5 className="font-semibold mb-2">Requirements:</h5>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100">
              <p className="text-gray-600">No open positions in this department currently. Please check back later or explore other departments.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Benefits
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
                Why Work With
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Growth',
                description: 'Continuous learning opportunities, training programs, and career advancement paths.'
              },
              {
                title: 'Competitive Compensation',
                description: 'Attractive salary packages, performance bonuses, and comprehensive health insurance.'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible working hours, remote work options, and generous paid time off.'
              },
              {
                title: 'Collaborative Environment',
                description: 'Open communication, team collaboration, and a supportive work culture.'
              },
              {
                title: 'Cutting-Edge Projects',
                description: 'Work on innovative projects using the latest technologies across various industries.'
              },
              {
                title: 'Regular Team Activities',
                description: 'Team outings, celebrations, workshops, and social events to foster team bonding.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't See a Suitable Position?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            We're always looking for talented individuals to join our team. Send us your resume, and we'll consider you for future opportunities.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:hr@optifusiontechnologies.in"
              className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;