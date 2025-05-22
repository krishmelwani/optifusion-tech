import { ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    position: 'CEO',
    company: 'TechSprint Solutions',
    rating: 5,
    text: 'Optifusion\'s graphic design team impressed us from day one. Whether it was social media creatives, marketing collateral, or website visuals, their designs were fresh, modern, and perfectly aligned with our brand. They paid attention to even the smallest details, ensuring every piece of content reflected our message and tone. The designers were easy to work with, open to feedback, and always delivered on time. Our visual branding has improved tremendously thanks to their work.'
  },
  {
    id: 2,
    name: 'Anjali Desai',
    position: 'Marketing Director',
    company: 'UrbanStyle',
    rating: 5,
    text: 'Our experience with Optifusion\'s web development team has been nothing short of exceptional. From the initial consultation to the final launch, every phase was handled with professionalism, clear communication, and technical expertise. The website they built for us is not only visually stunning but also incredibly fast, mobile-responsive, and SEO-friendly.'
  },
  {
    id: 3,
    name: 'Sandeep Jain',
    position: 'Founder',
    company: 'HealthVista',
    rating: 4,
    text: 'Optifusion\'s content writing services helped us redefine how we communicate with our audience. Their team delivered well-researched, original, and engaging content that resonated perfectly with our brand voice. From blogs and product descriptions to email campaigns and web content, everything was thoughtfully written with clear attention to detail. We also appreciated their ability to write SEO-optimized content that helped improve our visibility in search engines.'
  },
  {
    id: 4,
    name: 'Meera Krishnan',
    position: 'COO',
    company: 'EduBridge',
    rating: 5,
    text: 'Developing a mobile app can be a complex process, but Optifusion made it smooth and hassle-free. Their app development team was technically sound, communicative, and fully invested in our project from start to finish. They helped us design a user-friendly interface, integrate powerful features, and ensure cross-platform performance. The final product was sleek, functional, and launched without a hitch. We\'re grateful to have found such a reliable partner.'
  },
  {
    id: 5,
    name: 'Ravi Patel',
    position: 'CTO',
    company: 'FinTrack',
    rating: 4,
    text: 'One of the most impressive things about working with Optifusion is their commitment to deadlines and quality. Every project we\'ve handed over – big or small – has been delivered on time without compromising on results. They manage their work professionally, provide clear timelines, and always keep us updated. It\'s rare to find such consistency and reliability in a service provider.'
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
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonials[activeIndex].rating ? 'text-orange-500' : 'text-gray-300'} 
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
                className="p-2 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 hover:from-orange-500/20 hover:to-pink-500/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-orange-600" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-gradient-to-r from-orange-500 to-pink-500' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 hover:from-orange-500/20 hover:to-pink-500/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-orange-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};