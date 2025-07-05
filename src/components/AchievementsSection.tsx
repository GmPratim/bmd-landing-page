
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Camera, Play, Trophy, Medal, Star } from 'lucide-react';

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('awards');

  const awards = [
    {
      icon: Trophy,
      title: 'Excellence in Construction 2023',
      organization: 'National Construction Council',
      year: '2023'
    },
    {
      icon: Medal,
      title: 'Best Infrastructure Project',
      organization: 'Engineering Excellence Awards',
      year: '2022'
    },
    {
      icon: Star,
      title: 'Innovation in Green Building',
      organization: 'Sustainable Development Forum',
      year: '2023'
    },
    {
      icon: Award,
      title: 'Quality Assurance Certification',
      organization: 'ISO Standards Authority',
      year: '2022'
    }
  ];

  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      title: 'Construction Project Completion',
      description: 'Successful completion of major infrastructure project'
    },
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      title: 'Award Ceremony 2023',
      description: 'Receiving excellence award for construction quality'
    },
    {
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      title: 'Modern Office Complex',
      description: 'Innovative interior design project showcase'
    }
  ];

  const videos = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1581093458791-9d42e1b61e3e?w=400&h=300&fit=crop',
      title: 'BMD Group - Company Overview',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      title: 'Infrastructure Development Process',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      title: 'Sustainable Energy Solutions',
      youtubeId: 'dQw4w9WgXcQ'
    }
  ];

  const tabs = [
    { id: 'awards', label: 'Awards & Recognitions', icon: Award },
    { id: 'photos', label: 'Photo Gallery', icon: Camera },
    { id: 'videos', label: 'Video Gallery', icon: Play }
  ];

  // ... keep existing code (renderTabContent function)
  const renderTabContent = () => {
    switch (activeTab) {
      case 'awards':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-corporate-blue/10 rounded-full">
                      <award.icon className="h-8 w-8 text-corporate-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 font-montserrat mb-2">
                        {award.title}
                      </h4>
                      <p className="text-gray-600 font-montserrat mb-2">{award.organization}</p>
                      <p className="text-corporate-blue font-montserrat font-medium">{award.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      
      case 'photos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 font-montserrat mb-2">
                    {photo.title}
                  </h4>
                  <p className="text-gray-600 font-montserrat text-sm">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      
      case 'videos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button 
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                      className="p-4 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200 group-hover:scale-110 transform transition-transform"
                    >
                      <Play className="h-8 w-8 text-white fill-current" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 font-montserrat">
                    {video.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Illustrations */}
      <div className="absolute inset-0 opacity-10">
        {/* Geometric shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-3xl"></div>
        
        {/* Abstract geometric patterns */}
        <div className="absolute top-40 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 rounded-lg blur-xl"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 transform -rotate-12 rounded-lg blur-xl"></div>
        <div className="absolute top-1/2 left-16 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 transform rotate-12 rounded-lg blur-xl"></div>
      </div>
      
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/5 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-60 right-1/5 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white rounded-full"></div>
        <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-white rounded-full"></div>
        
        {/* Lines and curves */}
        <div className="absolute top-32 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45"></div>
        <div className="absolute bottom-32 right-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45"></div>
      </div>

      {/* Trophy Icons Background with different colors */}
      <div className="absolute inset-0 opacity-8">
        <Trophy className="absolute top-32 left-1/4 w-16 h-16 text-blue-400 transform rotate-12" />
        <Award className="absolute top-60 right-1/4 w-12 h-12 text-purple-400 transform -rotate-12" />
        <Medal className="absolute bottom-32 left-1/3 w-14 h-14 text-indigo-400 transform rotate-45" />
        <Star className="absolute bottom-60 right-1/3 w-10 h-10 text-pink-400 transform -rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-4">
            BMD Achievements
          </h2>
          <p className="text-xl text-gray-200 font-montserrat">
            Celebrating our milestones and recognitions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-hidden">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-montserrat text-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-white/20 hover:shadow-md border border-white/20'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-3" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in overflow-hidden">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
