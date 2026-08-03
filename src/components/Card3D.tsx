import React, { useRef, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  depth?: number; // Max tilt angle in degrees (default 8)
  glowColor?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  id,
  depth = 8,
  glowColor = 'rgba(255, 255, 255, 0.15)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef<number | null>(null);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // Responsive springs with light damping for snappy 60fps performance
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [depth, -depth]), {
    stiffness: 400,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-depth, depth]), {
    stiffness: 400,
    damping: 30,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Throttle mousemove through requestAnimationFrame for high performance
    const clientX = e.clientX;
    const clientY = e.clientY;
    
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    
    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseXPos = clientX - rect.left;
      const mouseYPos = clientY - rect.top;

      const xPct = mouseXPos / width - 0.5;
      const yPct = mouseYPos / height - 0.5;

      x.set(xPct);
      y.set(yPct);

      mouseX.set((mouseXPos / width) * 100);
      mouseY.set((mouseYPos / height) * 100);
    });
  }, [x, y, mouseX, mouseY]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    setIsHovered(false);
    x.set(0);
    y.set(0);
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 transform-gpu ${className}`}
      style={{ perspective: '1000px', willChange: 'transform' }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative w-full h-full rounded-2xl transition-shadow duration-200 transform-gpu"
      >
        {/* Dynamic Glowing Spotlight Follower */}
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl z-30 transition-opacity duration-200"
            style={{
              background: `radial-gradient(350px circle at ${mouseX.get()}% ${mouseY.get()}%, ${glowColor}, transparent 70%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}

        {/* 3D Border Glow accent */}
        <div
          className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-100' : ''
          }`}
        />

        {/* Inner Card content container with preserve-3d */}
        <div className="relative w-full h-full z-10 rounded-2xl transform-gpu transition-all duration-200">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

