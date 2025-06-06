import React from 'react';
import styled from 'styled-components';

const TeamWrapper = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.dark};
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  .gradient-text {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TeamMember = styled.div`
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const MemberAvatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.gradient.start} 0%, ${props => props.gradient.end} 100%);
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const MemberBio = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const MemberSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Skill = styled.span`
  background: rgba(255, 107, 107, 0.2);
  color: ${props => props.theme.colors.secondary};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 107, 107, 0.3);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const StatsSection = styled.div`
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled.div`
  .number {
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    display: block;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .label {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    font-size: 1rem;
  }
`;

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Visionary leader with 15+ years in tech, passionate about building innovative solutions that drive business growth.',
      skills: ['Strategy', 'Leadership', 'Product Vision'],
      avatar: '👩‍💼',
      gradient: { start: '#ff6b6b', end: '#ee5a52' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack architect specializing in scalable systems, cloud infrastructure, and emerging technologies.',
      skills: ['Architecture', 'DevOps', 'AI/ML'],
      avatar: '👨‍💻',
      gradient: { start: '#74b9ff', end: '#0984e3' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative designer focused on user-centered design principles and creating beautiful, intuitive experiences.',
      skills: ['UI/UX', 'Design Systems', 'Prototyping'],
      avatar: '👩‍🎨',
      gradient: { start: '#fd79a8', end: '#e84393' }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Senior developer with expertise in modern frameworks, performance optimization, and clean code practices.',
      skills: ['React', 'Node.js', 'TypeScript'],
      avatar: '👨‍🔬',
      gradient: { start: '#a29bfe', end: '#6c5ce7' }
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <TeamWrapper id="team">
      <Container>
        <SectionHeader>
          <SectionTitle>
            Who's behind <span className="gradient-text">EasyCoding</span>
          </SectionTitle>
          <SectionSubtitle>
            Meet our passionate team of experts dedicated to bringing your 
            vision to life with cutting-edge technology and innovative solutions.
          </SectionSubtitle>
        </SectionHeader>

        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <MemberAvatar gradient={member.gradient}>
                {member.avatar}
              </MemberAvatar>
              
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
              
              <MemberSkills>
                {member.skills.map((skill, skillIndex) => (
                  <Skill key={skillIndex}>{skill}</Skill>
                ))}
              </MemberSkills>

              <SocialLinks>
                <SocialLink href="#" aria-label="LinkedIn">in</SocialLink>
                <SocialLink href="#" aria-label="Twitter">𝕏</SocialLink>
                <SocialLink href="#" aria-label="GitHub">gh</SocialLink>
              </SocialLinks>
            </TeamMember>
          ))}
        </TeamGrid>

        <StatsSection>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <span className="number">{stat.number}</span>
                <span className="label">{stat.label}</span>
              </StatItem>
            ))}
          </StatsGrid>
        </StatsSection>
      </Container>
    </TeamWrapper>
  );
};

export default TeamSection; 