import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 2rem; /* 20px */
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 2rem; /* 20px horizontal padding */
  
  @media (max-width: 76.8rem) { /* 768px */
    top: 1.5rem; /* 15px */
    padding: 0 1.5rem; /* 15px */
  }
`;

const NavContainer = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(2rem); /* 20px */
  border-radius: 6rem; /* 60px */
  padding: 1.6rem 4rem; /* 16px 40px */
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three containers */
  align-items: center;
  width: 100%; /* Full width */
  max-width: 140rem; /* 1400px max width */
  margin: 0 auto; /* Center the container */
  box-shadow: 
    0 0.8rem 3.2rem rgba(0, 0, 0, 0.06),
    0 0.2rem 0.8rem rgba(0, 0, 0, 0.02);
  border: 0.1rem solid rgba(255, 255, 255, 0.8); /* 1px */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap; /* Prevent text wrapping */
  
  &:hover {
    box-shadow: 
      0 1.2rem 4.8rem rgba(0, 0, 0, 0.12),
      0 0.4rem 1.6rem rgba(0, 0, 0, 0.04);
    transform: translateY(-0.2rem); /* -2px */
    backdrop-filter: blur(2.4rem); /* 24px */
  }
  
  @media (max-width: 96rem) { /* 960px */
    padding: 1.4rem 3rem; /* 14px 30px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    border-radius: 2.4rem; /* 24px */
    padding: 1.6rem 2rem; /* 16px 20px */
    display: flex;
    justify-content: space-between;
    white-space: normal;
    position: relative;
    grid-template-columns: auto auto auto; /* Adjust grid for mobile */
  }

  @media (max-width: 48rem) { /* 480px */
    padding: 1.2rem 1.6rem; /* Reduce padding further on mobile */
    border-radius: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 76.8rem) {
    flex: 0 1 auto; /* Allow logo to shrink if needed */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* 10px */
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0; /* Prevent logo from shrinking */
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 48rem) {
    gap: 0.8rem; /* Reduce gap on mobile */
  }
`;

const LogoImage = styled.img`
  height: 2.2rem; /* 22px */
  width: auto;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 48rem) {
    height: 2rem; /* Slightly smaller on mobile */
  }
`;

const LogoText = styled.span`
  font-size: 1.8rem; /* 18px */
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;

  @media (max-width: 48rem) {
    font-size: 1.6rem; /* Slightly smaller on mobile */
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 76.8rem) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: calc(100% + 1rem);
    left: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(1rem);
    flex-direction: column;
    gap: 2rem;
    padding: 2.4rem;
    box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
    border: 0.1rem solid rgba(100, 116, 139, 0.1);
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-1rem)'};
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 99; /* Below the toggle button */
  }

  @media (max-width: 48rem) {
    left: 1.5rem;
    right: 1.5rem;
    padding: 2rem;
    border-radius: 1.6rem;
    gap: 1.6rem; /* Reduce gap on mobile */
  }

  @media (max-width: 36rem) { /* 360px */
    left: 1rem;
    right: 1rem;
    padding: 1.6rem;
    gap: 1.2rem;
  }
`;

const NavLink = styled.a`
  color: #64748b;
  text-decoration: none;
  font-size: 1.2rem; /* 12px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em; /* 1.2px equivalent */
  transition: all 0.3s ease;
  position: relative;
  padding: 0.8rem 0; /* 8px 0 */
  white-space: nowrap; /* Prevent individual link wrapping */
  flex-shrink: 0;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0.2rem; /* 2px */
    background: linear-gradient(135deg, #ff6b9d, #ff1744);
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 0.1rem; /* 1px */
  }
  
  &:hover {
    color: #1a1a1a;
    transform: translateY(-0.1rem); /* -1px */
    
    &::before {
      width: 100%;
    }
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    padding: 1.2rem 0; /* 12px 0 */
    width: 100%;
    text-align: center;
    border-bottom: 0.1rem solid rgba(100, 116, 139, 0.1); /* 1px */
    
    &:last-child {
      border-bottom: none;
    }

    &::before {
      bottom: -0.1rem;
    }
  }

  @media (max-width: 48rem) {
    font-size: 1.3rem;
    padding: 1rem 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem; /* Add gap between language selector and CTA */
  
  @media (max-width: 76.8rem) {
    display: none;
  }
`;

const DesktopCtaButton = styled.button`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  border: none;
  padding: 1.2rem 2.8rem; /* 12px 28px */
  border-radius: 3rem; /* 30px */
  font-size: 1.2rem; /* 12px */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.05em; /* 0.5px equivalent */
  box-shadow: 0 0.4rem 1.6rem rgba(26, 26, 26, 0.2);
  position: relative;
  overflow: hidden;
  white-space: nowrap; /* Prevent button text wrapping */
  flex-shrink: 0; /* Prevent button from shrinking */
  min-width: fit-content; /* Ensure button maintains its size */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
    transform: translateY(-0.2rem); /* -2px */
    box-shadow: 0 0.8rem 2.4rem rgba(26, 26, 26, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const MobileCtaButton = styled.button`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  border: none;
  padding: 1.4rem 2.4rem; /* 14px 24px */
  border-radius: 3rem; /* 30px */
  font-size: 1.4rem; /* 14px */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.05em; /* 0.5px equivalent */
  box-shadow: 0 0.4rem 1.6rem rgba(26, 26, 26, 0.2);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  margin-top: 0.8rem; /* 8px */
  display: none; /* Hide by default */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
    transform: translateY(-0.2rem); /* -2px */
    box-shadow: 0 0.8rem 2.4rem rgba(26, 26, 26, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    display: block; /* Show only on mobile */
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.8rem; /* 8px */
  border-radius: 0.8rem; /* 8px */
  transition: all 0.2s ease;
  flex-shrink: 0;
  z-index: 100; /* Ensure toggle is above mobile menu */
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto; /* Push to the right */
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 2.2rem; /* 22px */
  height: 0.2rem; /* 2px */
  background: #1a1a1a;
  margin: 0.3rem 0; /* 3px 0 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0.1rem; /* 1px */
  
  ${props => props.isOpen && `
    &:nth-child(1) {
      transform: rotate(45deg) translate(0.5rem, 0.5rem);
    }
    &:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(0.6rem, -0.6rem);
    }
  `}
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  color: #64748b;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  margin-right: 2rem;
  position: relative;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #1a1a1a;
  }

  @media (max-width: 76.8rem) {
    margin: 0;
    width: 100%;
    justify-content: center;
    border-bottom: 0.1rem solid rgba(100, 116, 139, 0.1);
    border-radius: 0;
    padding: 1.2rem 0;
  }
`;

const LanguageButtonWrapper = styled.div`
  position: relative;
  
  @media (max-width: 76.8rem) {
    display: none;
    
    ${({ isMobile }) => isMobile && `
      display: block;
      width: 100%;
    `}
  }

  @media (min-width: 76.9rem) {
    display: ${({ isMobile }) => isMobile ? 'none' : 'block'};
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.8rem;
  background: white;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 12rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 76.8rem) {
    position: static;
    width: 100%;
    margin-top: 0;
    box-shadow: none;
    border: none;
    padding: 0;
    background: transparent;
  }
`;

const LanguageOption = styled.button`
  width: 100%;
  padding: 1rem 1.6rem;
  text-align: left;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: ${props => props.isActive ? '#E11D48' : '#64748b'};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #1a1a1a;
  }

  @media (max-width: 76.8rem) {
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    justify-content: center;
    text-align: center;
    border-bottom: 0.1rem solid rgba(100, 116, 139, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const GlobeIcon = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: currentColor;
`;

const MobileLanguageWrapper = styled.div`
  display: none;
  width: 100%;
  position: relative;
  
  @media (max-width: 76.8rem) {
    display: block;
  }
`;

const MobileLanguageButton = styled.button`
  width: 100%;
  padding: 1.2rem 2rem;
  text-align: center;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.2s ease;
  border-bottom: 0.1rem solid rgba(100, 116, 139, 0.1);

  &:hover {
    color: #1a1a1a;
  }
`;

const MobileLanguageList = styled.div`
  width: 100%;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  background: white;
`;

const MobileLanguageOption = styled.button`
  width: 100%;
  padding: 1.2rem 2rem;
  text-align: center;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: ${props => props.isActive ? '#E11D48' : '#64748b'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.2s ease;
  border-bottom: 0.1rem solid rgba(100, 116, 139, 0.1);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #1a1a1a;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = (e) => {
    e.stopPropagation();
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language) => {
    changeLanguage(language);
    setIsLanguageDropdownOpen(false);
    closeMenu();
  };

  const toggleMobileLanguage = (e) => {
    e.stopPropagation();
    setIsMobileLanguageOpen(!isMobileLanguageOpen);
  };

  const selectMobileLanguage = (language) => {
    changeLanguage(language);
    setIsMobileLanguageOpen(false);
    closeMenu();
  };

  const t = translations[currentLanguage].nav;

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('letsTalk');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const renderLanguageButton = (isMobile = false) => {
    const dropdownOpen = isMobile ? isLanguageDropdownOpen : isLanguageDropdownOpen;
    
    return (
      <LanguageButtonWrapper ref={languageDropdownRef} isMobile={isMobile}>
        <LanguageButton onClick={toggleLanguageDropdown}>
          <GlobeIcon viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </GlobeIcon>
          {currentLanguage.toUpperCase()}
        </LanguageButton>
        <LanguageDropdown isOpen={dropdownOpen}>
          <LanguageOption
            isActive={currentLanguage === 'en'}
            onClick={() => selectLanguage('en')}
          >
            English
          </LanguageOption>
          <LanguageOption
            isActive={currentLanguage === 'de'}
            onClick={() => selectLanguage('de')}
          >
            Deutsch
          </LanguageOption>
        </LanguageDropdown>
      </LanguageButtonWrapper>
    );
  };

  const renderMobileLanguages = () => {
    return (
      <MobileLanguageWrapper>
        <MobileLanguageButton onClick={toggleMobileLanguage}>
          <GlobeIcon viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </GlobeIcon>
          {currentLanguage.toUpperCase()}
        </MobileLanguageButton>
        <MobileLanguageList isOpen={isMobileLanguageOpen}>
          <MobileLanguageOption
            isActive={currentLanguage === 'en'}
            onClick={() => selectMobileLanguage('en')}
          >
            English
          </MobileLanguageOption>
          <MobileLanguageOption
            isActive={currentLanguage === 'de'}
            onClick={() => selectMobileLanguage('de')}
          >
            Deutsch
          </MobileLanguageOption>
        </MobileLanguageList>
      </MobileLanguageWrapper>
    );
  };

  return (
    <HeaderWrapper>
      <NavContainer>
        <LogoContainer>
          <Logo onClick={closeMenu}>
            <LogoImage src="/easy-coding-logo.png" alt="Easy Coding Logo" />
            <LogoText>easy-coding</LogoText>
          </Logo>
        </LogoContainer>
        
        <LinksContainer isOpen={isMenuOpen}>
          <NavLink href="#services" onClick={closeMenu}>{t.services}</NavLink>
          <NavLink href="#approach" onClick={closeMenu}>Our Approach</NavLink>
          <NavLink href="#portfolio" onClick={closeMenu}>{t.caseStudies}</NavLink>
          <NavLink href="#about" onClick={closeMenu}>{t.about}</NavLink>
          {renderMobileLanguages()}
          <MobileCtaButton href="#letsTalk" onClick={scrollToContact}>{t.letsTalk}</MobileCtaButton>
        </LinksContainer>
        
        <ButtonContainer>
          {renderLanguageButton(false)}
          <DesktopCtaButton onClick={scrollToContact}>
            {t.letsTalk}
          </DesktopCtaButton>
        </ButtonContainer>
        
        <MobileToggle onClick={toggleMenu}>
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
        </MobileToggle>
      </NavContainer>
    </HeaderWrapper>
  );
};

export default HeaderComponent;