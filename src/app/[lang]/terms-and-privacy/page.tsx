import React from 'react';
import TermsPrivacy from '@/components/TermsPrivacy';
import Footer from '@/components/Footer';
import { LanguageUpdater } from '@/components/LanguageUpdater';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export const metadata = {
  title: 'Terms & Privacy - easyCoding',
  description: 'Terms of service and privacy policy for easyCoding. Learn how we handle your data and the terms for using our website.',
};

const TermsPrivacyPage = async ({ params }: PageProps) => {
  const { lang } = await params;
  
  return (
    <>
      <LanguageUpdater lang={lang as 'de' | 'en'} />
      <TermsPrivacy />
      <Footer />
    </>
  );
};

export default TermsPrivacyPage; 