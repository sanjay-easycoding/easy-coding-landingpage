"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const ProjectCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-transparent" role="banner">
      <div className="max-w-7xl mx-auto">
        <div className="bg-transparent rounded-2xl shadow-xl px-4 sm:px-8 py-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
            {t('projectCTA.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 mb-8 sm:mb-12">
            {t('projectCTA.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center" role="navigation">
            <Link href="#letsTalk" aria-label="Start your project">
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 active:bg-blue-700 border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transform transition-all duration-150 ease-in-out">
                {t('projectCTA.startProject')}
              </button>
            </Link>
            <Link href="#portfolio" aria-label="View our case studies">
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border border-slate-200 text-slate-700 font-semibold rounded-full shadow-md hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 ease-in-out">
                {t('projectCTA.viewWork')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA; 