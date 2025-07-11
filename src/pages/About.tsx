
import React, { useEffect, useState } from 'react';
import { Users, Target, Award, Coffee } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
    { name: 'Sarah Chen', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face' },
    { name: 'Mike Rodriguez', role: 'Senior Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Emily Davis', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
  ];

  const values = [
    { icon: Target, title: 'Innovation First', description: 'We stay ahead of technology trends to deliver cutting-edge solutions.' },
    { icon: Users, title: 'Client-Centric', description: 'Your success is our priority. We build lasting partnerships.' },
    { icon: Award, title: 'Quality Excellence', description: 'We maintain the highest standards in every project we deliver.' },
    { icon: Coffee, title: 'Passion Driven', description: 'We love what we do and it shows in our exceptional work.' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About NexusLab</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of digital innovators, creating extraordinary experiences through code, design, and technology.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 2019, NexusLab emerged from a simple vision: to bridge the gap between innovative technology and exceptional user experiences. What started as a small team of developers has grown into a full-service digital agency.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Today, we work with startups and established businesses worldwide, helping them transform their digital presence and achieve their goals through thoughtful design and robust development.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 glass-effect rounded-lg">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center p-4 glass-effect rounded-lg">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`text-center p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`text-center group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
