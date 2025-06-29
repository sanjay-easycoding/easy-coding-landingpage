'use client';

import { useEffect } from 'react';

interface LangAttributeProps {
  lang: string;
}

export default function LangAttribute({ lang }: LangAttributeProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
} 