import React from 'react';
import styled from 'styled-components';
import { FiMessageCircle, FiPenTool, FiCode, FiSettings } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ApproachWrapper = styled.section`
  padding: 10rem 2rem;
 
  
  @media (max-width: 76.8rem) {
    padding: 8rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
   background: rgba(255, 255, 255, 0.18); /* More transparent for glass effect */
  backdrop-filter: blur(1.6rem) saturate(180%); /* Stronger blur and saturation */
  -webkit-backdrop-filter: blur(1.6rem) saturate(180%);
    box-shadow: 
    0 0.8rem 3.2rem rgba(0, 0, 0, 0.06),
    0 0.2rem 0.8rem rgba(0, 0, 0, 0.02);
  border-radius: 4rem;
  padding: 8rem 6rem;
  
  
  @media (max-width: 96rem) {
    padding: 6rem 4rem;
    border-radius: 3rem;
  }
  
  @media (max-width: 76.8rem) {
    padding: 4rem 3rem;
    border-radius: 2.4rem;
  }
  
  @media (max-width: 48rem) {
    padding: 3rem 2rem;
    border-radius: 2rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  
  @media (max-width: 76.8rem) {
    margin-bottom: 4rem;
  }
`;

const Eyebrow = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #f93177;
  margin-bottom: 1.6rem;
  
  @media (max-width: 76.8rem) {
    font-size: 1.2rem;
  }
`;

const MainHeading = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 1.1;
  color: #1e293b;
  margin-bottom: 2rem;
  
  @media (max-width: 96rem) {
    font-size: 4.2rem;
  }
  
  @media (max-width: 76.8rem) {
    font-size: 3.6rem;
  }
  
  @media (max-width: 48rem) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 60rem;
  margin: 0 auto 4rem;
  
  @media (max-width: 76.8rem) {
    font-size: 1.4rem;
    max-width: 50rem;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 96rem) {
    gap: 1.6rem;
  }
  
  @media (max-width: 76.8rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 1.2rem;
  background:rgb(239,239,239,1);
  border: 0.1rem solid #e2e8f0;
  transition: all 0.3s ease;
   box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);
  
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);
    // border-color: #f93177;
  }
`;

const StepIcon = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto 2rem;
  background: rgb(239,239,239,1);
  border: 0.2rem solid #1a6ebc;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a6ebc;
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
    stroke-width: 2;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: #64748b;
`;

const ApproachSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const icons = [<FiMessageCircle />, <FiPenTool />, <FiCode />, <FiSettings />];
  const steps = t.approach.steps;

  return (
    <ApproachWrapper id="approach">
      <Container>
        <InnerContainer>
          <Header>
            <Eyebrow>{t.approach.eyebrow}</Eyebrow>
            <MainHeading>{t.approach.title}</MainHeading>
            <Description>{t.approach.description}</Description>
          </Header>
          <StepsGrid>
            {steps.map((step, index) => (
              <StepCard key={index}>
                <StepIcon>{icons[index]}</StepIcon>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepCard>
            ))}
          </StepsGrid>
        </InnerContainer>
      </Container>
    </ApproachWrapper>
  );
};

export default ApproachSection; 