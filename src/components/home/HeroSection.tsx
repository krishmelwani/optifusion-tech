import {
  ArrowUpRight,
  Globe,
  Shield,
  TrendingUp,
  Award,
  Star,
  Zap,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingElement = ({ delay = 0, children, className = '' }: { delay?: number; children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`floating-element ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <FloatingElement delay={0} className="absolute top-20 md:top-40 right-4 md:right-20">
        <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg border border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium text-gray-700">Live Projects: 20+</span>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement delay={1} className="absolute top-20 md:top-40 left-4 md:left-20">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg">
          <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2} className="absolute bottom-20 md:bottom-40 left-4 md:left-40">
        <div className="bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg border border-white/20">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
            <span className="text-xs md:text-sm font-bold text-gray-700">4.9/5</span>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement delay={0.5} className="absolute bottom-10 md:bottom-20 right-4 md:right-40">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg">
          <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
      </FloatingElement>

      {/* Main Content */}
      <div className="relative mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="hero-content"
          style={{ animation: 'fadeInUp 1s ease-out forwards' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            We create innovative digital solutions that drive growth, enhance user experiences, and help businesses thrive in the modern digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-8 md:mb-12 px-4">
            <a
              href="https://wa.me/9928610677"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </a>

            <Link to="/services" className="w-full sm:w-auto">
              <button className="w-full group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 border border-gray-200/50 hover:shadow-lg flex items-center justify-center gap-2">
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                Explore Our Services
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-500 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 md:w-5 md:h-5" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span>Secure Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
              <span>Growth Focused</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-gray-400 rounded-full mt-1 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .hero-content {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.2s forwards;
        }

        @media (max-width: 640px) {
          .floating-element {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;