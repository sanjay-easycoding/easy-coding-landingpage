import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
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
  FiTool,
  FiArrowRight
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
  
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 6rem 1.5rem; /* 60px 15px */
  }
`;

const OuterContainer = styled.div`
  max-width: 140rem; /* 1400px */
  margin: 0 auto;
`;

const InnerContainer = styled.div`
 background: rgba(255, 255, 255, 0.18); /* More transparent for glass effect */
  backdrop-filter: blur(1.6rem) saturate(180%); /* Stronger blur and saturation */
  -webkit-backdrop-filter: blur(1.6rem) saturate(180%);
    box-shadow: 
    0 0.8rem 3.2rem rgba(0, 0, 0, 0.06),
    0 0.2rem 0.8rem rgba(0, 0, 0, 0.02);
    
  border-radius: 4rem; /* 40px - curved edges */
  padding: 8rem 6rem; /* 80px 60px */

  
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
  color: #ff4d87; /* Red color */
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

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 2.4rem;
  margin-bottom: 6rem;
  grid-template-areas:
    "area1 area1 area2 area2 area3 area3"
    "area4 area4 area2 area2 area6 area6"
    "area4 area4 area5 area5 area5 area5";

  @media (max-width: 76.8rem) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "area1"
      "area2"
      "area3"
      "area4"
      "area5"
      "area6";
    gap: 1.6rem;
    margin-bottom: 4rem;
  }
`;

const IllustrationWrapper = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  font-size: 6rem;
  opacity: 0.15;
  color: #1a6ebc;
  transition: all 0.3s ease;
  z-index: 1;

  @media (max-width: 76.8rem) {
    font-size: 5rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const BentoCard = styled.div`
     border-radius: 1.2rem;
  background:rgb(239,239,239,1);
  border: 0.1rem solid #e2e8f0;
    box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);



  padding: 3.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 1.2rem 4rem rgba(0, 0, 0, 0.08);
    // background: #ffffff;
  }

  &:hover ${IllustrationWrapper} {
    transform: scale(1.1) rotate(5deg);
    opacity: 0.2;
  }
  
  &.medium {
    grid-column: span 2;
  }
  
  &.large {
    grid-column: span 3;
  }
  
  @media (max-width: 76.8rem) {
    padding: 2.4rem;
  }
`;

const CardEyebrow = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 2.4rem;
`;

const CardHeader = styled.h3`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.2;
  margin: 0;
  max-width: 80%;
`;

const CardDesc = styled.p`
  font-size: 1.4rem;
  color: #64748b;
  line-height: 1.6;
  font-weight: 400;
  margin: 1.6rem 0 0 0;
  max-width: 80%;
`;

const CardLink = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a6ebc;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 3.2rem;

  svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const CardList = styled.ul`
  font-size: 1.2rem;
  color: #475569;
  margin: 0 0 1.6rem 0;
  padding-left: 5.6rem;
  list-style: none;
  
  li {
    position: relative;
    padding-left: 1.6rem;
    margin-bottom: 0.8rem;
    line-height: 1.5;
    font-weight: 500;
    
    &:before {
      content: "▸";
      position: absolute;
      left: 0;
      color: #1a6ebc;
      font-weight: bold;
      font-size: 1.4rem;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 76.8rem) {
    font-size: 1.1rem;
    padding-left: 5.2rem;
  }
`;

const CardNote = styled.div`
  font-size: 1.2rem;
  color: #64748b;
  font-style: italic;
  margin-bottom: 0.8rem;
  padding-left: 5.6rem;
  background: rgba(26,110,188,0.05);
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border-left: 0.3rem solid #1a6ebc;
  margin-left: 5.6rem;
  margin-right: 0.8rem;
  
  @media (max-width: 76.8rem) {
    font-size: 1.1rem;
    padding-left: 1.2rem;
    margin-left: 5.2rem;
  }
`;

const CardTech = styled.div`
  font-size: 1.2rem;
  color: #1a6ebc;
  margin-bottom: 0.8rem;
  padding-left: 5.6rem;
  font-weight: 600;
  
  @media (max-width: 76.8rem) {
    font-size: 1.1rem;
    padding-left: 5.2rem;
  }
`;

const CTASection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

const BlueGradientButton = styled.button`
  background: linear-gradient(135deg, #00a5ff 0%, #0077cc 100%);
  color: #fff;
  border: none;
  padding: 1.6rem 3.2rem;
  border-radius: 999px;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 24px 0 rgba(0, 165, 255, 0.25), 0 1.5px 0 #0077cc;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  text-align: center;
  min-width: fit-content;
  white-space: nowrap;
  &:hover {
    background: linear-gradient(135deg, #0094e6 0%, #005fa3 100%);
    box-shadow: 0 12px 32px 0 rgba(0, 165, 255, 0.35), 0 2px 0 #005fa3;
    transform: translateY(-2px);
  }
`;

const ToolStackSection = styled.div`
  text-align: center;

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
    // background:rgb(239,239,239,1);
  border: 0.1rem solid #e2e8f0;

   box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);
  
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
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const services = [
    {
      icon: <FiMonitor />,
      ...t.services.cards.webApps
    },
    {
      icon: <FiSmartphone />,
      ...t.services.cards.mobileApps
    },
    {
      icon: <FiGlobe />,
      ...t.services.cards.businessWebsites
    },
    {
      icon: <FiMail />,
      ...t.services.cards.landingPages
    },
    {
      icon: <FiSettings />,
      ...t.services.cards.technicalTeam
    },
    {
      icon: <FiTool />,
      ...t.services.cards.customServices
    }
  ];

  return (
    <ServicesWrapper id="services">
      <OuterContainer>
        <InnerContainer>
          <Header>
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <MainHeading>{t.services.title}</MainHeading>
            <Description>{t.services.description}</Description>
          </Header>
          
          <BentoGrid>
            {/* 1. Web Applications */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area1'}}
            >
              <IllustrationWrapper><FiMonitor /></IllustrationWrapper>
              <CardContent>
                <div>
                  <CardEyebrow>Web Applications</CardEyebrow>
                  <CardHeader>Modern, responsive web platforms.</CardHeader>
                  <CardDesc>From customer portals to SaaS dashboards, we build applications tailored to your business needs.</CardDesc>
                </div>
                <CardLink href="#contact">
                  Learn more <FiArrowRight />
                </CardLink>
              </CardContent>
            </BentoCard>
            {/* 2. Mobile Applications */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area2'}}
            >
              <IllustrationWrapper><FiSmartphone /></IllustrationWrapper>
              <CardContent>
                <div>
                  <CardEyebrow>Mobile Applications</CardEyebrow>
                  <CardHeader>Native and hybrid mobile apps.</CardHeader>
                  <CardDesc>We craft fast, stable, and intuitive mobile apps for Android, iOS, or both platforms.</CardDesc>
                </div>
                <CardLink href="#contact">
                  Learn more <FiArrowRight />
                </CardLink>
              </CardContent>
            </BentoCard>
            {/* 3. Landing Pages & Microsites */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area3'}}
            >
              <IllustrationWrapper><FiGlobe /></IllustrationWrapper>
              <CardContent>
                <div>
                  <CardEyebrow>Landing Pages</CardEyebrow>
                  <CardHeader>High-converting landing pages.</CardHeader>
                  <CardDesc>We design and develop sites that drive engagement and maximize conversions for your campaigns.</CardDesc>
                </div>
                <CardLink href="#contact">
                  Learn more <FiArrowRight />
                </CardLink>
              </CardContent>
            </BentoCard>
            {/* 4. Email Marketing */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area4'}}
            >
              <IllustrationWrapper><FiMail /></IllustrationWrapper>
              <CardContent>
                <div>
                  <CardEyebrow>Email Marketing</CardEyebrow>
                  <CardHeader>Engaging email campaigns.</CardHeader>
                  <CardDesc>We create campaigns that nurture leads, drive customer engagement, and boost your marketing ROI.</CardDesc>
                </div>
                <CardLink href="#contact">
                  Learn more <FiArrowRight />
                </CardLink>
              </CardContent>
            </BentoCard>
            {/* 5. Technical Team */}
            <BentoCard 
              className="large" 
              style={{gridArea: 'area5'}}
            >
              <IllustrationWrapper><FiSettings /></IllustrationWrapper>
              <CardContent>
                <div>
                  <CardEyebrow>Technical Team</CardEyebrow>
                  <CardHeader>Build, maintain, and scale your products.</CardHeader>
                  <CardDesc>We provide dedicated technical teams with expertise across the full development stack.</CardDesc>
                </div>
                <CardLink href="#contact">
                  Learn more <FiArrowRight />
                </CardLink>
              </CardContent>
            </BentoCard>
            {/* 6. Custom Services */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area6'}}
            >
              <IllustrationWrapper><FiTool /></IllustrationWrapper>
              <CardContent>
                <div>
                  <CardEyebrow>Custom Services</CardEyebrow>
                  <CardHeader>Tailored solutions for your business.</CardHeader>
                  <CardDesc>From API development to legacy system modernization, we offer solutions to meet your specific needs.</CardDesc>
                </div>
                <CardLink href="#contact">
                  Learn more <FiArrowRight />
                </CardLink>
              </CardContent>
            </BentoCard>
          </BentoGrid>
          
          <ToolStackSection>
            <ToolStackTitle>{t.services.toolStack}</ToolStackTitle>
            <ToolsGrid>
              <ToolIcon bgColor="#61dafb">
                <SiReact />
              </ToolIcon>
              <ToolIcon bgColor="#339933">
                <SiNodedotjs />
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
          {/* <CTASection>
            <BlueGradientButton onClick={() => {
              const contactSection = document.getElementById('letsTalk');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}>
              Have a vision? Let&apos;s turn it into real software.
            </BlueGradientButton>
          </CTASection> */}
        </InnerContainer>
      </OuterContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection; 