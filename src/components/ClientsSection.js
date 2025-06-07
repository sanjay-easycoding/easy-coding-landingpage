import React from 'react';
import styled from 'styled-components';

const ClientsWrapper = styled.section`
  padding: 2rem 2rem; /* 80px 20px */
  background: rgb(245, 247, 251);
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 2rem 1.5rem; /* 60px 15px */
  }
`;

const Container = styled.div`
  max-width: 140rem; /* 1400px */
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem; /* 14px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em; /* 1px equivalent */
  color: #64748b;
  margin-bottom: 4rem; /* 40px */
  line-height: 3rem;
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.2rem; /* 12px */
    margin-bottom: 3rem; /* 30px */
  }
`;

const LogosGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem; /* 60px */
  flex-wrap: nowrap;
  
  @media (max-width: 140rem) { /* 1400px - Very large screens */
    gap: 5rem; /* 50px */
  }
  
  @media (max-width: 120rem) { /* 1200px - Large screens */
    gap: 4rem; /* 40px */
  }
  
  @media (max-width: 96rem) { /* 960px - Medium-large screens */
    gap: 3rem; /* 30px */
    flex-wrap: wrap;
    justify-content: center;
  }
  
  @media (max-width: 76.8rem) { /* 768px - Tablets */
    gap: 2.5rem; /* 25px */
    flex-wrap: wrap;
    max-width: 60rem; /* 600px - constraint width */
    margin: 0 auto;
  }
  
  @media (max-width: 64rem) { /* 640px - Small tablets */
    gap: 2rem; /* 20px */
    max-width: 50rem; /* 500px */
  }
  
  @media (max-width: 48rem) { /* 480px - Mobile */
    gap: 1.5rem; /* 15px */
    flex-direction: column;
    max-width: none;
  }
  
  @media (max-width: 32rem) { /* 320px - Very small mobile */
    gap: 1.2rem; /* 12px */
  }
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem; /* 15px */
  transition: all 0.3s ease;
  opacity: 0.6;
  filter: grayscale(100%);
  flex: 0 0 auto; /* Prevent stretching */
  
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    transform: translateY(-0.2rem); /* -2px */
  }
  
  @media (max-width: 96rem) { /* 960px */
    padding: 1.3rem; /* 13px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 1.2rem; /* 12px */
    flex: 0 0 calc(33.333% - 2rem); /* 3 per row on tablets */
    max-width: calc(33.333% - 2rem);
  }
  
  @media (max-width: 64rem) { /* 640px */
    flex: 0 0 calc(50% - 1rem); /* 2 per row on small tablets */
    max-width: calc(50% - 1rem);
  }
  
  @media (max-width: 48rem) { /* 480px */
    padding: 1.5rem; /* 15px - increased for mobile */
    flex: 0 0 auto;
    max-width: none;
    width: 100%;
  }
  
  @media (max-width: 32rem) { /* 320px */
    padding: 1.2rem; /* 12px */
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* 8px */
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  color: #64748b;
  white-space: nowrap;
  justify-content: center;
  text-align: center;
  
  @media (max-width: 96rem) { /* 960px */
    font-size: 1.5rem; /* 15px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    gap: 0.9rem; /* 9px */
  }
  
  @media (max-width: 64rem) { /* 640px */
    font-size: 1.3rem; /* 13px */
    gap: 0.8rem; /* 8px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.6rem; /* 16px - readable on mobile */
    gap: 1rem; /* 10px */
    justify-content: center;
  }
  
  @media (max-width: 32rem) { /* 320px */
    font-size: 1.4rem; /* 14px */
    gap: 0.8rem; /* 8px */
  }
`;

const LogoIcon = styled.div`
  width: 2.4rem; /* 24px */
  height: 2.4rem; /* 24px */
  border-radius: 0.4rem; /* 4px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 1.2rem; /* 12px */
  flex-shrink: 0; /* Prevent shrinking */
  
  @media (max-width: 96rem) { /* 960px */
    width: 2.3rem; /* 23px */
    height: 2.3rem; /* 23px */
    font-size: 1.1rem; /* 11px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    width: 2.2rem; /* 22px */
    height: 2.2rem; /* 22px */
    font-size: 1.1rem; /* 11px */
    border-radius: 0.4rem; /* 4px */
  }
  
  @media (max-width: 64rem) { /* 640px */
    width: 2.1rem; /* 21px */
    height: 2.1rem; /* 21px */
    font-size: 1rem; /* 10px */
    border-radius: 0.3rem; /* 3px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    width: 2.4rem; /* 24px - back to comfortable size */
    height: 2.4rem; /* 24px */
    font-size: 1.2rem; /* 12px */
    border-radius: 0.4rem; /* 4px */
  }
  
  @media (max-width: 32rem) { /* 320px */
    width: 2.2rem; /* 22px */
    height: 2.2rem; /* 22px */
    font-size: 1.1rem; /* 11px */
  }
`;

const NovaIcon = styled(LogoIcon)`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
`;

const DeliveryIcon = styled(LogoIcon)`
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border-radius: 50%;
`;

const LogoipsumIcon = styled(LogoIcon)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
`;

const BrandIcon = styled(LogoIcon)`
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
`;

const TechIcon = styled(LogoIcon)`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
`;

const StudioIcon = styled(LogoIcon)`
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
`;

const ClientsSection = () => {
  return (
    <ClientsWrapper>
      <Container>
        <SectionTitle>Building Digital Solutions with Trusted Partners</SectionTitle>
        
        <LogosGrid>
          <LogoItem>
            <Logo>
              <NovaIcon>N</NovaIcon>
              Nice Guides
            </Logo>
          </LogoItem>
          
          <LogoItem>
            <Logo>
              <DeliveryIcon>A</DeliveryIcon>
              Aspilos
            </Logo>
          </LogoItem>
          
          <LogoItem>
            <Logo>
              <LogoipsumIcon>G</LogoipsumIcon>
              G24
            </Logo>
          </LogoItem>
          
       


        </LogosGrid>
      </Container>
    </ClientsWrapper>
  );
};

export default ClientsSection; 