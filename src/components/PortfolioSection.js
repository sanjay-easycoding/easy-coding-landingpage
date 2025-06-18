import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const PortfolioWrapper = styled.section`
  padding: 10rem 2rem;
  @media (max-width: 76.8rem) {
    padding: 8rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  @media (max-width: 76.8rem) {
    margin-bottom: 6rem;
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
  max-width: 50rem;
  margin: 0 auto;
  @media (max-width: 76.8rem) {
    font-size: 1.4rem;
    max-width: 45rem;
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => -props.currentIndex * 100}%);
`;

const ProjectSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(1.6rem) saturate(180%);
  -webkit-backdrop-filter: blur(1.6rem) saturate(180%);
  // box-shadow: 0 0.8rem 3.2rem rgba(0, 0, 0, 0.06), 0 0.2rem 0.8rem rgba(0, 0, 0, 0.02);
  display: grid;
  grid-template-columns: ${props => props.reverse ? '1fr 1.5fr' : '1.5fr 1fr'};
  gap: 5rem;
  align-items: stretch;
  border-radius: 2.4rem;
  padding: 4rem;
  min-height: 45rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.4rem);
    scale: 1.01;
    // box-shadow: 0 1.6rem 6.4rem rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 96rem) {
    gap: 4rem;
    padding: 3rem;
    min-height: 38rem;
  }
  @media (max-width: 76.8rem) {
    grid-template-columns: 1fr;
    gap: 2.4rem;
    padding: 2rem;
    min-height: auto;
  }
`;

const ProjectImage = styled.div`
  order: ${props => props.reverse ? '2' : '1'};
  border-radius: 1.6rem;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  @media (max-width: 76.8rem) {
    order: 1;
    aspect-ratio: 16/10;
  }
`;

const ProjectContent = styled.div`
  order: ${props => props.reverse ? '1' : '2'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  @media (max-width: 76.8rem) {
    order: 2;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProjectBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProjectIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  box-shadow: 0 0.4rem 1.2rem rgba(59, 130, 246, 0.3);
`;

const ProjectClient = styled.span`
  font-size: 1.2rem;
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
  font-size: 1.4rem;
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
  font-size: 3.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  line-height: 1.1;
  @media (max-width: 76.8rem) {
    font-size: 2.8rem;
    text-align: center;
  }
  @media (max-width: 48rem) {
    font-size: 2.4rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #64748b;
  @media (max-width: 76.8rem) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const ContentFooter = styled.div`
  margin-top: 2rem;
`;

const ProjectTags = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 76.8rem) {
    justify-content: center;
  }
`;

const TagText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ProjectScreenshot = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 1.2rem;
  position: relative;
  overflow: hidden;
  min-height: 25rem;
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
  &::after {
    content: '';
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 0.8rem;
    height: 0.8rem;
    background: #ff5f57;
    border-radius: 50%;
    box-shadow: 1.2rem 0 0 #ffbd2e, 2.4rem 0 0 #28ca42;
  }
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

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
`;

const NavDot = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: none;
  background: ${props => props.isActive ? '#e11d48' : '#cbd5e1'};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${props => props.isActive ? '#be185d' : '#94a3b8'};
    transform: scale(1.1);
  }
`;

const NavArrow = styled.button`
  background: transparent;
  border: 0.2rem solid #e2e8f0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
  font-size: 1.6rem;
  &:hover {
    border-color: #e11d48;
    color: #e11d48;
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PortfolioSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const projects = t.portfolio.projects;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextProject, 6000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <PortfolioWrapper id="portfolio">
      <Container>
        <Header>
          <Eyebrow>{t.portfolio.eyebrow}</Eyebrow>
          <MainHeading>{t.portfolio.title}</MainHeading>
          <Description>{t.portfolio.description}</Description>
        </Header>
        <CarouselContainer>
          <CarouselTrack currentIndex={currentIndex}>
            {projects.map((project, idx) => (
              <ProjectSlide key={idx}>
                <ProjectCard reverse={project.reverse}>
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
              </ProjectSlide>
            ))}
          </CarouselTrack>
        </CarouselContainer>
        <Navigation>
          <NavArrow onClick={prevProject}>
            ←
          </NavArrow>
          {projects.map((_, index) => (
            <NavDot
              key={index}
              isActive={index === currentIndex}
              onClick={() => goToProject(index)}
            />
          ))}
          <NavArrow onClick={nextProject}>
            →
          </NavArrow>
        </Navigation>
      </Container>
    </PortfolioWrapper>
  );
};

export default PortfolioSection; 