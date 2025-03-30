import { useState } from "react";
import { Award, Users, ThumbsUp, Facebook, Instagram } from "lucide-react";
import pravinImage from "./images/Pravin.jpg";
import aniketImage from "./images/aniket.png";

const About = () => {
  const [hoveredProfile, setHoveredProfile] = useState<"pravin" | "aniket" | null>(null);

  const socialMediaData = {
    pravin: [
      { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/profile.php?id=100010560255825" },
      { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/pravin.shinde1804?igsh=MWNkZWlhc2VvbHp5dA==" }
    ],
    aniket: [
      { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/aniket.mhaske.560" },
      { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/aniketdmhaske1998?igsh=MWpsb2JpNDloNmZxbQ==" }
    ]
  };

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
              With over 6+ years of experience, Jayantak has been at the
              forefront of political campaign management, event organization,
              and creative services. Our team of experts brings together diverse
              skills and deep industry knowledge to deliver exceptional results
              for our clients.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h4 className="font-bold text-xl">20+</h4>
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
                <p className="text-gray-600">Positive Rating</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the visionaries behind Jayantak Media solutions Pvt Ltd. Who are
          driving innovation and excellence in political campaign management and
          digital solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Pravin Shinde Profile */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              onMouseEnter={() => setHoveredProfile("pravin")}
              onMouseLeave={() => setHoveredProfile(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={pravinImage}
                  alt="Pravin Shinde"
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                {hoveredProfile === "pravin" && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-orange-500 px-6 py-3 rounded-full shadow-lg flex space-x-4 animate-fadeIn">
                      {socialMediaData.pravin.map((social, index) => (
                        <a 
                          key={index} 
                          href={social.url} 
                          className="text-white hover:text-orange-200 transition-colors"
                          aria-label={social.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">Pravin Shinde</h3>
              <p className="text-orange-500 mb-4">Founder</p>
              <p className="text-gray-600">
              Pravin Shinde is a seasoned professional known for his excellent
                management and coordination skills. With over six years of
                experience in media, he has a proven ability to lead teams and
                execute projects with precision. His effective communication
                skills and strategic thinking ensure seamless collaboration and
                successful outcomes, making him a driving force behind Jayantak
                Media Solutions.
              </p>
            </div>
          </div>

          {/* Aniket Mhaske Profile */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              onMouseEnter={() => setHoveredProfile("aniket")}
              onMouseLeave={() => setHoveredProfile(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={aniketImage}
                  alt="Aniket Mhaske"
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                {hoveredProfile === "aniket" && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-orange-500 px-6 py-3 rounded-full shadow-lg flex space-x-4 animate-fadeIn">
                      {socialMediaData.aniket.map((social, index) => (
                        <a 
                          key={index} 
                          href={social.url} 
                          className="text-white hover:text-orange-200 transition-colors"
                          aria-label={social.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">Aniket Mhaske</h3>
              <p className="text-orange-500 mb-4">Founder</p>
              <p className="text-gray-600">
              Aniket Mhaske is the creative mastermind of Jayantak Media
                Solutions, specializing in innovative strategies for social
                media and digital marketing. With six years of experience, he
                combines his creative vision with a deep understanding of the
                latest trends to design impactful campaigns. His ability to
                think outside the box has helped numerous brands achieve
                remarkable growth and visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;