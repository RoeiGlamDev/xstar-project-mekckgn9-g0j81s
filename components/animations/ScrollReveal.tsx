'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with the class 'reveal'
  }, []);

  return <div>{children}</div>;
};

export default ScrollRevealComponent;