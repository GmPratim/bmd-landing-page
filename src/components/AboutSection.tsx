import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Eye, Heart, Shield, Star, Sun, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const tabs = [{
    id: 'about',
    label: 'About',
    icon: Users
  }, {
    id: 'mission',
    label: 'Mission',
    icon: Target
  }, {
    id: 'vision',
    label: 'Vision',
    icon: Eye
  }, {
    id: 'values',
    label: 'Values',
    icon: Heart
  }];
  
  const values = [{
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent and ethical business practices in every project'
  }, {
    icon: Star,
    title: 'Excellence',
    description: 'Delivering superior quality and exceeding expectations'
  }, {
    icon: Sun,
    title: 'Innovation',
    description: 'Embracing cutting-edge technology and creative solutions'
  }, {
    icon: Users,
    title: 'Safety',
    description: 'Prioritizing the safety of our workforce and communities'
  }, {
    icon: Award,
    title: 'Empowerment',
    description: 'Building capabilities and empowering local communities'
  }];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <div className="space-y-6">
            <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
              BMD Group is a leading conglomerate specializing in engineering, infrastructure development, 
              construction, real estate, and innovative software solutions. With over two decades of excellence, 
              we have established ourselves as a trusted partner for complex projects across India.
            </p>
            <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
              Our commitment to quality, innovation, and sustainable development has made us a preferred 
              choice for clients ranging from government agencies to private enterprises.
            </p>
          </div>;
      case 'mission':
        return <div className="space-y-6">
            <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
              To deliver world-class engineering and construction solutions that exceed client expectations 
              while contributing to India's infrastructure development and economic growth.
            </p>
            <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
              We strive to build lasting relationships with our clients through innovative approaches, 
              superior quality, and timely project delivery.
            </p>
          </div>;
      case 'vision':
        return <div className="space-y-6">
            <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
              To be the most trusted and innovative engineering and construction company in India, 
              setting new benchmarks in quality, sustainability, and customer satisfaction.
            </p>
            <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
              We envision a future where our projects contribute significantly to building a modern, 
              sustainable, and prosperous India.
            </p>
          </div>;
      case 'values':
        return <div className="bg-white py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  The principles that guide every decision we make and every project we deliver
                </p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {values.map((value, index) => <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                      <value.icon className="h-10 w-10 text-blue-600 group-hover:text-green-600 transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>)}
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <section id="about" className="py-20 bg-white relative overflow-x-hidden">
      {/* Animated Tilted Images */}
      <motion.img
        src="/public/Assets/interior.jpg"
        alt="Aesthetic Left"
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: -15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="hidden md:block absolute left-0 top-10 w-56 h-56 object-cover rounded-2xl border-4 border-white shadow-xl z-0"
        style={{ borderColor: '#22d3ee' }}
      />
      <motion.img
        src="/public/Assets/house.png"
        alt="Aesthetic Right"
        initial={{ opacity: 0, x: 100, rotate: 15 }}
        whileInView={{ opacity: 1, x: 0, rotate: 15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="hidden md:block absolute right-0 top-10 w-56 h-56 object-cover rounded-2xl border-4 border-white shadow-xl z-0"
        style={{ borderColor: '#f472b6' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            About BMD Group
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Building the future through innovative engineering and construction solutions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center px-8 py-4 rounded-full font-montserrat text-xl font-semibold transition-all duration-300 ${activeTab === tab.id ? 'bg-corporate-blue text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105 hover:shadow-lg'}`}>
              <tab.icon className="w-6 h-6 mr-3" />
              {tab.label}
            </button>)}
        </div>

        {/* Tab Content */}
        <Card className="border-0 shadow-lg mb-16">
          <CardContent className="p-8 px-[32px] py-[22px]">
            {renderTabContent()}
          </CardContent>
        </Card>

       

       
      </div>
    </section>;
};
export default AboutSection;