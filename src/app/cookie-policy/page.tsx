import React from 'react';
import CookiePolicy from '@/components/CookiePolicy';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy - easyCoding',
  description: 'Cookie policy for easyCoding. Learn how we use cookies and similar technologies on our website.',
};

const CookiePolicyPage = () => {
  return (
    <>
      <CookiePolicy />
      <Footer />
    </>
  );
};

export default CookiePolicyPage; 