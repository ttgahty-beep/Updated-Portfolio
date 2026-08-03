import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, Code2, Database, Terminal, ShieldCheck, Sparkles } from 'lucide-react';

interface TechCube3DProps {
  onOpenCVModal?: () => void;
}

export const TechCube3D: React.FC<TechCube3DProps> = ({ onOpenCVModal }) => {
  const [rotation, setRotation] = useState({ x: 15, y: -25 });
  const [isHovered, setIsHovered] = useState(false);

  const techBadges = [
    { name: 'Java', color: 'bg-amber-500/10 text-amber-500 border-amber-500/30', angle: 0 },
    { name: 'React', color: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/30', angle: 60 },
    { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-500 border-blue-500/30', angle: 120 },
    { name: 'Node.js', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', angle: 180 },
    { name: 'SQL', color: 'bg-violet-500/10 text-violet-500 border-violet-500/30', angle: 240 },
    { name: 'Git', color: 'bg-rose-500/10 text-rose-500 border-rose-500/30', angle: 300 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotation({
      x: -y * 0.15,
      y: x * 0.15,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 15, y: -25 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-4 cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient Cyber Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-emerald-500/10 to-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Outer 3D Orbital Tech Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[88%] h-[88%] rounded-full border border-dashed border-primary/30 pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Inner Rotating Orbital Tech Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[68%] h-[68%] rounded-full border border-primary/20 border-t-primary/60 pointer-events-none"
      />

      {/* 3D Hologram Stage / Cube Container */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        animate={{
          rotateY: isHovered ? rotation.y : [rotation.y, rotation.y + 360],
        }}
        transition={{
          rotateY: isHovered
            ? { duration: 0.2 }
            : { duration: 20, repeat: Infinity, ease: 'linear' },
        }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center"
      >
        {/* Core Cyber Sphere / Hologram Center */}
        <div
          className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-card/90 backdrop-blur-md border-2 border-primary shadow-[0_0_35px_rgba(66,146,103,0.35)] flex flex-col items-center justify-center p-4 text-center z-20 group"
          style={{ transform: 'translateZ(40px)' }}
        >
          {/* Glowing Avatar Initials */}
          <div className="relative w-16 h-16 rounded-full bg-accent border-2 border-primary flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 transition-transform">
            <span className="text-3xl font-serif italic font-bold text-primary">A</span>
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary"></span>
            </span>
          </div>

          <h3 className="text-lg font-black text-foreground tracking-tight">Ahtesham</h3>
          <p className="text-[11px] text-primary font-mono font-bold uppercase tracking-widest mt-0.5">
            Software Eng.
          </p>

          <div className="mt-2 flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-[10px] font-mono font-extrabold text-primary border border-primary/30">
            <ShieldCheck className="w-3 h-3" />
            <span>3D Cyber Mode</span>
          </div>
        </div>

        {/* Floating 3D Tech Badges Orbiting the Core */}
        {techBadges.map((badge, index) => {
          const angleRad = (badge.angle * Math.PI) / 180;
          const radius = 120; // Radius from center
          const x = Math.cos(angleRad) * radius;
          const z = Math.sin(angleRad) * radius;

          return (
            <motion.div
              key={badge.name}
              className={`absolute px-3 py-1.5 rounded-xl border text-xs font-mono font-bold shadow-lg backdrop-blur-md cursor-pointer ${badge.color}`}
              style={{
                transform: `translate3d(${x}px, ${index % 2 === 0 ? -40 : 40}px, ${z}px) rotateY(${-rotation.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.25, zIndex: 50 }}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                <span>{badge.name}</span>
              </div>
            </motion.div>
          );
        })}

        {/* 3D Corner Wireframe Elements */}
        <div
          className="absolute inset-0 border border-primary/20 rounded-3xl pointer-events-none"
          style={{ transform: 'translateZ(-50px)' }}
        />
        <div
          className="absolute inset-0 border border-emerald-500/20 rounded-3xl pointer-events-none"
          style={{ transform: 'translateZ(50px)' }}
        />
      </motion.div>

      {/* Floating HUD Status Elements */}
      <div className="absolute top-2 left-2 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur-md border border-border text-[11px] font-mono text-muted-foreground font-bold flex items-center gap-2 shadow-xs">
        <Cpu className="w-3.5 h-3.5 text-primary" />
        <span>SYS.ENG v2.6</span>
      </div>

      <div className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur-md border border-border text-[11px] font-mono text-muted-foreground font-bold flex items-center gap-2 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-primary" />
        <span>3D PERSPECTIVE</span>
      </div>
    </div>
  );
};
