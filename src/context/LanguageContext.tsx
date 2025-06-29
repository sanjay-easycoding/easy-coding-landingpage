'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '@/translations/en';
import { de } from '@/translations/de';

type Language = 'en' | 'de';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en,
  de,
};

// Helper function to get nested object values by dot notation
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : path;
  }, obj);
};

export const LanguageProvider = ({ 
  children, 
  initialLanguage 
}: { 
  children: ReactNode;
  initialLanguage?: 'en' | 'de';
}) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage || 'de');

  useEffect(() => {
    if (initialLanguage) {
      // If initialLanguage is provided, use it and save to localStorage
      setLanguageState(initialLanguage);
      localStorage.setItem('language', initialLanguage);
    } else {
      // Load language from localStorage if available and user has explicitly set a preference
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
        setLanguageState(savedLanguage);
      } else {
        // Ensure German is set as default and saved to localStorage for new users
        localStorage.setItem('language', 'de');
      }
    }
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): any => {
    const currentTranslations = translations[language];
    const value = getNestedValue(currentTranslations, key);
    return value !== undefined ? value : key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 