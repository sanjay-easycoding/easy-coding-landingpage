import React from 'react';
import styled from 'styled-components';
import { FiMessageCircle, FiPenTool, FiCode, FiSettings } from 'react-icons/fi';

const ApproachWrapper = styled.section`
  padding: 10rem 2rem;
  background: rgb(245, 247, 251);
  
  @media (max-width: 76.8rem) {
    padding: 8rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  background: white;
  border-radius: 4rem;
  padding: 8rem 6rem;
  box-shadow: 0 0.4rem 6rem rgba(0, 0, 0, 0.03);
  
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
  color: #e11d48;
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
  background: #f8fafc;
  border: 0.1rem solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);
    border-color: #e11d48;
  }
`;

const StepIcon = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto 2rem;
  background: white;
  border: 0.2rem solid #e11d48;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e11d48;
  
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
  const steps = [
    {
      icon: <FiMessageCircle />,
      title: "Consulting",
      description: "We analyze your needs and provide expert guidance on the best approach"
    },
    {
      icon: <FiPenTool />,
      title: "Design",
      description: "Creating intuitive interfaces and experiences that users love"
    },
    {
      icon: <FiCode />,
      title: "Development",
      description: "Building robust solutions with clean, efficient code"
    },
    {
      icon: <FiSettings />,
      title: "Maintenance & Support",
      description: "Ensuring your solution stays optimized and up-to-date"
    }
  ];

  return (
    <ApproachWrapper id="approach">
      <Container>
        <InnerContainer>
          <Header>
            <Eyebrow>OUR APPROACH</Eyebrow>
            <MainHeading>Flexible by Design</MainHeading>
            <Description>
              4 Steps, Tailored to Your Needs and Project Size. Whether you're launching something new or improving what's already there — we adapt to your goals. Choose only the steps you need.
            </Description>
          </Header>
          
          <StepsGrid>
            {steps.map((step, index) => (
              <StepCard key={index}>
                <StepIcon>{step.icon}</StepIcon>
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