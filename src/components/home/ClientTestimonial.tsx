import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    position: 'CEO',
    company: 'TechSprint Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 5,
    text: 'Optifusion`s graphic design team impressed us from day one. Whether it was social media creatives, marketing collateral, or website visuals, their designs were fresh, modern, and perfectly aligned with our brand. They paid attention to even the smallest details, ensuring every piece of content reflected our message and tone. The designers were easy to work with, open to feedback, and always delivered on time. Our visual branding has improved tremendously thanks to their work.'
  },
  {
    id: 2,
    name: 'Anjali Desai',
    position: 'Marketing Director',
    company: 'UrbanStyle',
    avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    rating: 5,
    text: 'Our experience with Optifusion’s web development team has been nothing short of exceptional. From the initial consultation to the final launch, every phase was handled with professionalism, clear communication, and technical expertise. The website they built for us is not only visually stunning but also incredibly fast, mobile-responsive, and SEO-friendly.'
  },
  {
    id: 3,
    name: 'Sandeep Jain',
    position: 'Founder',
    company: 'HealthVista',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    rating: 4,
    text: 'Optifusion`s content writing services helped us redefine how we communicate with our audience. Their team delivered well-researched, original, and engaging content that resonated perfectly with our brand voice. From blogs and product descriptions to email campaigns and web content, everything was thoughtfully written with clear attention to detail. We also appreciated their ability to write SEO-optimized content that helped improve our visibility in search engines. '
  },
  {
    id: 4,
    name: 'Meera Krishnan',
    position: 'COO',
    company: 'EduBridge',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    rating: 5,
    text: 'Developing a mobile app can be a complex process, but Optifusion made it smooth and hassle-free. Their app development team was technically sound, communicative, and fully invested in our project from start to finish. They helped us design a user-friendly interface, integrate powerful features, and ensure cross-platform performance. The final product was sleek, functional, and launched without a hitch. We’re grateful to have found such a reliable partner.'
  },
  {
    id: 5,
    name: 'Ravi Patel',
    position: 'CTO',
    company: 'FinTrack',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4,
    text: 'One of the most impressive things about working with Optifusion is their commitment to deadlines and quality. Every project we’ve handed over – big or small – has been delivered on time without compromising on results. They manage their work professionally, provide clear timelines, and always keep us updated. It’s rare to find such consistency and reliability in a service provider.'
  }
];

export default function ClientTestimonial(){
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