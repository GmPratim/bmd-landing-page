
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ArrowLeft } from 'lucide-react';

const Careers = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const jobOpenings = [
    {
      title: 'Senior Civil Engineer',
      location: 'Mumbai, India',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'Lead infrastructure projects and manage engineering teams for large-scale construction projects.'
    },
    {
      title: 'Project Manager - Construction',
      location: 'Delhi, India',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Oversee construction projects from inception to completion, ensuring quality and timely delivery.'
    },
    {
      title: 'Software Developer',
      location: 'Bangalore, India',
      type: 'Full-time',
      posted: '3 days ago',
      description: 'Develop innovative software solutions for construction and engineering applications.'
    },
    {
      title: 'Electrical Engineer',
      location: 'Chennai, India',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Design and implement electrical systems for power and energy projects.'
    }
  ];

  const cultureValues = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex challenges.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Collaboration',
      description: 'Teamwork and open communication are at the heart of our success.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Growth',
      description: 'We invest in our people through continuous learning and development opportunities.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&crop=center'
    }
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 bg-gradient-to-br from-corporate-blue via-corporate-blue-light to-blue-600 text-white min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=800&fit=crop&crop=center"
            alt="Career opportunities"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/80 to-blue-600/80"></div> */}
         <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-5xl font-bold font-montserrat mb-6">
              Join Our Team
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Build your career with us and be part of shaping the future of engineering and construction.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-corporate-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments and locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 font-montserrat">
                      {job.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-montserrat">
                      {job.posted}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-montserrat mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <Button className="w-full bg-corporate-blue hover:bg-corporate-blue-dark text-white font-montserrat">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at BMD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
              Life at BMD Group
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
              Our culture is built on shared values that drive innovation, collaboration, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-corporate-blue/70 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 font-montserrat mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
