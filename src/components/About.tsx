'use client';

import React from 'react';
import { FaUsers, FaRocket, FaHeart, FaLightbulb, FaArrowRight, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const teamKeys = ['alex', 'sarah', 'mike', 'emily'];

const About = () => {
  const { t } = useLanguage();

  // Add gradient classes for top stripes
  const stripeGradients = [
    'from-cyan-400 to-blue-500',    // Alex
    'from-purple-500 to-pink-400',  // Sarah
    'from-green-500 to-emerald-400',// Mike
    'from-orange-500 to-yellow-400',// Emily
  ];

  return (
    <section id="about" className="py-4 sm:py-6 md:py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-blue-50" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h2 id="about-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
            {t('about.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            {t('about.subtitle')}
          </p>
        </header>

        {/* Company Story */}
        <article className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {t('about.story.title')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {t('about.story.paragraph1')}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('about.story.paragraph2')}
                </p>
              </div>
              <aside className="relative" aria-label="Company illustration">
                <div className="aspect-square bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaUsers className="text-4xl sm:text-5xl text-white opacity-80" aria-hidden="true" />
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Team Section */}
        <section className="mb-8 sm:mb-12" aria-labelledby="team-heading">
          <header className="text-center mb-6 sm:mb-8">
            <h3 id="team-heading" className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
              {t('about.team.title')}
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list" aria-label="Team members">
            {teamKeys.map((key, index) => (
              <article key={key} className="rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden" role="listitem">
                {/* Colored Top Border */}
                <div className={`h-2 w-full bg-gradient-to-r ${stripeGradients[index]}`} />
                <div className="text-center p-4 sm:p-5">
                  {/* Team Member Avatar */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold" aria-label={`${t(`about.team.members.${key}.name`)} avatar`}>
                      {t(`about.team.members.${key}.name`).charAt(0)}
                    </div>
                  </div>
                  {/* Team Member Info */}
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">{t(`about.team.members.${key}.name`)}</h4>
                  <p className="text-sm text-cyan-600 font-medium mb-2">{t(`about.team.members.${key}.role`)}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3 sm:mb-4">{t(`about.team.members.${key}.description`)}</p>
                  {/* Social Links */}
                  <nav className="flex justify-center gap-2" aria-label={`${t(`about.team.members.${key}.name`)} social links`}>
                    <a href="#" className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300" aria-label={`${t(`about.team.members.${key}.name`)} LinkedIn profile`}>
                      <FaLinkedin className="w-3 h-3" aria-hidden="true" />
                    </a>
                    <a href="#" className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:text-sky-500 hover:bg-sky-50 transition-all duration-300" aria-label={`${t(`about.team.members.${key}.name`)} Twitter profile`}>
                      <FaTwitter className="w-3 h-3" aria-hidden="true" />
                    </a>
                    <a href="#" className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 hover:bg-slate-200 transition-all duration-300" aria-label={`${t(`about.team.members.${key}.name`)} GitHub profile`}>
                      <FaGithub className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </nav>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About; 