"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const CookiePolicy = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121a2b] to-[#0c111e] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 group"
          >
            <IoArrowBack className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-xs sm:text-sm font-medium">Back</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            {t('cookiePolicy.title')}
          </h1>
          <p className="text-xs sm:text-sm md:text-sm text-slate-400">
            {t('cookiePolicy.lastUpdated')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-slate-700">
            <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4 leading-relaxed">
              {t('cookiePolicy.intro')}
            </p>
            <p className="text-sm sm:text-base md:text-base text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              {t('cookiePolicy.consent')}
            </p>

            {/* Section 1: What Are Cookies */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">1. {t('cookiePolicy.sections.whatAreCookies.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300">{t('cookiePolicy.sections.whatAreCookies.description')}</p>
            </section>

            {/* Section 2: Types of Cookies We Use */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">2. {t('cookiePolicy.sections.typesOfCookies.title')}</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-600 mb-3 sm:mb-4">
                  <thead>
                    <tr className="bg-slate-700">
                      <th className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-left text-white font-semibold text-xs sm:text-sm md:text-sm">Type</th>
                      <th className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-left text-white font-semibold text-xs sm:text-sm md:text-sm">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 font-medium text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.essential.type')}</td>
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.essential.purpose')}</td>
                    </tr>
                    <tr className="bg-slate-700/30">
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 font-medium text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.analytics.type')}</td>
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.analytics.purpose')}</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 font-medium text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.performance.type')}</td>
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.performance.purpose')}</td>
                    </tr>
                    <tr className="bg-slate-700/30">
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 font-medium text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.preference.type')}</td>
                      <td className="border border-slate-600 px-2 sm:px-4 py-2 sm:py-3 text-slate-300 text-xs sm:text-sm md:text-sm">{t('cookiePolicy.sections.typesOfCookies.table.preference.purpose')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm sm:text-base md:text-base text-slate-300 italic">{t('cookiePolicy.sections.typesOfCookies.note')}</p>
            </section>

            {/* Section 3: Third-Party Cookies */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">3. {t('cookiePolicy.sections.thirdPartyCookies.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('cookiePolicy.sections.thirdPartyCookies.description')}</p>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 mb-3 sm:mb-4 ml-4">
                {t('cookiePolicy.sections.thirdPartyCookies.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-sm sm:text-base md:text-base text-slate-300">{t('cookiePolicy.sections.thirdPartyCookies.note')}</p>
            </section>

            {/* Section 4: Managing Cookies */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">4. {t('cookiePolicy.sections.managingCookies.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('cookiePolicy.sections.managingCookies.description')}</p>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 mb-3 sm:mb-4 ml-4">
                {t('cookiePolicy.sections.managingCookies.browsers').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-sm sm:text-base md:text-base text-slate-300 italic">{t('cookiePolicy.sections.managingCookies.note')}</p>
            </section>

            {/* Section 5: Changes to This Policy */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">5. {t('cookiePolicy.sections.changes.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300">{t('cookiePolicy.sections.changes.description')}</p>
            </section>

            {/* Section 6: Contact */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">6. {t('cookiePolicy.sections.contact.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('cookiePolicy.sections.contact.description')}</p>
              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 border border-slate-600">
                <p className="text-sm sm:text-base md:text-base text-slate-300">
                  <strong>{t('cookiePolicy.sections.contact.company')}</strong><br />
                  {t('cookiePolicy.sections.contact.email')}<br />
                  {t('cookiePolicy.sections.contact.website')}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 