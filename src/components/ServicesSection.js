import React, { useRef, useEffect } from 'react';
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
import { motion, useAnimation, useInView } from 'framer-motion';

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

const BentoCard = styled(motion.div)`
  background: white;
  border-radius: 2.4rem;
  padding: 3.2rem;
  box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: 0 0.8rem 3.2rem rgba(0, 0, 0, 0.1);
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

const IconWrapper = styled.div`
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
  font-size: 2.8rem;
  color: #1a6ebc;
  background: rgba(26,110,188,0.08);
  border-radius: 1.2rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  z-index: 2;
  ${BentoCard}:hover & {
    background: linear-gradient(135deg, #00a5ff 0%, #0077cc 100%);
    color: #fff;
  }
`;

const CardHeader = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  color: #1e293b;
  padding-left: 4.8rem;
`;

const CardDesc = styled.p`
  font-size: 1.3rem;
  color: #64748b;
  margin-bottom: 1.2rem;
  padding-left: 4.8rem;
`;

const CardList = styled.ul`
  font-size: 1.1rem;
  color: #1a6ebc;
  margin: 0 0 1.2rem 0;
  padding-left: 5.2rem;
  list-style: disc inside;
`;

const CardNote = styled.div`
  font-size: 1.1rem;
  color: #64748b;
  font-style: italic;
  margin-bottom: 0.8rem;
  padding-left: 4.8rem;
`;

const CardTech = styled.div`
  font-size: 1.1rem;
  color: #1a6ebc;
  margin-bottom: 0.8rem;
  padding-left: 4.8rem;
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
  const lastScrollY = useRef(window.scrollY);
  const scrollDirection = useRef('down');
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY.current) {
        scrollDirection.current = 'down';
      } else if (currentScroll < lastScrollY.current) {
        scrollDirection.current = 'up';
      }
      lastScrollY.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      // Custom sequence: 3rd -> 4th -> 1st -> 2nd -> 5th -> 6th
      const sequence = async () => {
        await controls.start('visible', { delay: 0.2 }); // 3rd box
        await controls.start('visible', { delay: 0.2 }); // 4th box
        await controls.start('visible', { delay: 0.2 }); // 1st box
        await controls.start('visible', { delay: 0.2 }); // 2nd box
        await controls.start('visible', { delay: 0.2 }); // 5th box
        await controls.start('visible', { delay: 0.2 }); // 6th box
      };
      sequence();
    } else if (scrollDirection.current === 'up') {
      controls.start('exit');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls, scrollDirection.current]);

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    },
    exit: (direction) => {
      const scatterDirections = {
        'area1': { x: -300, y: -200 },
        'area2': { x: 0, y: -300 },
        'area3': { x: 300, y: -200 },
        'area4': { x: -300, y: 200 },
        'area5': { x: 0, y: 300 },
        'area6': { x: 300, y: 200 }
      };
      
      return {
        opacity: 0,
        ...scatterDirections[direction],
        transition: {
          duration: 0.6,
          ease: 'easeIn'
        }
      };
    }
  };

  const getCardDirection = (area) => {
    switch(area) {
      case 'area1': return 'left';
      case 'area2': return 'up';
      case 'area3': return 'right';
      case 'area4': return 'left';
      case 'area5': return 'down';
      case 'area6': return 'right';
      default: return 'up';
    }
  };

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
    <ServicesWrapper id="services" ref={sectionRef}>
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
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom="area1"
            >
              <IconWrapper><FiMonitor /></IconWrapper>
              <CardHeader>Web Applications</CardHeader>
              <CardDesc>We build modern, responsive web platforms — from customer portals to SaaS dashboards — tailored to your business needs.</CardDesc>
              <CardList>
                <li>Admin dashboards</li>
                <li>Booking systems</li>
                <li>CMS & content portals</li>
                <li>Real-time web apps</li>
              </CardList>
              <CardNote>🔧 Built with React, Next.js, Vue.js — always tailored to your users.</CardNote>
            </BentoCard>
            {/* 2. Mobile Applications */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area2'}}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom="area2"
            >
              <IconWrapper><FiSmartphone /></IconWrapper>
              <CardHeader>Mobile Applications</CardHeader>
              <CardDesc>We craft native and hybrid mobile apps that feel fast, stable, and intuitive — designed for Android, iOS, or both.</CardDesc>
              <CardList>
                <li>Consumer-facing apps</li>
                <li>Delivery or logistics apps</li>
                <li>Internal team apps</li>
                <li>Event & booking apps</li>
              </CardList>
              <CardNote>🔧 Powered by Swift, Kotlin, Flutter, React Native.</CardNote>
            </BentoCard>
            {/* 3. Landing Pages & Microsites */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area3'}}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom="area3"
            >
              <IconWrapper><FiGlobe /></IconWrapper>
              <CardHeader>Landing Pages & Microsites</CardHeader>
              <CardDesc>We design and develop high-converting landing pages and microsites that drive engagement and conversions.</CardDesc>
              <CardList>
                <li>Product launches</li>
                <li>Marketing campaigns</li>
                <li>Event pages</li>
                <li>Portfolio sites</li>
              </CardList>
              <CardNote>🎯 Optimized for conversions and user experience.</CardNote>
            </BentoCard>
            {/* 4. Email Marketing */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area4'}}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom="area4"
            >
              <IconWrapper><FiMail /></IconWrapper>
              <CardHeader>Email Marketing</CardHeader>
              <CardDesc>We create engaging email campaigns that nurture leads and drive customer engagement.</CardDesc>
              <CardList>
                <li>Newsletter templates</li>
                <li>Automated sequences</li>
                <li>Transactional emails</li>
                <li>Campaign management</li>
              </CardList>
              <CardNote>📧 Designed for maximum deliverability and engagement.</CardNote>
            </BentoCard>
            {/* 5. Technical Team */}
            <BentoCard 
              className="large" 
              style={{gridArea: 'area5'}}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom="area5"
            >
              <IconWrapper><FiSettings /></IconWrapper>
              <CardHeader>Technical Team</CardHeader>
              <CardDesc>We provide dedicated technical teams to help you build and maintain your digital products.</CardDesc>
              <CardList>
                <li>Frontend developers</li>
                <li>Backend engineers</li>
                <li>DevOps specialists</li>
                <li>QA engineers</li>
              </CardList>
              <CardNote>👥 Flexible team sizes and engagement models.</CardNote>
            </BentoCard>
            {/* 6. Custom Services */}
            <BentoCard 
              className="medium" 
              style={{gridArea: 'area6'}}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom="area6"
            >
              <IconWrapper><FiTool /></IconWrapper>
              <CardHeader>Custom Services</CardHeader>
              <CardDesc>We offer tailored solutions to meet your specific business needs and requirements.</CardDesc>
              <CardList>
                <li>API development</li>
                <li>Database design</li>
                <li>Cloud solutions</li>
                <li>Legacy system updates</li>
              </CardList>
              <CardNote>🛠️ Customized to your exact specifications.</CardNote>
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