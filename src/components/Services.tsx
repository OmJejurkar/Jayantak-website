import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  Calendar,
  Megaphone,
  Globe,
  Briefcase,
  PenTool,
  Share2,
  Code,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />, 
    title: "Political Campaign Management",
    description: "Winning elections requires the right strategy and execution. We craft compelling campaigns, manage social media, handle influencer outreach, and provide data-driven insights to connect you with voters and build a strong public image.",
  },
  {
    icon: <Camera className="w-8 h-8 text-orange-500" />, 
    title: "Photography & Videography",
    description: "A picture speaks a thousand words, and a video—millions! From political rallies to corporate shoots and brand promotions, our expert team captures stunning visuals that leave a lasting impression.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />, 
    title: "Video Production & Editing ",
    description: "We bring stories to life through high-quality video production. Whether it's campaign videos, brand ads, corporate films, or motion graphics, we ensure your message is clear, engaging, and impactful.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />, 
    title: "Digital Marketing",
    description: "Get noticed online with our data-driven digital marketing strategies. From SEO and paid ads to content marketing and social media promotions, we help you grow your reach and engagement.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />, 
    title: "Brand Consulting",
    description: "A strong brand is more than just a logo—it's a story. We help businesses and individuals build a distinct identity, from market positioning and rebranding to strategic PR and communications.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-purple-500" />, 
    title: "Content Writing",
    description: "Words shape perception. Whether it's website content, blogs, political speeches, or advertising copy, we craft compelling narratives that inform, persuade, and inspire.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-purple-500" />, 
    title: "Social Media Management",
    description: "Your digital presence matters. We create engaging content, run targeted ad campaigns, and manage your online reputation to help you build a strong, authentic connection with your audience.",
  },
  {
    icon: <Code className="w-8 h-8 text-purple-500" />, 
    title: "Website Development",
    description: "Your website is your digital storefront. We design user-friendly, mobile-responsive, and SEO-optimized websites tailored to your brand, ensuring a strong online presence.",
  },
];

const whyChooseUs = [
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />, 
    title: "Holistic Approach",
    description: "From strategy to execution, we offer end-to-end solutions for branding, marketing, and media.",
  },
  {
    icon: <Camera className="w-8 h-8 text-orange-500" />, 
    title: "Experienced Team",
    description: "Our skilled professionals bring industry expertise to deliver high-quality, impactful results.",
  },  
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />, 
    title: "Innovative Strategies",
    description: "We use cutting-edge tools and creative approaches to keep you ahead of the competition.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />, 
    title: "Client-Centric Focus",
    description: "Your vision is our priority. We tailor every project to align with your goals and needs.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />, 
    title: "Proven Results",
    description: " With a strong track record of success, we help brands, businesses, and political leaders leave a lasting impact.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-purple-500" />, 
    title: "Post-Project Support ",
    description: " Our commitment doesn't end with project delivery. We provide ongoing assistance to ensure long-term success.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleSeeAllServices = () => {
    sessionStorage.setItem("scrollToTop", "true");
    navigate("/services-list");
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50">
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="flex justify-center pb-8">
        <button
          onClick={handleSeeAllServices}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
        >
          View All Services
        </button>
      </div>

      <section id="whyChooseUs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Jayantak Media Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;