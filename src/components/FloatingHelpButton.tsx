import React, { useEffect, useState } from "react";

interface FloatingHelpButtonProps {
  targetId: string;
  icon?: React.ReactNode;
  label?: string;
}

const FloatingHelpButton: React.FC<FloatingHelpButtonProps> = ({ 
  targetId, 
  icon = "🆘", 
  label = "Ajuda rápida" 
}) => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main') as HTMLElement;
      if (!mainElement) return;

      const mainRect = mainElement.getBoundingClientRect();
      const button = document.querySelector('.floating-help-button') as HTMLElement;
      
      if (button) {
        const shouldLock = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
        setIsBottom(shouldLock);
        
        if (shouldLock) {
          button.style.position = 'absolute';
          button.style.top = `${mainRect.bottom - window.scrollY - 100}px`;
        } else {
          button.style.position = 'fixed';
          button.style.top = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      className="floating-help-button" 
      onClick={handleClick} 
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default FloatingHelpButton;