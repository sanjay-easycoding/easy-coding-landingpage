"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface NotFoundProps {
  lang: 'en' | 'de';
}

const NotFound = ({ lang }: NotFoundProps) => {
  const translations = {
    en: {
      title: "Oops! Page Not Found",
      goHome: "Go Home",
      goBack: "Go Back"
    },
    de: {
      title: "Ups! Seite nicht gefunden",
      goHome: "Zur Startseite",
      goBack: "Zurück"
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
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
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-lg mx-auto text-center relative z-10">
        
        {/* Enhanced 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              404
            </h1>
            {/* Glow effect */}
            <div className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
              404
            </div>
          </div>
        </motion.div>

        {/* Enhanced Warning Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(239, 68, 68, 0.4)",
                "0 0 0 10px rgba(239, 68, 68, 0)",
                "0 0 0 0 rgba(239, 68, 68, 0)"
              ]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-full shadow-lg backdrop-blur-sm"
          >
            <FaExclamationTriangle className="w-7 h-7 text-red-500 drop-shadow-sm" />
          </motion.div>
        </motion.div>

        {/* Enhanced Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 drop-shadow-sm">
            {t.title}
          </h2>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mb-8"
        />

        {/* Enhanced Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
        >
          <Link 
            href={lang === 'en' ? '/en' : lang === 'de' ? '/de' : '/'}
            className="group relative inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden border border-white/20"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="mr-2.5 relative z-10"
            >
              <FaHome className="w-4 h-4" />
            </motion.div>
            <span className="relative z-10">{t.goHome}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="group relative inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold bg-gradient-to-r from-slate-100 via-white to-slate-50 text-slate-700 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-slate-200 hover:via-white hover:to-slate-100 transform hover:-translate-y-2 transition-all duration-300 ease-out border-2 border-slate-200 hover:border-slate-300"
          >
            <motion.div
              whileHover={{ scale: 1.2, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="mr-2.5"
            >
              <FaArrowLeft className="w-4 h-4" />
            </motion.div>
            <span>{t.goBack}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 