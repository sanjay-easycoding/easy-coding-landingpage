import React from 'react';
import styled from 'styled-components';

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

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem; /* 30px */
  
  @media (max-width: 76.8rem) { /* 768px */
    gap: 2.5rem; /* 25px */
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
  
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 2rem 4rem rgba(225, 29, 72, 0.3));
  }

  .code-line {
    animation: typingAnimation 2s ease-in-out infinite alternate;
  }

  .code-line:nth-child(2) {
    animation-delay: 0.3s;
  }

  .code-line:nth-child(3) {
    animation-delay: 0.6s;
  }

  .floating-elements {
    animation: floatAnimation 3s ease-in-out infinite;
  }

  .floating-elements:nth-child(2) {
    animation-delay: 1s;
  }

  .pulse-circle {
    animation: pulseAnimation 2s ease-in-out infinite;
  }

  @keyframes typingAnimation {
    0%, 50% { opacity: 0.3; }
    100% { opacity: 1; }
  }

  @keyframes floatAnimation {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  @keyframes pulseAnimation {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.1); opacity: 1; }
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Container>
        <ContentSection>
          <Eyebrow>YOUR RELIABLE OUTSOURCED IT PARTNER</Eyebrow>
          
          <MainHeading>
            <span className="red-text">Software solutions for</span><br />
            <span className="dark-text">growing businesses</span>
          </MainHeading>
          
          <Description>
            From new digital projects to process optimization and support, we partner with businesses to deliver impactful results.
          </Description>
          
          <ButtonGroup>
            <PrimaryButton>Book a call</PrimaryButton>
            <SecondaryButton>View our work</SecondaryButton>
          </ButtonGroup>
        </ContentSection>
        
        <VisualSection>
          <AnimationContainer>
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
              <g className="code-line">
                <rect x="90" y="125" width="120" height="3" fill="#E11D48" />
                <rect x="215" y="125" width="80" height="3" fill="#64748B" />
              </g>
              
              <g className="code-line">
                <rect x="90" y="140" width="80" height="3" fill="#8B5CF6" />
                <rect x="175" y="140" width="100" height="3" fill="#06B6D4" />
              </g>
              
              <g className="code-line">
                <rect x="90" y="155" width="150" height="3" fill="#10B981" />
              </g>
              
              <g className="code-line">
                <rect x="90" y="170" width="90" height="3" fill="#F59E0B" />
                <rect x="185" y="170" width="110" height="3" fill="#64748B" />
              </g>
              
              <g className="code-line">
                <rect x="90" y="185" width="200" height="3" fill="#EC4899" />
              </g>
              
              {/* Floating Elements */}
              <g className="floating-elements">
                <circle cx="350" cy="60" r="8" fill="#E11D48" opacity="0.7" />
                <polygon points="360,45 370,65 350,65" fill="#8B5CF6" opacity="0.6" />
              </g>
              
              <g className="floating-elements">
                <rect x="40" y="50" width="15" height="15" rx="3" fill="#06B6D4" opacity="0.6" />
                <circle cx="25" cy="80" r="6" fill="#10B981" opacity="0.7" />
              </g>
              
              {/* Cursor */}
              <rect x="290" y="185" width="2" height="4" fill="#E11D48">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
              </rect>
            </AnimatedSVG>
          </AnimationContainer>
        </VisualSection>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection; 