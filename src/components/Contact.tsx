import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Add your Web3Forms access key
    formData.append("access_key", "357159b9-da8e-4977-8d95-6fcf69016643");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
        console.error("Form submission error:", data);
      }
    } catch (error) {
      setResult("Failed to submit form. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us for a consultation and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {result && (
              <div className={`mb-4 p-3 rounded ${result.includes("Thank you") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {result}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden fields for Web3Forms */}
              <input type="hidden" name="subject" value="New contact form submission from Jayantak website" />
              <input type="hidden" name="from_name" value="Jayantak Website" />
              <input type="hidden" name="to_email" value="contact.jayantak@gmail.com" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 py-3 px-4 h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 py-3 px-4 h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 disabled:bg-orange-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact.jayantak@gmail.com</p> {/* Fixed email typo */}
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Pune,Sambhajinagar<br />India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;