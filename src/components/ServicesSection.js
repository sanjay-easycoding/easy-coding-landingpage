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
  background: #eae0f3;
  border-radius: 1.2rem; /* 12px */
  padding: 2rem; /* 20px */
  transition: all 0.3s ease;
  border: 0.1rem solid #e2e8f0; /* 1px */
  
  &:hover {
    transform: translateY(-0.2rem); /* -2px */
    box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.06);
    border-color: #7f2eb4;
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 1.8rem; /* 18px */
  }
`;

const CardIcon = styled.div`
  width: 4rem; /* 40px */
  height: 4rem; /* 40px */
  background: transparent;
  border: 0.2rem solid #7f2eb4; /* 2px red border */
  border-radius: 0.8rem; /* 8px */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.6rem; /* 16px */
  color: #7f2eb4;
  
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
  color: #7f2eb4;
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
  // background: rgb(245, 247, 251); /* Same as outer background */
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
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index} className="service-card">
                <CardIcon>{service.icon}</CardIcon>
                <CardTitle>{service.title}</CardTitle>
                <CardSubtitle>{service.subtitle}</CardSubtitle>
                <CardDescription>{service.description}</CardDescription>
              <CardTags>
                  {service.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
              </CardTags>
            </ServiceCard>
            ))}
          </ServicesGrid>
          
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
        </InnerContainer>
      </OuterContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection; 