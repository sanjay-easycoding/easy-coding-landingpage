import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 10rem 2rem; /* 100px 20px */
  background: rgb(245, 247, 251);
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 8rem 1.5rem; /* 80px 15px */
  }
`;

const AboutContainer = styled.div`
  background: #1e293b; /* Dark background */
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
  color: #e11d48; /* Red color */
  margin-bottom: 1.6rem; /* 16px */
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.2rem; /* 12px */
  }
`;

const MainHeading = styled.h2`
  font-size: 4.8rem; /* 48px */
  font-weight: 700;
  line-height: 1.1;
  color: white;
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
  color: #cbd5e1; /* Light gray for dark background */
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

const TeamCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem; /* 16px */
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
  color: #e11d48;
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
  color: white;
  margin-bottom: 4rem; /* 40px */
  font-style: italic;
  max-width: 80rem; /* 800px */
  margin-left: auto;
  margin-right: auto;
  
  .highlight {
    color: #e11d48;
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
  color: white;
  margin-bottom: 0.4rem; /* 4px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.5rem; /* 15px */
  }
`;

const TestimonialClientTitle = styled.p`
  font-size: 1.2rem; /* 12px */
  color: #cbd5e1;
  font-weight: 500;
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.1rem; /* 11px */
  }
`;

const BookCallButton = styled.button`
  background: #e11d48;
  color: white;
  border: none;
  padding: 1.6rem 3.2rem; /* 16px 32px */
  border-radius: 5rem; /* 50px - fully rounded */
  font-size: 1.5rem; /* 15px */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0.4rem 1.6rem rgba(225, 29, 72, 0.3);
  
  &:hover {
    background: #be185d;
    transform: translateY(-0.2rem); /* -2px */
    box-shadow: 0 0.8rem 2.4rem rgba(225, 29, 72, 0.4);
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
  const teamMembers = [
    {
      id: 1,
      name: "Aleksa Tachev",
      role: "CO-FOUNDER & CEO",
      description: "Experienced Associate Software Engineer with a demonstrated history of working in the oil & energy industry. Skilled in Front-end Development, User Experience, User Interface Design, and Management. Strong engineering research professional with a Bachelor's Degree focused in Computer and Software Engineering from Technical University Sofia.",
      initials: "AT",
      linkedIn: "#"
    },
    {
      id: 2,
      name: "Kristiyan Valchev",
      role: "CO-FOUNDER & CTO",
      description: "Experienced Associate Software Engineer with a demonstrated history of working in the oil & energy industry. Skilled in Front-end Development, User Experience, User Interface Design, and Management. Strong engineering research professional with a Bachelor's Degree focused in Computer and Software Engineering from Technical University Sofia.",
      initials: "KV",
      linkedIn: "#"
    }
  ];

  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <Container>
          <Header>
            <Eyebrow>ABOUT US</Eyebrow>
            <MainHeading>Who's behind Easy Coding</MainHeading>
            <Description>
              A team of experienced professionals dedicated to building smart, flexible, 
              and reliable software solutions - tailored to your business needs.
            </Description>
          </Header>
          
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamCard key={member.id}>
                <ProfileSection>
                  <ProfileImage>
                    <ProfilePlaceholder>
                      {member.initials}
                    </ProfilePlaceholder>
                  </ProfileImage>
                  
                  <LinkedInButton href={member.linkedIn}>
                    LINKEDIN
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
          </TeamGrid>
          
          <TestimonialDivider />
          
          <InnerTestimonial>
            <TestimonialQuote>
              Working with this team was an absolute <span className="highlight">game-changer for our business</span>. Their flexible approach and attention to detail helped us streamline our processes and <span className="highlight">deliver results faster</span> than we anticipated.
            </TestimonialQuote>
            
            <TestimonialClient>
              <TestimonialProfileImage>
                <TestimonialProfilePlaceholder>
                  EJ
                </TestimonialProfilePlaceholder>
              </TestimonialProfileImage>
              
              <TestimonialClientName>Emily Johnson</TestimonialClientName>
              <TestimonialClientTitle>Lead Product Manager at NextGen Innovators</TestimonialClientTitle>
            </TestimonialClient>
            
            <BookCallButton>
              Book a call
            </BookCallButton>
          </InnerTestimonial>
        </Container>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default AboutSection; 