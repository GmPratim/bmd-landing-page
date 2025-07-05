
import React from 'react';
import { Building2, Wrench, Home, Zap, Shield, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BusinessPortfolio = () => {
  const businesses = [
    {
      icon: Building2,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including roads, bridges, and urban development solutions.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Wrench,
      title: 'Engineering Solutions',
      description: 'Comprehensive engineering services from design to implementation across multiple industries.',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Premium residential and commercial real estate development with modern architectural designs.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Zap,
      title: 'Power & Energy',
      description: 'Renewable energy solutions and power infrastructure development for sustainable future.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      // https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop&crop=center
    },
    {
      icon: Shield,
      title: 'Security & Manpower',
      description: 'Comprehensive security solutions and skilled manpower services for various industries.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software development and digital transformation services for modern businesses.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center'
    }
  ];

  return (
    <section id="businesses" className="py-20 bg-corporate-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Our Business Portfolio
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Diverse expertise across multiple industries, delivering innovative solutions that drive growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={business.image} 
                  alt={business.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-corporate-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <business.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <business.icon className="w-8 h-8 text-corporate-blue mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 font-montserrat">
                    {business.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  {business.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPortfolio;
