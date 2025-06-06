import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.section`
  padding: 10rem 2rem; /* 100px 20px */
  background: rgb(245, 247, 251);
  
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
  max-width: 60rem; /* 600px */
  margin: 0 auto;
  
  @media (max-width: 76.8rem) { /* 768px */
    font-size: 1.4rem; /* 14px */
    max-width: 50rem; /* 500px */
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => -props.currentIndex * (100 / props.visibleCards)}%);
`;

const BlogGrid = styled.div`
  display: flex;
  gap: 3rem; /* 30px */
  width: 100%;
  flex-shrink: 0;
  
  @media (max-width: 96rem) { /* 960px */
    gap: 2.4rem; /* 24px */
  }
  
  @media (max-width: 48rem) { /* 480px */
    gap: 2rem; /* 20px */
  }
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 1.6rem; /* 16px */
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.06);
  flex: ${props => `0 0 calc(${100 / props.visibleCards}% - ${props.gap || 3}rem * ${props.visibleCards - 1} / ${props.visibleCards})`};
  
  &:hover {
    transform: translateY(-0.4rem); /* -4px */
    box-shadow: 0 1.2rem 4.8rem rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 76.8rem) { /* 768px */
    flex: ${props => `0 0 calc(50% - 1.2rem)`}; /* 2 cards on tablet */
  }
  
  @media (max-width: 48rem) { /* 480px */
    flex: ${props => `0 0 calc(100% - 0rem)`}; /* 1 card on mobile */
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 20rem; /* 200px */
  background: ${props => props.bgColor || 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 48rem) { /* 480px */
    height: 18rem; /* 180px */
  }
`;

const BlogImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem; /* 14px */
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  
  /* Add some visual elements to make it look more like a blog image */
  &::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 2rem;
    right: 2rem;
    height: 0.4rem;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 0.2rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    width: 6rem;
    height: 6rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.8rem;
  }
`;

const BlogContent = styled.div`
  padding: 2.4rem; /* 24px */
  
  @media (max-width: 48rem) { /* 480px */
    padding: 2rem; /* 20px */
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* 8px */
  margin-bottom: 1.2rem; /* 12px */
  font-size: 1.2rem; /* 12px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
`;

const BlogCategory = styled.span`
  color: #e11d48;
`;

const BlogDate = styled.span`
  &::before {
    content: '•';
    margin-right: 0.8rem;
    color: #cbd5e1;
  }
`;

const BlogTitle = styled.h3`
  font-size: 2rem; /* 20px */
  font-weight: 600;
  line-height: 1.3;
  color: #1e293b;
  margin-bottom: 1.2rem; /* 12px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.8rem; /* 18px */
  }
`;

const BlogExcerpt = styled.p`
  font-size: 1.4rem; /* 14px */
  line-height: 1.5;
  color: #64748b;
  margin-bottom: 1.6rem; /* 16px */
  
  @media (max-width: 48rem) { /* 480px */
    font-size: 1.3rem; /* 13px */
  }
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.3rem; /* 13px */
  font-weight: 600;
  color: #e11d48;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #be185d;
    transform: translateX(0.2rem);
  }
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(0.2rem);
  }
`;

/* Carousel Navigation */
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem; /* 20px */
  margin-top: 4rem; /* 40px */
  
  @media (max-width: 48rem) { /* 480px */
    margin-top: 3rem; /* 30px */
  }
`;

const NavArrow = styled.button`
  background: white;
  border: 0.2rem solid #e2e8f0;
  border-radius: 50%;
  width: 5rem; /* 50px */
  height: 5rem; /* 50px */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
  font-size: 1.8rem; /* 18px */
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
  
  &:hover {
    border-color: #e11d48;
    color: #e11d48;
    transform: scale(1.05);
    box-shadow: 0 0.8rem 2.4rem rgba(225, 29, 72, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      border-color: #e2e8f0;
      color: #64748b;
      transform: none;
      box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
    }
  }
  
  @media (max-width: 48rem) { /* 480px */
    width: 4rem; /* 40px */
    height: 4rem; /* 40px */
    font-size: 1.6rem; /* 16px */
  }
`;

const NavDots = styled.div`
  display: flex;
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

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const blogPosts = [
    {
      id: 1,
      title: "Should I build an in-house mobile team or outsource mobile development",
      excerpt: "Explore the pros and cons of building an internal mobile development team versus outsourcing to external agencies.",
      category: "TECH",
      date: "JAN 25, 2025",
      bgColor: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", // Orange
      link: "#"
    },
    {
      id: 2,
      title: "Should I build an in-house mobile team or outsource mobile development",
      excerpt: "Discover the key factors to consider when deciding between in-house development and outsourcing for your mobile app project.",
      category: "TECH",
      date: "JAN 25, 2025",
      bgColor: "linear-gradient(135deg, #1f2937 0%, #111827 100%)", // Dark
      link: "#"
    },
    {
      id: 3,
      title: "Should I build an in-house mobile team or outsource mobile development",
      excerpt: "Learn about the cost implications, timeline considerations, and quality factors in mobile development decisions.",
      category: "TECH",
      date: "JAN 25, 2025",
      bgColor: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)", // Purple
      link: "#"
    },
    {
      id: 4,
      title: "Should I build an in-house mobile team or outsource mobile development",
      excerpt: "A comprehensive guide to making the right choice for your startup's mobile development strategy.",
      category: "TECH",
      date: "JAN 25, 2025",
      bgColor: "linear-gradient(135deg, #059669 0%, #047857 100%)", // Green
      link: "#"
    },
    {
      id: 5,
      title: "Advanced React Patterns for Scalable Applications",
      excerpt: "Discover advanced React patterns and techniques to build maintainable and scalable applications.",
      category: "TECH",
      date: "JAN 20, 2025",
      bgColor: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", // Blue
      link: "#"
    },
    {
      id: 6,
      title: "Cloud Architecture Best Practices for Startups",
      excerpt: "Essential cloud architecture patterns and practices every startup should know for building robust applications.",
      category: "TECH",
      date: "JAN 15, 2025",
      bgColor: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)", // Pink
      link: "#"
    }
  ];

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth <= 1200) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, blogPosts.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <BlogWrapper>
      <Container>
        <Header>
          <Eyebrow>BLOG</Eyebrow>
          <MainHeading>What we've been writing about</MainHeading>
          <Description>
            We share insights on product development, technology, 
            and startup building.
          </Description>
        </Header>
        
        <CarouselContainer>
          <CarouselWrapper currentIndex={currentIndex} visibleCards={visibleCards}>
            <BlogGrid>
              {blogPosts.map((post) => (
                <BlogCard key={post.id} visibleCards={visibleCards} gap={3}>
                  <BlogImage bgColor={post.bgColor}>
                    <BlogImagePlaceholder bgColor={post.bgColor}>
                      Blog Article Preview
                    </BlogImagePlaceholder>
                  </BlogImage>
                  
                  <BlogContent>
                    <BlogMeta>
                      <BlogCategory>{post.category}</BlogCategory>
                      <BlogDate>{post.date}</BlogDate>
                    </BlogMeta>
                    
                    <BlogTitle>{post.title}</BlogTitle>
                    
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    
                    <ReadMoreLink href={post.link}>
                      Read More
                    </ReadMoreLink>
                  </BlogContent>
                </BlogCard>
              ))}
            </BlogGrid>
          </CarouselWrapper>
        </CarouselContainer>
        
        <Navigation>
          <NavArrow onClick={prevSlide} disabled={currentIndex === 0}>
            ←
          </NavArrow>
          
          <NavDots>
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <NavDot
                key={index}
                isActive={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </NavDots>
          
          <NavArrow onClick={nextSlide} disabled={currentIndex === maxIndex}>
            →
          </NavArrow>
        </Navigation>
      </Container>
    </BlogWrapper>
  );
};

export default BlogSection; 