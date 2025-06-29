'use client';

import React from 'react';
import { FaPalette, FaCode, FaGlobe, FaTools, FaUsers, FaBuilding } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const CareerPerks = () => {
  const { t } = useLanguage();

  // Company perks data
  const perks = [
    {
      icon: <FaPalette className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-500" />,
      title: t('career.perks.creativeFreedom.title'),
      description: t('career.perks.creativeFreedom.description')
    },
    {
      icon: <FaCode className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />,
      title: t('career.perks.challengingWork.title'),
      description: t('career.perks.challengingWork.description')
    },
    {
      icon: <FaGlobe className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500" />,
      title: t('career.perks.remoteCulture.title'),
      description: t('career.perks.remoteCulture.description')
    },
    {
      icon: <FaTools className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-500" />,
      title: t('career.perks.modernStack.title'),
      description: t('career.perks.modernStack.description')
    },
    {
      icon: <FaUsers className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-500" />,
      title: t('career.perks.collaborativeTeam.title'),
      description: t('career.perks.collaborativeTeam.description')
    },
    {
      icon: <FaBuilding className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-500" />,
      title: t('career.perks.indiaOffice.title'),
      description: t('career.perks.indiaOffice.description')
    }
  ];

  // Gradient classes for visual elements
  const perkStripeGradients = [
    'from-cyan-400 to-blue-500',
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-400',
    'from-green-500 to-emerald-400',
    'from-orange-500 to-yellow-400',
    'from-rose-500 to-pink-400',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50" aria-labelledby="perks-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="perks-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            {t('career.perks.title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            {t('career.perks.subtitle')}
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8" role="list">
          {perks.map((perk, index) => (
            <article key={index} className="rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden" role="listitem">
              <div className={`h-2 w-full bg-gradient-to-r ${perkStripeGradients[index]}`} />
              <div className="text-center p-4 sm:p-6">
                <div className="flex justify-center mb-3 sm:mb-4" aria-hidden="true">{perk.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">{perk.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{perk.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPerks; 