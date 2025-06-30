'use client';

import React from 'react';
import { FaComments, FaLightbulb, FaCode, FaRocket } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Approach = () => {
  const { t } = useLanguage();

  const approachSteps = [
    {
      icon: <FaComments className="text-xl sm:text-2xl text-white" />,
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      title: t('approach.steps.discovery.title'),
      description: t('approach.steps.discovery.description'),
      step: '01'
    },
    {
      icon: <FaLightbulb className="text-xl sm:text-2xl text-white" />,
      iconBg: 'bg-gradient-to-br from-pink-500 to-purple-500',
      title: t('approach.steps.design.title'),
      description: t('approach.steps.design.description'),
      step: '02'
    },
    {
      icon: <FaCode className="text-xl sm:text-2xl text-white" />,
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-400',
      title: t('approach.steps.development.title'),
      description: t('approach.steps.development.description'),
      step: '03'
    },
    {
      icon: <FaRocket className="text-xl sm:text-2xl text-white" />,
      iconBg: 'bg-gradient-to-br from-orange-400 to-yellow-400',
      title: t('approach.steps.launch.title'),
      description: t('approach.steps.launch.description'),
      step: '04'
    }
  ];

  return (
    <section id="approach" className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-8 bg-transparent" aria-labelledby="approach-heading">
      <div className="max-w-7xl mx-auto">
        <div className="bg-transparent rounded-2xl px-4 sm:px-8 py-12">
          {/* Header */}
          <header className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 id="approach-heading" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">
              {t('approach.title')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
              {t('approach.subtitle')}
            </p>
          </header>

          {/* Approach Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
            {approachSteps.map((step, index) => (
              <article
                key={index}
                className="bg-[#eaeaea] rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                role="listitem"
              >
                {/* Icon in Rounded Square */}
                <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-4 sm:mb-6 ${step.iconBg}`}>
                  {step.icon}
                </div>
                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach; 