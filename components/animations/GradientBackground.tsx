import React from 'react';
import { styled } from '@mui/system';

const GradientBackground = styled('div')({
  height: '100vh', // Full height
  background: 'linear-gradient(135deg, #000000 0%, #ff007f 100%)', // Black to pink gradient
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const GradientBackgroundComponent: React.FC = ({ children }) => {
  return <GradientBackground>{children}</GradientBackground>;
};

export default GradientBackgroundComponent;