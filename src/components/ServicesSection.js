import React from 'react';
import styled from 'styled-components';
import { 
  FiMonitor, 
  FiSmartphone, 
  FiGlobe, 
  FiMail, 
  FiSettings,
  FiReact,
  FiDatabase,
  FiHeart,
  FiCode,
  FiBox,
  FiTool
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiApple, 
  SiAndroid, 
  SiFigma, 
  SiWordpress,
  SiDiscord
} from 'react-icons/si';

const ServicesWrapper = styled.section`
  padding: 8rem 2rem; /* 80px 20px */
  background: rgb(245, 247, 251);
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 6rem 1.5rem; /* 60px 15px */
  }
`;

const OuterContainer = styled.div`
  max-width: 140rem; /* 1400px */
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  background: white;
  border-radius: 4rem; /* 40px - curved edges */
  padding: 8rem 6rem; /* 80px 60px */
  box-shadow: 0 0.4rem 6rem rgba(0, 0, 0, 0.03);
  
  @media (max-width: 96rem) { /* 960px */
    padding: 6rem 4rem; /* 60px 40px */
    border-radius: 3rem; /* 30px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 4rem 3rem; /* 40px 30px */
    border-radius: 2.4rem; /* 24px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    padding: 3rem 2rem; /* 30px 20px */
    border-radius: 2rem; /* 20px */
  }
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
  color: #64748b;
  max-width: 60rem; /* 500px */
  margin: 0 auto;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    max-width: 50rem; /* 450px */
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* 20px */
  margin-bottom: 6rem; /* 60px */
  
  @media (max-width: 96rem) { /* 960px */
    gap: 1.6rem; /* 16px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem; /* 16px */
    margin-bottom: 4rem; /* 40px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    grid-template-columns: 1fr;
    gap: 1.6rem; /* 16px */
  }
`;

const ServiceCard = styled.div`
  background: #f8fafc;
  border-radius: 1.2rem; /* 12px */
  padding: 2rem; /* 20px */
  transition: all 0.3s ease;
  border: 0.1rem solid #e2e8f0; /* 1px */
  
  &:hover {
    transform: translateY(-0.2rem); /* -2px */
    box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);
    border-color: #e11d48;
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 1.8rem; /* 18px */
  }
`;

const CardIcon = styled.div`
  width: 4rem; /* 40px */
  height: 4rem; /* 40px */
  background: transparent;
  border: 0.2rem solid #e11d48; /* 2px red border */
  border-radius: 0.8rem; /* 8px */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.6rem; /* 16px */
  color: #e11d48;
  
  svg {
    width: 2rem; /* 20px */
    height: 2rem; /* 20px */
    stroke-width: 2;
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    width: 3.6rem; /* 36px */
    height: 3.6rem; /* 36px */
    
    svg {
      width: 1.8rem; /* 18px */
      height: 1.8rem; /* 18px */
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem; /* 16px */
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.4rem; /* 4px */
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.5rem; /* 15px */
  }
`;

const CardSubtitle = styled.p`
  font-size: 1rem; /* 10px */
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.2rem; /* 12px */
`;

const CardDescription = styled.p`
  font-size: 1.3rem; /* 13px */
  line-height: 1.4;
  color: #64748b;
  margin-bottom: 1.6rem; /* 16px */
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.2rem; /* 12px */
  }
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem; /* 8px */
`;

const Tag = styled.span`
  font-size: 1rem; /* 10px */
  font-weight: 500;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:not(:last-child)::after {
    content: '•';
    margin-left: 0.8rem; /* 8px */
    color: #cbd5e1;
  }
`;

const ToolStackSection = styled.div`
  text-align: center;
  background: rgb(245, 247, 251); /* Same as outer background */
  padding: 3rem 2rem; /* 30px 20px */
  border-radius: 1.2rem; /* 12px - same as cards */
  margin-top: 3rem; /* 30px */
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 2.4rem 1.6rem; /* 24px 16px */
    margin-top: 2.4rem; /* 24px */
  }
`;

const ToolStackTitle = styled.h3`
  font-size: 1.2rem; /* 12px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
  margin-bottom: 2.4rem; /* 24px */
  
  @media (max-width: 76.8rem) { /* 768px */
    margin-bottom: 2rem; /* 20px */
  }
`;

const ToolsGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem; /* 24px */
  flex-wrap: wrap;
  
  @media (max-width: 96rem) { /* 960px */
    gap: 2rem; /* 20px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    gap: 1.6rem; /* 16px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    gap: 1.2rem; /* 12px */
  }
`;

const ToolIcon = styled.div`
  width: 4rem; /* 40px */
  height: 4rem; /* 40px */
  background: ${props => props.bgColor || '#f1f5f9'};
  border-radius: 0.8rem; /* 8px */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  
  svg {
    width: 2rem; /* 20px */
    height: 2rem; /* 20px */
  }
  
  &:hover {
    transform: translateY(-0.2rem) scale(1.05);
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    width: 3.6rem; /* 36px */
    height: 3.6rem; /* 36px */
    
    svg {
      width: 1.8rem; /* 18px */
      height: 1.8rem; /* 18px */
    }
  }
`;

const ServicesSection = () => {
  return (
    <ServicesWrapper id="services">
      <OuterContainer>
        <InnerContainer>
          <Header>
            <Eyebrow>OUR SERVICES</Eyebrow>
            <MainHeading>What we can do for you</MainHeading>
            <Description>
            From one-off digital initiatives to long-term partnerships, we support businesses
with everything from process optimization to full-scale product development -
delivering results that last.
            </Description>
          </Header>
          
          <ServicesGrid>
            <ServiceCard className="service-card">
              <CardIcon>
                <FiMonitor />
              </CardIcon>
              <CardTitle>Web Apps</CardTitle>
              <CardSubtitle>DEV & SUPPORT</CardSubtitle>
              <CardDescription>
                From complex applications to bespoke platforms, we deliver high-performance systems that align with your goals and fuel business growth.
              </CardDescription>
              <CardTags>
                <Tag>REACT</Tag>
                <Tag>NEXT.JS</Tag>
                <Tag>VUE.JS</Tag>
                <Tag>TYPESCRIPT</Tag>
              </CardTags>
            </ServiceCard>
            
            <ServiceCard className="service-card">
              <CardIcon>
                <FiSmartphone />
              </CardIcon>
              <CardTitle>Mobile Apps</CardTitle>
              <CardSubtitle>DEV & SUPPORT</CardSubtitle>
              <CardDescription>
                We create mobile applications with a modern design that enhances the user experience.
              </CardDescription>
              <CardTags>
                <Tag>IOS</Tag>
                <Tag>ANDROID</Tag>
                <Tag>REACT</Tag>
                <Tag>NATIVE</Tag>
              </CardTags>
            </ServiceCard>
            
            <ServiceCard className="service-card">
              <CardIcon>
                <FiGlobe />
              </CardIcon>
              <CardTitle>Business Websites</CardTitle>
              <CardSubtitle>DEV & SUPPORT</CardSubtitle>
              <CardDescription>
                We create personalized websites that reflect the unique identity of your brand.
              </CardDescription>
              <CardTags>
                <Tag>WORDPRESS</Tag>
                <Tag>WEBFLOW</Tag>
                <Tag>WORDPRESS</Tag>
              </CardTags>
            </ServiceCard>
            
            <ServiceCard className="service-card">
              <CardIcon>
                <FiMail />
              </CardIcon>
              <CardTitle>Product & Marketing Landing Pages</CardTitle>
              <CardSubtitle>DEV & SUPPORT</CardSubtitle>
              <CardDescription>
                We create effective landing pages that engage your audience, showcase the value of your product, and ensure they receive the attention they deserve.
              </CardDescription>
              <CardTags>
                <Tag>A/B TESTING</Tag>
                <Tag>SEO</Tag>
                <Tag>ANALYTICS</Tag>
              </CardTags>
            </ServiceCard>
            
            <ServiceCard className="service-card">
              <CardIcon>
                <FiSettings />
              </CardIcon>
              <CardTitle>Technical team as a service</CardTitle>
              <CardSubtitle>BUILDING & MANAGING</CardSubtitle>
              <CardDescription>
                Whether you need ongoing technical support or assistance on demand, we can provide a flexible and professional extension to your team.
              </CardDescription>
              <CardTags>
                <Tag>PROJECT</Tag>
                <Tag>MANAGEMENT</Tag>
                <Tag>PROGRAMMING</Tag>
                <Tag>DIGITAL</Tag>
                <Tag>DESIGN</Tag>
              </CardTags>
            </ServiceCard>
            
            <ServiceCard className="service-card">
              <CardIcon>
                <FiTool />
              </CardIcon>
              <CardTitle>Custom Services</CardTitle>
              <CardSubtitle>TAILORED SOLUTIONS</CardSubtitle>
              <CardDescription>
                We offer bespoke development services tailored to your specific business needs. From custom integrations to specialized workflows, we build exactly what you envision.
              </CardDescription>
              <CardTags>
                <Tag>CUSTOM</Tag>
                <Tag>INTEGRATION</Tag>
                <Tag>API</Tag>
                <Tag>WORKFLOW</Tag>
              </CardTags>
            </ServiceCard>
          </ServicesGrid>
          
          <ToolStackSection>
            <ToolStackTitle>Our Tool Stack</ToolStackTitle>
            <ToolsGrid>
              <ToolIcon bgColor="#61dafb">
                <SiReact />
              </ToolIcon>
              <ToolIcon bgColor="#339933">
                <SiNodedotjs />
              </ToolIcon>
              <ToolIcon bgColor="#e11d48">
                <FiHeart />
              </ToolIcon>
              <ToolIcon bgColor="#3178c6">
                <SiTypescript />
              </ToolIcon>
              <ToolIcon bgColor="#5865f2">
                <SiDiscord />
              </ToolIcon>
              <ToolIcon bgColor="#000000">
                <SiApple />
              </ToolIcon>
              <ToolIcon bgColor="#3ddc84">
                <SiAndroid />
              </ToolIcon>
              <ToolIcon bgColor="#000000">
                <FiBox />
              </ToolIcon>
              <ToolIcon bgColor="#f24e1e">
                <SiFigma />
              </ToolIcon>
              <ToolIcon bgColor="#0099e5">
                <FiCode />
              </ToolIcon>
              <ToolIcon bgColor="#21759b">
                <SiWordpress />
              </ToolIcon>
            </ToolsGrid>
          </ToolStackSection>
        </InnerContainer>
      </OuterContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection; 