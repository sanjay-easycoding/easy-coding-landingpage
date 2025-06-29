'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageUpdaterProps {
  lang: 'en' | 'de';
}

export const LanguageUpdater: React.FC<LanguageUpdaterProps> = ({ lang }) => {
  const { setLanguage, language } = useLanguage();

  useEffect(() => {
    if (language !== lang) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  return null; // This component doesn't render anything
}; 