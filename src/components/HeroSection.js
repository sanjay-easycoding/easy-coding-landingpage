import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const HeroWrapper = styled.section`
  padding: 16rem 2rem 8rem; /* 160px 20px 80px */
  background: rgb(245, 247, 251);
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 14rem 1.5rem 6rem; /* 140px 15px 60px */
  }
`;

const Container = styled.div`
  max-width: 140rem; /* 1400px */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8rem; /* 80px */
  
  @media (max-width: 96rem) { /* 960px */
    gap: 6rem; /* 60px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    grid-template-columns: 1fr;
    gap: 4rem; /* 40px */
    text-align: center;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  @media (max-width: 76.8rem) {
    gap: 2.5rem;
  }
`;

const Eyebrow = styled.p`
  font-size: 1.3rem; /* 13px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em; /* 2px equivalent */
  color: #e11d48; /* Red color */
  margin-bottom: 1rem; /* 10px */
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.2rem; /* 12px */
  }
`;

const MainHeading = styled.h1`
  font-size: 5.5rem; /* 55px */
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem; /* 20px */
  
  .red-text {
    color: #e11d48; /* Red color */
  }
  
  .dark-text {
    color: #1e293b; /* Dark blue-gray */
  }
  
  @media (max-width: 120rem) { /* 1200px */
    font-size: 5rem; /* 50px */
  }
  
  @media (max-width: 96rem) { /* 960px */
    font-size: 4.5rem; /* 45px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 3.8rem; /* 38px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 3.2rem; /* 32px */
  }
`;

const Description = styled.p`
  font-size: 1.8rem; /* 18px */
  line-height: 1.6;
  color: #64748b; /* Gray color */
  max-width: 50rem; /* 500px */
  margin-bottom: 1rem; /* 10px */
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.6rem; /* 16px */
    max-width: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem; /* 20px */
  align-items: center;
  
  @media (max-width: 76.8rem) { /* 768px */
    justify-content: center;
  }
  
  @media (max-width: 48rem) { /* 480px */
    flex-direction: column;
    gap: 1.5rem; /* 15px */
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #e11d48 0%, #be185d 100%);
  color: white;
  border: none;
  padding: 1.6rem 3.2rem; /* 16px 32px */
  border-radius: 5rem; /* 50px */
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0.4rem 1.6rem rgba(225, 29, 72, 0.25);
  white-space: nowrap;
  
  &:hover {
    background: linear-gradient(135deg, #be185d 0%, #9d174d 100%);
    transform: translateY(-0.2rem); /* -2px */
    box-shadow: 0 0.8rem 2.4rem rgba(225, 29, 72, 0.35);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 48rem) { /* 480px */
    width: 100%;
    padding: 1.8rem 3.2rem; /* 18px 32px */
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #64748b;
  border: 0.2rem solid #e2e8f0; /* 2px */
  padding: 1.4rem 3rem; /* 14px 30px */
  border-radius: 5rem; /* 50px */
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  
  &:hover {
    border-color: #e11d48;
    color: #e11d48;
    transform: translateY(-0.2rem); /* -2px */
    box-shadow: 0 0.4rem 1.2rem rgba(225, 29, 72, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 48rem) { /* 480px */
    width: 100%;
    padding: 1.6rem 3rem; /* 16px 30px */
  }
`;

const VisualSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 76.8rem) { /* 768px */
    order: -1; /* Show visual above content on mobile */
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 50rem; /* 500px */
  width: 100%;
  
  @media (max-width: 96rem) { /* 960px */
    max-width: 45rem; /* 450px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    max-width: 40rem; /* 400px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    max-width: 35rem; /* 350px */
  }
`;

const AnimatedSVG = styled.svg`
  width: 100%;
  height: auto;
  filter: drop-shadow(0 1rem 3rem rgba(225, 29, 72, 0.2));
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 2rem 4rem rgba(225, 29, 72, 0.3));
  }

  .code-line {
    opacity: 0;
    animation: typingAnimation 0.5s ease-in-out forwards;
  }

  .code-line:nth-child(2) { animation-delay: 0.8s; }
  .code-line:nth-child(3) { animation-delay: 1.6s; }
  .code-line:nth-child(4) { animation-delay: 2.4s; }
  .code-line:nth-child(5) { animation-delay: 3.2s; }

  .floating-elements {
    animation: floatAnimation 4s ease-in-out infinite;
    transform-origin: center;
  }

  .floating-elements:nth-child(2) {
    animation-delay: 1s;
    animation-duration: 5s;
  }

  .pulse-circle {
    animation: pulseAnimation 2s ease-in-out infinite;
  }

  .glow-effect {
    animation: ${gradientMove} 3s ease infinite;
  }

  @keyframes typingAnimation {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes floatAnimation {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, -5px) rotate(2deg);
    }
    50% {
      transform: translate(0, -10px) rotate(-2deg);
    }
    75% {
      transform: translate(-5px, -5px) rotate(2deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @keyframes pulseAnimation {
    0%, 100% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;

const GlowingBackground = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(225, 29, 72, 0.1) 0%,
    rgba(190, 24, 93, 0.05) 25%,
    transparent 70%
  );
  animation: ${gradientMove} 10s ease infinite;
  pointer-events: none;
  z-index: -1;
`;

const HeroSection = () => {
  const [codeLines, setCodeLines] = useState([]);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].hero;
  
  useEffect(() => {
    const lines = [
      { code: "function createSolution() {", color: "#E11D48" },
      { code: "  const innovation = new Ideas();", color: "#8B5CF6" },
      { code: "  const success = transform(business);", color: "#10B981" },
      { code: "  return growth.exponential();", color: "#F59E0B" },
      { code: "}", color: "#EC4899" }
    ];
    setCodeLines(lines);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('letsTalk');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroWrapper>
      <Container>
        <ContentSection>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          
          <MainHeading>
            <span className="red-text">{t.title.part1}</span><br />
            <span className="dark-text">{t.title.part2}</span>
          </MainHeading>
          
          <Description>
            {t.description}
          </Description>
          
          <ButtonGroup>
            <PrimaryButton onClick={scrollToContact}>{translations[currentLanguage].nav.letsTalk}</PrimaryButton>
            <SecondaryButton>{translations[currentLanguage].services.viewMore}</SecondaryButton>
          </ButtonGroup>
        </ContentSection>
        
        <VisualSection>
          <AnimationContainer>
            <GlowingBackground />
            <AnimatedSVG viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              {/* Laptop Base */}
              <rect x="50" y="220" width="300" height="20" rx="10" fill="#1E293B" />
              
              {/* Laptop Screen */}
              <rect x="70" y="80" width="260" height="150" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="3" />
              
              {/* Screen Content - Terminal Window */}
              <rect x="80" y="90" width="240" height="130" rx="4" fill="#0F172A" />
              
              {/* Terminal Header */}
              <rect x="80" y="90" width="240" height="25" rx="4" fill="#1E293B" />
              <circle className="pulse-circle" cx="95" cy="102.5" r="4" fill="#EF4444" />
              <circle className="pulse-circle" cx="110" cy="102.5" r="4" fill="#F59E0B" />
              <circle className="pulse-circle" cx="125" cy="102.5" r="4" fill="#10B981" />
              
              {/* Code Lines */}
              {codeLines.map((line, index) => (
                <g key={index} className="code-line" transform={`translate(0, ${125 + index * 15})`}>
                  <text x="90" y="0" fill={line.color} fontSize="10" fontFamily="monospace">
                    {line.code}
                  </text>
                </g>
              ))}
              
              {/* Floating Elements */}
              <g className="floating-elements">
                <circle cx="350" cy="60" r="8" fill="#E11D48" opacity="0.7" />
                <polygon points="360,45 370,65 350,65" fill="#8B5CF6" opacity="0.6" />
                <circle cx="365" cy="40" r="4" fill="#10B981" opacity="0.5" />
              </g>
              
              <g className="floating-elements">
                <rect x="40" y="50" width="15" height="15" rx="3" fill="#06B6D4" opacity="0.6" />
                <circle cx="25" cy="80" r="6" fill="#10B981" opacity="0.7" />
                <polygon points="30,60 40,70 20,70" fill="#E11D48" opacity="0.5" />
              </g>
              
              {/* Cursor */}
              <rect className="cursor" x="90" y="185" width="2" height="12" fill="#E11D48">
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </rect>
            </AnimatedSVG>
          </AnimationContainer>
        </VisualSection>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection; 