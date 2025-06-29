"use client";

import React from 'react';
import Link from 'next/link';
import { FaRocket, FaArrowRight, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface HeroProps {
  lang: 'de' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const translations = {
    de: {
      title: 'Innovative Softwarelösungen für die digitale Zukunft',
      subtitle: 'Wir entwickeln maßgeschneiderte Anwendungen, die Ihr Unternehmen voranbringen. Von Web-Apps bis zu mobilen Lösungen - wir machen Ihre Vision zur Realität.',
      ctaPrimary: 'Projekt starten',
      ctaSecondary: 'Mehr erfahren',
      watchDemo: 'Demo ansehen',
      stats: {
        projects: 'Projekte',
        clients: 'Kunden',
        years: 'Jahre Erfahrung'
      }
    },
    en: {
      title: 'Innovative Software Solutions for the Digital Future',
      subtitle: 'We develop custom applications that drive your business forward. From web apps to mobile solutions - we turn your vision into reality.',
      ctaPrimary: 'Start Project',
      ctaSecondary: 'Learn More',
      watchDemo: 'Watch Demo',
      stats: {
        projects: 'Projects',
        clients: 'Clients',
        years: 'Years Experience'
      }
    }
  };

  const t = translations[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.title.split(' ').slice(0, 2).join(' ')}
              </span>
              <br />
              <span className="text-slate-800">
                {t.title.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              {t.subtitle}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
          >
            <Link
              href={`/${lang === 'de' ? '' : lang}/contact`}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="mr-3 relative z-10"
              >
                <FaRocket className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">{t.ctaPrimary}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href={`/${lang === 'de' ? '' : lang}/about`}
                className="group inline-flex items-center px-6 py-3 text-lg font-semibold border-2 border-slate-300 text-slate-700 rounded-2xl hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300"
              >
                <span>{t.ctaSecondary}</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="ml-2"
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>

              <button className="group inline-flex items-center px-4 py-3 text-lg font-semibold text-slate-600 hover:text-cyan-600 transition-colors duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-lg"
                >
                  <FaPlay className="w-4 h-4 text-white ml-1" />
                </motion.div>
                <span>{t.watchDemo}</span>
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-slate-600 font-medium">
                {t.stats.projects}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-slate-600 font-medium">
                {t.stats.clients}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <div className="text-slate-600 font-medium">
                {t.stats.years}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 