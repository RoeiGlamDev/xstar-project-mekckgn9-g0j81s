import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent white
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); // glass effect
  padding: 20px;
  color: #fff; // white text
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ff69b4; // pink color
`;

const Description = styled.p`
  font-size: 16px;
  color: #e0e0e0; // light gray for description
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;