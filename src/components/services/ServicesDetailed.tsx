import { Code, PenTool, BarChart3, Palette, Smartphone } from "lucide-react"

export default function ServicesDetailed() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Web Development Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Web Development</h1>

          <p className="text-gray-700 text-lg">
            We're a leading company that develops websites and applications. Our certified developers are experts in
            using the latest web technologies to create custom web solutions. Whether you need a website to represent
            your company, an information hub for your business, or want to improve your apps with powerful backend
            technology.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Responsive Website Design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>E-commerce Development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Custom Web Applications</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>CMS Development</span>
            </li>
          </ul>

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Web Development Services
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://bootcamprankings.com/wp-content/uploads/2021/01/How-to-Learn-Web-Development-768x763.png"
                alt="Web Development"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-blue-500 rounded-full">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Writing Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8 bg-transparent">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://ebizfiling.com/wp-content/uploads/2022/05/content-writing-2.png"
                alt="Content Writing"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 p-4 bg-purple-500 rounded-full">
              <PenTool className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Content Writing</h1>

          <p className="text-gray-700 text-lg">
            Our content writing services deliver compelling, SEO-optimized content that engages your audience and drives
            results. We create content that tells your brand story, educates your audience, and converts visitors into
            customers.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Blog Posts & Articles</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Website Copy</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>SEO Content</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Technical Writing</span>
            </li>
          </ul>

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Content Writing Services
          </button>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Digital Marketing</h1>

          <p className="text-gray-700 text-lg">
            Our digital marketing strategies are designed to increase your online visibility, drive traffic, and
            generate leads. We use data-driven approaches to create campaigns that deliver measurable results and ROI
            for your business.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Search Engine Optimization (SEO)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Social Media Marketing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Pay-Per-Click (PPC) Advertising</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Email Marketing</span>
            </li>
          </ul>

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Digital Marketing Services
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png"
                alt="Digital Marketing"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-green-500 rounded-full">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Designing Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8 bg-transparent">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://www.goodoldgeek.com/wp-content/uploads/2022/08/Role-of-Graphic-Designing-in-Digital-Marketing.jpg"
                alt="Graphics Designing"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 p-4 bg-yellow-500 rounded-full">
              <Palette className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Graphics Designing</h1>

          <p className="text-gray-700 text-lg">
            Our graphic design team creates visually stunning designs that communicate your brand message effectively.
            From logos to marketing materials, we deliver designs that make your brand stand out from the competition.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Logo Design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Brand Identity</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>UI/UX Design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Print & Digital Media</span>
            </li>
          </ul>

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Graphics Design Services
          </button>
        </div>
      </section>

      {/* App Development Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">App Development</h1>

          <p className="text-gray-700 text-lg">
            We specialize in creating effective mobile apps for all types of businesses – big or small. Our mobile app
            development services are top-rated and designed to deliver results. We develop apps for Android, iOS, hybrid
            and cross platforms using the latest technology.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Native iOS App Development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Native Android App Development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>Cross-platform App Development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
              <span>React Native & Flutter Development</span>
            </li>
          </ul>

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            App Development Services
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://externlabs.com/blogs/wp-content/uploads/2022/04/b2.jpg"
                alt="App Development"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 bg-red-500 rounded-full">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
