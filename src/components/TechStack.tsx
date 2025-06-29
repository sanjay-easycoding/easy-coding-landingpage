'use client';

import React from 'react';
import { FaReact, FaNodeJs, FaWordpress, FaAws, FaAndroid, FaApple, FaFigma, FaPython, FaRust } from 'react-icons/fa';
import { SiNextdotjs, SiVuedotjs, SiNestjs, SiTypescript, SiStrapi, SiFlutter, SiFramer, SiGo, SiGooglecloud } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';

const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section id="techstack" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-blue-50" aria-labelledby="techstack-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 sm:mb-12">
          <h2 id="techstack-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
            {t('techstack.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            {t('techstack.subtitle')}
          </p>
        </header>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 sm:gap-12 md:gap-14">
          <FaReact className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" />
          <SiNextdotjs className="w-8 h-8 md:w-10 md:h-10 text-black" />
          <SiVuedotjs className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
          <SiNestjs className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
          <SiTypescript className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
          <SiStrapi className="w-8 h-8 md:w-10 md:h-10 text-indigo-700" />
          <FaApple className="w-8 h-8 md:w-10 md:h-10 text-black" />
          <FaAndroid className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
          <SiFlutter className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
          <FaFigma className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />
          <SiFramer className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
          <FaWordpress className="w-8 h-8 md:w-10 md:h-10 text-blue-700" />
          <FaNodeJs className="w-8 h-8 md:w-10 md:h-10 text-green-700" />
          <FaPython className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
          <SiGo className="w-8 h-8 md:w-10 md:h-10 text-cyan-600" />
          <FaRust className="w-8 h-8 md:w-10 md:h-10 text-black" />
          <FaAws className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
          <SiGooglecloud className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default TechStack; 