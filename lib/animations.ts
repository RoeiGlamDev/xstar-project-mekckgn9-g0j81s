import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const scaleUp = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const FadeIn: React.FC<{ children?: React.ReactNode }> = ({ children, duration = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeIn}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn: React.FC<{ children?: React.ReactNode }> = ({ children, duration = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={slideIn}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleUp: React.FC<{ children?: React.ReactNode }> = ({ children, duration = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={scaleUp}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default { FadeIn, SlideIn, ScaleUp };