
import React, { useEffect, useState } from 'react';
import { Code, Palette, Smartphone, Search, Globe, Zap } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS Native', 'Android Native'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      features: ['Technical SEO', 'Content Strategy', 'Local SEO', 'Analytics'],
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management.',
      features: ['Shopify', 'WooCommerce', 'Custom Solutions', 'Payment Integration'],
    },
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business.',
      features: ['Social Media', 'PPC Advertising', 'Content Marketing', 'Email Campaigns'],
    },
  ];

  const technologies = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaPhp, name: 'PHP', color: '#777BB4' },
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Technologies We Use</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center p-4 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-110 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 50}ms` }}
              >
                <tech.icon 
                  className="h-12 w-12 mb-3 transition-all duration-300 group-hover:scale-125" 
                  style={{ color: tech.color }}
                />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
