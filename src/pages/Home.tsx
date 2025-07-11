import React from 'react';
import HeroSection from '../components/HeroSection';
import { ArrowRight, CheckCircle, Star, Code, Palette, Smartphone, Search, Globe, Zap, ExternalLink, Github, Mail, Phone, MapPin, Users, Target, Award, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const aboutFeatures = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project we deliver.',
    },
    {
      icon: Coffee,
      title: 'Passion Driven',
      description: 'We love what we do and it shows in our exceptional work.',
    },
  ];

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

  const portfolioProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Modern e-commerce platform with advanced filtering and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Collaborative task management application with real-time updates.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      description: 'Secure mobile banking application with biometric authentication.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      content: 'Amazing work! They delivered exactly what we needed and more.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      content: 'Professional team with great communication throughout the project.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Marketing Agency',
      content: 'Our website traffic increased by 300% after the redesign.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ];

  return (
    <div className="overflow-x-hidden w-full">
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-card/50 full-width-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              About NexusLab
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of digital innovators, creating extraordinary experiences through code, design, and technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Story</h3>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2019, NexusLab emerged from a simple vision: to bridge the gap between innovative technology and exceptional user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we work with startups and established businesses worldwide, helping them transform their digital presence and achieve their goals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6">
                <div className="text-center p-4 sm:p-6 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-4 sm:p-6 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aboutFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 lg:p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 full-width-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-card/50 full-width-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Our Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Explore some of our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors cursor-pointer">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors cursor-pointer">
                      <Github className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 glass-effect hover:bg-white/10 text-foreground rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-primary/30 hover:border-primary/50"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 full-width-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center border-t border-border pt-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-card/50 full-width-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Ready to start your project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center space-x-4 p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@nexuslab.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect rounded-2xl p-6 lg:p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 full-width-bg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 glass-effect hover:bg-white/10 text-foreground rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-primary/30 hover:border-primary/50"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
