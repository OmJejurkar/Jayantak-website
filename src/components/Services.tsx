import React from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Calendar,
  Megaphone,
  Globe,
  Briefcase,
  PenTool,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    title: "Political Campaign Management",
    description:
      "We specialize in planning and executing strategic political campaigns that maximize voter engagement and success rates.",
  },
  {
    icon: <Camera className="w-8 h-8 text-orange-500" />,
    title: "Photography",
    description:
      "Our professional photography services ensure high-quality visuals for personal, corporate, and commercial needs.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
    title: "Event Planning",
    description:
      "We provide end-to-end event planning services to make your corporate and private events a success.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: "Digital Marketing",
    description:
      "Our result-driven digital marketing strategies enhance online visibility and customer engagement.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    title: "Brand Consulting",
    description:
      "We offer expert consulting to help businesses craft strong and memorable brand identities.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-purple-500" />,
    title: "Content Writing",
    description:
      "We create compelling content tailored for websites, marketing campaigns, and brand storytelling.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-purple-500" />,
    title: "Social Media Handling",
    description:
      "Our social media specialists help brands create, manage, and grow their presence across platforms.",
  },
];

const Why = [
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    title: "Holistic Approach",
    description:
      "We create user-friendly, high-performing websites and e-commerce platforms that drive engagement and conversions.",
  },
  {
    icon: <Camera className="w-8 h-8 text-orange-500" />,
    title: "Experienced Team",
    description: "A dedicated team of professionals with diverse expertise.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
    title: "Innovative Strategies",
    description: "Cutting-edge solutions to help you stay ahead of the curve.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: "Client-Centric",
    description: "We prioritize your vision and goals in every project.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    title: "Proven Results",
    description: "A track record of delivering impactful and measurable outcomes.",
  },
];

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 px-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* View All Services Button */}
      <div className="flex justify-center mt-8 mb-8">
        <Link
          to="/services-list"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
        >
          View All Services
        </Link>
      </div>

      {/* Why To Choose Jayantak Section */}
      <section id="Why" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why To Choose Jayantak</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Why.map((service, index) => (
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
    </div>
  );
};

export default Services;
