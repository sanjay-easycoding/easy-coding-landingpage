import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <BlogSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App; 