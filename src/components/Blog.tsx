import React from 'react';
import { ArrowRight } from 'lucide-react';
import image1 from './images/insight1.jpg';
import image2 from './images/insight2.jpg';
import image3 from './images/insight3.jpg';
import image4 from './images/insight4.jpg';

const posts = [
  {
    image: image1,
    link: "https://www.instagram.com/p/DF7UeMOg4uR/?igsh=MWU2YnBvMHF5MjEzNQ=="
  },
  {
    image: image2,
    link: "https://www.instagram.com/p/DF9MhrnIciH/?igsh=MTMyNjFhaGR6NmxhbA=="
  },
  {
    image: image3,
    link: "https://www.instagram.com/p/DGBChx4MIL7/?igsh=dDBzdHpjYmtydGVz"
  },
  {
    image: image4,
    link: "https://www.instagram.com/p/DGIAUmQsY84/?igsh=MWNnOTBncjA3MjlvNg=="
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Stay updated with our latest thoughts on political campaigns, event management,
          and digital marketing strategies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-64">
                <img
                  src={post.image}
                  alt={`Blog Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                {/* Add your card content here if needed */}
                <div className="mt-2 flex justify-end">
                  <a
                    href={post.link}
                    className="bg-white px-3 py-1 text-purple-600 text-sm font-semibold flex items-center rounded shadow border border-purple-200 hover:bg-purple-50 transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;