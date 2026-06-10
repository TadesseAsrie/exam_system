import React from "react";
import { Link } from "react-router-dom";
import {
  FiAward,
  FiClock,
  FiUsers,
  FiBarChart2,
  FiArrowRight,
  FiShield,
  FiBookOpen,
  FiTrendingUp,
} from "react-icons/fi";

const Home = () => {
  const features = [
    {
      icon: FiBookOpen,
      title: "Multiple Subjects",
      description: "Access exams across various disciplines",
    },
    {
      icon: FiClock,
      title: "Timed Exams",
      description: "Real-time countdown timer for each test",
    },
    {
      icon: FiBarChart2,
      title: "Detailed Results",
      description: "Comprehensive performance analytics",
    },
    {
      icon: FiShield,
      title: "Secure Platform",
      description: "Your data is safe and protected",
    },
  ];

  const stats = [
    { icon: FiUsers, value: "10,000+", label: "Active Students" },
    { icon: FiAward, value: "500+", label: "Certificates Issued" },
    { icon: FiTrendingUp, value: "85%", label: "Success Rate" },
    { icon: FiClock, value: "24/7", label: "Access Available" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Master Your Exams with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Practice with our comprehensive online examination system. Track
              progress, analyze performance, and achieve excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link
                to="/exams"
                className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Browse Exams
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to excel in your examinations, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon size={40} className="mx-auto text-blue-600 mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="gradient-bg rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are already mastering their exams
            with us
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            Sign Up Now
            <FiArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
