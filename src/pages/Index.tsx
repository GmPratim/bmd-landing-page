
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BusinessPortfolio from '@/components/BusinessPortfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import WorkHistorySection from '@/components/WorkHistorySection';
import AchievementsSection from '@/components/AchievementsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [businessRef, businessVisible] = useScrollAnimation();
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [leadershipRef, leadershipVisible] = useScrollAnimation();
  const [workHistoryRef, workHistoryVisible] = useScrollAnimation();
  const [achievementsRef, achievementsVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [footerRef, footerVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      <HeroSection />
      
      <div 
        ref={businessRef}
        className={`transition-all duration-1000 transform ${
          businessVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <BusinessPortfolio />
      </div>
      
      <div 
        ref={whyChooseRef}
        className={`transition-all duration-1000 transform ${
          whyChooseVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <WhyChooseUs />
      </div>
      
      <div 
        ref={aboutRef}
        className={`transition-all duration-1000 transform ${
          aboutVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <AboutSection />
        </div>
      
      <div 
        ref={leadershipRef}
        className={`transition-all duration-1000 transform ${
          leadershipVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <LeadershipSection />
      </div>

      <div 
        ref={workHistoryRef}
        className={`transition-all duration-1000 transform ${
          workHistoryVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <WorkHistorySection />
      </div>

      <div 
        ref={achievementsRef}
        className={`transition-all duration-1000 transform ${
          achievementsVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <AchievementsSection />
      </div>
      
      <div 
        ref={servicesRef}
        className={`transition-all duration-1000 transform ${
          servicesVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <ServicesSection />
      </div>
      
      <div 
        ref={footerRef}
        className={`transition-all duration-1000 transform ${
          footerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;
