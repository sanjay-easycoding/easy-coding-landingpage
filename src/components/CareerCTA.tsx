'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface CareerCTAProps {
  onSendResume: () => void;
}

const CareerCTA: React.FC<CareerCTAProps> = ({ onSendResume }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-600" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="cta-heading" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
          {t('career.cta.title')}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-cyan-100 mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
          {t('career.cta.subtitle')}
        </p>
        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0" role="navigation">
          <button 
            onClick={onSendResume}
            className="px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base bg-white text-cyan-600 font-semibold rounded-full shadow-md hover:bg-slate-50 active:bg-slate-100 border-b-4 border-slate-200 active:border-b-0 active:translate-y-1 transform transition-all duration-150 ease-in-out" 
            aria-label="Send your resume to easyCoding"
          >
            {t('career.cta.sendResume')}
          </button>
          {/* <Link href="/#letsTalk" aria-label="Contact easyCoding team">
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base border border-white text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-cyan-600 transition-all duration-150 ease-in-out">
              {t('career.cta.contactUs')}
            </button>
          </Link> */}
        </nav>
      </div>
    </section>
  );
};

export default CareerCTA; 