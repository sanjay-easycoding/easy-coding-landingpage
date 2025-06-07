import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const HeroWrapper = styled.section`
  width: 100%;
  padding: 12rem 0 6rem;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
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

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TechContainer = styled.div`
  position: relative;
  width: 40rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 50%;
  animation: ${rotate} ${props => props.duration || '20s'} linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #6366f1;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const InnerCircle = styled(Circle)`
  width: 70%;
  height: 70%;
  animation-direction: reverse;
  animation-duration: 15s;
`;

const CodeBlock = styled.div`
  position: absolute;
  padding: 1.5rem 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Courier New', monospace;
  font-size: 1.4rem;
  color: #1e293b;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  
  &:nth-child(1) {
    top: 0;
    transform: translateY(-50%);
  }
  
  &:nth-child(2) {
    right: 0;
    transform: translateX(50%);
  }
  
  &:nth-child(3) {
    bottom: 0;
    transform: translateY(50%);
  }
  
  &:nth-child(4) {
    left: 0;
    transform: translateX(-50%);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const reset = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const MonitorContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  position: relative;
`;

const Monitor = styled.div`
  background: #1e293b;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: '';
    display: block;
    padding-bottom: 65%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 3rem;
    background: #334155;
    border-radius: 0.5rem;
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  background: #0f172a;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 2rem;
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const TextLine = styled.div`
  position: absolute;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: clamp(1rem, 1.4vw, 1.4rem);
  white-space: nowrap;
  overflow: hidden;
  width: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
  }

  &.line1 {
    top: 4rem;
    left: 2rem;
    animation: ${typing} 3s steps(40) forwards;
  }

  &.line2 {
    top: 6.5rem;
    left: 2rem;
    animation: ${typing} 3s steps(40) 3s forwards;
  }

  &.line3 {
    top: 9rem;
    left: 2rem;
    animation: ${typing} 3s steps(40) 6s forwards;
  }

  &.line4 {
    top: 11.5rem;
    left: 2rem;
    animation: ${typing} 3s steps(40) 9s forwards;
  }

  &.comment {
    color: #6ee7b7;
  }

  &.keyword {
    color: #93c5fd;
  }

  &.string {
    color: #fca5a5;
  }

  &.function {
    color: #c4b5fd;
  }

  &.variable {
    color: #fcd34d;
  }

  @media (max-width: 48rem) {
    &.line1 { top: 3.5rem; left: 1.5rem; }
    &.line2 { top: 5.5rem; left: 1.5rem; }
    &.line3 { top: 7.5rem; left: 1.5rem; }
    &.line4 { top: 9.5rem; left: 1.5rem; }
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1.6rem;
  background: #e2e8f0;
  margin-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

const GlowingBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(99, 102, 241, 0.15) 0%,
    rgba(99, 102, 241, 0.08) 30%,
    transparent 70%
  );
  filter: blur(40px);
  z-index: -1;
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

const LaptopContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  position: relative;
  padding: 2rem;

  @media (max-width: 76.8rem) {
    max-width: 50rem;
  }

  @media (max-width: 48rem) {
    max-width: 40rem;
    padding: 1.5rem;
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
    background: #22d3ee;
    border-radius: 0.5rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 1.5rem;
    height: 1.5rem;
    background: #f472b6;
    border-radius: 50%;
    animation: ${float} 3s ease-in-out infinite 1s;
  }
`;

const FloatingCircle = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 4rem;
  width: 1rem;
  height: 1rem;
  background: #818cf8;
  border-radius: 50%;
  animation: ${float} 3s ease-in-out infinite 0.5s;
`;

const Triangle = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  width: 0;
  height: 0;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1.7rem solid #34d399;
  animation: ${float} 3s ease-in-out infinite 1.5s;
`;

const Laptop = styled.div`
  background: #ffffff;
  border-radius: 1.6rem;
  padding: 0.8rem;
  box-shadow: 
    0 2.5rem 5rem rgba(0, 0, 0, 0.1),
    0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::before {
    content: '';
    display: block;
    padding-bottom: 60%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.4rem;
    left: 1.2rem;
    display: flex;
    gap: 0.6rem;
    width: 4.4rem;
    height: 0.4rem;
  }
`;

const WindowButtons = styled.div`
  position: absolute;
  top: clamp(0.8rem, 1vw, 1.2rem);
  left: clamp(1.2rem, 1.5vw, 1.6rem);
  display: flex;
  gap: clamp(0.4rem, 0.5vw, 0.6rem);
  z-index: 1;

  &::before,
  &::after,
  span {
    content: '';
    width: clamp(0.6rem, 0.8vw, 0.8rem);
    height: clamp(0.6rem, 0.8vw, 0.8rem);
    border-radius: 50%;
    display: block;
  }

  &::before {
    background: #ff5f56;
  }

  span {
    background: #ffbd2e;
  }

  &::after {
    background: #27c93f;
  }
`;

const LaptopScreen = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  right: 0.8rem;
  bottom: 0.8rem;
  background: #0f172a;
  border-radius: 1rem;
  overflow: hidden;
  padding: clamp(1rem, 1.5vw, 1.5rem);
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: clamp(2.4rem, 3vw, 3.2rem);
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(4px);
  }
`;

const Base = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 0.8rem;
  background: #ffffff;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 
    0 0.5rem 1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    height: 0.4rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 1rem 1rem;
  }
`;

const BlinkingCursor = styled.div`
  position: absolute;
  width: clamp(0.8rem, 1vw, 1rem);
  height: clamp(1.6rem, 2vw, 2rem);
  background: #ffffff;
  animation: ${blink} 1s step-end infinite;
  opacity: 0.7;

  @media (max-width: 48rem) {
    top: 11.5rem !important;
    left: 1.5rem !important;
  }
`;

const HeroSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].hero;

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
          <LaptopContainer>
            <BackgroundShapes>
              <FloatingCircle />
              <Triangle />
            </BackgroundShapes>
            <Laptop>
              <WindowButtons>
                <span />
              </WindowButtons>
              <LaptopScreen>
                <TextLine className="line1 comment">
                  // Your Vision + Our Code = Amazing Solutions
                </TextLine>
                <TextLine className="line2">
                  <span className="keyword">import</span> {'{'} innovation, quality {'}'} <span className="keyword">from</span> <span className="string">'easy-coding'</span>;
                </TextLine>
                <TextLine className="line3">
                  <span className="keyword">function</span> <span className="function">buildYourDream</span>() {'{'} 
                  <span className="string">"Web | Mobile | Cloud"</span> {'}'}
                </TextLine>
                <TextLine className="line4">
                  <span className="comment">// Let's transform your ideas into reality</span>
                </TextLine>
                <BlinkingCursor style={{ top: '14rem', left: '2rem' }} />
              </LaptopScreen>
              <Base />
            </Laptop>
          </LaptopContainer>
        </VisualSection>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection; 