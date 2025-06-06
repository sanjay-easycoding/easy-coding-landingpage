import React, { useState } from 'react';
import styled from 'styled-components';

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
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
`;

const LogoImage = styled.img`
  height: 2.2rem; /* 22px */
  width: auto;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.1);
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
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem; /* 40px */
  
  @media (max-width: 120rem) { /* 1200px */
    gap: 3.5rem; /* 35px */
  }
  
  @media (max-width: 102.4rem) { /* 1024px */
    gap: 3rem; /* 30px */
  }
  
  @media (max-width: 96rem) { /* 960px */
    gap: 2.5rem; /* 25px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(2rem); /* 20px */
    border-radius: 2rem; /* 20px */
    margin-top: 0.8rem; /* 8px */
    padding: 2.4rem; /* 24px */
    flex-direction: column;
    gap: 2rem; /* 20px */
    box-shadow: 0 0.8rem 3.2rem rgba(0, 0, 0, 0.08);
    border: 0.1rem solid rgba(255, 255, 255, 0.8); /* 1px */
    transform: ${props => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(-1rem) scale(0.95)'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: normal;
    justify-content: flex-start;
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
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media (max-width: 76.8rem) { /* 768px */
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
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          <NavLink href="#services" onClick={closeMenu}>SERVICES</NavLink>
          <NavLink href="#case-studies" onClick={closeMenu}>CASE STUDIES</NavLink>
          <NavLink href="#about" onClick={closeMenu}>ABOUT</NavLink>
          <NavLink href="#blog" onClick={closeMenu}>BLOG</NavLink>
          <MobileCtaButton onClick={closeMenu}>Let's talk</MobileCtaButton>
        </LinksContainer>
        
        <ButtonContainer>
          <DesktopCtaButton onClick={closeMenu}>
            Let's talk
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