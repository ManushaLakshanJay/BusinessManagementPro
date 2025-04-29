import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "next-themes";

// Custom cursor effect
const CursorEffect = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement | null;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement | null;
    
    if (!cursorDot || !cursorOutline || window.innerWidth < 1024) return;
    
    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Add a slight delay to cursor outline for effect
      setTimeout(() => {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      }, 50);
    };
    
    const handleMouseEnter = () => {
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
    };
    
    const handleMouseLeave = () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
    };
    
    const handleLinkHover = () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.width = '40px';
      cursorOutline.style.height = '40px';
      cursorOutline.style.borderColor = 'hsl(var(--primary) / 0.8)';
    };
    
    const handleLinkLeave = () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.width = '30px';
      cursorOutline.style.height = '30px';
      cursorOutline.style.borderColor = 'hsl(var(--primary) / 0.5)';
    };
    
    // Track mouse movement
    document.addEventListener('mousemove', moveCursor);
    
    // Show/hide cursor when entering/leaving document
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add hover effect for links and buttons
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  return null;
};

// Enhance scrolling effects
const ScrollEffect = () => {
  useEffect(() => {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const checkReveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    // Add parallax effect to elements
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleParallax = () => {
      parallaxElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementCenter = elementTop + (element as HTMLElement).clientHeight / 2;
        const distanceFromCenter = elementCenter - window.innerHeight / 2;
        const parallaxFactor = 0.1; // Adjust for stronger/weaker effect
        
        (element as HTMLElement).style.transform = `translateY(${distanceFromCenter * parallaxFactor}px)`;
      });
    };
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('scroll', handleParallax);
    
    // Initial check
    checkReveal();
    handleParallax();
    
    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  
  return null;
};

const AppWrapper = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <App />
      <CursorEffect />
      <ScrollEffect />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(<AppWrapper />);
