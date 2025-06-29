import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId: string, fallbackUrl?: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Get the actual navbar height dynamically
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight + 20 : 120; // Add 20px buffer
      
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    } else if (fallbackUrl) {
      // If element not found and fallback URL provided, navigate to it
      window.location.href = fallbackUrl;
    }
  }, []);

  return { scrollToSection };
}; 