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

  const taglines = [
    'Powerful portals, admin panels & booking systems',
    'Fast, beautiful apps for iOS & Android',
    'Fast-loading, high-converting sites',
    'From legacy rescue to fresh MVPs',
    'Modern, scalable, and secure deployments',
    'Robust APIs for any scale',
  ];

  return (
    <section id="services" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-transparent" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="bg-transparent px-4 sm:px-8 py-12 ">
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

          {/* Bento Box Services Grid */}
          <div
            className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:auto-rows-[minmax(180px,auto)] bento-services-grid"
            role="list"
            aria-label="Our services"
          >
            {serviceKeys.map((key, index) => {
              const icon = icons[index];
              const title = t(`services.items.${key}.title`);
              const description = t(`services.items.${key}.description`);
              const features = (t(`services.items.${key}.features`) as unknown as string[]);
              const tagline = taglines[index];
              return (
                <article
                  key={key}
                  className="relative group flex flex-col items-center justify-center overflow-hidden bg-[#eaeaea] rounded-2xl shadow-xl transition-all duration-300 min-h-[240px] cursor-pointer px-4 py-6 lg:px-6 lg:py-8"
                  role="listitem"
                >
                  {/* Big, bold icon */}
                  <div className="z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-200 to-blue-300 border border-cyan-100 shadow-lg mb-4">
                    {React.cloneElement(icon, { className: (icon.props.className || '') + ' text-5xl' })}
                  </div>
                  {/* Title */}
                  <h3 className="z-10 text-xl font-bold text-slate-900 text-center">
                    {title}
                  </h3>
                  {/* Tagline */}
                  <p className="z-10 text-sm text-cyan-700 font-medium text-center mb-2">{tagline}</p>
                  {/* Details for mobile/tablet (always visible) */}
                  <div className="block lg:hidden w-full mt-4 flex flex-col items-center text-center">
                    <p className="text-sm text-slate-600 mb-4">{description}</p>
                    <ul className="flex flex-col gap-2 mt-2 w-full">
                      {Array.isArray(features) ? features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium justify-center"
                        >
                          <FaCheckCircle className="text-cyan-500 w-4 h-4 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      )) : <li className="text-red-500 text-xs">No features found for {key}</li>}
                    </ul>
                  </div>
                  {/* Overlay: Description and Features (hover on lg+) */}
                  <div className="hidden lg:flex flex-col justify-center items-center absolute inset-0 bg-white bg-opacity-95 px-6 pb-6 pt-10 z-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                    <p className="text-sm text-slate-600 mb-4 text-center">{description}</p>
                    <ul className="flex flex-col gap-2 mt-2">
                      {Array.isArray(features) ? features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium justify-center"
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
          <style jsx>{`
            @media (min-width: 1024px) {
              .bento-services-grid {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                grid-template-rows: repeat(3, minmax(180px, auto));
                grid-template-areas:
                  "area1 area1 area2 area2 area3 area3"
                  "area1 area1 area4 area4 area4 area4"
                  "area5 area5 area5 area6 area6 area6";
              }
              .bento-services-grid > :nth-child(1) { grid-area: area1; }
              .bento-services-grid > :nth-child(2) { grid-area: area2; }
              .bento-services-grid > :nth-child(3) { grid-area: area3; }
              .bento-services-grid > :nth-child(4) { grid-area: area4; }
              .bento-services-grid > :nth-child(5) { grid-area: area5; }
              .bento-services-grid > :nth-child(6) { grid-area: area6; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Services; 