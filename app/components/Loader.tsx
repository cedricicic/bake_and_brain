'use client';

import { motion } from 'framer-motion';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const Loader = ({ size = 'md', color = '#3b82f6' }: LoaderProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const dot = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: [0.2, 1, 0.2],
      y: [-4, 4, -4],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`flex items-center justify-center gap-1 ${sizeClasses[size]}`}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          variants={dot}
          className="rounded-full"
          style={{
            width: size === 'sm' ? '4px' : size === 'md' ? '6px' : '8px',
            height: size === 'sm' ? '4px' : size === 'md' ? '6px' : '8px',
            backgroundColor: color,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader; 