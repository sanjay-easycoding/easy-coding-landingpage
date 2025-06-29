'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaExternalLinkAlt, FaCode, FaMobile, FaPalette } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: t('portfolio.projects.niceGuides.title'),
      description: t('portfolio.projects.niceGuides.description'),
      category: t('portfolio.projects.niceGuides.category'),
      image: '/case-study-ng.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: <FaCode className="text-2xl text-cyan-500" />
    },
    {
      title: t('portfolio.projects.g24.title'),
      description: t('portfolio.projects.g24.description'),
      category: t('portfolio.projects.g24.category'),
      image: '/case-study-g24.png',
      technologies: ['Flutter', 'Firebase', 'AWS', 'Biometric API'],
      icon: <FaMobile className="text-2xl text-purple-500" />
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Add gradient classes for top stripes
  const stripeGradients = [
    'from-cyan-400 to-blue-500',    // First project
    'from-purple-500 to-pink-400',  // Second project
    // Add more if you have more projects
  ];

  return (
    <section id="portfolio" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h2 id="portfolio-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
            {t('portfolio.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            {t('portfolio.subtitle')}
          </p>
        </header>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200">
          {/* Colored Top Border (per project) will be inside the carousel */}
          <div
            className=""
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {/* Colored Top Border for each project */}
                  <div className={`h-2 w-full bg-gradient-to-r ${stripeGradients[index]}`} />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-2 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8">
                    {/* Project Image */}
                    <div className="relative w-full h-[400px] overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-xl transition-transform duration-500 group-hover:scale-105 h-[400px] object-contain"  
                      />
                    </div>
                    {/* Project Content */}
                    <div className="flex flex-col justify-center h-full">
                      {/* Top Row: Title and View Project */}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{project.title}</h3>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-all duration-300 group/link">
                          <span>{t('portfolio.viewProject')}</span>
                          <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </a>
                      </div>
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-4 mb-6 text-justify">{project.description}</p>
                      {/* Technologies at bottom */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-100 text-xs font-medium text-slate-600 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 