import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="pt-16 bg-gradient-to-br from-black via-purple-900 to-black text-white"
    >
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Transforming Digital Campaigns
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Engage, Influence,Inspire
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="border border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-md"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
              alt="Political Campaign"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-orange-500 p-4 rounded-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
          <p className="text-gray-300 text-center mt-8">
            Creating a brand is just the beginning; sustaining and growing it
            requires continuous consultation and strategic innovation. In
            today's dynamic market, expanding horizons and adapting to
            ever-changing scenarios are essential for long-term success. At
            Jayantak Media Solutions, we understand that innovation and
            development must go hand in hand with strategic approaches to tackle
            the evolving market landscape. Together, we create impactful
            campaigns, build resilient brands, and ensure your business stays
            ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
