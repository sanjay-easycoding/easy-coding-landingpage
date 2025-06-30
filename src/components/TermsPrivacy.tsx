"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const TermsPrivacy = () => {
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
            {t('termsPrivacy.title')}
          </h1>
          <p className="text-xs sm:text-sm md:text-sm text-slate-400">
            {t('termsPrivacy.lastUpdated')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-slate-700">
            <p className="text-sm sm:text-base md:text-base text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              {t('termsPrivacy.intro')}
            </p>

            {/* Section 1: What We Collect */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">1. {t('termsPrivacy.sections.whatWeCollect.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('termsPrivacy.sections.whatWeCollect.description')}</p>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white mb-2">a. {t('termsPrivacy.sections.whatWeCollect.personalData.title')}</h3>
                  <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 ml-4">
                    {t('termsPrivacy.sections.whatWeCollect.personalData.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white mb-2">b. {t('termsPrivacy.sections.whatWeCollect.usageData.title')}</h3>
                  <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 ml-4">
                    {t('termsPrivacy.sections.whatWeCollect.usageData.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white mb-2">c. {t('termsPrivacy.sections.whatWeCollect.cookies.title')}</h3>
                  <p className="text-sm sm:text-base md:text-base text-slate-300">{t('termsPrivacy.sections.whatWeCollect.cookies.description')}</p>
                </div>
              </div>
            </section>

            {/* Section 2: How We Use Your Data */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">2. {t('termsPrivacy.sections.howWeUse.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('termsPrivacy.sections.howWeUse.description')}</p>
              
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 mb-3 sm:mb-4 ml-4">
                {t('termsPrivacy.sections.howWeUse.basis').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-2 font-semibold">{t('termsPrivacy.sections.howWeUse.usesTitle')}</p>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 ml-4">
                {t('termsPrivacy.sections.howWeUse.uses').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 3: Data Sharing and Transfers */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">3. {t('termsPrivacy.sections.dataSharing.title')}</h2>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-2 ml-4">
                {t('termsPrivacy.sections.dataSharing.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Section 4: Data Retention */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">4. {t('termsPrivacy.sections.dataRetention.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('termsPrivacy.sections.dataRetention.description')}</p>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 mb-3 sm:mb-4 ml-4">
                {t('termsPrivacy.sections.dataRetention.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-sm sm:text-base md:text-base text-slate-300">{t('termsPrivacy.sections.dataRetention.contact')}</p>
            </section>

            {/* Section 5: Your GDPR Rights */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">5. {t('termsPrivacy.sections.gdprRights.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('termsPrivacy.sections.gdprRights.description')}</p>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 mb-3 sm:mb-4 ml-4">
                {t('termsPrivacy.sections.gdprRights.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-sm sm:text-base md:text-base text-slate-300">{t('termsPrivacy.sections.gdprRights.contact')}</p>
            </section>

            {/* Section 6: Terms of Use */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">6. {t('termsPrivacy.sections.termsOfUse.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300 mb-3 sm:mb-4">{t('termsPrivacy.sections.termsOfUse.description')}</p>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-base text-slate-300 space-y-1 mb-3 sm:mb-4 ml-4">
                {t('termsPrivacy.sections.termsOfUse.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-sm sm:text-base md:text-base text-slate-300">{t('termsPrivacy.sections.termsOfUse.discretion')}</p>
            </section>

            {/* Section 7: Intellectual Property */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">7. {t('termsPrivacy.sections.intellectualProperty.title')}</h2>
              <p className="text-sm sm:text-base md:text-base text-slate-300">{t('termsPrivacy.sections.intellectualProperty.description')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacy; 