
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'BMD Complex, Sector 15, Gurgaon, Haryana 122001, India'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 124 456 7890'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@bmdgroup.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Ready to start your next project? Contact us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full font-montserrat"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full font-montserrat"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full font-montserrat"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full font-montserrat"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit"
                    className="flex-1 bg-corporate-blue hover:bg-corporate-blue-dark text-white font-montserrat py-3"
                  >
                    Send Message
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white font-montserrat py-3"
                  >
                    Book Consultancy
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border-0 shadow-xl animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-corporate-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 font-montserrat mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 font-montserrat">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Embedded Map */}
            <Card className="border-0 shadow-xl animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7058556088596!2d77.04417631508192!3d28.457523882469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f7e8e3b8b5d%3A0x4e4b1f7e8e3b8b5d!2sSector%2015%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BMD Group Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
