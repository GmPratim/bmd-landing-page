
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Wrench, Home, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'Real Estate',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Residential Development',
        'Commercial Properties',
        'Mixed-Use Projects',
        'Property Management',
        'Real Estate Consulting'
      ]
    },
    {
      icon: Building2,
      title: 'Construction',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center',
      features: [
        'Infrastructure Development',
        'Industrial Construction',
        'Commercial Buildings',
        'Highway & Bridge Construction',
        'Project Management'
      ]
    },
    {
      icon: Wrench,
      title: 'Interior & Exterior',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=center',
      features: [
        'Architectural Design',
        'Interior Design',
        'Landscape Architecture',
        'Renovation Services',
        'Space Planning'
      ]
    },
    {
      icon: Zap,
      title: 'Power & Energy',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Solar Power Solutions',
        'Wind Energy Projects',
        'Power Plant Construction',
        'Electrical Infrastructure',
        'Energy Consulting'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Manpower',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center',
      features: [
        'Security Services',
        'Skilled Manpower Supply',
        'Training & Development',
        'Facility Management',
        'Compliance Services'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Comprehensive solutions across multiple industries, delivered with expertise and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-corporate-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-corporate-blue mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900 font-montserrat">
                    {service.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-gray-600 font-montserrat"
                    >
                      <div className="w-2 h-2 bg-corporate-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
