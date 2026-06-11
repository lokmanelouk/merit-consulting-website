import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0, // In seconds for framer-motion (e.g. 0.1)
  duration = 0.6, // In seconds (e.g. 0.6)
  distance = '30px',
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  tag = 'div',
  threshold = 0.1,
  viewportOnce = true,
}) {
  const getVariants = () => {
    const hidden = { opacity: 0 };
    const visible = { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration, 
        delay, 
        ease: [0.25, 1, 0.5, 1] // premium cubic-bezier easeOut
      } 
    };

    switch (direction) {
      case 'up':
        hidden.y = distance;
        break;
      case 'down':
        hidden.y = `-${distance}`;
        break;
      case 'left':
        hidden.x = distance;
        break;
      case 'right':
        hidden.x = `-${distance}`;
        break;
      case 'none':
      default:
        break;
    }

    return { hidden, visible };
  };

  const variants = getVariants();
  const MotionTag = motion[tag] || motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, amount: threshold }}
      variants={variants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </MotionTag>
  );
}
