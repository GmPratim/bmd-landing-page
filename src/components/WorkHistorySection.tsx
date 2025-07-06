
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const WorkHistorySection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ... keep existing code (clients data and testimonials data)
  const clients = [
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=100&h=100&fit=crop' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop' },
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=100&h=100&fit=crop' },
    { name: 'Tesla', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop' },
    { name: 'Meta', logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop' },
    { name: 'Netflix', logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=100&h=100&fit=crop' },
    { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=100&fit=crop' },
    { name: 'Intel', logo: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=100&h=100&fit=crop' },
    { name: 'Oracle', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop' },
    { name: 'Adobe', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop' },
    { name: 'Salesforce', logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop' }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech Solutions Inc.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop',
      text: 'BMD Group delivered exceptional results on our corporate headquarters project. Their attention to detail and commitment to deadlines was impressive.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Green Energy Corp',
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop',
      text: 'Outstanding work on our renewable energy infrastructure. The team showed great expertise in handling complex engineering challenges.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      company: 'Urban Developers',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop',
      text: 'Professional, reliable, and innovative. BMD Group transformed our vision into reality with their excellent construction services.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'Smart City Solutions',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      text: 'The quality of work and project management exceeded our expectations. BMD Group is our go-to partner for all major projects.',
      rating: 5
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(testimonialInterval);
    };
  }, [testimonials.length]);

  return (
    <section id="work-history" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Work History
          </h2>
          <p className="text-xl text-gray-600 font-montserrat">
            Our journey of excellence and trusted partnerships
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-purple-600 mx-auto mt-4"></div>
        </div>

        {/* Our Clients Section */}
        <div className="mb-20 overflow-hidden">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Our Clients
            </h3>
            <p className="text-gray-600 font-montserrat">
              Trusted by leading organizations worldwide
            </p>
          </div>

          <div 
            className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex animate-scroll-right space-x-8 w-max" style={{ 
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: '30s'
            }}>
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex-shrink-0">
                  <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl border-2 border-gray-100">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 font-montserrat group-hover:text-corporate-blue transition-colors duration-300">
                      {client.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="overflow-hidden">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Client Testimonials
            </h3>
            <p className="text-gray-600 font-montserrat">
              What our clients say about us
            </p>
          </div>

          {/* Testimonials Container with proper spacing and padding */}
          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl ${
                  index === currentTestimonialIndex 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : index < currentTestimonialIndex 
                      ? 'opacity-0 -translate-x-full scale-95' 
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col items-center text-center w-full">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 mb-4 sm:mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.logo} 
                          alt={testimonial.company}
                         className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-corporate-blue rounded-full flex items-center justify-center">
                        <Quote className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Review Text - with proper mobile spacing */}
                    <div className="w-full mb-4 sm:mb-6 px-2">
                      <p className="text-sm sm:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed italic break-words hyphens-auto">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    {/* Stars with increased size */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 fill-yellow-400 text-yellow-400 mx-0.5 sm:mx-1" />
                      ))}
                    </div>
                    
                     {/* Name and Company - with proper mobile spacing and text wrapping */}
                     <div className="space-y-1 sm:space-y-2 w-full">
                      <p className="font-bold text-gray-900 font-montserrat text-lg sm:text-xl lg:text-2xl break-words">
                        {testimonial.name}
                      </p>
                      <p className="text-corporate-blue font-montserrat font-semibold text-sm sm:text-lg lg:text-xl break-words">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
             {/* Dynamic height container - adjusted for mobile */}
             <div className="min-h-[450px] sm:min-h-[400px] lg:min-h-[420px]"></div>
          </div>

            {/* Testimonial Navigation - properly spaced below card */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonialIndex 
                    ? 'bg-corporate-blue w-8 sm:w-10' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3 sm:w-4'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHistorySection;
