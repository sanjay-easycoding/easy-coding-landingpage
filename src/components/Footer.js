import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: rgb(245, 247, 251);
  padding: 0 2rem; /* 0 20px */
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 0 1.5rem; /* 0 15px */
  }
`;

const FooterContainer = styled.div`
  max-width: 140rem; /* 1400px */
  margin: 0 auto;
 
  padding: 2.4rem 0; /* 24px 0 */
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem; /* 24px */
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 76.8rem) { /* 768px */
    flex-direction: column;
    gap: 1.6rem; /* 16px */
    align-items: center;
    margin-bottom: 2rem; /* 20px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    gap: 1.2rem; /* 12px */
    align-items: center;
    text-align: center;
    margin-bottom: 1.5rem; /* 15px */
  }
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 10px */
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* 10px */
`;

const LogoImage = styled.img`
  height: 2.4rem; /* 24px */
  width: auto;
  flex-shrink: 0;
`;

const LogoText = styled.span`
  font-size: 2rem; /* 20px */
  font-weight: 700;
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.8rem; /* 18px */
  }
`;

const Tagline = styled.p`
  font-size: 1.3rem; /* 13px */
  color: #64748b;
  font-weight: 400;
  margin: 0;
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.2rem; /* 12px */
  }
`;

const TopRight = styled.div`
  
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 0.1rem; /* 1px */
  background: #e2e8f0;
  margin: 2.4rem 0; /* 24px 0 */
  
  @media (max-width: 76.8rem) { /* 768px */
    margin: 2rem 0; /* 20px 0 */
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 76.8rem) { /* 768px */
    flex-direction: column;
    gap: 1.6rem; /* 16px */
    align-items: center;
  }
  
  @media (max-width: 48rem) { /* 480px */
    gap: 1.2rem; /* 12px */
    align-items: center;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 1.3rem; /* 13px */
  color: #94a3b8;
  font-weight: 400;
  margin: 0;
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.2rem; /* 12px */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem; /* 12px */
  
  @media (max-width: 48rem) { /* 480px */
    gap: 1rem; /* 10px */
  }
`;

const SocialLink = styled.a`
  width: 3.2rem; /* 32px */
  height: 3.2rem; /* 32px */
  background: #f1f5f9;
  border-radius: 0.6rem; /* 6px */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.6rem; /* 16px */
  
  &:hover {
    background: #e2e8f0;
    color: #374151;
  }
  
  /* Facebook icon */
  &.facebook::before {
    content: 'f';
    font-family: 'Facebook', sans-serif;
    font-weight: bold;
  }
  
  /* LinkedIn icon */
  &.linkedin::before {
    content: 'in';
    font-family: 'LinkedIn', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  /* Instagram icon */
  &.instagram::before {
    content: '📷';
    font-size: 1.4rem;
  }
  
  /* X/Twitter icon */
  &.twitter::before {
    content: '𝕏';
    font-family: sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
  }
  
  /* TikTok icon */
  &.tiktok::before {
    content: '♪';
    font-size: 1.4rem;
    font-weight: bold;
  }
  
  @media (max-width: 48rem) { /* 480px */
    width: 2.8rem; /* 28px */
    height: 2.8rem; /* 28px */
    font-size: 1.4rem; /* 14px */
    
    &.linkedin::before {
      font-size: 1rem;
    }
    
    &.instagram::before,
    &.twitter::before,
    &.tiktok::before {
      font-size: 1.2rem;
    }
  }
`;

const DesignCredit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* 8px */
  font-size: 1.2rem; /* 12px */
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const DesignLogo = styled.span`
  font-size: 1.6rem; /* 16px */
  font-weight: 700;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TopRow>
          <TopLeft>
            <LogoRow>
              <LogoImage src="/easy-coding-logo.png" alt="Easy Coding Logo" />
              <LogoText>easy-coding</LogoText>
            </LogoRow>
            <Tagline>Your reliable development partner</Tagline>
          </TopLeft>
          
          <TopRight>
            <SocialLinks>
              <SocialLink href="#" className="facebook" aria-label="Facebook" />
              <SocialLink href="#" className="linkedin" aria-label="LinkedIn" />
              <SocialLink href="#" className="instagram" aria-label="Instagram" />
              <SocialLink href="#" className="twitter" aria-label="X/Twitter" />
              <SocialLink href="#" className="tiktok" aria-label="TikTok" />
            </SocialLinks>
          </TopRight>
        </TopRow>

        <HorizontalLine />

        <BottomRow>
          <Copyright>© 2025 Easy-Coding. All rights reserved</Copyright>
          
          <DesignCredit>
            <span>Design by</span>
            <DesignLogo>easy-coding</DesignLogo>
          </DesignCredit>
        </BottomRow>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer; 