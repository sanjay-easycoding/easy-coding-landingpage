'use client';

import React from 'react';
import { FaComments, FaLightbulb, FaCode, FaRocket, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Approach = () => {
  const { t } = useLanguage();

  const approachSteps = [
    {
      icon: <FaComments className="text-2xl sm:text-3xl text-cyan-500" />,
      title: t('approach.steps.discovery.title'),
      description: t('approach.steps.discovery.description'),
      step: '01'
    },
    {
      icon: <FaLightbulb className="text-2xl sm:text-3xl text-purple-500" />,
      title: t('approach.steps.design.title'),
      description: t('approach.steps.design.description'),
      step: '02'
    },
    {
      icon: <FaCode className="text-2xl sm:text-3xl text-green-500" />,
      title: t('approach.steps.development.title'),
      description: t('approach.steps.development.description'),
      step: '03'
    },
    {
      icon: <FaRocket className="text-2xl sm:text-3xl text-orange-500" />,
      title: t('approach.steps.launch.title'),
      description: t('approach.steps.launch.description'),
      step: '04'
    }
  ];

  const underlineGradients = [
    'from-cyan-500 to-blue-400',    // Discovery
    'from-purple-500 to-pink-400',  // Design
    'from-green-500 to-emerald-400',// Development
    'from-orange-500 to-yellow-400' // Launch
  ];

  return (
    <section id="approach" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50" aria-labelledby="approach-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h2 id="approach-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
            {t('approach.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            {t('approach.subtitle')}
          </p>
        </header>

        {/* Approach Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
          {approachSteps.map((step, index) => (
            <article
              key={index}
              className="group relative flex flex-col items-stretch overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              {/* Colored Top Border */}
              <div className={`h-2 w-full bg-gradient-to-r ${underlineGradients[index]}`} />

              {/* Icon in Circle */}
              <div className="flex justify-center mt-8 mb-4" aria-hidden="true">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-2 pb-6 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach; 