"use client";

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 md:py-16 bg-gradient-to-b from-[#121a2b] to-[#0c111e]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <section className="text-center md:text-left">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
              easyCoding
            </h2>
            <p className="text-xs sm:text-sm md:text-sm text-slate-400 mb-4 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <nav className="flex justify-center md:justify-start gap-3" aria-label="Social media links">
              <a href="#" aria-label={t('footer.social.facebook')} className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-blue-400 hover:bg-blue-900 transition-all duration-300">
                <FaFacebookF size={14} aria-hidden="true" />
              </a>
              <a href="#" aria-label={t('footer.social.twitter')} className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-sky-400 hover:bg-sky-900 transition-all duration-300">
                <FaTwitter size={14} aria-hidden="true" />
              </a>
              <a href="#" aria-label={t('footer.social.linkedin')} className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-blue-500 hover:bg-blue-900 transition-all duration-300">
                <FaLinkedinIn size={14} aria-hidden="true" />
              </a>
            </nav>
          </section>

          {/* Quick Links */}
          <section className="text-center md:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3">{t('footer.quickLinks')}</h3>
            <nav className="space-y-2" aria-label="Quick navigation">
              <a href="/#about" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('footer.about')}
              </a>
              <a href="/#services" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('footer.services')}
              </a>
              <a href="/#portfolio" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('footer.caseStudies')}
              </a>
              <a href="/career" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('footer.careers')}
              </a>
            </nav>
          </section>

          {/* Services */}
          <section className="text-center md:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3">{t('footer.services')}</h3>
            <nav className="space-y-2" aria-label="Our services">
              <a href="/#services" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('services.items.webDevelopment.title')}
              </a>
              <a href="/#services" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('services.items.mobileDevelopment.title')}
              </a>
              <a href="/#services" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('services.items.uiuxDesign.title')}
              </a>
              <a href="/#services" className="block text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors">
                {t('services.items.customSoftware.title')}
              </a>
            </nav>
          </section>

          {/* Contact Info */}
          <section className="text-center md:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3">{t('footer.contact')}</h3>
            <address className="space-y-3 not-italic">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@easy-coding.io" className="text-xs sm:text-sm md:text-sm text-slate-300 hover:text-white transition-colors break-all">
                  info@easy-coding.io
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm md:text-sm text-slate-300">
                  {t('footer.location')}
                </span>
              </div>
            </address>
          </section>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm md:text-sm text-slate-500 text-center sm:text-left">
              {t('footer.copyright')}
            </p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2" aria-label="Legal links">
              <a href="#" className="text-xs sm:text-sm md:text-sm text-slate-400 hover:text-white transition-colors">
                {t('footer.legal.privacy')}
              </a>
              <a href="#" className="text-xs sm:text-sm md:text-sm text-slate-400 hover:text-white transition-colors">
                {t('footer.legal.terms')}
              </a>
              <a href="#" className="text-xs sm:text-sm md:text-sm text-slate-400 hover:text-white transition-colors">
                {t('footer.legal.cookies')}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 