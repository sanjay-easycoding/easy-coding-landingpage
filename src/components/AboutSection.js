import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const AboutWrapper = styled.section`
  padding: 10rem 2rem; /* 100px 20px */
  
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 8rem 1.5rem; /* 80px 15px */
  }
`;

const AboutContainer = styled.div`
    background: rgba(255, 255, 255, 0.18); /* More transparent for glass effect */
  backdrop-filter: blur(1.6rem) saturate(180%); /* Stronger blur and saturation */
  -webkit-backdrop-filter: blur(1.6rem) saturate(180%);
    box-shadow: 
    0 0.8rem 3.2rem rgba(0, 0, 0, 0.06),
    0 0.2rem 0.8rem rgba(0, 0, 0, 0.02);
  padding: 8rem 4rem; /* 80px 40px */
  border-radius: 2.4rem; /* 24px */
  max-width: 140rem; /* 1400px - same as other sections */
  margin: 0 auto;
  
  @media (max-width: 96rem) { /* 960px */
    padding: 6rem 3rem; /* 60px 30px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 6rem 2rem; /* 60px 20px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    padding: 4rem 1.5rem; /* 40px 15px */
    border-radius: 1.6rem; /* 16px */
  }
`;

const Container = styled.div`
  max-width: 120rem; /* 1200px */
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 6rem; /* 60px */
  
  @media (max-width: 76.8rem) { /* 768px */
    margin-bottom: 4rem; /* 40px */
  }
`;

const Eyebrow = styled.p`
  font-size: 1.3rem; /* 13px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em; /* 2px equivalent */
   color: #f93177;
  margin-bottom: 1.6rem; /* 16px */
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.2rem; /* 12px */
  }
`;

const MainHeading = styled.h2`
  font-size: 4.8rem; /* 48px */
  font-weight: 700;
  line-height: 1.1;
    color: #1e293b;
  margin-bottom: 2rem; /* 20px */
  
  @media (max-width: 96rem) { /* 960px */
    font-size: 4.2rem; /* 42px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 3.6rem; /* 36px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 2.8rem; /* 28px */
  }
`;

const Description = styled.p`
  font-size: 1.6rem; /* 16px */
  line-height: 1.6;
 color: #64748b; /* Light gray for dark background */
  max-width: 60rem; /* 600px */
  margin: 0 auto;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    max-width: 50rem; /* 500px */
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem; /* 40px */
  
  @media (max-width: 76.8rem) { /* 768px */
    grid-template-columns: 1fr;
    gap: 3rem; /* 30px */
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 8rem 0;
  
  @media (max-width: 96rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (max-width: 76.8rem) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 6rem 0;
  }
`;

const ServiceCard = styled.div`
      text-align: center;
  padding: 3rem 2rem;
  border-radius: 1.2rem;
  background:rgb(239,239,239,1);
  border: 0.1rem solid #e2e8f0;
  transition: all 0.3s ease;
   box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);



  
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-0.4rem);
    box-shadow: 0 1.6rem 4.8rem rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 76.8rem) {
    padding: 2.4rem 2rem;
  }
`;

const ServiceIcon = styled.div`
  width: 6rem;
  height: 6rem;
  background: linear-gradient(135deg, #1a6ebc 0%, #3b82f6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.4rem;
  color: white;
  box-shadow: 0 0.8rem 2.4rem rgba(26, 110, 188, 0.3);
  
  @media (max-width: 76.8rem) {
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.6rem;
  line-height: 1.2;
  
  @media (max-width: 76.8rem) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #64748b;
  
  @media (max-width: 76.8rem) {
    font-size: 1.3rem;
  }
`;

const TeamCard = styled.div`
   background:rgb(239,239,239,1);
  border: 0.1rem solid #e2e8f0;
  transition: all 0.3s ease;
   box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);
  padding: 2.4rem; /* 24px */
  transition: all 0.3s ease;
  display: flex;
  gap: 2rem; /* 20px */
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-0.4rem); /* -4px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 2rem; /* 20px */
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem; /* 16px */
  flex-shrink: 0;
`;

const ProfileImage = styled.div`
  width: 8rem; /* 80px */
  height: 8rem; /* 80px */
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    width: 10rem; /* 100px */
    height: 10rem; /* 100px */
  }
`;

const ProfilePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.4rem; /* 24px */
  font-weight: 700;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 3rem; /* 30px */
  }
`;

const TeamContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TeamName = styled.h3`
  font-size: 2.4rem; /* 24px */
  font-weight: 600;
  color: white;
  margin-bottom: 0.8rem; /* 8px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 2rem; /* 20px */
  }
`;

const TeamRole = styled.p`
  font-size: 1.3rem; /* 13px */
  color: #1a6ebc;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem; /* 16px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.2rem; /* 12px */
  }
`;

const TeamDescription = styled.p`
  font-size: 1.4rem; /* 14px */
  line-height: 1.6;
  color: #cbd5e1;
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.3rem; /* 13px */
  }
`;

const LinkedInButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem; /* 8px */
  background: rgba(14, 165, 233, 0.1);
  border: 0.1rem solid rgba(14, 165, 233, 0.3);
  color: #0ea5e9;
  padding: 0.8rem 1.2rem; /* 8px 12px */
  border-radius: 0.8rem; /* 8px */
  font-size: 1.2rem; /* 12px */
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(14, 165, 233, 0.2);
    border-color: rgba(14, 165, 233, 0.5);
    transform: translateY(-0.1rem);
  }
  
  &::before {
    content: '💼';
    font-size: 1.4rem;
  }
`;

/* Testimonial Section within About */
const TestimonialDivider = styled.div`
  height: 0.1rem;
  background: rgba(255, 255, 255, 0.1);
  margin: 6rem 0; /* 60px 0 */
  
  @media (max-width: 76.8rem) { /* 768px */
    margin: 4rem 0; /* 40px 0 */
  }
`;

const InnerTestimonial = styled.div`
  text-align: center;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 2.8rem; /* 28px */
  font-weight: 400;
  line-height: 1.4;
  color:#64748b;
  margin-bottom: 4rem; /* 40px */
  font-style: italic;
  max-width: 80rem; /* 800px */
  margin-left: auto;
  margin-right: auto;
  
  .highlight {
    color: #1a6ebc;
    font-weight: 600;
  }
  
  @media (max-width: 96rem) { /* 960px */
    font-size: 2.4rem; /* 24px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 2rem; /* 20px */
    margin-bottom: 3rem; /* 30px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.8rem; /* 18px */
  }
`;

const TestimonialClient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem; /* 30px */
`;

const TestimonialProfileImage = styled.div`
  width: 6rem; /* 60px */
  height: 6rem; /* 60px */
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem; /* 15px */
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialProfilePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e11d48 0%, #f43f5e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem; /* 18px */
  font-weight: 700;
`;

const TestimonialClientName = styled.h4`
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  color:#494949;
  margin-bottom: 0.4rem; /* 4px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.5rem; /* 15px */
  }
`;

const TestimonialClientTitle = styled.p`
  font-size: 1.2rem; /* 12px */
  color:#818181;
  font-weight: 500;
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.1rem; /* 11px */
  }
`;

const BookCallButton = styled.button`
  background: #1a6ebc;
  color: white;
  border: none;
  padding: 1.6rem 3.2rem; /* 16px 32px */
  border-radius: 5rem; /* 50px - fully rounded */
  font-size: 1.5rem; /* 15px */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  // box-shadow: 0 0.4rem 1.6rem rgba(225, 29, 72, 0.3);
  
  &:hover {
    // background: #be185d;
    transform: translateY(-0.2rem); /* -2px */
    // box-shadow: 0 0.8rem 2.4rem rgba(225, 29, 72, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 48rem) { /* 480px */
    padding: 1.4rem 2.8rem; /* 14px 28px */
    font-size: 1.4rem; /* 14px */
  }
`;

const AboutSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const teamMembers = t.about.team;

  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <Container>
          <Header>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <MainHeading>{t.about.title}</MainHeading>
            <Description>{t.about.description}</Description>
          </Header>
          
          {/* <TeamGrid>
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx}>
                <ProfileSection>
                  <ProfileImage>
                    <ProfilePlaceholder>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </ProfilePlaceholder>
                  </ProfileImage>
                  
                  <LinkedInButton href="#">
                    {t.about.linkedin}
                  </LinkedInButton>
                </ProfileSection>
                
                <TeamContent>
                  <TeamName>{member.name}</TeamName>
                  <TeamRole>{member.role}</TeamRole>
                  
                  <TeamDescription>
                    {member.description}
                  </TeamDescription>
                </TeamContent>
              </TeamCard>
            ))}
          </TeamGrid> */}
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>🎨</ServiceIcon>
              <ServiceTitle>Design & UX</ServiceTitle>
              <ServiceDescription>
                Crafting user-first UI/UX experiences using design systems and prototyping tools.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>⚛️</ServiceIcon>
              <ServiceTitle>Frontend Development</ServiceTitle>
              <ServiceDescription>
                Building high-performance, responsive interfaces using React, Vue & more.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🔧</ServiceIcon>
              <ServiceTitle>Backend Engineering</ServiceTitle>
              <ServiceDescription>
                Robust, scalable APIs and infrastructure using Node.js, Python, Go, and more.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>📱</ServiceIcon>
              <ServiceTitle>Mobile App Dev</ServiceTitle>
              <ServiceDescription>
                Native & hybrid mobile experiences across Android & iOS platforms.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🧪</ServiceIcon>
              <ServiceTitle>QA & Testing</ServiceTitle>
              <ServiceDescription>
                Automated & manual testing to ensure reliability across devices.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>📋</ServiceIcon>
              <ServiceTitle>Project Management</ServiceTitle>
              <ServiceDescription>
                Agile project coordination and smooth communication from kickoff to delivery.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
          
          <TestimonialDivider />
          
          <InnerTestimonial>
            <TestimonialQuote dangerouslySetInnerHTML={{ __html: t.about.testimonial.quote }} />
            
            <TestimonialClient>
              {/* <TestimonialProfileImage>
                <TestimonialProfilePlaceholder>
                  EJ
                </TestimonialProfilePlaceholder>
              </TestimonialProfileImage> */}
              
              <TestimonialClientName>{t.about.testimonial.clientName}</TestimonialClientName>
              <TestimonialClientTitle>{t.about.testimonial.clientTitle}</TestimonialClientTitle>
            </TestimonialClient>
            
            <BookCallButton>
              {t.about.testimonial.bookCall}
            </BookCallButton>
          </InnerTestimonial>
        </Container>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default AboutSection; 