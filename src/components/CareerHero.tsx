"use client";

import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaUsers, FaRocket, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CareerHeroProps {
  lang: 'de' | 'en';
}

const CareerHero: React.FC<CareerHeroProps> = ({ lang }) => {
  const translations = {
    de: {
      title: 'Werden Sie Teil unseres Teams',
      subtitle: 'Entdecken Sie spannende Karrieremöglichkeiten bei EasyCoding. Wir suchen talentierte Entwickler, die mit uns die Zukunft der Softwareentwicklung gestalten möchten.',
      cta: 'Alle Stellenangebote ansehen',
      benefits: {
        title: 'Warum EasyCoding?',
        remote: 'Remote-First Kultur',
        growth: 'Persönliche Entwicklung',
        team: 'Tolles Team',
        projects: 'Spannende Projekte'
      },
      jobs: {
        title: 'Aktuelle Stellenangebote',
        seniorDev: 'Senior Full-Stack Entwickler',
        frontendDev: 'Frontend Entwickler',
        mobileDev: 'Mobile App Entwickler',
        location: 'Standort',
        type: 'Art',
        fulltime: 'Vollzeit',
        remote: 'Remote'
      }
    },
    en: {
      title: 'Join Our Team',
      subtitle: 'Discover exciting career opportunities at EasyCoding. We\'re looking for talented developers who want to shape the future of software development with us.',
      cta: 'View All Positions',
      benefits: {
        title: 'Why EasyCoding?',
        remote: 'Remote-First Culture',
        growth: 'Personal Growth',
        team: 'Great Team',
        projects: 'Exciting Projects'
      },
      jobs: {
        title: 'Current Openings',
        seniorDev: 'Senior Full-Stack Developer',
        frontendDev: 'Frontend Developer',
        mobileDev: 'Mobile App Developer',
        location: 'Location',
        type: 'Type',
        fulltime: 'Full-time',
        remote: 'Remote'
      }
    }
  };

  const t = translations[lang];

  const jobListings = [
    {
      title: t.jobs.seniorDev,
      location: 'Berlin, DE',
      type: t.jobs.fulltime,
      remote: true,
      icon: FaRocket
    },
    {
      title: t.jobs.frontendDev,
      location: 'München, DE',
      type: t.jobs.fulltime,
      remote: true,
      icon: FaRocket
    },
    {
      title: t.jobs.mobileDev,
      location: 'Hamburg, DE',
      type: t.jobs.fulltime,
      remote: true,
      icon: FaRocket
    }
  ];

  const benefits = [
    { icon: FaUsers, title: t.benefits.remote, description: lang === 'de' ? 'Arbeiten Sie von überall' : 'Work from anywhere' },
    { icon: FaRocket, title: t.benefits.growth, description: lang === 'de' ? 'Kontinuierliche Weiterbildung' : 'Continuous learning' },
    { icon: FaBriefcase, title: t.benefits.team, description: lang === 'de' ? 'Kollegiales Umfeld' : 'Collaborative environment' },
    { icon: FaClock, title: t.benefits.projects, description: lang === 'de' ? 'Innovative Technologien' : 'Innovative technologies' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Job Listings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.jobs.title}</h2>
            <div className="space-y-4">
              {jobListings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <FaClock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        {job.remote && (
                          <div className="flex items-center">
                            <FaUsers className="w-4 h-4 mr-1" />
                            {t.jobs.remote}
                          </div>
                        )}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-4 p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200"
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.benefits.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <FaBriefcase className="w-5 h-5 mr-3" />
            {t.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHero; 