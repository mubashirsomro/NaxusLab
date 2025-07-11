import React from 'react';
import { ArrowRight, Star, Code, Palette, Smartphone, Globe, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero3D from './Hero3D';

const HeroSection = () => {
  const technologies = [
    { icon: Code, name: 'React', color: 'text-blue-400' },
    { icon: Database, name: 'Node.js', color: 'text-emerald-400' },
    { icon: Palette, name: 'Design', color: 'text-violet-400' },
    { icon: Smartphone, name: 'Mobile', color: 'text-rose-400' },
    { icon: Globe, name: 'Web', color: 'text-cyan-400' },
    { icon: Zap, name: 'Fast', color: 'text-amber-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Enhanced Colorful Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-xl opacity-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full blur-3xl opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-36 h-36 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full blur-2xl opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-500 rounded-full blur-xl opacity-35 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-44 h-44 bg-gradient-to-br from-indigo-400 via-purple-500 to-violet-600 rounded-full blur-3xl opacity-30 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Enhanced Animated Gradient Lines */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-rose-500 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* 3D Hero Component */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full text-sm animate-fade-in">
                <Star className="h-4 w-4 text-accent animate-spin" style={{ animationDuration: '3s' }} />
                <span>Trusted by 100+ companies</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                <span className="gradient-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">Digital</span>
                <br />
                <span className="text-foreground">Excellence</span>
                <br />
                <span className="gradient-text bg-gradient-to-r from-cyan-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.5s' }}>Delivered</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                We craft exceptional digital experiences through innovative web development, 
                stunning design, and cutting-edge technology solutions.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 animate-pulse hover:animate-none glow-effect"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 glass-effect hover:bg-white/15 text-foreground rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border border-gradient-to-r from-violet-500/40 to-cyan-500/40 hover:border-violet-500/60 backdrop-blur-lg"
              >
                View Our Work
              </Link>
            </div>

            {/* Technologies We Use Section */}
            <div className="pt-8 lg:pt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center lg:text-left flex items-center justify-center lg:justify-start space-x-2">
                <Code className="h-5 w-5 text-primary animate-pulse" />
                <span>Technologies We Use</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center p-3 sm:p-4 glass-effect rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/25 to-accent/25 flex items-center justify-center mb-2 group-hover:from-primary/35 group-hover:to-accent/35 transition-all duration-300 group-hover:animate-pulse`}>
                      <tech.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${tech.color} group-hover:animate-bounce`} />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Stats */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md">
              <div className="text-center p-4 sm:p-6 glass-effect rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group glow-effect">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 glass-effect rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group glow-effect">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 glass-effect rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group glow-effect">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 glass-effect rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group glow-effect">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gradient-to-b from-violet-500 to-cyan-400 rounded-full flex justify-center backdrop-blur-sm glass-effect">
          <div className="w-1 h-3 bg-gradient-to-b from-violet-500 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
