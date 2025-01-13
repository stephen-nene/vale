import React, { useState, useEffect } from "react";
import {
  FaRobot,
  FaGlobeAfrica,
  FaGraduationCap,
  FaLocationArrow,
  FaUsers,
  FaPlane,
  FaBook,
  FaArrowRight,
  FaCheckCircle,
  FaMicrophone,
  FaLightbulb,
  FaUniversity,
  FaPlayCircle,
  FaBrain,
  FaClock,
  FaDatabase,
} from "react-icons/fa";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const demoScenarios = [
    {
      id: "cultural",
      title: "Cultural Guide",
      description:
        "Watch as our AI explains traditional Kenyan ceremonies and customs",
      icon: <FaGlobeAfrica />,
    },
    {
      id: "tourist",
      title: "Tourist Assistant",
      description: "See personalized travel recommendations in action",
      icon: <FaPlane />,
    },
    {
      id: "educational",
      title: "Educational Tool",
      description: "Experience interactive history lessons about Kenya",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaRobot
                className={`text-2xl ${
                  isScrolled ? "text-indigo-600" : "text-white"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  isScrolled ? "text-indigo-600" : "text-white"
                }`}
              >
                KenyaAI Guide
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Features", "Technology", "Use Cases", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-600 hover:text-indigo-600"
                      : "text-white hover:text-indigo-200"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                className={`px-6 py-2 rounded-full transition ${
                  isScrolled
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Experience Kenya Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                {" "}
                AI Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-indigo-100">
              Discover a revolutionary way to explore Kenyan culture with our
              intelligent 3D avatar guide
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-full text-lg transition flex items-center justify-center gap-2">
                Start Your Journey <FaArrowRight />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-full text-lg transition flex items-center justify-center gap-2">
                Watch Demo <FaPlayCircle />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI, 3D rendering, and cultural
              expertise
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaBrain className="text-4xl text-indigo-600" />,
                title: "Advanced AI",
                description:
                  "Natural language processing for human-like interactions and cultural understanding",
              },
              {
                icon: <FaGlobeAfrica className="text-4xl text-indigo-600" />,
                title: "3D Rendering",
                description:
                  "Real-time 3D graphics for immersive cultural demonstrations",
              },
              {
                icon: <FaDatabase className="text-4xl text-indigo-600" />,
                title: "Cultural Database",
                description:
                  "Extensive knowledge base of Kenyan traditions and customs",
              },
              {
                icon: <FaClock className="text-4xl text-indigo-600" />,
                title: "Real-time Processing",
                description: "Instant responses and seamless interaction flow",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 transition-transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            See It In Action
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {demoScenarios.map((scenario) => (
                  <div
                    key={scenario.id}
                    className={`p-6 rounded-xl cursor-pointer transition ${
                      activeDemo === scenario.id
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200"
                    }`}
                    onClick={() => setActiveDemo(scenario.id)}
                  >
                    <div className="flex items-center gap-4">
                      {scenario.icon}
                      <div>
                        <h3 className="font-semibold mb-2">{scenario.title}</h3>
                        <p
                          className={
                            activeDemo === scenario.id
                              ? "text-indigo-100"
                              : "text-gray-600"
                          }
                        >
                          {scenario.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl aspect-video relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPlayCircle className="text-6xl text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Transforming Cultural Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPlane className="text-3xl text-indigo-600" />,
                title: "Tourism Enhancement",
                description:
                  "Get personalized travel recommendations and deep cultural insights before and during your visit",
                features: [
                  "Custom itineraries",
                  "Local customs guide",
                  "Language assistance",
                ],
              },
              {
                icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
                title: "Educational Platform",
                description:
                  "Transform learning about Kenya's culture and history through interactive experiences",
                features: [
                  "Interactive lessons",
                  "Historical reenactments",
                  "Cultural workshops",
                ],
              },
              {
                icon: <FaUsers className="text-3xl text-indigo-600" />,
                title: "Cultural Preservation",
                description:
                  "Contribute to the digital preservation and sharing of Kenya's rich cultural heritage",
                features: [
                  "Tradition documentation",
                  "Story archiving",
                  "Knowledge sharing",
                ],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 transition-all hover:shadow-xl"
              >
                <div className="mb-6">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Transform Your Cultural Experience?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-indigo-100">
            Join us in revolutionizing how people discover and experience Kenyan
            culture
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 rounded-full text-lg transition">
              Start Free Trial
            </button>
            <button className="border-2 border-white hover:bg-indigo-800 px-8 py-4 rounded-full text-lg transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer remains largely the same but styled to match new theme */}
    </div>
  );
};

export default LandingPage;
