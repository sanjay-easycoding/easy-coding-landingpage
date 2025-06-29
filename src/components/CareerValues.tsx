'use client';

import React from 'react';
import { FaRocket, FaHandshake, FaCode, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const CareerValues = () => {
  const { t } = useLanguage();

  // Company values data
  const companyValues = [
    {
      icon: <FaRocket className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-500" />,
      title: t('career.values.innovation.title'),
      description: t('career.values.innovation.description')
    },
    {
      icon: <FaHandshake className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />,
      title: t('career.values.collaboration.title'),
      description: t('career.values.collaboration.description')
    },
    {
      icon: <FaCode className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500" />,
      title: t('career.values.excellence.title'),
      description: t('career.values.excellence.description')
    },
    {
      icon: <FaGlobe className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-500" />,
      title: t('career.values.growth.title'),
      description: t('career.values.growth.description')
    }
  ];

  // Gradient classes for visual elements
  const valueStripeGradients = [
    'from-cyan-400 to-blue-500',    // Innovation
    'from-blue-500 to-purple-500',  // Collaboration
    'from-purple-500 to-pink-400',  // Excellence
    'from-green-500 to-emerald-400',// Growth
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="values-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            {t('career.values.title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            {t('career.values.subtitle')}
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list">
          {companyValues.map((value, index) => (
            <article key={index} className="rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden" role="listitem">
              <div className={`h-2 w-full bg-gradient-to-r ${valueStripeGradients[index]}`} />
              <div className="text-center p-4 sm:p-6">
                <div className="flex justify-center mb-3 sm:mb-4" aria-hidden="true">{value.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerValues; 