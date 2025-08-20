import { keyframes } from 'styled-components';

// Define keyframe animations for luxury feel
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Exporting animation types
const animationTypes = {
  fadeIn,
  slideIn,
  bounce,
};

export default animationTypes;