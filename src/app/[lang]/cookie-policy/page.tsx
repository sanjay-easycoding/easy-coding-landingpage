import React from 'react';
import CookiePolicy from '@/components/CookiePolicy';
import Footer from '@/components/Footer';
import { LanguageUpdater } from '@/components/LanguageUpdater';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export const metadata = {
  title: 'Cookie Policy - easyCoding',
  description: 'Cookie policy for easyCoding. Learn how we use cookies and similar technologies on our website.',
};

const CookiePolicyPage = async ({ params }: PageProps) => {
  const { lang } = await params;
  
  return (
    <>
      <LanguageUpdater lang={lang as 'de' | 'en'} />
      <CookiePolicy />
      <Footer />
    </>
  );
};

export default CookiePolicyPage; 