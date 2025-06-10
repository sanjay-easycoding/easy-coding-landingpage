import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/coding-animation.json';

const HeroWrapper = styled.section`
  width: 100%;
  padding: 12rem 0 6rem;
  // background: linear-gradient(to bottom, #ffffff, #f8fafc);
  overflow: hidden;
  
  @media (max-width: 76.8rem) {
    padding: 10rem 0 4rem;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 76.8rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const ContentSection = styled.div`
  max-width: 54rem;
  
  @media (max-width: 76.8rem) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const VisualSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 40rem;
  
  @media (max-width: 76.8rem) {
    order: -1;
    min-height: 35rem;
  }

  @media (max-width: 48rem) {
    min-height: 30rem;
  }
`;

const LottieContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;

  @media (max-width: 76.8rem) {
    max-width: 50rem;
    height: 35rem;
  }

  @media (max-width: 48rem) {
    max-width: 40rem;
    height: 30rem;
  }
`;

const StyledLottie = styled(Lottie)`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
  pointer-events: none;
`;

const Eyebrow = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #e11d48;
  margin-bottom: 1rem;
  
  @media (max-width: 76.8rem) {
    font-size: 1.2rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  
  .red-text {
    color: #e11d48;
  }
  
  .dark-text {
    color: #1e293b;
  }
  
  @media (max-width: 120rem) {
    font-size: 5rem;
  }
  
  @media (max-width: 96rem) {
    font-size: 4.5rem;
  }
  
  @media (max-width: 76.8rem) {
    font-size: 3.8rem;
  }
  
  @media (max-width: 48rem) {
    font-size: 3.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 50rem;
  margin-bottom: 1rem;
  
  @media (max-width: 76.8rem) {
    font-size: 1.6rem;
    max-width: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 76.8rem) {
    justify-content: center;
  }
  
  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #e11d48 0%, #be185d 100%);
  color: white;
  border: none;
  padding: 1.6rem 3.2rem;
  border-radius: 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0.4rem 1.6rem rgba(225, 29, 72, 0.25);
  white-space: nowrap;
  
  &:hover {
    background: linear-gradient(135deg, #be185d 0%, #9d174d 100%);
    transform: translateY(-0.2rem);
    box-shadow: 0 0.8rem 2.4rem rgba(225, 29, 72, 0.35);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 48rem) {
    width: 100%;
    padding: 1.8rem 3.2rem;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #64748b;
  border: 0.2rem solid #e2e8f0;
  padding: 1.4rem 3rem;
  border-radius: 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  
  &:hover {
    border-color: #e11d48;
    color: #e11d48;
    transform: translateY(-0.2rem);
    box-shadow: 0 0.4rem 1.2rem rgba(225, 29, 72, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 48rem) {
    width: 100%;
    padding: 1.6rem 3rem;
  }
`;

const HeroSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].hero;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('letsTalk');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroWrapper>
      <HeroContainer>
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
            <PrimaryButton onClick={scrollToContact}>
              {translations[currentLanguage].nav.letsTalk}
            </PrimaryButton>
            <SecondaryButton>
              {translations[currentLanguage].services.viewMore}
            </SecondaryButton>
          </ButtonGroup>
        </ContentSection>
        <VisualSection>
          <LottieContainer>
            <StyledLottie {...defaultOptions} />
          </LottieContainer>
        </VisualSection>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection; 