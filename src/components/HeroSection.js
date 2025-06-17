import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/coding-animation.json';
import animationData2 from '../assets/animations/coding-animation2.json';
import animationData3 from '../assets/animations/coding-animation3.json';

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
  color: #ff2086;
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
    color: #ff2086;
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
  color: rgb(37, 97, 152);
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
  background: linear-gradient(135deg, #00a5ff 0%, #0077cc 100%);
  color: #fff;
  border: none;
  padding: 1.6rem 3.2rem;
  border-radius: 999px;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 24px 0 rgba(0, 165, 255, 0.25), 0 1.5px 0 #0077cc;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  text-align: center;
  
  &:hover {
    background: linear-gradient(135deg, #0094e6 0%, #005fa3 100%);
    box-shadow: 0 12px 32px 0 rgba(0, 165, 255, 0.35), 0 2px 0 #005fa3;
    transform: translateY(-2px);
  }
  &:active {
    background: linear-gradient(135deg, #0080cc 0%, #004c80 100%);
    box-shadow: 0 4px 12px 0 rgba(0, 165, 255, 0.18), 0 1px 0 #004c80;
    transform: translateY(1px);
  }
`;

const SecondaryButton = styled.button`
  background: #fff;
  color: #00a5ff;
  border: none;
  padding: 1.4rem 3rem;
  border-radius: 999px;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px 0 rgba(0, 165, 255, 0.10);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  text-align: center;
  
  &:hover {
    background: #f0faff;
    color: #0077cc;
    box-shadow: 0 8px 24px 0 rgba(0, 165, 255, 0.18);
    transform: translateY(-2px);
  }
  &:active {
    background: #e0f4ff;
    color: #004c80;
    box-shadow: 0 2px 8px 0 rgba(0, 165, 255, 0.10);
    transform: translateY(1px);
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

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true
    }
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
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
            {/* <StyledLottie {...defaultOptions} /> */}
            {/* <StyledLottie {...defaultOptions2} /> */}
            <StyledLottie {...defaultOptions3} />
          </LottieContainer>
        </VisualSection>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection; 