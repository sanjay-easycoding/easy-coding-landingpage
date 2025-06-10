import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TestimonialWrapper = styled.section`
  padding: 12rem 2rem; /* 120px 20px */

  
  @media (max-width: 76.8rem) { /* 768px */
    padding: 8rem 1.5rem; /* 80px 15px */
  }
`;

const Container = styled.div`
  max-width: 90rem; /* 900px */
  margin: 0 auto;
  text-align: center;
  position: relative;
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

const TestimonialSlide = styled.div`
  min-width: 100%;
  opacity: ${props => props.isActive ? 1 : 0.3};
  transition: opacity 0.5s ease-in-out;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 3.2rem; /* 32px */
  font-weight: 400;
  line-height: 1.4;
  color: #1e293b;
  margin-bottom: 6rem; /* 60px */
  font-style: italic;
  
  .highlight {
    color: #e11d48;
    font-weight: 600;
  }
  
  @media (max-width: 96rem) { /* 960px */
    font-size: 2.8rem; /* 28px */
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 2.4rem; /* 24px */
    margin-bottom: 4rem; /* 40px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 2rem; /* 20px */
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem; /* 40px */
`;

const ProfileImage = styled.div`
  width: 8rem; /* 80px */
  height: 8rem; /* 80px */
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem; /* 20px */
  box-shadow: 0 0.8rem 3.2rem rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfilePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.4rem; /* 24px */
  font-weight: 700;
`;

const ClientName = styled.h3`
  font-size: 2rem; /* 20px */
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.8rem; /* 8px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.8rem; /* 18px */
  }
`;

const ClientTitle = styled.p`
  font-size: 1.4rem; /* 14px */
  color: #64748b;
  font-weight: 500;
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.3rem; /* 13px */
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
  margin-bottom: 4rem; /* 40px */
  
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

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* 10px */
`;

const NavDot = styled.button`
  width: 1.2rem; /* 12px */
  height: 1.2rem; /* 12px */
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
  width: 4rem; /* 40px */
  height: 4rem; /* 40px */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
  font-size: 1.6rem; /* 16px */
  
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

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: `Working with this team was an absolute <span class="highlight">game-changer for our business</span>. Their flexible approach and attention to detail helped us streamline our processes and <span class="highlight">deliver results faster</span> than we anticipated.`,
      name: "Emily Johnson",
      title: "Lead Product Manager at NextGen Innovators",
      initials: "EJ",
      bgColor: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)"
    },
    {
      id: 2,
      quote: `The level of <span class="highlight">expertise and professionalism</span> shown by this team exceeded our expectations. They transformed our vision into reality and <span class="highlight">doubled our conversion rates</span> within just three months.`,
      name: "Michael Chen",
      title: "CEO at TechFlow Solutions",
      initials: "MC",
      bgColor: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
    },
    {
      id: 3,
      quote: `Outstanding work from start to finish! Their <span class="highlight">innovative solutions</span> and dedicated support helped us launch our platform ahead of schedule and <span class="highlight">under budget</span>.`,
      name: "Sarah Williams",
      title: "Product Director at InnovateNow",
      initials: "SW",
      bgColor: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <TestimonialWrapper>
      <Container>
        <CarouselContainer>
          <CarouselTrack currentIndex={currentIndex}>
            {testimonials.map((testimonial, index) => (
              <TestimonialSlide key={testimonial.id} isActive={index === currentIndex}>
                <TestimonialQuote 
                  dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                />
                
                <ClientInfo>
                  <ProfileImage>
                    <ProfilePlaceholder bgColor={testimonial.bgColor}>
                      {testimonial.initials}
                    </ProfilePlaceholder>
                  </ProfileImage>
                  
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientTitle>{testimonial.title}</ClientTitle>
                </ClientInfo>
              </TestimonialSlide>
            ))}
          </CarouselTrack>
        </CarouselContainer>
        
        <BookCallButton>
          Book a call
        </BookCallButton>
        
        <Navigation>
          <NavArrow onClick={prevTestimonial}>
            ←
          </NavArrow>
          
          {testimonials.map((_, index) => (
            <NavDot
              key={index}
              isActive={index === currentIndex}
              onClick={() => goToTestimonial(index)}
            />
          ))}
          
          <NavArrow onClick={nextTestimonial}>
            →
          </NavArrow>
        </Navigation>
      </Container>
    </TestimonialWrapper>
  );
};

export default TestimonialSection; 