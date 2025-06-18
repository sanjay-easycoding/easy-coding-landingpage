import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 1.6rem; /* 16px */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background.default};
  }

  *, *::before, *::after {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  input, textarea, select {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    position: relative;
  }

  /* Container utility */
  .container {
    max-width: 120rem; /* 1200px */
    margin: 0 auto;
    padding: 0 2rem; /* 20px */

    @media (max-width: 76.8rem) { /* 768px */
      padding: 0 1.6rem; /* 16px */
    }
  }

  /* Typography utilities */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  /* Gradient text utility */
  .gradient-text {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.main} 0%, ${({ theme }) => theme.colors.primary.dark} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  /* Button utilities */
  .btn-primary {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.main} 0%, ${({ theme }) => theme.colors.primary.dark} 100%);
    color: ${({ theme }) => theme.colors.common.white};
    padding: 1.2rem 2.4rem; /* 12px 24px */
    border-radius: 0.8rem; /* 8px */
    font-weight: 600;
    font-size: 1.6rem; /* 16px */
    transition: all 0.3s ease;
    box-shadow: 0 0.4rem 1.2rem ${({ theme }) => `${theme.colors.primary.main}40`};
    
    &:hover {
      transform: translateY(-0.2rem); /* -2px */
      box-shadow: 0 0.8rem 2.4rem ${({ theme }) => `${theme.colors.primary.main}59`};
    }
  }

  .btn-secondary {
    background: transparent;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: 1.2rem 2.4rem; /* 12px 24px */
    border: 0.2rem solid ${({ theme }) => theme.colors.border.light}; /* 2px */
    border-radius: 0.8rem; /* 8px */
    font-weight: 600;
    font-size: 1.6rem; /* 16px */
    transition: all 0.3s ease;
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.main};
      transform: translateY(-0.2rem); /* -2px */
    }
  }
`;

export const theme = {
  colors: {
    // Primary colors
    primary: {
      main: '#e53e3e',
      dark: '#c53030',
      light: '#feb2b2',
    },
    // Secondary colors
    secondary: {
      main: '#ed64a6',
      dark: '#b83280',
      light: '#f687b3',
    },
    // Accent colors
    accent: {
      main: '#38b2ac',
      dark: '#2c7a7b',
      light: '#4fd1c5',
    },
    // Background colors
    background: {
      default: '#9090902e',
      paper: '#ffffff',
      dark: 'rgb(15, 23, 42)',
      darkGradient: 'rgb(30, 41, 59)',
    },
    // Text colors
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
      light: '#ffffff',
      muted: '#718096',
    },
    // Border colors
    border: {
      light: '#e2e8f0',
      dark: '#cbd5e0',
    },
    // Status colors
    status: {
      success: '#48bb78',
      error: '#e53e3e',
      warning: '#ed8936',
      info: '#4299e1',
    },
    // Common colors
    common: {
      black: '#1a202c',
      white: '#ffffff',
    },
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  breakpoints: {
    mobile: '48rem', /* 480px */
    tablet: '76.8rem', /* 768px */
    desktop: '102.4rem', /* 1024px */
    large: '120rem', /* 1200px */
  },
  spacing: {
    xs: '0.8rem', /* 8px */
    sm: '1.6rem', /* 16px */
    md: '2.4rem', /* 24px */
    lg: '3.2rem', /* 32px */
    xl: '4.8rem', /* 48px */
    xxl: '6.4rem', /* 64px */
    xxxl: '9.6rem', /* 96px */
  },
  borderRadius: {
    sm: '0.4rem', /* 4px */
    md: '0.8rem', /* 8px */
    lg: '1.2rem', /* 12px */
    xl: '1.6rem', /* 16px */
    xxl: '2.4rem', /* 24px */
  },
  shadows: {
    light: '0 0.1rem 0.3rem rgba(0, 0, 0, 0.1)',
    medium: '0 0.4rem 1.2rem rgba(0, 0, 0, 0.15)',
    heavy: '0 1rem 4rem rgba(0, 0, 0, 0.2)',
    colored: '0 0.4rem 1.2rem rgba(229, 62, 62, 0.25)',
  },
}; 