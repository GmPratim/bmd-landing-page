
import React from 'react';
import { Lightbulb, Award, CheckCircle, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions using the latest technology and methodologies to deliver exceptional results.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Award,
      title: 'Trust',
      description: 'Decades of experience building lasting relationships with clients through transparency and reliability.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'Uncompromising commitment to excellence in every project, ensuring superior outcomes.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Delivery',
      description: 'On-time project completion with efficient resource management and streamlined processes.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Why Choose BMD Group
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Our core values drive everything we do, ensuring exceptional service and results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 rounded-full ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 font-montserrat mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 font-montserrat leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
