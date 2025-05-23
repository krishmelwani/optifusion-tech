import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { Award, Users, Target, Zap, Sparkles, MessageSquare } from 'lucide-react';
import StatsSection from '../components/home/StatsSection';

const About = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
                  About Optifusion
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h1>
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
                  src="/assets/careers-page-pic.jpeg"
                  alt="Optifusion Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">3+</div>
                  <div className="text-gray-600">Years of<br />Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative">
          <SectionHeading
            title="Our Story"
            subtitle="The journey that made us who we are today"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-orange-200 pl-8 py-6">
              {[
                {
                  year: '2022',
                  title: 'Where It All Began',
                  description: 'Optifusion Technologies was founded by a tech enthusiast with a vision to transform digital landscapes for businesses.'
                },
                {
                  year: '2023',
                  title: 'Expanding Our Horizons',
                  description: 'We expanded our services to includes web development, mobile app development and digital marketing.'
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
                  <div className="absolute -left-12 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 border-4 border-white flex items-center justify-center text-white font-bold">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md border border-gray-100"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500/10 to-pink-500/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-500" />
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
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md border border-gray-100"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500/10 to-pink-500/10 flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container-custom relative">
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
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500/10 to-pink-500/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss how our team can help bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:info@optifusiontechnologies.in"
              className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
