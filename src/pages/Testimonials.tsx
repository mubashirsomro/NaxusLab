
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'NexusLab transformed our digital presence completely. Their team delivered exceptional results that exceeded our expectations. The attention to detail and innovative approach made all the difference.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, GreenEco Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Working with NexusLab was a game-changer for our business. They understood our vision and brought it to life with incredible precision. Our website now converts 3x better than before.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Fashion Forward',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The team at NexusLab is absolutely phenomenal. They delivered our e-commerce platform on time and within budget. The design is stunning and the functionality is flawless.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Park',
      position: 'CTO, FinanceFlow',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'NexusLab built our complex financial dashboard with remarkable skill. Their technical expertise and problem-solving abilities are top-notch. Highly recommend their services.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Owner, Creative Studio',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      content: 'From concept to launch, NexusLab was professional, creative, and responsive. They turned our ideas into a beautiful, functional website that our clients love.',
      rating: 5,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className={`relative max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-8 left-8 h-16 w-16 text-primary/10" />
            
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Content */}
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-muted-foreground">
              "{testimonials[currentSlide].content}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentSlide].image} 
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="text-left">
                <h4 className="font-semibold text-lg">{testimonials[currentSlide].name}</h4>
                <p className="text-primary text-sm">{testimonials[currentSlide].position}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 glass-effect rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 glass-effect rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-medium text-sm">{testimonial.name}</h5>
                  <p className="text-primary text-xs">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Why Clients Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
