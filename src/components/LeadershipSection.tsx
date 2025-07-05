import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const LeadershipSection = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading BMD Group with over 20 years of experience in infrastructure development.'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1659353215553-044993dcdd39?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in project management and operational excellence across multiple sectors.'
    },
    {
      name: 'Amit Patel',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Driving innovation and digital transformation in construction and engineering.'
    }
  ];

  return (
    <section id="leadership" className="pt-10 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Team */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 font-montserrat">
            Meet the visionaries driving our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-corporate-blue/20" 
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 font-montserrat mb-2">
                  {member.name}
                </h4>
                <p className="text-corporate-blue font-montserrat mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 font-montserrat text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Director's Message */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
            Director's Message
          </h3>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face" 
                  alt="Director" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-corporate-blue"
                />
              </div>
              <div className="flex-1">
                <Quote className="h-8 w-8 text-corporate-blue mb-4" />
                <p className="text-lg text-gray-700 font-montserrat leading-relaxed mb-4">
                  "At BMD Group, we believe in building not just structures, but foundations for a better tomorrow. 
                  Our commitment to excellence, innovation, and sustainable development drives us to deliver projects 
                  that stand the test of time and contribute meaningfully to society."
                </p>
                <p className="text-lg text-gray-700 font-montserrat leading-relaxed mb-6">
                  "Every project we undertake is a testament to our values of integrity, quality, and customer satisfaction. 
                  We are proud to be part of India's growth story and remain committed to setting new benchmarks in the industry."
                </p>
                <div>
                  <p className="font-semibold text-gray-900 font-montserrat">- Braj Mohan</p>
                  <p className="text-corporate-blue font-montserrat">Chairman & Managing Director</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadershipSection;
