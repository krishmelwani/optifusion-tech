import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-amber-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Optifusion Technologies</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We are a team of passionate digital experts committed to transforming businesses through innovative technology solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2022, Optifusion Technologies has grown from a small startup to a leading digital agency serving clients across India and internationally. Our mission is to help businesses thrive in the digital landscape by providing cutting-edge solutions tailored to their unique needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://ik.imagekit.io/6ilngyaqa/1747551501075-WhatsApp_Image_2025-05-18_at_11.08.13_727eb5d9_04_pJlpgI.jpg" 
                  alt="Optifusion Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold text-orange-500">3+</div>
                  <div className="text-gray-600">Years of<br/>Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Story"
            subtitle="The journey that made us who we are today"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-amber-200 pl-8 py-6">
              {[
                {
                  year: '2022',
                  title: 'Where It All Began',
                  description: 'Optifusion Technologies was founded by a tech enthusiast with a vision to transform digital landscapes for businesses.'
                },
                {
                  year: '2023',
                  title: 'Expanding Our Horizons',
                  description: 'We expanded our services to includes web development,  mobile app development and digital marketing.'
                },
                {
                  year: '2024',
                  title: 'Going International',
                  description: 'Successfully delivered our first international projects and established partnerships with global tech companies.'
                },
                {
                  year: '2025',
                  title: 'Looking Ahead',
                  description: 'Continuing to grow our global presence and push the boundaries of digital innovation to serve our clients better.'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 last:mb-0 relative"
                >
                  <div className="absolute -left-12 w-8 h-8 rounded-full bg-amber-400 border-4 border-white flex items-center justify-center text-white font-bold">
                  </div>
                  <div className="text-orange-500 font-bold text-xl mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="w-16 h-16 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the catalyst for digital transformation, empowering businesses to thrive in an ever-evolving digital landscape through innovative solutions and exceptional service.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver cutting-edge digital solutions that solve real business challenges, drive growth, and create lasting value for our clients through a perfect blend of creativity, technology, and strategic thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What Makes Us Different Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="What Makes Us Different"
            subtitle="The values and approach that set us apart"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: Users,
                title: 'Client-Centric Approach',
                description: 'We put our clients at the center of everything we do, taking time to understand their unique needs and goals.'
              },
              {
                icon: Award,
                title: 'Excellence in Execution',
                description: 'We maintain the highest standards in our work, ensuring every project is delivered with precision and quality.'
              },
              {
                icon: Target,
                title: 'Innovative Solutions',
                description: 'We constantly explore emerging technologies and creative approaches to solve complex business challenges.'
              },
              {
                icon: Zap,
                title: 'Result-Oriented Focus',
                description: 'We measure our success by the tangible results and value we create for our clients\' businesses.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-200">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">750+</div>
              <div className="text-amber-200">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
              <div className="text-amber-200">Years</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-amber-200">Expert Team Members</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <div className="rounded-2xl bg-white shadow-xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help bring your vision to life with our expertise and innovative solutions.
              </p>
              <a href="mailto:info@optifusiontechnologies.in">
                <button className="btn-primary">
                  Contact Us Today
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
