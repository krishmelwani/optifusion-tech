import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { Helmet } from 'react-helmet-async';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Careers = lazy(() => import('./pages/Careers'));
const Team = lazy(() => import('./pages/Team'));

function App() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Optifusion Technologies",
    "url": "https://optifusion.tech",
    "logo": "https://optifusion.tech/logo.png",
    "description": "Optifusion Technologies provides cutting-edge digital solutions, web development, and technology consulting services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "267B, Sindhi Colony, Jaipur, Rajasthan 302004",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302004",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 99286 10677",
      "contactType": "customer service",
      "email": "info@optifusiontechnologies.in"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="careers" element={<Careers />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
