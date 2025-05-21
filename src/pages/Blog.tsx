import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { Search, ArrowRight } from 'lucide-react';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Strategies to Boost Website Speed and SEO in 2025',
    excerpt: 'Explore the latest design trends shaping the digital landscape and how you can incorporate them into your website.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Priya Sharma',
    date: 'April 15, 2025',
    category: 'Design',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'How AI is Transforming Digital Marketing Strategies',
    excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing and how businesses can leverage it for better results.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Varun Bhardwaj',
    date: 'April 8, 2025',
    category: 'Marketing',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'The Complete Guide to Mobile App Development in 2025',
    excerpt: 'Everything you need to know about creating successful mobile applications in today\'s competitive market.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Vikram Singh',
    date: 'March 29, 2025',
    category: 'Development',
    readTime: '10 min read'
  },
  {
    id: 4,
    title: 'Optimizing Website Performance: Best Practices',
    excerpt: 'Learn how to improve your website\'s speed and performance to enhance user experience and boost conversion rates.',
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Neha Gupta',
    date: 'March 22, 2025',
    category: 'Development',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Creating Effective Content Strategy for Your Business',
    excerpt: 'A comprehensive guide to developing and implementing a content strategy that drives engagement and conversions.',
    image: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Rahul Kapoor',
    date: 'March 15, 2025',
    category: 'Content',
    readTime: '8 min read'
  },
  {
    id: 6,
    title: 'E-commerce Trends That Will Dominate in 2025',
    excerpt: 'Stay ahead of the competition by implementing these emerging e-commerce trends in your online store.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Pooja Verma',
    date: 'March 8, 2025',
    category: 'E-commerce',
    readTime: '7 min read'
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  return (
    <div className="pt-32">
      {/* Section 1: Blog Posts */}
      <section className="section bg-[#FDF2EC]">
        <div className="container-custom">
          <SectionHeading 
            title="Blog & Insights"
            subtitle="Latest insights, tips, and thought leadership from our experts"
          />

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="input-field pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
            </form>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                className="card overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-neutral-800 text-white px-3 py-1 text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-neutral-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img 
                          src={`https://i.pravatar.cc/150?u=${post.id}`} 
                          alt={post.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <button className="text-neutral-700 font-medium hover:text-neutral-900 transition-colors flex items-center">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Newsletter */}
     <section className="section bg-[#EB5200] text-white">

        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-[#EFD5BC] mb-8">
                Stay updated with our latest articles, industry insights, and company news.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-lg py-3 px-4 outline-none focus:ring-1 focus:ring-[#F4DDC9] text-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#A56F76] hover:bg-[#704F55] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              {subscribed && (
                <p className="text-[#EFD5BC] mt-4">
                  Thanks for subscribing! We'll keep you updated.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
