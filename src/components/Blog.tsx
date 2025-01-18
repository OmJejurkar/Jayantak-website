import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Political Campaigns in the Digital Age',
    excerpt: 'Explore how digital transformation is reshaping political campaign strategies...',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1494172892981-ce47ca685ecd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Event Planning: From Concept to Execution',
    excerpt: 'A comprehensive guide to organizing successful events that leave lasting impressions...',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mastering Social Media for Brand Growth',
    excerpt: 'Learn the essential strategies for building a strong social media presence...',
    date: 'Mar 5, 2024',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on political campaigns, event management,
            and digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-orange-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-purple-600 hover:text-purple-700 inline-flex items-center">
                  Read More <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;