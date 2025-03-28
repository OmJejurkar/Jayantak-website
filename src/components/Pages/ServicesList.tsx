import React from 'react';

const servicesData = [
    {
        title: "Event Management",
        description: "Comprehensive planning and execution of events, including logistics, vendor management, and on-site coordination.",
        category: "Event Solutions",
        icon: "🎉"
    },
    {
        title: "Digital Marketing",
        description: "Strategic online marketing services to enhance brand visibility and engagement through social media and SEO.",
        category: "Digital Strategy",
        icon: "📈"
    },
    {
        title: "Campaign Strategy",
        description: "Expertise in developing and executing political and corporate campaign strategies to achieve desired outcomes.",
        category: "Strategic Services",
        icon: "🎯"
    },
    {
        title: "Photography Services",
        description: "Professional photography services for events, products, and corporate branding.",
        category: "Creative Services",
        icon: "📷"
    },
    {
        title: "Content Creation",
        description: "Creation of engaging content for various platforms, including blogs, social media, and marketing materials.",
        category: "Content Solutions",
        icon: "✍️"
    },
];

const ServiceCard = ({ service }: { service: { 
    title: string;
    description: string;
    category: string;
    icon: string;
}}) => (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
        <div className="flex items-center mb-4">
            <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                {service.icon}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {service.title}
            </h3>
        </div>
        <p className="text-gray-600 mt-2">{service.description}</p>
        {service.category && (
            <div className="mt-4 text-sm text-gray-500">
                Category: {service.category}
            </div>
        )}
    </div>
);

const ServicesList = () => {
    return (
        <section 
            className="py-20 bg-gray-50" 
            aria-labelledby="services-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 
                        id="services-heading"
                        className="text-4xl font-bold mb-4 text-gray-900"
                    >
                        Our Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover the comprehensive range of services offered by Jayantak Media to elevate your brand and events.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard 
                            key={service.title} 
                            service={service} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;