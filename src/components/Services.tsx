'use client';

import React from 'react';
import { FaDesktop, FaMobile, FaGlobe, FaCogs, FaCloud, FaServer, FaArrowRight, FaCode, FaPalette, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaWordpress, FaAws, FaAndroid, FaApple, FaFigma, FaPython, FaRust } from 'react-icons/fa';
import { SiNextdotjs, SiVuedotjs, SiNestjs, SiTypescript, SiStrapi, SiFlutter, SiFramer, SiGo, SiGooglecloud } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();
  const serviceKeys = [
    'webDevelopment',
    'mobileDevelopment',
    'uiuxDesign',
    'customSoftware',
    'cloudDevOps',
    'digitalTransformation',
  ];
  const icons = [
    <FaDesktop className="text-3xl text-cyan-500" />,
    <FaMobile className="text-3xl text-purple-500" />,
    <FaPalette className="text-3xl text-green-500" />,
    <FaCogs className="text-3xl text-orange-500" />,
    <FaCloud className="text-3xl text-indigo-500" />,
    <FaRocket className="text-3xl text-red-500" />,
  ];

  // Add gradient classes for top stripes
  const stripeGradients = [
    'from-cyan-400 to-blue-500',    // Web Applications
    'from-purple-500 to-pink-400',  // Mobile Applications
    'from-green-500 to-emerald-400',// Landing Pages & Microsites
    'from-orange-500 to-yellow-400',// Custom Software Solutions
    'from-indigo-500 to-blue-400',  // Cloud-Hosted & DevOps Ready
    'from-rose-500 to-pink-400',    // Scalable Backends & APIs
  ];

  return (
    <section id="services" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full mb-3 sm:mb-4">
            <FaCode className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600 mr-1.5 sm:mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-cyan-700">
              {t('services.badge')}
            </span>
          </div>
          <h2 id="services-heading" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            {t('services.subtitle')}
          </p>
        </header>

        {/* Redesigned Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Our services">
          {serviceKeys.map((key, index) => {
            const icon = icons[index];
            const title = t(`services.items.${key}.title`);
            const description = t(`services.items.${key}.description`);
            const features = (t(`services.items.${key}.features`) as unknown as string[]);
           
            return (
              <article
                key={key}
                className="group relative flex flex-col items-stretch overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                role="listitem"
              >
                {/* Colored Top Border */}
                <div className={`h-2 w-full bg-gradient-to-r ${stripeGradients[index]}`} />

                {/* Icon */}
                <div className="flex justify-center mt-4 mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 shadow">
                    {icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-6 pb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 text-center">{title}</h3>
                  <p className="text-sm text-slate-600 mb-4 text-center">{description}</p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {Array.isArray(features) ? features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <FaCheckCircle className="text-cyan-500 w-4 h-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    )) : <li className="text-red-500 text-xs">No features found for {key}</li>}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 