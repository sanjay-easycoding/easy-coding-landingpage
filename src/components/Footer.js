import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const FooterWrapper = styled.footer`

  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (max-width: 76.8rem) {
    padding: 4rem 1.5rem;
  }
`;

const LogoTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
   color: #1e293b;
  margin-bottom: 2.5rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.05em;
`;

const FooterNav = styled.nav`
  margin-bottom: 2.5rem;
`;

const NavLink = styled.a`
  color: #4a5568;
  text-decoration: none;
  margin: 0 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;

  &:hover {
    color: #2c5282;
  }

  @media (max-width: 48rem) {
    display: block;
    margin: 1rem 0;
  }
`;

const DividerContainer = styled.div`
  position: relative;
  width: 100%;
  // max-width: 80rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DividerLine = styled.hr`
  width: 100%;
  border: 0;
  height: 0.1rem;
  background-color:rgb(196,196,196);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  background-color: rgb(232 232 232);
  padding: 0 1.5rem;
`;

const SocialLink = styled.a`
     color: rgb(74, 85, 104);
    font-size: 1.4rem;
    transition: color 0.3s, transform 0.3s;
    background-color: rgb(232 232 232);
    width: 20px;
    height: 20px;
  &:hover {
    color: #2c5282;
    transform: scale(1.1);
  }
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  color: #718096;
`;

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <FooterWrapper>
      <LogoTitle>easyCoding</LogoTitle>
      
      <FooterNav>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#">Careers</NavLink>
        <NavLink href="#">Privacy</NavLink>
      </FooterNav>
      
      <DividerContainer>
        <DividerLine />
        <SocialLinks>
          <SocialLink href="#" aria-label="Facebook"><FaFacebookF /></SocialLink>
          <SocialLink href="#" aria-label="Twitter"><FaTwitter /></SocialLink>
          <SocialLink href="#" aria-label="LinkedIn"><FaLinkedinIn /></SocialLink>
        </SocialLinks>
      </DividerContainer>
      
      <Copyright>
        © 2018 easyCoding. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer; 