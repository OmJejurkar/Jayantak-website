import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
              alt="Team" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">About Jayantak</h2>
            <p className="text-gray-600 mb-8">
              With over 15 years of experience, Jayantak has been at the forefront of political campaign management,
              event organization, and creative services. Our team of experts brings together diverse skills and deep
              industry knowledge to deliver exceptional results for our clients.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h4 className="font-bold text-xl">150+</h4>
                <p className="text-gray-600">Projects</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-bold text-xl">50+</h4>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="text-center">
                <ThumbsUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h4 className="font-bold text-xl">98%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>

            <a href="#contact" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;