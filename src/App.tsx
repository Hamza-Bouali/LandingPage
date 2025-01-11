import React, { useState } from 'react';
import { Phone, Bot, BarChart3, Headphones, MessageSquare, Clock, Shield, Globe2, X, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';
import Logo from './static/Logo.png';

function App() {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: 'customer-support'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzA_AlHKCAEYnL--7VLVajZOrv6ko3_s-HzzhiDVVMkQfrYGhjyw7WW-Ox8w4BaDmM_QA/exec', {
        method: 'POST',
        body: JSON.stringify({values: Object.values(formData)}),
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
      });
      alert("Thank you for your interest! We'll be in touch shortly.");
      setShowTrialModal(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        useCase: 'customer-support',
      });
    } catch (error) {
      alert('An error occurred. Please try again or contact support.');
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
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="SmartLine" className="h-8" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-purple-600 transition">Benefits</a>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition">Testimonials</a>
            </div>
            <div className="flex space-x-4">
              <button onClick={() => setShowDemoModal(true)} className="text-purple-600 hover:text-purple-700">
                Watch Demo
              </button>
              <button 
                onClick={() => setShowTrialModal(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1 bg-purple-100 rounded-full">
              <span className="text-purple-600 font-medium">New: GPT-4 Integration Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Call Center Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Replace traditional call centers with intelligent AI agents. Cut costs by 60% while delivering 24/7 customer support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setShowTrialModal(true)}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition flex items-center justify-center space-x-2"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-purple-50 transition"
              >
                Watch 2-Minute Demo
              </button>
            </div>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof */}
      {/*
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <img src="/api/placeholder/120/40" alt="Company Logo" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Company Logo" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Company Logo" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Company Logo" className="h-8" />
            <img src="/api/placeholder/120/40" alt="Company Logo" className="h-8" />
          </div>
        </div>
      </section>
      */}

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need to Replace Your Call Center
            </h2>
            <p className="text-gray-600">
              Our AI-powered platform handles customer inquiries, processes orders, and manages support tickets - all without human intervention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="h-8 w-8 text-purple-600" />,
                title: "GPT-4 Powered Agents",
                description: "Natural conversations powered by the latest language models for human-like interactions"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
                title: "Advanced Analytics",
                description: "Real-time insights into call performance and conversation metrics"
              },
              {
                icon: <Headphones className="h-8 w-8 text-purple-600" />,
                title: "24/7 Availability",
                description: "Never miss a customer inquiry with always-on AI agents that never take breaks"
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
                title: "Omnichannel Support",
                description: "Voice, chat, email, and SMS support through a single unified platform"
              },
              {
                icon: <Clock className="h-8 w-8 text-purple-600" />,
                title: "5-Minute Setup",
                description: "Get started immediately with our no-code setup and pre-built conversation templates"
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-600" />,
                title: "Enterprise Security",
                description: "SOC 2 Type II certified with end-to-end encryption and data privacy controls"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:border-purple-200 transition group">
                <div className="mb-4 p-3 bg-purple-50 rounded-lg w-fit group-hover:bg-purple-100 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">60%</div>
              <div className="text-purple-200 text-lg">Cost Reduction</div>
              <p className="text-purple-100 mt-2">Compared to traditional call centers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-purple-200 text-lg">Customer Satisfaction</div>
              <p className="text-purple-100 mt-2">Based on post-call surveys</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">3.2s</div>
              <div className="text-purple-200 text-lg">Average Response Time</div>
              <p className="text-purple-100 mt-2">Instant customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SmartLine has transformed our customer service operations. We've reduced costs while improving satisfaction scores.",
                author: "Sarah Johnson",
                role: "Head of Customer Success",
                company: "TechCorp"
              },
              {
                quote: "The AI agents handle complex inquiries better than we expected. Our customers love the instant responses.",
                author: "Michael Chen",
                role: "Operations Director",
                company: "Global Retail Inc"
              },
              {
                quote: "Implementation was seamless and the results were immediate. Best decision we made for our support team.",
                author: "Lisa Rodriguez",
                role: "CTO",
                company: "StartupX"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  <div className="text-purple-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            {[
              {
                question: "How does SmartLine compare to human agents?",
                answer: "SmartLine AI agents offer 24/7 availability, instant responses, and consistent service quality. They can handle multiple conversations simultaneously and never need breaks, resulting in 60% lower costs than traditional call centers."
              },
              {
                question: "How long does implementation take?",
                answer: "Most customers are up and running within 24 hours. Our no-code setup process and pre-built templates make it easy to get started, and our team provides hands-on support throughout the implementation."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 technical support, regular training sessions, and a dedicated customer success manager for enterprise clients. Our team helps with setup, optimization, and ongoing improvements."
              },
              {
                question: "Is SmartLine secure?",
                answer: "Yes, SmartLine is SOC 2 Type II certified and uses enterprise-grade encryption. We comply with GDPR, CCPA, and other privacy regulations, ensuring your data is always protected."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFAQIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-600" />
                  )}
                </button>
                {openFAQIndex === index && (
                  <div className="p-4 bg-white border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already modernized their customer service with SmartLine
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowTrialModal(true)}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-purple-50 transition flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setShowDemoModal(true)}
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={Logo} alt="SmartLine" className="h-8 mb-4" />
              <p className="text-sm">
                Transforming customer service with AI-powered solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 SmartLine. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Trial Request Modal */}
      {showTrialModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowTrialModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Start Your Free Trial</h2>
              <p className="text-gray-600">14 days free, no credit card required</p>
            </div>
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="customer-support">Customer Support</option>
                  <option value="lead-generation">Lead Generation</option>
                  <option value="order-confirmation">Order Confirmation</option>
                  <option value="appointment-scheduling">Appointment Scheduling</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-sm text-gray-500">
                By signing up, you agree to our Terms and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Demo Video Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">See SmartLine in Action</h2>
            
            {[
              {
                title: "AI Agent Handling Customer Support",
                src: "https://drive.google.com/file/d/1iBU_47zkvebTV0kiPHfaVRn1bZL5Ol9m/preview"
              },
              {
                title: "Order Processing Demo",
                src: "https://drive.google.com/file/d/1Nc6qnwYM_JljJ2LUStyzIiUwlN7W_snz/preview"
              },
              {
                title: "Lead Generation & Qualification",
                src: "https://drive.google.com/file/d/1laPzp-da437sSdDf62HsXd2tCMaSi42J/preview"
              }
            ].map((video, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{video.title}</h3>
                <div className="relative pt-[56.25%] bg-gray-100 rounded-lg">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={video.src}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`SmartLine Demo - ${video.title}`}
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