import React, { useState, useEffect } from 'react';
import { MessageCircle, Globe, Users, Award, ArrowRight, Star, MapPin, UserCheck } from 'lucide-react';
import AuthModal from './AuthModal';
import ConsultantLoginModal from './ConsultantLoginModal';

const LandingPage: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showConsultantModal, setShowConsultantModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Global connectivity background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85"></div>
            {/* Additional overlay for depth */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>

        {/* Dynamic Background Effects with Parallax */}
        <div className="fixed inset-0 z-10">
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            ></div>
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-30">
          {/* Header */}
          <header className="sticky top-0 z-50 px-4 lg:px-6 h-20 flex items-center border-b border-white/10 glass-header backdrop-blur-xl">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="/images/ASKABROAD_LOGO-removebg-preview.png"
                    alt="Logo"
                    className="h-10 w-10 filter brightness-100 invert"
                  />
                </div>
                <div className="relative">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300">
                    AskAbroad
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowConsultantModal(true)}
                  className="group relative inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-xl"></span>
                  <span className="relative flex items-center">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Admin Portal
                  </span>
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-6xl mx-auto">
                {/* Hero Icon */}
                <div className="flex justify-center mb-12 animate-fade-in-up">
                  <div className="relative group">
                    <div className="absolute inset-0 from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 "></div>
                    <img
                      src="/images/ASKABROAD_LOGO-removebg-preview.png"
                      alt="Logo"
                      className="h-40 w-40 filter brightness-100 invert"
                    />
                  </div>
                </div>

                {/* Hero Title */}
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up animation-delay-200 drop-shadow-2xl">
                  Your Gateway to
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    Global Opportunities
                  </span>
                </h1>

                {/* Hero Subtitle */}
                <p className="text-xl md:text-2xl text-blue-100 mb-16 leading-relaxed max-w-5xl mx-auto animate-fade-in-up animation-delay-400 drop-shadow-lg">
                  Connect instantly with Industry Expert and residents worldwide through our
                  <span className="text-yellow-300 font-semibold bg-yellow-300/10 px-2 py-1 rounded-lg"> real-time chat platform </span>
                  for guidance on studying, working, and living abroad
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in-up animation-delay-600">
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="group relative inline-flex items-center px-12 py-6 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></span>
                    <span className="relative flex items-center">
                      <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                      Start Chatting Now
                      <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>

                  <div className="flex items-center space-x-3 text-blue-200 group">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 animation-delay-100"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 animation-delay-200"></div>
                    </div>
                    <div className="ml-4">
                      <span className="text-lg font-semibold text-white drop-shadow-lg">Join 10,000+ users</span>
                      <p className="text-sm text-blue-300">chatting live right now</p>
                    </div>
                  </div>
                </div>

                {/* Live Chat Preview */}
                <div className="max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
                  <div className="glass-card rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse animation-delay-200"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse animation-delay-400"></div>
                      </div>
                      <div className="flex items-center space-x-3 text-white/80">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Live Chat • online</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 animate-slide-in-left">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="glass-card rounded-2xl rounded-tl-sm p-5 max-w-md hover:shadow-lg transition-shadow duration-300">
                          <p className="text-white text-sm leading-relaxed">Hi! I'm Sarah, a certified Industry Expert. How can I help you with your study abroad plans? 🎓</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 justify-end animate-slide-in-right animation-delay-1000">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rounded-tr-sm p-5 max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <p className="text-white text-sm leading-relaxed">I'm interested in studying computer science in Canada. What universities would you recommend?</p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-2000">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div className="glass-card rounded-2xl rounded-tl-sm p-5 max-w-md hover:shadow-lg transition-shadow duration-300">
                          <p className="text-white text-sm leading-relaxed">I'm a resident in Toronto! University of Toronto and Waterloo are excellent for CS. Happy to share my experience! 🇨🇦</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="relative py-24 glass-section border-y border-white/10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20 animate-fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
                  Why Choose Our Platform?
                </h2>
                <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                  Real-time conversations with verified experts who understand your journey
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: Users,
                    title: "Industry Experts",
                    description: "Chat instantly with certified Industry Experts who have guided thousands through their international journey.",
                    stat: "40+ Verified Experts",
                    color: "from-blue-500 to-purple-500",
                    delay: "animation-delay-200"
                  },
                  {
                    icon: Globe,
                    title: "Global Residents",
                    description: "Connect with people already living your dream destination. Get insider tips, cultural insights, and real experiences through live chat.",
                    stat: "20+ Countries Covered",
                    color: "from-emerald-500 to-blue-500",
                    delay: "animation-delay-400"
                  },
                  {
                    icon: MessageCircle,
                    title: "Instant Messaging",
                    description: "No waiting for emails or scheduled calls. Get immediate responses in our real-time chat rooms organized by country and purpose.",
                    stat: "24/7 Active Chats",
                    color: "from-purple-500 to-pink-500",
                    delay: "animation-delay-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className={`group relative animate-fade-in-up ${feature.delay}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative glass-card rounded-3xl p-10 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                      <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-blue-300">
                        <Star className="h-5 w-5 mr-2 fill-current" />
                        <span className="font-semibold">{feature.stat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "20+", label: "Countries", delay: "animation-delay-200" },
                  { number: "40+", label: "Industry Experts", delay: "animation-delay-400" },
                  { number: "24/7", label: "Live Support", delay: "animation-delay-800" }
                ].map((stat, index) => (
                  <div key={index} className={`text-center group animate-fade-in-up ${stat.delay}`}>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-lg drop-shadow-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-24 glass-section border-y border-white/10">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-5xl mx-auto animate-fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 drop-shadow-2xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-blue-100 mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                  Connect with experts now and get personalized guidance in real-time.
                </p>
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="group relative inline-flex items-center px-16 py-8 text-2xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></span>
                  <span className="relative flex items-center">
                    <MessageCircle className="mr-4 h-8 w-8 group-hover:animate-bounce" />
                    Join AskAbroad Now
                    <ArrowRight className="ml-4 h-8 w-8 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative glass-footer border-t border-white/10 py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center space-x-4 mb-8 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="/images/ASKABROAD_LOGO-removebg-preview.png"
                    alt="Logo"
                    className="h-10 w-10 filter brightness-100 invert"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AskAbroad
                </span>
              </div>
              <p className="text-blue-200 mb-6 text-lg drop-shadow-lg">
                Your gateway to global opportunities through real-time conversations
              </p>
              <p className="text-blue-300/60">
                © 2024 AskAbroad. All rights reserved. Connect. Chat. Achieve.
              </p>
            </div>
          </footer>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />

      <ConsultantLoginModal
        isOpen={showConsultantModal}
        onClose={() => setShowConsultantModal(false)}
      />

    </>
  );
};

export default LandingPage;