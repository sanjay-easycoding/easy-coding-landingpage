"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FooterProps {
  lang: 'de' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const translations = {
    de: {
      company: 'Unternehmen',
      about: 'Über uns',
      services: 'Dienstleistungen',
      career: 'Karriere',
      contact: 'Kontakt',
      support: 'Support',
      privacy: 'Datenschutz',
      terms: 'AGB',
      rights: 'Alle Rechte vorbehalten',
      description: 'Wir entwickeln innovative Softwarelösungen für die digitale Zukunft.',
      getInTouch: 'Kontakt aufnehmen',
      followUs: 'Folgen Sie uns'
    },
    en: {
      company: 'Company',
      about: 'About',
      services: 'Services',
      career: 'Career',
      contact: 'Contact',
      support: 'Support',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved',
      description: 'We develop innovative software solutions for the digital future.',
      getInTouch: 'Get in touch',
      followUs: 'Follow us'
    }
  };

  const t = translations[lang];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={`/${lang === 'de' ? '' : lang}`} className="inline-block mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  EasyCoding
                </h3>
              </Link>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                {t.description}
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-700 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-700 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-700 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <FaTwitter className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">{t.company}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={`/${lang === 'de' ? '' : lang}/about`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang === 'de' ? '' : lang}/services`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang === 'de' ? '' : lang}/career`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {t.career}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang === 'de' ? '' : lang}/contact`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">{t.getInTouch}</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300">
                <FaEnvelope className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:info@easycoding.com" className="hover:text-cyan-400 transition-colors duration-200">
                  info@easycoding.com
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <FaPhone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+49123456789" className="hover:text-cyan-400 transition-colors duration-200">
                  +49 123 456 789
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} EasyCoding. {t.rights}
          </p>
          <div className="flex space-x-6 text-sm">
            <Link 
              href={`/${lang === 'de' ? '' : lang}/privacy`}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {t.privacy}
            </Link>
            <Link 
              href={`/${lang === 'de' ? '' : lang}/terms`}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {t.terms}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 