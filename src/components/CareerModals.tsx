'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFileUpload, FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
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

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DropdownProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  disabled = false,
  className = '',
  icon
}) => {
  return (
    <div className="relative group">
      {icon && (
        <div className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300">
          {icon}
        </div>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer ${className} ${!value ? 'text-slate-500' : 'text-slate-900'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.75rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.25em 1.25em'
        }}
      >
        <option value="" disabled className="text-slate-500 bg-white">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-slate-900 bg-white">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, job }) => {
  const { t } = useLanguage();
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    coverLetter: '',
    experience: '',
    position: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ resume?: string }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Scroll to top when validation errors appear
  useEffect(() => {
    if (hasSubmitted && Object.keys(fieldErrors).length > 0) {
      setTimeout(() => {
        if (modalContentRef.current) {
          modalContentRef.current.scrollTop = 0;
        }
      }, 100);
    }
  }, [fieldErrors, hasSubmitted]);

  // Pre-select position based on job type
  React.useEffect(() => {
    if (job) {
      let position = '';
      if (job.title.toLowerCase().includes('frontend') || job.title.toLowerCase().includes('web')) {
        position = 'frontend';
      } else if (job.title.toLowerCase().includes('flutter') || job.title.toLowerCase().includes('mobile')) {
        position = 'mobile';
      } else if (job.title.toLowerCase().includes('backend')) {
        position = 'backend';
      } else if (job.title.toLowerCase().includes('full stack') || job.title.toLowerCase().includes('fullstack')) {
        position = 'fullstack';
      } else if (job.title.toLowerCase().includes('devops')) {
        position = 'devops';
      } else if (job.title.toLowerCase().includes('ui') || job.title.toLowerCase().includes('ux') || job.title.toLowerCase().includes('design')) {
        position = 'ui-ux';
      }
      
      setFormData(prev => ({ ...prev, position }));
    }
  }, [job]);

  const validate = () => {
    const errors: { resume?: string } = {};
    console.log('Validating resume:', formData.resume);
    if (!formData.resume) {
      errors.resume = t('career.modals.apply.errors.resume');
      console.log('Resume validation error:', errors.resume);
    }
    console.log('Validation errors:', errors);
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFieldErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
    setFieldErrors(prev => ({ ...prev, resume: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit clicked, setting hasSubmitted to true');
    setHasSubmitted(true);
    const errors = validate();
    console.log('Setting field errors:', errors);
    setFieldErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      console.log('Validation failed, returning early');
      return;
    }
    
    console.log('Validation passed, proceeding with submission');
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        coverLetter: '',
        experience: '',
        position: '',
        resume: null,
      });
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(t('career.modals.apply.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      coverLetter: '',
      experience: '',
      position: '',
      resume: null,
    });
    setSubmitStatus('idle');
    setErrorMessage('');
    setFieldErrors({});
    setHasSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen || !job) return null;

  const experienceOptions = [
    { value: '0-1', label: t('career.modals.apply.fields.experienceOptions.0-1') },
    { value: '1-3', label: t('career.modals.apply.fields.experienceOptions.1-3') },
    { value: '3-5', label: t('career.modals.apply.fields.experienceOptions.3-5') },
    { value: '5-10', label: t('career.modals.apply.fields.experienceOptions.5-10') },
    { value: '10+', label: t('career.modals.apply.fields.experienceOptions.10+') },
  ];

  const positionOptions = [
    { value: 'frontend', label: t('career.modals.apply.fields.positionOptions.frontend') },
    { value: 'backend', label: t('career.modals.apply.fields.positionOptions.backend') },
    { value: 'fullstack', label: t('career.modals.apply.fields.positionOptions.fullstack') },
    { value: 'mobile', label: t('career.modals.apply.fields.positionOptions.mobile') },
    { value: 'devops', label: t('career.modals.apply.fields.positionOptions.devops') },
    { value: 'ui-ux', label: t('career.modals.apply.fields.positionOptions.ui-ux') },
    { value: 'other', label: t('career.modals.apply.fields.positionOptions.other') },
  ];

  const hasValidationErrors = Object.keys(fieldErrors).length > 0;
  console.log('ApplyModal - hasSubmitted:', hasSubmitted, 'hasValidationErrors:', hasValidationErrors, 'fieldErrors:', fieldErrors);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-200 mx-4 flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-white rounded-t-2xl border-b border-slate-200 p-4 sm:p-6">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t('career.modals.apply.title')}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {job.title} - {job.department}
            </p>
          </div>
        </div>

        {/* Content */}
        <div ref={modalContentRef} className="flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t('career.modals.apply.success.title')}
              </h3>
              <p className="text-slate-600">
                {t('career.modals.apply.success.message')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" id="apply-form">
              {/* Validation Errors at Top */}
              {hasSubmitted && hasValidationErrors && (
                <div id="validation-errors" className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FaExclamationTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-red-800">
                      {t('common.validationErrors')}
                    </h4>
                  </div>
                  <ul className="space-y-1">
                    {fieldErrors.resume && (
                      <li className="text-sm text-red-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        {fieldErrors.resume}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Status Messages */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <FaExclamationTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-800">
                    {errorMessage}
                  </p>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <label htmlFor="name" className="sr-only">{t('career.modals.apply.fields.name')}</label>
                  <FaUser className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.apply.fields.name')}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="sr-only">{t('career.modals.apply.fields.email')}</label>
                  <FaEnvelope className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.apply.fields.email')}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="phone" className="sr-only">{t('career.modals.apply.fields.phone')}</label>
                  <FaPhone className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.apply.fields.phone')}
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="linkedin" className="sr-only">{t('career.modals.apply.fields.linkedin')}</label>
                  <FaLinkedin className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.apply.fields.linkedin')}
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>
              </div>

              {/* Experience and Position */}
              <div className="space-y-4">
                <Dropdown
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.apply.fields.positionPlaceholder')}
                  options={positionOptions}
                  disabled={true}
                />

                <Dropdown
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.apply.fields.experiencePlaceholder')}
                  options={experienceOptions}
                  disabled={isSubmitting}
                />
              </div>

              <div className="relative group">
                <label htmlFor="github" className="sr-only">{t('career.modals.apply.fields.github')}</label>
                <FaGithub className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.apply.fields.github')}
                  disabled={isSubmitting}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('career.modals.apply.fields.coverLetter')}
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.apply.fields.coverLetterPlaceholder')}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white resize-none text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('career.modals.apply.fields.resume')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  {formData.resume ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <FaFileUpload className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-green-800 font-medium truncate">
                          {formData.resume.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
                        className="self-end sm:self-auto p-1.5 sm:p-1 text-green-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200 flex-shrink-0"
                        aria-label="Remove file"
                      >
                        <FaTimes className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className={`flex items-center justify-center gap-3 w-full px-4 py-3 bg-slate-50 border ${fieldErrors.resume ? 'border-red-400' : 'border-slate-200'} rounded-xl hover:bg-slate-100 cursor-pointer transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        <FaFileUpload className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-600">{t('career.modals.apply.fields.resumePlaceholder')}</span>
                      </label>
                    </>
                  )}
                  {fieldErrors.resume && <p className="text-xs text-red-600 mt-1 ml-1">{fieldErrors.resume}</p>}
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer with Buttons */}
        {submitStatus !== 'success' && (
          <div className="flex-shrink-0 bg-white rounded-b-2xl border-t border-slate-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="w-full sm:flex-1 px-4 sm:px-6 py-3 text-sm font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('common.cancel')}
              </button>
              <button
                type="submit"
                form="apply-form"
                disabled={isSubmitting}
                className="w-full sm:flex-1 px-4 sm:px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    {t('common.loading')}
                  </>
                ) : (
                  t('career.modals.apply.submit')
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    message: '',
    experience: '',
    position: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ resume?: string }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Scroll to top when validation errors appear
  useEffect(() => {
    if (hasSubmitted && Object.keys(fieldErrors).length > 0) {
      setTimeout(() => {
        if (modalContentRef.current) {
          modalContentRef.current.scrollTop = 0;
        }
      }, 100);
    }
  }, [fieldErrors, hasSubmitted]);

  const validate = () => {
    const errors: { resume?: string } = {};
    console.log('Validating resume:', formData.resume);
    if (!formData.resume) {
      errors.resume = t('career.modals.resume.errors.resume');
      console.log('Resume validation error:', errors.resume);
    }
    console.log('Validation errors:', errors);
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFieldErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
    setFieldErrors(prev => ({ ...prev, resume: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit clicked, setting hasSubmitted to true');
    setHasSubmitted(true);
    const errors = validate();
    console.log('Setting field errors:', errors);
    setFieldErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      console.log('Validation failed, returning early');
      return;
    }
    
    console.log('Validation passed, proceeding with submission');
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        message: '',
        experience: '',
        position: '',
        resume: null,
      });
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(t('career.modals.resume.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      message: '',
      experience: '',
      position: '',
      resume: null,
    });
    setSubmitStatus('idle');
    setErrorMessage('');
    setFieldErrors({});
    setHasSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  const experienceOptions = [
    { value: '0-1', label: t('career.modals.resume.fields.experienceOptions.0-1') },
    { value: '1-3', label: t('career.modals.resume.fields.experienceOptions.1-3') },
    { value: '3-5', label: t('career.modals.resume.fields.experienceOptions.3-5') },
    { value: '5-10', label: t('career.modals.resume.fields.experienceOptions.5-10') },
    { value: '10+', label: t('career.modals.resume.fields.experienceOptions.10+') },
  ];

  const positionOptions = [
    { value: 'frontend', label: t('career.modals.resume.fields.positionOptions.frontend') },
    { value: 'backend', label: t('career.modals.resume.fields.positionOptions.backend') },
    { value: 'fullstack', label: t('career.modals.resume.fields.positionOptions.fullstack') },
    { value: 'mobile', label: t('career.modals.resume.fields.positionOptions.mobile') },
    { value: 'devops', label: t('career.modals.resume.fields.positionOptions.devops') },
    { value: 'ui-ux', label: t('career.modals.resume.fields.positionOptions.ui-ux') },
    { value: 'other', label: t('career.modals.resume.fields.positionOptions.other') },
  ];

  const hasValidationErrors = Object.keys(fieldErrors).length > 0;
  console.log('ResumeModal - hasSubmitted:', hasSubmitted, 'hasValidationErrors:', hasValidationErrors, 'fieldErrors:', fieldErrors);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-200 mx-4 flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-white rounded-t-2xl border-b border-slate-200 p-4 sm:p-6">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t('career.modals.resume.title')}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t('career.modals.resume.subtitle')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div ref={modalContentRef} className="flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t('career.modals.resume.success.title')}
              </h3>
              <p className="text-slate-600">
                {t('career.modals.resume.success.message')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" id="resume-form">
              {/* Validation Errors at Top */}
              {hasSubmitted && hasValidationErrors && (
                <div id="validation-errors" className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FaExclamationTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-red-800">
                      {t('common.validationErrors')}
                    </h4>
                  </div>
                  <ul className="space-y-1">
                    {fieldErrors.resume && (
                      <li className="text-sm text-red-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        {fieldErrors.resume}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Status Messages */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <FaExclamationTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-800">
                    {errorMessage}
                  </p>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <label htmlFor="resume-name" className="sr-only">{t('career.modals.resume.fields.name')}</label>
                  <FaUser className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="text"
                    id="resume-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.resume.fields.name')}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="resume-email" className="sr-only">{t('career.modals.resume.fields.email')}</label>
                  <FaEnvelope className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="email"
                    id="resume-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.resume.fields.email')}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="resume-phone" className="sr-only">{t('career.modals.resume.fields.phone')}</label>
                  <FaPhone className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="tel"
                    id="resume-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.resume.fields.phone')}
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="resume-linkedin" className="sr-only">{t('career.modals.resume.fields.linkedin')}</label>
                  <FaLinkedin className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                  <input
                    type="url"
                    id="resume-linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder={t('career.modals.resume.fields.linkedin')}
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                  />
                </div>
              </div>

              {/* Experience and Position */}
              <div className="space-y-4">
                <Dropdown
                  id="resume-position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.resume.fields.positionPlaceholder')}
                  options={positionOptions}
                  disabled={isSubmitting}
                />

                <Dropdown
                  id="resume-experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.resume.fields.experiencePlaceholder')}
                  options={experienceOptions}
                  disabled={isSubmitting}
                />
              </div>

              <div className="relative group">
                <label htmlFor="resume-github" className="sr-only">{t('career.modals.resume.fields.github')}</label>
                <FaGithub className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" />
                <input
                  type="url"
                  id="resume-github"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.resume.fields.github')}
                  disabled={isSubmitting}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="resume-message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('career.modals.resume.fields.message')}
                </label>
                <textarea
                  id="resume-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('career.modals.resume.fields.messagePlaceholder')}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white resize-none text-sm disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume-file" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('career.modals.resume.fields.resume')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  {formData.resume ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <FaFileUpload className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-green-800 font-medium truncate">
                          {formData.resume.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
                        className="self-end sm:self-auto p-1.5 sm:p-1 text-green-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200 flex-shrink-0"
                        aria-label="Remove file"
                      >
                        <FaTimes className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <input
                        type="file"
                        id="resume-file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume-file"
                        className={`flex items-center justify-center gap-3 w-full px-4 py-3 bg-slate-50 border ${fieldErrors.resume ? 'border-red-400' : 'border-slate-200'} rounded-xl hover:bg-slate-100 cursor-pointer transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        <FaFileUpload className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-600">{t('career.modals.resume.fields.resumePlaceholder')}</span>
                      </label>
                    </>
                  )}
                  {fieldErrors.resume && <p className="text-xs text-red-600 mt-1 ml-1">{fieldErrors.resume}</p>}
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer with Buttons */}
        {submitStatus !== 'success' && (
          <div className="flex-shrink-0 bg-white rounded-b-2xl border-t border-slate-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="w-full sm:flex-1 px-4 sm:px-6 py-3 text-sm font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('common.cancel')}
              </button>
              <button
                type="submit"
                form="resume-form"
                disabled={isSubmitting}
                className="w-full sm:flex-1 px-4 sm:px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    {t('common.loading')}
                  </>
                ) : (
                  t('career.modals.resume.submit')
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { ApplyModal, ResumeModal }; 