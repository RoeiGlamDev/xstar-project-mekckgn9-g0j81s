'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh; // Full viewport height
  background-color: black; // Dark background
  color: pink; // Elegant text color
`;

const ParallaxLayer = styled.div<{ speed: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateZ(0);
  will-change: transform;
  background: url(${(props) => props.background}) center/cover no-repeat;
  transform: translateY(${(props) => props.speed * 100}px); // Parallax effect
`;

const ParallaxSection: React.FC<{ layers: { speed: number; background: string }[] }> = ({ layers }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollY = window.scrollY;
      layers.forEach((layer, index) => {
        const layerSpeed = layer.speed;
        const layerElement = parallaxRef.current?.children[index] as HTMLElement;
        if (layerElement) {
          layerElement.style.transform = `translateY(${scrollY * layerSpeed}px)`;
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [layers]);

  return (
    <ParallaxContainer ref={parallaxRef}>
      {layers.map((layer, index) => (
        <ParallaxLayer key={index} speed={layer.speed} background={layer.background} />
      ))}
    </ParallaxContainer>
  );
};

export default ParallaxSection;