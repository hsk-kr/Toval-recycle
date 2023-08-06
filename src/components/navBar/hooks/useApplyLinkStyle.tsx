import React, { useEffect, useState } from 'react';

interface useApplyLinkStyleProps {
  offset: number;
}
function useApplyLinkStyle({ offset }: useApplyLinkStyleProps) {
  const [activeSection, setActiveSection] = useState('');

  // Function to handle scrolling and update the active section
  const handleScroll = () => {
    const scrollY = window.scrollY + offset;
    const sections = ['home', 'about', 'menu'];

    for (const section of sections) {
      const sectionElement = document.getElementById(section);
      if (!sectionElement) continue;

      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    // Attach the event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return [activeSection];
}

export default useApplyLinkStyle;
