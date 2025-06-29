"use client";

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaRocket, FaCode, FaUsers } from 'react-icons/fa';
import Lottie from 'lottie-react';
import codingAnimation from '../../public/coding-animation3.json';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  lang: 'de' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { scrollToSection } = useScrollTo();
  const { t } = useLanguage();

  const scrollToContact = () => {
    scrollToSection("letsTalk", "/#letsTalk");
  };

  const scrollToServices = () => {
    scrollToSection("services", "/#services");
  };

  // Add gradient classes for top stripes and backgrounds for stat cards
  const statStripeGradients = [
    'from-cyan-400 to-blue-500',    // Projects
    'from-blue-500 to-purple-500',  // Clients
    'from-purple-500 to-pink-400',  // Support
  ];
  const statBgColors = [
    'bg-cyan-50/80',
    'bg-blue-50/80',
    'bg-purple-50/80',
  ];

  return (
    <section className="relative w-full pt-36 pb-6 sm:pb-8 md:pb-12 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50" role="banner" aria-label="Hero section">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <article className="text-center lg:text-left">
            
            {/* Badge */}
            <header>
              <div className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full mb-3 sm:mb-4 md:mb-6">
                <FaRocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600 mr-1.5 sm:mr-2" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium text-cyan-700">
                  {t('hero.badge')}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 leading-tight px-2 sm:px-0">
                {t('hero.title')}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent block sm:inline">{t('hero.titleHighlight')}</span>
              </h1>
            </header>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto lg:mx-0 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <nav className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start px-2 sm:px-0 mb-8 sm:mb-10 md:mb-12 mt-8 sm:mt-8 md:mt-10 lg:mt-12" role="navigation" aria-label="Call to action buttons">
              <button 
                onClick={scrollToContact} 
                className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 active:bg-blue-700 border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transform transition-all duration-150 ease-in-out flex items-center justify-center gap-2"
                aria-label="Start your project with EasyCoding"
              >
                <span>{t('nav.startProject')}</span>
                <FaArrowRight className="w-3 h-3" aria-hidden="true" />
              </button>
              
              <button 
                onClick={scrollToServices}
                className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm border border-slate-200 text-slate-700 font-semibold rounded-full shadow-md hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 ease-in-out"
                aria-label="Explore our services"
              >
                {t('nav.exploreServices')}
              </button>
            </nav>

            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0" aria-label="Company statistics">
              {[0,1,2].map(idx => (
                <article key={idx} className={`rounded-xl ${statBgColors[idx]} backdrop-blur-sm border border-white/50 shadow-sm overflow-hidden text-center`}>
                  <div className={`h-2 w-full bg-gradient-to-r ${statStripeGradients[idx]}`} />
                  <div className="p-2.5 sm:p-3 md:p-4">
                    <div className="flex justify-center mb-1.5 sm:mb-2">
                      {idx === 0 && <FaCode className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" aria-hidden="true" />}
                      {idx === 1 && <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" aria-hidden="true" />}
                      {idx === 2 && <FaRocket className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" aria-hidden="true" />}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-0.5 sm:mb-1">{idx === 0 ? '18+' : idx === 1 ? '10+' : '24/7'}</div>
                    <div className="text-xs text-slate-600">{idx === 0 ? t('hero.stats.projects') : idx === 1 ? t('hero.stats.clients') : t('hero.stats.support')}</div>
                  </div>
                </article>
              ))}
            </section>
          </article>

          {/* Right Animation */}
          <aside className="hidden lg:flex items-center justify-center" aria-label="Coding animation">
            <div className="w-full max-w-md xl:max-w-lg">
              <Lottie 
                animationData={codingAnimation} 
                loop={true}
                autoplay={true}
                className="w-full h-auto"
                aria-label="Animated coding illustration"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero; 