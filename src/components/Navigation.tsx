import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: Home,
      dropdown: null 
    },
    { 
      name: 'About BMD Group', 
      href: '#about',
      dropdown: [
       { name: 'Overview', href: '#about', icon: '▶' },
        { name: 'Leadership', href: '#leadership', icon: '▶' },
        { name: 'Work History', href: '#work-history', icon: '▶' },
        { name: 'Achievements', href: '#achievements', icon: '▶' }
      ]
    },
    { 
      name: 'Our Businesses', 
      href: '#businesses',
      dropdown: [
        { name: 'Subsidiaries', href: '#businesses', icon: '▶' }
      ]
    },
    { 
      name: 'Products & Services', 
      href: '#services',
      dropdown: [
        { name: 'Real Estate', href: '#services', icon: '▶' },
        { name: 'Constructions', href: '#services', icon: '▶' },
        { name: 'Interior & Exterior', href: '#services', icon: '▶' },
        { name: 'Power & Energy', href: '#services', icon: '▶' },
        { name: 'Security & Manpower', href: '#services', icon: '▶' }
      ]
    },
    { 
      name: 'Careers', 
      href: '/careers',
      dropdown: null
    },
    { 
      name: 'Contact Us', 
      href: '/contact',
      dropdown: null
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
           navigate(href);
      return;
    }
    
    // If we're not on the main page, navigate to main page first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on the main page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    // Add a small delay to prevent immediate disappearing
    setTimeout(() => {
      setActiveDropdown(null);
    }, 350);
  };

  const handleDropdownMouseEnter = () => {
    // Keep dropdown open when hovering over it
    if (activeDropdown) {
      setActiveDropdown(activeDropdown);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/Assets/nav_logo.png" 
              alt="BMD Group - Braj Mohan Group" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Changed breakpoint from md to xl (1280px > 1115px) */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-[#374151] hover:text-blue-700 px-2 py-2 text-base font-medium font-montserrat transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.icon && <item.icon size={28} />}
                    {!item.icon && item.name}
                    {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                       className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-dropdown-in"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <button
                            key={index}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-corporate-blue transition-colors duration-200"
                            onClick={() => scrollToSection(dropdownItem.href || item.href)}
                          >
                            <span className="text-corporate-blue text-xs">{dropdownItem.icon}</span>
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Changed breakpoint from md to xl */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-corporate-blue p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Changed breakpoint from md to xl */}
        {isMobileMenuOpen && (
          <div className="xl:hidden animate-dropdown-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-corporate-blue block px-3 py-2 text-base font-medium font-montserrat w-full text-left flex items-center gap-2"
                  >
                    {item.icon && <item.icon size={20} />}
                    {!item.icon && item.name}
                  </button>
                  {/* Mobile Dropdown Items */}
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-2 w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-corporate-blue"
                          onClick={() => scrollToSection(dropdownItem.href || item.href)}
                        >
                          <span className="text-corporate-blue text-xs">{dropdownItem.icon}</span>
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
