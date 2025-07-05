
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // const heroImages = [
  //   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center', // Modern glass building - Real Estate
  //   'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center', // Construction site with cranes
  //   'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&crop=center', // Modern interior design
  //   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&crop=center', // Power transmission lines
  //   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center', // Wind turbines energy
  //   'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop&crop=center%27', // Highway bridge construction
  //   'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop&crop=center%27'  // Security surveillance systems
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => 
  //       prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [heroImages.length]);
  const heroData = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center',
      title: 'Premium Real Estate',
      subtitle: 'Solutions'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center',
      title: 'Construction',
      subtitle: 'Excellence'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&crop=center',
      title: 'Interior Design',
      subtitle: 'Innovation'
    },
    {
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&crop=center',
      title: 'Power & Energy',
      subtitle: 'Infrastructure'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center',
      title: 'Renewable Energy',
      subtitle: 'Future'
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop&crop=center%27',
      title: 'Infrastructure',
      subtitle: 'Development'
    },
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop&crop=center%27',
      title: 'Security Solutions',
      subtitle: 'Trust'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData.length]);


  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="relative">
          {heroData.map((item, index) => (
            <h1 
              key={index}
              className={`absolute inset-0 text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat mb-6 transition-all duration-1000 ${
                index === currentImageIndex 
                  ? 'opacity-100 blur-0 transform translate-y-0' 
                  : 'opacity-0 blur-sm transform translate-y-4'
              }`}
            >
              {item.title}
              <span className="block text-blue-300">{item.subtitle}</span>
            </h1>
          ))}
          <div className="h-32 sm:h-40 lg:h-48"></div>
        </div>
        
        <p className="text-xl sm:text-2xl mb-8 font-montserrat font-light animate-fade-in opacity-90">
          Leading provider of engineering, infrastructure, construction, real estate, and software solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button 
            onClick={scrollToServices}
            size="lg" 
            className="bg-corporate-blue hover:bg-corporate-blue-dark text-white px-8 py-3 text-lg font-montserrat font-medium transition-all duration-200 hover:scale-105"
          >
            Explore Services
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            size="lg" 
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg font-montserrat font-medium transition-all duration-200 hover:scale-105 bg-transparent"
          >
            Book a Consultancy
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
