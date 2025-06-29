'use client';

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaComment, FaArrowRight, FaChevronDown, FaChevronUp, FaSpinner, FaCheck, FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', company: '', message: '' });
                // Reset success status after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || t('contact.form.errors.failed'));
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(t('contact.form.errors.network'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleForm = () => {
        if (isFormVisible) {
            // When closing the form, reset all state
            setFormData({ name: '', email: '', company: '', message: '' });
            setSubmitStatus('idle');
            setErrorMessage('');
        }
        setIsFormVisible(!isFormVisible);
    };

    const handleCloseSuccessModal = () => {
        setSubmitStatus('idle');
    };

    return (
        <>
            <section
                id="letsTalk"
                className={`relative py-12 sm:py-16 ${isFormVisible ? 'md:py-16' : 'pb-8'} px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-600`}
                aria-labelledby="contact-heading"
            >
                <div className="relative max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-8">
                        <div className="inline-flex items-center px-3 py-1.5 bg-white/20 border border-white/30 rounded-full mb-4">
                            <FaEnvelope className="w-3 h-3 text-white mr-2" aria-hidden="true" />
                            <span className="text-xs sm:text-sm font-medium text-white">{t('contact.badge')}</span>
                        </div>
                        <h2 id="contact-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                            {t('contact.title')}
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-cyan-100 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed mb-8">
                            {t('contact.subtitle')}
                        </p>
                        
                        {/* Click Here Button */}
                        <button
                            onClick={toggleForm}
                            className="px-8 py-4 text-xs sm:text-sm md:text-base font-semibold text-white bg-white/20 border border-white/30 rounded-full shadow-lg hover:bg-white/30 hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center gap-3 mx-auto group"
                            aria-expanded={isFormVisible}
                            aria-controls="contact-form"
                            aria-label={isFormVisible ? t('contact.toggleHide') : t('contact.toggleShow')}
                        >
                            <span>{isFormVisible ? t('contact.toggleHide') : t('contact.toggleShow')}</span>
                            {isFormVisible ? (
                                <FaChevronUp className="w-4 h-4 transition-transform duration-300" aria-hidden="true" />
                            ) : (
                                <FaChevronDown className="w-4 h-4 transition-transform duration-300" aria-hidden="true" />
                            )}
                        </button>
                    </header>

                    {/* Contact Form */}
                    <article 
                        id="contact-form"
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            isFormVisible 
                                ? 'max-h-[1000px] opacity-100 mb-0' 
                                : 'max-h-0 opacity-0 mb-0'
                        }`}
                        aria-hidden={!isFormVisible}
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-white/30 p-8 sm:p-10">
                            <header className="text-center mb-8">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3">
                                    {t('contact.form.title')}
                                </h3>
                            </header>

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                                    <FaExclamationTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    <p className="text-sm text-red-800">
                                        {errorMessage}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <label htmlFor="name" className="sr-only">{t('contact.form.fields.name')}</label>
                                        <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" aria-hidden="true" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder={t('contact.form.fields.name')}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                                            aria-describedby="name-error"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label htmlFor="email" className="sr-only">{t('contact.form.fields.email')}</label>
                                        <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" aria-hidden="true" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder={t('contact.form.fields.email')}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                                            aria-describedby="email-error"
                                        />
                                    </div>
                                </div>
                                
                                <div className="relative group">
                                    <label htmlFor="company" className="sr-only">{t('contact.form.fields.company')}</label>
                                    <FaBuilding className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" aria-hidden="true" />
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder={t('contact.form.fields.company')}
                                        disabled={isSubmitting}
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                                    />
                                </div>
                                
                                <div className="relative group">
                                    <label htmlFor="message" className="sr-only">{t('contact.form.fields.message')}</label>
                                    <FaComment className="absolute top-4 left-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors duration-300" aria-hidden="true" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder={t('contact.form.fields.message')}
                                        required
                                        rows={5}
                                        disabled={isSubmitting}
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:bg-white resize-none text-xs sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-500 text-slate-900"
                                        aria-describedby="message-error"
                                    />
                                </div>
                                
                                <div className="pt-4 text-center">
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="px-8 py-3.5 text-xs sm:text-sm md:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transform transition-all duration-300 ease-in-out flex items-center justify-center gap-3 mx-auto group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        aria-label={isSubmitting ? 'Sending message...' : t('contact.form.submit')}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FaSpinner className="w-4 h-4 animate-spin" aria-hidden="true" />
                                                <span>{t('contact.form.sending')}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{t('contact.form.submit')}</span>
                                                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </article>
                </div>
            </section>

            {/* Success Modal */}
            {submitStatus === 'success' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={handleCloseSuccessModal}
                    />
                    
                    {/* Modal */}
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 mx-4">
                        {/* Header */}
                        <div className="flex-shrink-0 bg-white rounded-t-2xl p-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaCheck className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    {t('contact.form.successTitle')}
                                </h3>
                                <p className="text-slate-600">
                                    {t('contact.form.success')}
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex-shrink-0 bg-white rounded-b-2xl border-t border-slate-200 p-6">
                            <button
                                onClick={handleCloseSuccessModal}
                                className="w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                            >
                                {t('common.close')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact; 