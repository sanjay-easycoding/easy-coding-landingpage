import React, { useRef } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/coding-animation.json';
import animationData2 from '../assets/animations/coding-animation2.json';
import animationData3 from '../assets/animations/coding-animation3.json';
import { motion, useAnimation, useInView } from 'framer-motion';

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
  color:#1a6ebc;
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
    color:#f93177;
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
  color: rgb(112,112,112);
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  
  &:hover {
    background: linear-gradient(135deg, #0094e6 0%, #005fa3 100%);
    // box-shadow: 0 12px 32px 0 rgba(0, 165, 255, 0.35), 0 2px 0 #005fa3;
    transform: translateY(-2px);
  }
  &:active {
    background: linear-gradient(135deg, #0080cc 0%, #004c80 100%);
    box-shadow: 0 4px 12px 0 rgba(0, 165, 255, 0.18), 0 1px 0 #004c80;
    transform: translateY(1px);
  }
`;

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.18);
  color: #1a6ebc;
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  
  &:hover {
    background: rgb(226, 226, 226);
    color: rgb(0, 87, 150);
    // box-shadow: 0 8px 24px 0 rgba(0, 165, 255, 0.18);
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

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.4, once: false });
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const lastScrollY = useRef(window.scrollY);
  const scrollDirection = useRef('down');

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        scrollDirection.current = 'down';
      } else if (window.scrollY < lastScrollY.current) {
        scrollDirection.current = 'up';
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (inView) {
      leftControls.start('visible');
      rightControls.start('visible');
    } else {
      if (scrollDirection.current === 'up') {
        leftControls.start('exitUp');
        rightControls.start('exitUp');
      } else {
        leftControls.start('hidden');
        rightControls.start('hidden');
      }
    }
  }, [inView, leftControls, rightControls]);

  const leftVariants = {
    hidden: { x: -100, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exitUp: { x: -100, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  };
  const rightVariants = {
    hidden: { x: 100, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exitUp: { x: 100, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  };

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

  const scrollToContact = () => {
    const contactSection = document.getElementById('letsTalk');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroWrapper ref={sectionRef}>
      <HeroContainer>
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={leftControls}
        >
          <ContentSection>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <MainHeading>
              <span className="red-text">{t.title.part1}</span><br/>
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
        </motion.div>
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={rightControls}
        >
          <VisualSection>
            <LottieContainer>
              <StyledLottie {...defaultOptions3} />
            </LottieContainer>
          </VisualSection>
        </motion.div>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection; 