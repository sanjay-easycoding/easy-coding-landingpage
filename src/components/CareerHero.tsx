"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const CareerHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-transparent" role="banner">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            {t('career.hero.title')}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">{t('career.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
            {t('career.hero.subtitle')}
          </p>
          <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0" role="navigation">
            <Link href="#openings" aria-label="View available job positions">
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 active:bg-blue-700 border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transform transition-all duration-150 ease-in-out">
                {t('career.hero.viewPositions')}
              </button>
            </Link>
            <Link href="#why-join-us" aria-label="Learn about why to join our team">
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base border border-slate-200 text-slate-700 font-semibold rounded-full shadow-md hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 ease-in-out">
                {t('career.hero.whyJoinUs')}
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CareerHero; 