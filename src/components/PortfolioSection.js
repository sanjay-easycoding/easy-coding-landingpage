import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';


const PortfolioWrapper = styled.section`
  padding: 10rem 2rem; /* 100px 20px */
  
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 8rem 1.5rem; /* 80px 15px */
  }
`;

const Container = styled.div`
  max-width: 140rem; /* 1400px */
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 8rem; /* 80px */
  
  @media (max-width: 76.8rem) { /* 768px */
    margin-bottom: 6rem; /* 60px */
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
  max-width: 50rem; /* 500px */
  margin: 0 auto;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    max-width: 45rem; /* 450px */
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem; /* 80px */
  
  @media (max-width: 76.8rem) { /* 768px */
    gap: 5rem; /* 50px */
  }
`;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: ${props => props.reverse ? '1fr 1.5fr' : '1.5fr 1fr'};
  gap: 5rem; /* 50px */
  align-items: stretch;
  background: white;
  border-radius: 2.4rem; /* 24px */
  padding: 4rem; /* 40px */
  box-shadow: 0 0.8rem 3.2rem rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  min-height: 45rem; /* 450px */
  
  &:hover {
    transform: translateY(-0.4rem); /* -4px */
    box-shadow: 0 1.6rem 6.4rem rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 96rem) { /* 960px */
    gap: 4rem; /* 40px */
    padding: 3rem; /* 30px */
    min-height: 38rem; /* 380px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    grid-template-columns: 1fr;
    gap: 2.4rem; /* 24px */
    padding: 2rem; /* 20px */
    min-height: auto;
  }
`;

const ProjectImage = styled.div`
  order: ${props => props.reverse ? '2' : '1'};
  border-radius: 1.6rem; /* 16px */
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  
  @media (max-width: 76.8rem) { /* 768px */
    order: 1;
    aspect-ratio: 16/10;
  }
`;

const ProjectContent = styled.div`
  order: ${props => props.reverse ? '1' : '2'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0; /* 10px 0 */
  
  @media (max-width: 76.8rem) { /* 768px */
    order: 2;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem; /* 20px */
`;

const ProjectBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* 10px */
`;

const ProjectIcon = styled.div`
  width: 3.2rem; /* 32px */
  height: 3.2rem; /* 32px */
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem; /* 14px */
  font-weight: 700;
  box-shadow: 0 0.4rem 1.2rem rgba(59, 130, 246, 0.3);
`;

const ProjectClient = styled.span`
  font-size: 1.2rem; /* 12px */
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ViewProjectButton = styled.button`
  background: transparent;
  color: #94a3b8;
  border: none;
  padding: 0;
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &:hover {
    color: #e11d48;
    transform: translateX(0.4rem);
  }
  
  &::after {
    content: '↗';
    font-size: 1.6rem;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translate(0.2rem, -0.2rem);
  }
`;

const ContentMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.h3`
  font-size: 3.2rem; /* 32px */
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem; /* 20px */
  line-height: 1.1;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 2.8rem; /* 28px */
    text-align: center;
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 2.4rem; /* 24px */
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.6rem; /* 16px */
  line-height: 1.6;
  color: #64748b;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    text-align: center;
  }
`;

const ContentFooter = styled.div`
  margin-top: 2rem; /* 20px */
`;

const ProjectTags = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 76.8rem) { /* 768px */
    justify-content: center;
  }
`;

const TagText = styled.span`
  font-size: 1.2rem; /* 12px */
  font-weight: 500;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

// Project screenshot with realistic styling
const ProjectScreenshot = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 1.2rem; /* 12px */
  position: relative;
  overflow: hidden;
  min-height: 25rem; /* 250px */
  
  /* Browser chrome simulation */
  &::before {
    content: '';
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    right: 1.2rem;
    height: 2.4rem;
    background: white;
    border-radius: 0.8rem 0.8rem 0 0;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
  }
  
  /* Traffic lights */
  &::after {
    content: '';
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 0.8rem;
    height: 0.8rem;
    background: #ff5f57;
    border-radius: 50%;
    box-shadow: 
      1.2rem 0 0 #ffbd2e,
      2.4rem 0 0 #28ca42;
  }
  
  /* Website content simulation */
  > div {
    position: absolute;
    top: 5rem;
    left: 1.2rem;
    right: 1.2rem;
    bottom: 1.2rem;
    background: white;
    border-radius: 0 0 0.8rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 600;
    color: #64748b;
  }
`;

const PortfolioSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const projects = t.portfolio.projects;

  return (
    <PortfolioWrapper id="portfolio">
      <Container>
        <Header>
          <Eyebrow>{t.portfolio.eyebrow}</Eyebrow>
          <MainHeading>{t.portfolio.title}</MainHeading>
          <Description>{t.portfolio.description}</Description>
        </Header>
        
        <ProjectsGrid>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} reverse={project.reverse}>
              <ProjectImage reverse={project.reverse}>
                {project.image ? (
                  <img src={project?.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.2rem'}} />
                ) : (
                  <ProjectScreenshot>
                    <div>{project.title} Website</div>
                  </ProjectScreenshot>
                )}
              </ProjectImage>
              
              <ProjectContent reverse={project.reverse}>
                <ContentHeader>
                  <ProjectBadge>
                    <ProjectIcon>N</ProjectIcon>
                    <ProjectClient>{project.client}</ProjectClient>
                  </ProjectBadge>
                  <ViewProjectButton>
                    {t.portfolio.viewProject}
                  </ViewProjectButton>
                </ContentHeader>
                
                <ContentMain>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ContentMain>
                
                <ContentFooter>
                  <ProjectTags>
                    <TagText>{project.tags}</TagText>
                  </ProjectTags>
                </ContentFooter>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </PortfolioWrapper>
  );
};

export default PortfolioSection; 