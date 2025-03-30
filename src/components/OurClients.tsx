import React from "react";
import client1 from "./images/client1.jpg";
import client2 from "./images/client2.jpg";
import client3 from "./images/client3.jpg";
import client4 from "./images/client4.jpg";
import client5 from "./images/client5.jpg";
import client7 from "./images/client7.jpg";
import client8 from "./images/client8.jpg";
import client9 from "./images/client9.jpg";
import client10 from "./images/client10.jpg";
import client11 from "./images/client11.jpg";
import client12 from "./images/client12.jpg";
import client13 from "./images/client13.jpg";
import client15 from "./images/client15.jpg";
import client16 from "./images/client16.jpg";
import client17 from "./images/client17.jpg";
import client18 from "./images/client18.jpg";
import client19 from "./images/client19.jpg";
import client20 from "./images/client20.jpg";



const clients = [
    { logo: client1},
    { logo: client2},
    { logo: client3},
    { logo: client4},
    { logo: client5},
    { logo: client7},
    { logo: client8},
    { logo: client9},
    { logo: client10},
    { logo: client11},
    { logo: client12},
    { logo: client13},
    { logo: client15},
    { logo: client16},
    { logo: client17},
    { logo: client18},
    { logo: client19},
    { logo: client20},
  ];

const OurClients = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Trusted Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to work with these amazing organizations and help them achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-40"
            >
              <img
                src={client.logo}
                alt={`Client ${index + 1}`}
                className="max-h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;

