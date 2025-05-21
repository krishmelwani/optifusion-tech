import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { Check, MessageCircle } from 'lucide-react';

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
    bgColor: 'bg-white'
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
    bgColor: 'bg-orange-700 text-white'
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
    bgColor: 'bg-white'
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
    bgColor: 'bg-white'
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
    bgColor: 'bg-orange-700 text-white'
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
    bgColor: 'bg-white'
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
    bgColor: 'bg-white'
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
    bgColor: 'bg-orange-700 text-white'
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
    bgColor: 'bg-white'
  }
];

const PricingPlan = ({ plan, index }: { plan: typeof websitePlans[0]; index: number }) => {
  const isSecondary = plan.isPopular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl shadow-lg overflow-hidden ${plan.bgColor} transform transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col`}
    >
      {plan.isPopular && (
        <div className="bg-orange-600 text-white text-center py-2 text-sm font-medium">
          MOST POPULAR
        </div>
      )}

      <div className="p-8 flex-grow">
        <h3 className={`text-2xl font-bold mb-2 ${isSecondary ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
        <p className={`mb-6 ${isSecondary ? 'text-orange-200' : 'text-gray-600'}`}>{plan.description}</p>

        <div className={`text-4xl font-bold mb-6 ${isSecondary ? 'text-white' : 'text-gray-900'}`}>
          {plan.price}
          {plan.name !== 'Custom' && <span className={`text-base font-normal ${isSecondary ? 'text-orange-200' : 'text-gray-500'}`}> / project</span>}
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className={`mr-2 mt-1 ${isSecondary ? 'text-orange-200' : 'text-orange-700'}`}>
                <Check size={16} />
              </span>
              <span className={isSecondary ? 'text-orange-100' : 'text-gray-600'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-8 pb-8 mt-auto">
        <a 
          href="https://wa.me/9928610677" 
          target="_blank"
          rel="noopener noreferrer" 
          className={`
            flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300
            ${isSecondary 
              ? 'bg-white text-orange-700 hover:bg-gray-100' 
              : 'bg-orange-700 text-white hover:bg-orange-800'
            }
          `}
        >
          <MessageCircle size={18} />
          Chat Now
        </a>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('websites');

  return (
    <div className="pt-32">
      <section className="section bg-orange-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Pricing Plans"
            subtitle="Transparent pricing options tailored to meet your business needs"
          />

          <div className="max-w-lg mx-auto mb-12">
            <div className="bg-white p-1 rounded-lg shadow-md flex">
              {['websites', 'apps', 'marketing'].map((category) => (
                <button
                  key={category}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-orange-700 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'websites' && 'Websites'}
                  {category === 'apps' && 'Mobile Apps'}
                  {category === 'marketing' && 'Marketing'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(selectedCategory === 'websites' ? websitePlans :
              selectedCategory === 'apps' ? appPlans :
              marketingPlans).map((plan, index) => (
                <PricingPlan key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and pricing"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
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
                className="bg-gray-50 rounded-lg p-6"
              >
                <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-orange-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 text-orange-200">
              Contact us for a personalized quote tailored to your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/9928610677" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white text-orange-700 font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
