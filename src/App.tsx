import React, { useState } from 'react';
import { Phone, Bot, BarChart3, Headphones, MessageSquare, Clock, Shield, Globe2, X, ChevronDown, ChevronUp } from 'lucide-react';
import Logo from './static/Logo.png';
import axios from 'axios';

function App() {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: 'customer-support'
  });

  const [openFAQIndex, setOpenFAQIndex] = useState(null);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowTrialModal(false);
  
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzA_AlHKCAEYnL--7VLVajZOrv6ko3_s-HzzhiDVVMkQfrYGhjyw7WW-Ox8w4BaDmM_QA/exec';
  
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({values: Object.values(formData)}),
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors', // Add this line
      });
  
      alert('Data submitted successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        useCase: 'customer-support',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-800 to-purple-400 text-white">
        <div className="container mx-auto px-6 py-16">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="SmartLine" className="h-8" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-200 transition">Features</a>
              <a href="#benefits" className="hover:text-purple-200 transition">Benefits</a>
              <a href="#demo" className="hover:text-purple-200 transition">Demo</a>
            </div>
            <button 
              onClick={() => setShowTrialModal(true)}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Call Center with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Replace traditional call center agents with intelligent AI powered by OpenAI and LangChain
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setShowTrialModal(true)}
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
                aria-label="Start Free Trial"
              >
                Start Free Trial
              </button>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="border-2 border-white-500 text-white-500 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                aria-label="Watch Demo"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful Features for Modern Businesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="h-8 w-8 text-purple-600" />,
                title: "AI-Powered Agents",
                description: "Intelligent virtual agents capable of natural conversations and complex problem-solving"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
                title: "Real-Time Analytics",
                description: "Comprehensive insights into call performance, customer satisfaction, and agent efficiency"
              },
              {
                icon: <Headphones className="h-8 w-8 text-purple-600" />,
                title: "24/7 Availability",
                description: "Round-the-clock customer support without the limitations of human staffing"
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
                title: "Multi-Channel Support",
                description: "Seamless integration across voice, chat, and messaging platforms"
              },
              {
                icon: <Clock className="h-8 w-8 text-purple-600" />,
                title: "Quick Implementation",
                description: "Fast deployment with minimal setup time and technical requirements"
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-600" />,
                title: "Enterprise Security",
                description: "Bank-grade security protocols to protect sensitive customer data"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-purple-600 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-purple-100">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SmartLine? Section */}
      <section id="why-choose" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose SmartLine?
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What makes SmartLine different from traditional call centers?",
                answer: "SmartLine uses advanced AI to provide 24/7 customer support, reduce costs, and improve efficiency. Unlike traditional call centers, it doesn't rely on human agents, ensuring consistent and scalable service."
              },
              {
                question: "How secure is SmartLine?",
                answer: "SmartLine uses enterprise-grade security protocols to protect your data. All communications are encrypted, and we comply with global data protection regulations."
              },
              {
                question: "Can SmartLine integrate with my existing systems?",
                answer: "Yes, SmartLine seamlessly integrates with popular platforms like Twilio, OpenAI, and Google Cloud. It can also be customized to work with your existing tech stack."
              },
              {
                question: "What kind of support does SmartLine offer?",
                answer: "SmartLine provides multi-channel support, including voice, chat, and messaging. It also offers real-time analytics to help you monitor and improve performance."
              },
              {
                question: "How quickly can I deploy SmartLine?",
                answer: "SmartLine can be deployed in just a few days. Our team will guide you through the setup process to ensure a smooth implementation."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openFAQIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-600" />
                  )}
                </button>
                {openFAQIndex === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Call Center?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already modernized their customer service with SmartLine
          </p>
          <button 
            onClick={() => setShowTrialModal(true)}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            aria-label="Get Started Now"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src={Logo} alt="SmartLine" className="h-8" />
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-purple-400 transition">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition">Terms</a>
              <a href="#" className="hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2024 SmartLine. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Trial Request Modal */}
      {showTrialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowTrialModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Start Your Free Trial</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Company Inc."
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Use Case
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="customer-support">Customer Support</option>
                  <option value="lead-generation">Lead Generation</option>
                  <option value="order-confirmation">Order Confirmation</option>
                  <option value="appointment-scheduling">Appointment Scheduling</option>
                </select>
              </div>
              <button
              onClick={handleSubmit}
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
              >
                Request Free Trial
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Demo Video Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold mb-4">SmartLine Demo Videos</h1>

            {/* List of Demo Videos */}
            {[
              {
                title: "Order Confirmation",
                src: "https://drive.google.com/file/d/1iBU_47zkvebTV0kiPHfaVRn1bZL5Ol9m/preview"
              },
              {
                title: "Order Check",
                src: "https://drive.google.com/file/d/1Nc6qnwYM_JljJ2LUStyzIiUwlN7W_snz/preview"
              },
              {
                title: "Lead Generation",
                src: "https://drive.google.com/file/d/1laPzp-da437sSdDf62HsXd2tCMaSi42J/preview"
              },
            ].map((video, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold mb-4">{video.title}</h2>
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={video.src}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`SmartLine Demo Video - ${video.title}`}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;