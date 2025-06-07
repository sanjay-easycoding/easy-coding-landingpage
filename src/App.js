import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import ServicesSection from './components/ServicesSection';
import ApproachSection from './components/ApproachSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <GlobalStyles />
        <Header />
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <ApproachSection />
        <PortfolioSection />
        <AboutSection />

        {/* <BlogSection /> not needed for now*/}
        {/* <TestimonialSection /> not needed for now*/}
        <ContactSection />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App; 