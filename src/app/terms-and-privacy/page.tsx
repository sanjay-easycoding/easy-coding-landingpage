import React from 'react';
import TermsPrivacy from '@/components/TermsPrivacy';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Privacy - easyCoding',
  description: 'Terms of service and privacy policy for easyCoding. Learn how we handle your data and the terms for using our website.',
};

const TermsPrivacyPage = () => {
  return (
    <>
      <TermsPrivacy />
      <Footer />
    </>
  );
};

export default TermsPrivacyPage; 