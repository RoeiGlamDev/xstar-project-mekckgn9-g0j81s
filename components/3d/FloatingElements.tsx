import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; // Black background for luxury feel
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #ff69b4; // Pink color for elegance
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.5); // Soft shadow
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-20px);
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '10%', top: '20%' }} />
      <FloatingElement style={{ right: '15%', top: '50%' }} />
      <FloatingElement style={{ left: '40%', bottom: '10%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;