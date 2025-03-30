import React, { useState, useEffect, useRef } from 'react';

const JayantakChatbot = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm Jayantak's virtual assistant. How can I help you today?", 
      sender: 'bot' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  // Knowledge base for the chatbot - you can replace/expand this with your company information
  const knowledgeBase = {
    greetings: {
      keywords: ["hi", "hello", "hey", "howdy", "greetings", "good morning", "good afternoon", "good evening", "hola"],
      responses: [
        "Hi there! How can I help you with Jayantak Media Solutions' services today?",
         "Hi! Great to meet you. I'm Jayantak's virtual assistant. How can I help you today?"
      ]
    },
    services: [
      {
        name: "Political Campaign Management",
        keywords: ["political", "campaign", "election", "politics", "voters", "public image"],
        response: "Our Political Campaign Management service helps you win elections with the right strategy and execution. We craft compelling campaigns, manage social media, handle influencer outreach, and provide data-driven insights to connect you with voters and build a strong public image."
      },
      {
        name: "Photography & Videography",
        keywords: ["photo", "photograph", "video", "camera", "shoot", "picture", "visual"],
        response: "Our Photography & Videography service captures stunning visuals that leave a lasting impression. From political rallies to corporate shoots and brand promotions, our expert team creates powerful visual content for your needs."
      },
      {
        name: "Video Production & Editing",
        keywords: ["video", "production", "editing", "film", "motion graphics", "campaign videos"],
        response: "Our Video Production & Editing service brings stories to life through high-quality production. Whether it's campaign videos, brand ads, corporate films, or motion graphics, we ensure your message is clear, engaging, and impactful."
      },
      {
        name: "Digital Marketing",
        keywords: ["digital", "marketing", "seo", "ads", "content marketing", "social media", "online"],
        response: "Our Digital Marketing services help you get noticed online with data-driven strategies. From SEO and paid ads to content marketing and social media promotions, we help you grow your reach and engagement."
      },
      {
        name: "Brand Consulting",
        keywords: ["brand", "branding", "consult", "identity", "rebranding", "pr", "communications"],
        response: "Our Brand Consulting services help businesses and individuals build a distinct identity. From market positioning and rebranding to strategic PR and communications, we help create a strong brand story."
      },
      {
        name: "Content Writing",
        keywords: ["content", "writing", "copy", "write", "speech", "blog", "website content"],
        response: "Our Content Writing services create compelling narratives that inform, persuade, and inspire. Whether it's website content, blogs, political speeches, or advertising copy, we craft words that shape perception."
      },
      {
        name: "Social Media Management",
        keywords: ["social", "media", "social media", "online", "digital presence", "reputation"],
        response: "Our Social Media Management services enhance your digital presence. We create engaging content, run targeted ad campaigns, and manage your online reputation to help you build a strong, authentic connection with your audience."
      },
      {
        name: "Website Development",
        keywords: ["website", "web", "development", "digital", "online", "storefront", "mobile", "responsive"],
        response: "Our Website Development team creates user-friendly, mobile-responsive, and SEO-optimized websites tailored to your brand, ensuring a strong online presence. Your website is your digital storefront, and we make it impressive."
      }
    ],
    aboutUs: {
      keywords: ["about", "company", "jayantak", "who are you", "tell me about", "background"],
      response: "Jayantak Media Solutions is a full-service media and marketing agency specializing in political campaigning, brand development, digital marketing, and creative content production. We help businesses, individuals, and political leaders create compelling narratives and build strong connections with their audiences."
    },
    advantages: [
      {
        name: "Holistic Approach",
        keywords: ["holistic", "approach", "end-to-end", "full service", "complete"],
        response: "We take a holistic approach at Jayantak Media Solutions. From strategy to execution, we offer end-to-end solutions for branding, marketing, and media."
      },
      {
        name: "Experienced Team",
        keywords: ["team", "experience", "expertise", "professional", "skilled"],
        response: "Our experienced team of skilled professionals brings industry expertise to deliver high-quality, impactful results for all your media and marketing needs."
      },
      {
        name: "Innovative Strategies",
        keywords: ["innovative", "strategy", "strategies", "cutting-edge", "creative", "ahead"],
        response: "We use cutting-edge tools and creative approaches to keep you ahead of the competition with our innovative strategies."
      },
      {
        name: "Client-Centric Focus",
        keywords: ["client", "focus", "priority", "tailor", "goals", "needs", "vision"],
        response: "At Jayantak Media Solutions, your vision is our priority. We maintain a client-centric focus and tailor every project to align with your specific goals and needs."
      },
      {
        name: "Proven Results",
        keywords: ["results", "proven", "success", "track record", "impact"],
        response: "With a strong track record of success, we help brands, businesses, and political leaders leave a lasting impact through proven results."
      },
      {
        name: "Post-Project Support",
        keywords: ["support", "after", "post", "ongoing", "assistance", "long-term"],
        response: "Our commitment doesn't end with project delivery. We provide ongoing post-project support and assistance to ensure your long-term success."
      }
    ],
    contact: {
      keywords: ["contact", "reach", "call", "email", "phone", "office", "location"],
      response: "You can contact Jayantak Media Solutions via email at contact@jayantak.com or call us at +1-123-456-7890. Our office is open Monday through Friday, 9 AM to 6 PM."
    },
    fallback: "I don't have specific information about that yet, but I'd be happy to connect you with our team who can answer your question in detail. Would you like me to arrange that for you?"
  };

  // Function to check user input against knowledge base
  const generateResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (knowledgeBase.greetings.keywords.some(keyword => input.trim() === keyword || input.startsWith(keyword + " "))) {
      const randomIndex = Math.floor(Math.random() * knowledgeBase.greetings.responses.length);
      return knowledgeBase.greetings.responses[randomIndex];
    }
    
    // Check for services
    for (const service of knowledgeBase.services) {
      if (service.keywords.some(keyword => input.includes(keyword.toLowerCase()))) {
        return service.response;
      }
    }
    
    // Check for about us
    if (knowledgeBase.aboutUs.keywords.some(keyword => input.includes(keyword.toLowerCase()))) {
      return knowledgeBase.aboutUs.response;
    }
    
    // Check for advantages
    for (const advantage of knowledgeBase.advantages) {
      if (advantage.keywords.some(keyword => input.includes(keyword.toLowerCase()))) {
        return advantage.response;
      }
    }
    
    // Check for contact information
    if (knowledgeBase.contact.keywords.some(keyword => input.includes(keyword.toLowerCase()))) {
      return knowledgeBase.contact.response;
    }
    
    // List services if user asks
    if (input.includes("services") || input.includes("what do you offer") || input.includes("help with")) {
      return "Jayantak Media Solutions offers: Political Campaign Management, Photography & Videography, Video Production & Editing, Digital Marketing, Brand Consulting, Content Writing, Social Media Management, and Website Development. What would you like to know more about?";
    }
    
    // Fallback response
    return knowledgeBase.fallback;
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate bot thinking with a small delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(input),
        sender: 'bot'
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-96 w-full max-w-md rounded-lg overflow-hidden shadow-lg border border-gray-200">
      {/* Chat header */}
      <div className="bg-orange-500 text-white p-4 flex items-center">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
          <span className="text-orange-500 font-bold">J</span>
        </div>
        <h3 className="font-semibold">Jayantak Media Solutions Assistant</h3>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`mb-4 ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}
          >
            <div 
              className={`inline-block p-3 rounded-lg max-w-xs lg:max-w-md ${
                message.sender === 'bot' 
                  ? 'bg-white text-gray-800 rounded-bl-none shadow' 
                  : 'bg-orange-500 text-white rounded-br-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-white text-gray-800 rounded-bl-none shadow">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input form */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-200"
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default JayantakChatbot;