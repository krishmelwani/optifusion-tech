import { ChevronLeft, ChevronRight, Star, User2, Sparkles, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sourav Chakrabarty',
    position: 'Co-Founder',
    company: 'Healthfab',
    rating: 5,
    text: 'Optifusion\'s graphic design team impressed us from day one. Their designs were fresh, modern, and perfectly aligned with our brand. They paid attention to even the smallest details, ensuring every piece of content reflected our message and tone. The designers were easy to work with, open to feedback, and always delivered on time.'
  },
  {
    id: 2,
    name: 'Rhitiman Majumder',
    position: 'Founder',
    company: 'Pickrr',
    rating: 5,
    text: 'Our experience with Optifusion\'s web development team has been exceptional. From the initial consultation to the final launch, every phase was handled with professionalism and technical expertise. The website they built is not only visually stunning but also incredibly fast, mobile-responsive, and SEO-friendly.'
  },
  {
    id: 3,
    name: 'Jatin Solanki',
    position: 'Founder',
    company: 'Expertronsa',
    rating: 4,
    text: 'Optifusion\'s content writing services helped us redefine our communication. Their team delivered well-researched, original, and engaging content that resonated with our brand voice. From blogs to email campaigns, everything was thoughtfully written with clear attention to detail and SEO optimization.'
  },
  {
    id: 4,
    name: 'Poornima University',
    position: 'Technical Head',
    company: 'University',
    rating: 5,
    text: 'Developing a mobile app with Optifusion was smooth and hassle-free. Their team was technically sound, communicative, and fully invested in our project. They helped us design a user-friendly interface, integrate powerful features, and ensure cross-platform performance.'
  },
  {
    id: 5,
    name: 'Galgotia University',
    position: 'Technical Head',
    company: 'University',
    rating: 4,
    text: 'One of the most impressive things about working with Optifusion is their commitment to deadlines and quality. Every project we\'ve handed over has been delivered on time without compromising on results. They manage their work professionally and always keep us updated.'
  }
];

export default function ClientTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Client Testimonials
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
            Don't just take our word for it - hear from our satisfied clients about their experience working with us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20 transform transition-all duration-500 hover:scale-[1.02] min-h-[400px] flex flex-col">
            <Quote className="w-12 h-12 text-orange-500/20 mb-6" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                    <User2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${i < testimonials[activeIndex].rating ? 'text-orange-500' : 'text-gray-300'} transition-colors duration-300`}
                    fill={i < testimonials[activeIndex].rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>

            <div className="h-[180px] overflow-hidden">
              <blockquote className="text-xl text-gray-700 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </blockquote>
            </div>

            <div className="flex justify-between items-center mt-auto pt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};