'use client';

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: t('testimonials.clients.priya.name'),
      role: t('testimonials.clients.priya.role'),
      quote: t('testimonials.clients.priya.quote'),
      avatar: '/avatar-1.png',
    },
    {
      name: t('testimonials.clients.lukas.name'),
      role: t('testimonials.clients.lukas.role'),
      quote: t('testimonials.clients.lukas.quote'),
      avatar: '/avatar-2.png',
    },
    {
      name: t('testimonials.clients.sarah.name'),
      role: t('testimonials.clients.sarah.role'),
      quote: t('testimonials.clients.sarah.quote'),
      avatar: '/avatar-3.png',
    },
  ];

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (idx: number) => setCurrent(idx);

  const testimonial = testimonials[current];

  // Add gradient classes for top stripes
  const stripeGradients = [
    'from-cyan-400 to-blue-500',    // Priya
    'from-purple-500 to-pink-400',  // Lukas
    'from-green-500 to-emerald-400',// Sarah
  ];

  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-transparent" aria-labelledby="testimonials-heading">
      <div className="max-w-xl mx-auto">
        <header className="text-center mb-8 sm:mb-10">
          <h2 id="testimonials-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
            {t('testimonials.title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
            {t('testimonials.subtitle')}
          </p>
        </header>
        <div className="relative flex flex-col items-center">
          <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg border border-slate-100 w-full relative group hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Colored Top Border */}
            <div className={`h-2 w-full bg-gradient-to-r ${stripeGradients[current]}`} />
            <div className="p-5 sm:p-8">
           
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 overflow-hidden">
                  {/* If you have avatar images, use <img src={testimonial.avatar} ... /> instead */}
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
              <blockquote className="text-slate-700 text-xs sm:text-sm md:text-base italic mb-2 flex-1">"{testimonial.quote}"</blockquote>
            </div>
          </div>
          {/* Dots navigation */}
          {/* <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  idx === current ? 'bg-cyan-600' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 