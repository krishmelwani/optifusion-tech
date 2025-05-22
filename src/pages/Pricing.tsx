import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react';

const websitePlans = [
  {
    name: 'Standard',
    price: '₹15,000',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Responsive Website (5 pages)',
      'Basic SEO Optimization',
      'Contact Form Integration',
      'Social Media Integration',
      '1 Month Support',
      'Google Analytics Setup'
    ],
    isPopular: false,
    gradient: 'from-orange-500 to-pink-500',
    topup: "New users get 15% OFF - final pricing shared after requirement analysis"
  },
  {
    name: 'Premium',
    price: '₹35,000',
    description: 'Ideal for growing businesses with specific needs',
    features: [
      'Responsive Website (10 pages)',
      'Advanced SEO Optimization',
      'Contact Form & Newsletter Integration',
      'Social Media Integration',
      '3 Months Support',
      'E-commerce Integration (up to 50 products)',
      'Content Management System',
      'Performance Optimization'
    ],
    isPopular: true,
    gradient: 'from-purple-600 to-blue-600',
    topup: "New users get 15% OFF - final pricing shared after requirement analysis"
  },
  {
    name: 'Custom',
    price: 'Custom',
    description: 'Tailored solutions for enterprise-level requirements',
    features: [
      'Custom Web Application',
      'Comprehensive SEO Strategy',
      'Advanced Integrations',
      'Priority Support (6 months)',
      'E-commerce (unlimited products)',
      'Custom Features Development',
      'Advanced Analytics & Reporting',
      'Dedicated Project Manager'
    ],
    isPopular: false,
    gradient: 'from-orange-500 to-pink-500',
    topup: "New users get 15% OFF - final pricing shared after requirement analysis"
  }
];

const appPlans = [
  {
    name: 'Basic App',
    price: '₹30,000',
    description: 'For startups and MVPs',
    features: [
      'Cross-platform Support',
      'Basic UI/UX',
      'Push Notifications',
      '1 Month Support'
    ],
    isPopular: false,
    gradient: 'from-orange-500 to-pink-500',
    topup: 'Ideal for website pages, blogs, product descriptions.'
  },
  {
    name: 'Advanced App',
    price: '₹60,000',
    description: 'Scalable app with modern features',
    features: [
      'Custom UI/UX',
      'Database Integration',
      'Payment Gateway',
      '3 Months Support',
      'Analytics Dashboard'
    ],
    isPopular: true,
    gradient: 'from-purple-600 to-blue-600',
    topup: 'Ideal for website pages, blogs, product descriptions.'
  },
  {
    name: 'Custom App',
    price: 'Custom',
    description: 'Tailored enterprise mobile apps',
    features: [
      'Full-stack App Development',
      'API Integrations',
      'Authentication & Security',
      'Priority Support (6 months)',
      'Admin Panel'
    ],
    isPopular: false,
    gradient: 'from-orange-500 to-pink-500',
    topup: 'Ideal for website pages, blogs, product descriptions.'
  }
];

const marketingPlans = [
  {
    name: 'Starter Pack',
    price: '₹10,000',
    description: 'For small campaigns and launches',
    features: [
      'SEO Setup',
      '15 Social Media Posts',
      '1 Ad Campaign',
      'Performance Report'
    ],
    isPopular: false,
    gradient: 'from-orange-500 to-pink-500',
    topup: 'New clients enjoy tailored strategy + 15% launch discount!'
  },
  {
    name: 'Growth Pack',
    price: '₹15,000',
    description: 'Best for consistent growth',
    features: [
      'Advanced SEO + SEM',
      'Full Social Media Management',
      '2 Ad Campaigns',
      'Email Marketing',
      'Monthly Analytics'
    ],
    isPopular: true,
    gradient: 'from-purple-600 to-blue-600',
    topup: 'New clients enjoy tailored strategy + 15% launch discount!'
  },
  {
    name: 'Custom Strategy',
    price: 'Custom',
    description: 'Marketing tailored to your brand',
    features: [
      'SEO/SEM/Email Campaigns',
      'Influencer & Affiliate',
      'Content Strategy',
      '6 Months Support',
      'Dedicated Manager'
    ],
    isPopular: false,
    gradient: 'from-orange-500 to-pink-500',
    topup: 'New clients enjoy tailored strategy + 15% launch discount!'
  }
];

const contentWritingPlans = [
  {
    name: 'Basic',
    price: '₹5,299',
    description: 'Powerful, SEO-driven content that grabs attention and fuels growth.',
    features: [
      'Up to 1000 words ',
      'SEO-optimized writing',
      'Brand voice integration',
      '2 revisions included '
    ],
    isPopular: false,
    gradient: 'from-orange-500 to-pink-500',
    topup: 'Ideal for website pages, blogs, product descriptions.'
  }
];

const graphicDesignPlans = [{
  name: 'Basic',
  price: '₹4,999',
  description: "Eye-catching designs for both digital & print that elevate your brand's presence.",
  features: [
    '3 social media posts ',
    '1 flyer/poster/banner',
    'Custom brand-aligned design ',
    '2 free revisions '
  ],
  isPopular: false,
  gradient: 'from-orange-500 to-pink-500',
  topup: ' Logo design available at discounted bundle rates.'
}];

const PricingPlan = ({ plan, index }: { plan: typeof websitePlans[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-[1.02] h-full flex flex-col"
    >
      {plan.isPopular && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-medium rounded-t-2xl">
          MOST POPULAR
        </div>
      )}

      <div className="p-4 sm:p-6 lg:p-8 flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {plan.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>

        <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {plan.price}
          {plan.name !== 'Custom' && <span className="text-sm sm:text-base font-normal text-gray-500"> / project</span>}
        </div>

        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 mt-1 text-orange-500">
                <Check size={16} />
              </span>
              <span className="text-sm sm:text-base text-gray-600">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <span className="text-xs sm:text-sm text-gray-500">{plan.topup}</span>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 mt-auto">
        <a
          href="https://wa.me/9928610677"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group flex items-center justify-center gap-2 w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base
            bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-orange-500/30
          `}
        >
          <MessageCircle size={16} className="sm:w-5 sm:h-5" />
          Chat Now
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('websites');

  return (
    <div className="pt-32">
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
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Tailored to Your Needs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-1 rounded-xl shadow-lg flex flex-col sm:flex-row">
              {['websites', 'apps', 'marketing', 'content writing', 'graphic design'].map((category) => (
                <button
                  key={category}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'websites' && 'Web Development'}
                  {category === 'apps' && 'Mobile Apps'}
                  {category === 'marketing' && 'Digital Marketing'}
                  {category === 'content writing' && 'Content Writing'}
                  {category === 'graphic design' && 'Graphic Designing'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {(selectedCategory === 'websites' ? websitePlans :
              selectedCategory === 'apps' ? appPlans :
                selectedCategory === 'content writing' ? contentWritingPlans :
                  selectedCategory === 'graphic design' ? graphicDesignPlans :
                    marketingPlans).map((plan, index) => (
                      <PricingPlan key={plan.name} plan={plan} index={index} />
                    ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-orange-900 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept payments via bank transfer, all major credit/debit cards, PayPal, and UPI for Indian clients.'
              },
              {
                question: 'Do you offer maintenance services after project completion?',
                answer: 'Yes, we offer maintenance packages that can be purchased on a monthly or yearly basis after the initial support period ends.'
              },
              {
                question: 'How long does it take to complete a typical project?',
                answer: 'Project timelines vary based on complexity. A standard website typically takes 3-4 weeks, while custom applications may take 8-12 weeks or more.'
              },
              {
                question: 'Can I upgrade my plan later?',
                answer: 'Absolutely! You can upgrade your plan at any time. We\'ll simply charge the difference between your current plan and the new one.'
              },
              {
                question: 'Do you offer discounts for non-profits or educational institutions?',
                answer: 'Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Please contact us for details.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Custom Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for a personalized quote tailored to your specific business requirements.
          </p>
          <a
            href="https://wa.me/9928610677"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
