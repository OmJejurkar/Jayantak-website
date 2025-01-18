import React from "react";
import {
  Camera,
  Calendar,
  Megaphone,
  Globe,
  Briefcase,
  PenTool,
  Share2,
} from "lucide-react";

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    title: "Political Campaign Management",
    description:
      "Strategic planning and execution of political campaigns with proven success rates.",
  },
  {
    icon: <Camera className="w-8 h-8 text-orange-500" />,
    title: "Photography",
    description:
      "Professional photography services for events, portraits, and commercial purposes.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
    title: "Event Management",
    description:
      "End-to-end event planning and execution for all types of occasions.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    title: "Brand Consulting",
    description: "Expert guidance to build and strengthen your brand identity.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-purple-500" />,
    title: "Content Writing",
    description: "Engaging content creation for all your communication needs.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-purple-500" />,
    title: "Social Media Handling",
    description: "Professional management of your social media presence.",
  },
];
const Why = [
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    title: "Holistic Approach",
    description:
      "Comprehensive services to cover all your branding and marketing needs.",
  },
  {
    icon: <Camera className="w-8 h-8 text-orange-500" />,
    title: "Experienced Team",
    description:
      "A dedicated team of professionals with diverse expertise. ",
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
    title: "Innovative Strategies",
    description:
      "Cutting-edge solutions to help you stay ahead of the curve.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: "Client-Centric",
    description:
      "We prioritize your vision and goals in every project.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    title: "Proven Results",
    description: "A track record of delivering impactful and measurable outcomes",
  },
];

const Services = () => {
  return (
    <div>
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your needs across
              political campaigns, events, and digital presence.
            </p>
          </div>

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
      <section id="Why" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why To Choose Jayantak</h2>
            <p className="text-gray-600 max-w-2xl mx-auto"> </p>
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
