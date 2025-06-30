'use client';

import React from 'react';
import { FaLaptop, FaMobile, FaMapMarkerAlt, FaBuilding, FaClock, FaCode, FaTools } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  office: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

interface CareerJobsProps {
  onApplyJob: (job: Job) => void;
}

const CareerJobs: React.FC<CareerJobsProps> = ({ onApplyJob }) => {
  const { t, translations } = useLanguage();

  // Job openings data
  const jobOpenings: Job[] = [
    {
      id: 1,
      title: t('career.jobs.frontendDeveloper.title'),
      department: t('career.jobs.frontendDeveloper.department'),
      location: t('career.jobs.frontendDeveloper.location'),
      office: t('career.jobs.frontendDeveloper.office'),
      type: t('career.jobs.frontendDeveloper.type'),
      icon: <FaLaptop className="text-xl sm:text-2xl" />,
      description: t('career.jobs.frontendDeveloper.description'),
      responsibilities: translations.career.jobs.frontendDeveloper.responsibilities,
      requirements: translations.career.jobs.frontendDeveloper.requirements,
    },
    {
      id: 2,
      title: t('career.jobs.flutterDeveloper.title'),
      department: t('career.jobs.flutterDeveloper.department'),
      location: t('career.jobs.flutterDeveloper.location'),
      office: t('career.jobs.flutterDeveloper.office'),
      type: t('career.jobs.flutterDeveloper.type'),
      icon: <FaMobile className="text-xl sm:text-2xl" />,
      description: t('career.jobs.flutterDeveloper.description'),
      responsibilities: translations.career.jobs.flutterDeveloper.responsibilities,
      requirements: translations.career.jobs.flutterDeveloper.requirements,
    }
  ];

  // Gradient classes for visual elements
  const jobStripeGradients = [
    'from-cyan-400 to-blue-500',
    'from-purple-500 to-pink-400',
  ];

  return (
    <section id="openings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="jobs-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="jobs-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            {t('career.jobs.title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            {t('career.jobs.subtitle')}
          </p>
        </header>
        <div className="space-y-6 sm:space-y-8" role="list">
          {jobOpenings.map((job, index) => (
            <article key={job.id} className="bg-white rounded-2xl shadow-lg p-0 overflow-hidden" role="listitem">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4 lg:mb-0 text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 w-full">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-2 md:mb-0" aria-hidden="true">
                      {job.icon}
                    </div>
                    <div className="flex flex-col gap-1 min-w-0 w-full">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-tight mb-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm md:text-sm text-slate-600 w-full">
                        <span className="flex items-center min-w-0">
                          <FaMapMarkerAlt className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" aria-hidden="true" />
                          <span className="truncate text-xs sm:text-sm md:text-sm">{job.location}</span>
                        </span>
                        <span className="flex items-center min-w-0">
                          <FaBuilding className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" aria-hidden="true" />
                          <span className="truncate text-xs sm:text-sm md:text-sm">{job.office}</span>
                        </span>
                        <span className="flex items-center min-w-0">
                          <FaClock className="w-3 h-3 mr-2 text-purple-500 flex-shrink-0" aria-hidden="true" />
                          <span className="truncate text-xs sm:text-sm md:text-sm">{job.type}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Apply Now button: full width on mobile, right on md+ */}
                  <button
                    onClick={() => onApplyJob(job)}
                    className="w-full md:w-auto px-4 py-2 md:px-5 md:py-2 lg:px-6 lg:py-2.5 text-xs sm:text-sm md:text-base lg:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 active:bg-blue-700 border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transform transition-all duration-150 ease-in-out mt-2 md:mt-0 flex items-center justify-center whitespace-nowrap"
                    aria-label={`Apply for ${job.title} position`}
                  >
                    {t('career.jobs.applyNow')}
                  </button>
                </div>
                <p className="mt-10 text-xs sm:text-sm md:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">{job.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <FaCode className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-500 flex-shrink-0" aria-hidden="true" />
                      {t('career.jobs.responsibilities')}
                    </h4>
                    <ul className="space-y-2" role="list">
                      {Array.isArray(job.responsibilities) && job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start" role="listitem">
                          <span className="text-cyan-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                          <span className="text-xs sm:text-sm md:text-sm text-slate-600 leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center">
                      <FaTools className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 flex-shrink-0" aria-hidden="true" />
                      {t('career.jobs.requirements')}
                    </h4>
                    <ul className="space-y-2" role="list">
                      {Array.isArray(job.requirements) && job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start" role="listitem">
                          <span className="text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" aria-hidden="true">✓</span>
                          <span className="text-xs sm:text-sm md:text-sm text-slate-600 leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerJobs; 