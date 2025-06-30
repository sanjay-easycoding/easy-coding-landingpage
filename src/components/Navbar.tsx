"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleMobileLanguage = () => {
    setIsMobileLanguageOpen(!isMobileLanguageOpen);
  };

  const selectLanguage = (lang: string) => {
    setLanguage(lang as 'en' | 'de');
    setIsLanguageDropdownOpen(false);
    setIsMobileLanguageOpen(false);
    closeMenu();

    // Navigate to the correct route based on current path
    const currentPath = pathname;
    const isCareerPage = currentPath.includes('/career');

    if (lang === 'en') {
      if (isCareerPage) {
        router.push('/en/career');
      } else {
        router.push('/en');
      }
    } else {
      if (isCareerPage) {
        router.push('/de/career');
      } else {
        router.push('/de');
      }
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync language context with current route
  useEffect(() => {
    if (pathname.startsWith('/en')) {
      setLanguage('en');
    } else if (pathname.startsWith('/de') || pathname === '/' || pathname === '/career') {
      setLanguage('de');
    }
  }, [pathname, setLanguage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get the current language prefix for navigation links
  const getCurrentLangPrefix = () => {
    if (pathname.startsWith('/en')) return '/en';
    if (pathname.startsWith('/de')) return '/de';
    return '/de'; // Default to German for root path
  };

  const langPrefix = getCurrentLangPrefix();

  const navLinks = [
    { href: `${langPrefix}/#services`, label: t('nav.services') },
    { href: `${langPrefix}/#approach`, label: t('nav.approach') },
    { href: `${langPrefix}/#portfolio`, label: t('nav.portfolio') },
    { href: `${langPrefix}/#about`, label: t('nav.about') },
    { href: `${langPrefix}/career`, label: t('nav.career') },
  ];

  const LanguageButton = () => (
    <div className="relative" ref={languageDropdownRef}>
      <button
        onClick={toggleLanguageDropdown}
        className="flex items-center gap-2 px-2 xl:px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-all duration-300 rounded-lg hover:bg-white/50"
      >
        <FaGlobe className="w-3 xl:w-4 h-3 xl:h-4" />
        <span className="hidden sm:inline font-medium text-sm">{language.toUpperCase()}</span>
        <FaChevronDown className={`w-2 xl:w-3 h-2 xl:h-3 transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      {isLanguageDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 xl:w-40 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 p-2 z-50">
          <button
            onClick={() => selectLanguage('en')}
            className={`w-full text-left px-3 xl:px-4 py-2 xl:py-3 text-xs rounded-lg flex items-center gap-2 transition-all duration-300 ${language === 'en'
              ? 'text-blue-600 bg-blue-50/80'
              : 'text-slate-600 hover:bg-slate-50/80 hover:text-slate-800'
              }`}
          >
            <img src="/en.png" alt="English flag" width={16} height={12} className="xl:w-5 xl:h-4 rounded-sm" />
            <span className="font-medium text-sm">English</span>
          </button>
          <button
            onClick={() => selectLanguage('de')}
            className={`w-full text-left px-3 xl:px-4 py-2 xl:py-3 text-xs rounded-lg flex items-center gap-2 transition-all duration-300 ${language === 'de'
              ? 'text-blue-600 bg-blue-50/80'
              : 'text-slate-600 hover:bg-slate-50/80 hover:text-slate-800'
              }`}
          >
            <img src="/de.png" alt="German flag" width={16} height={12} className="xl:w-5 xl:h-4 rounded-sm" />
            <span className="font-medium text-sm">Deutsch</span>
          </button>
        </div>
      )}
    </div>
  );

  const MobileLanguageSelector = () => (
    <div className="w-full border-t border-slate-200/50 pt-4">
      <button
        onClick={toggleMobileLanguage}
        className="w-full flex justify-center items-center gap-2 text-sm sm:text-base font-medium py-3 text-slate-600 hover:text-slate-800 transition-colors rounded-lg hover:bg-slate-50/50"
      >
        <FaGlobe className="w-4 h-4" />
        <span className="font-medium text-sm">{language.toUpperCase()}</span>
        <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMobileLanguageOpen ? 'rotate-180' : ''}`} />
      </button>
      {isMobileLanguageOpen && (
        <div className="w-full mt-2 bg-slate-50/50 rounded-lg p-2">
          <button
            onClick={() => selectLanguage('en')}
            className={`w-full py-3 text-sm sm:text-base font-medium transition-colors rounded-lg ${language === 'en'
              ? 'text-blue-600 bg-blue-50'
              : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <img src="/en.png" alt="English flag" width={18} height={14} className="sm:w-5 sm:h-4 rounded-sm" />
              <span className="font-medium text-sm">English</span>
            </div>
          </button>
          <button
            onClick={() => selectLanguage('de')}
            className={`w-full py-3 text-sm sm:text-base font-medium transition-colors rounded-lg ${language === 'de'
              ? 'text-blue-600 bg-blue-50'
              : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <img src="/de.png" alt="German flag" width={18} height={14} className="sm:w-5 sm:h-4 rounded-sm" />
              <span className="font-medium text-sm">Deutsch</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="w-full max-w-7xl mx-auto">
        <nav
          className={`w-full rounded-full border border-white/50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'
            }`}
          style={{
            background: 'rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(1.6rem) saturate(180%)',
            boxShadow: 'rgba(0, 0, 0, 0.06) 0px 0.8rem 3.2rem, rgba(0, 0, 0, 0.02) 0px 0.2rem 0.8rem'
          }}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={langPrefix} className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <span className="text-base sm:text-lg lg:text-lg xl:text-xl font-bold text-blue-600 tracking-tight whitespace-nowrap">
                  easyCoding
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
              <ul className="flex items-center gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-sm font-medium text-slate-700 transition-all duration-300 hover:text-slate-900 py-2 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-sm transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-4">
              <LanguageButton />
              <Link href={`${langPrefix}/#letsTalk`}>
                <button className="px-4 xl:px-6 py-1.5 xl:py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-700 active:from-cyan-700 active:to-blue-800 border-b-4 border-blue-700 active:border-b-0 active:translate-y-px transform transition-all duration-150 ease-in-out whitespace-nowrap">
                  {t('nav.letsTalk')}
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg transition-all duration-300 hover:bg-white/50"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-5 h-5 flex flex-col justify-around">
                  <span className={`block w-full h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-[5px]' : ''}`}></span>
                  <span className={`block w-full h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-full h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-[5px]' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 mt-3 px-4 sm:px-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6">
            <div className="flex flex-col items-center gap-1">
              <ul className="w-full flex flex-col items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href} className="w-full">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="relative group w-full block text-center text-sm sm:text-base font-medium text-slate-700 py-3 px-4 rounded-lg hover:bg-slate-50/50 transition-all duration-300"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-sm transition-all duration-300 group-hover:w-1/2 transform -translate-x-1/2"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              <MobileLanguageSelector />

              <Link href={`${langPrefix}/#letsTalk`} className="w-full mt-4">
                <button
                  onClick={closeMenu}
                  className="w-full px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-md hover:from-cyan-600 hover:to-blue-700 active:from-cyan-700 active:to-blue-800 border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transform transition-all duration-150 ease-in-out"
                >
                  {t('nav.letsTalk')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 