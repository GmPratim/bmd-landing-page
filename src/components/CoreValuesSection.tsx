
import React from 'react';
import { Shield, Star, Sun, Users, Award } from 'lucide-react';

const CoreValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent and ethical business practices in every project'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Delivering superior quality and exceeding expectations'
    },
    {
      icon: Sun,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and creative solutions'
    },
    {
      icon: Users,
      title: 'Safety',
      description: 'Prioritizing the safety of our workforce and communities'
    },
    {
      icon: Award,
      title: 'Empowerment',
      description: 'Building capabilities and empowering local communities'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The principles that guide every decision we make and every project we deliver
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <value.icon className="h-10 w-10 text-blue-600 group-hover:text-green-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;