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


const Team = () => {
  return (
    <div className="pt-32">
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
