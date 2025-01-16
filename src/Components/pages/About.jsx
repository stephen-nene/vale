import React, { useState } from "react";
import {
  FaHeart,
  FaUserFriends,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const milestones = [
    {
      year: "2022",
      title: "Platform Launch",
      description: "Started with a vision to revolutionize modern dating",
    },
    {
      year: "2023",
      title: "Couples Feature",
      description: "Expanded platform to support existing relationships",
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Reached 50,000+ users with 1000+ successful matches",
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Introduced smart matching algorithms",
    },
  ];

  const team = [
    {
      name: "Emma Rodriguez",
      role: "Founder & CEO",
      bio: "Former relationship counselor with 10+ years experience",
    },
    {
      name: "David Chang",
      role: "Head of Technology",
      bio: "AI and matchmaking algorithm specialist",
    },
    {
      name: "Dr. Sarah Williams",
      role: "Head of User Success",
      bio: "PhD in Relationship Psychology",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16 dark:from-rose-950 dark:to-pink-950">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Valentino</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Creating meaningful connections and nurturing lasting relationships
            through innovation and understanding
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        {/* Mission & Vision Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {["mission", "vision", "values"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-rose-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-rose-100 dark:hover:bg-rose-800"
                }`}
              >
                Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            {activeTab === "mission" && (
              <div className="space-y-4">
                <FaHeart className="w-16 h-16 text-rose-600 mx-auto" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To help people find and nurture meaningful relationships
                  through innovative technology and deep understanding of human
                  connections.
                </p>
              </div>
            )}
            {activeTab === "vision" && (
              <div className="space-y-4">
                <FaLightbulb className="w-16 h-16 text-rose-600 mx-auto" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-lg leading-relaxed">
                  A world where everyone can find their perfect match and
                  maintain fulfilling relationships, supported by technology
                  that understands human emotions.
                </p>
              </div>
            )}
            {activeTab === "values" && (
              <div className="space-y-4">
                <FaHandHoldingHeart className="w-16 h-16 text-rose-600 mx-auto" />
                <h2 className="text-2xl font-bold">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                  <div className="p-4 bg-rose-50 dark:bg-rose-900 rounded-lg">
                    <h3 className="font-bold mb-2">Authenticity</h3>
                    <p>Fostering genuine connections and real relationships</p>
                  </div>
                  <div className="p-4 bg-rose-50 dark:bg-rose-900 rounded-lg">
                    <h3 className="font-bold mb-2">Privacy</h3>
                    <p>Protecting our users' personal information and trust</p>
                  </div>
                  <div className="p-4 bg-rose-50 dark:bg-rose-900 rounded-lg">
                    <h3 className="font-bold mb-2">Innovation</h3>
                    <p>Continuously improving how people connect and relate</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timeline Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="text-rose-600 font-bold text-xl mb-2">
                  {milestone.year}
                </div>
                <h3 className="font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-rose-100 dark:bg-rose-950 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUserFriends className="w-12 h-12 text-rose-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <div className="text-rose-600 dark:text-rose-400 mb-2">
                  {member.role}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
