import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, MoreVertical, Plus, Check, Code2, Sparkles, Copy, Share2, Info } from 'lucide-react';
import { Card3D } from './Card3D';

export interface TechCardData {
  id: string | number;
  colorTheme?: 'emerald' | 'cyan' | 'amber' | 'violet' | 'rose' | 'blue';
  date: string;
  title: string;
  description: string;
  progressPercent: number; // e.g. 95
  progressValue: string;   // e.g. "95% Complete"
  technologies: string[];
  githubUrl: string;
  countdownText: string;  // e.g. "Github Repo" or "v1.4 Live"
  featured?: boolean;
}

interface TechDashboardCardProps {
  data: TechCardData;
  index?: number;
}

export const TechDashboardCard: React.FC<TechDashboardCardProps> = ({ data, index = 0 }) => {
  const {
    id,
    colorTheme = 'emerald',
    date,
    title,
    description,
    progressPercent,
    progressValue,
    technologies,
    githubUrl,
    countdownText,
  } = data;

  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTechDetails, setShowTechDetails] = useState(false);

  // Theme color maps for Tailwind CSS styling matching the modern high-tech aesthetic
  const themeStyles = {
    emerald: {
      headerBadge: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
      progressTrack: 'bg-emerald-950/40 border-emerald-500/20',
      progressBar: 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]',
      glow: 'rgba(16, 185, 129, 0.25)',
      btn: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/40',
      borderHover: 'hover:border-emerald-500/60',
      dot: 'bg-emerald-500',
    },
    cyan: {
      headerBadge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      progressTrack: 'bg-cyan-950/40 border-cyan-500/20',
      progressBar: 'bg-gradient-to-r from-cyan-500 to-blue-400 shadow-[0_0_12px_rgba(6,182,212,0.5)]',
      glow: 'rgba(6, 182, 212, 0.25)',
      btn: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-900/40',
      borderHover: 'hover:border-cyan-500/60',
      dot: 'bg-cyan-400',
    },
    violet: {
      headerBadge: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
      progressTrack: 'bg-violet-950/40 border-violet-500/20',
      progressBar: 'bg-gradient-to-r from-violet-500 to-fuchsia-400 shadow-[0_0_12px_rgba(139,92,246,0.5)]',
      glow: 'rgba(139, 92, 246, 0.25)',
      btn: 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-900/40',
      borderHover: 'hover:border-violet-500/60',
      dot: 'bg-violet-400',
    },
    amber: {
      headerBadge: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
      progressTrack: 'bg-amber-950/40 border-amber-500/20',
      progressBar: 'bg-gradient-to-r from-amber-500 to-orange-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]',
      glow: 'rgba(245, 158, 11, 0.25)',
      btn: 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/40',
      borderHover: 'hover:border-amber-500/60',
      dot: 'bg-amber-500',
    },
    rose: {
      headerBadge: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      progressTrack: 'bg-rose-950/40 border-rose-500/20',
      progressBar: 'bg-gradient-to-r from-rose-500 to-pink-400 shadow-[0_0_12px_rgba(244,63,94,0.5)]',
      glow: 'rgba(244, 63, 94, 0.25)',
      btn: 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/40',
      borderHover: 'hover:border-rose-500/60',
      dot: 'bg-rose-400',
    },
    blue: {
      headerBadge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      progressTrack: 'bg-blue-950/40 border-blue-500/20',
      progressBar: 'bg-gradient-to-r from-blue-500 to-indigo-400 shadow-[0_0_12px_rgba(59,130,246,0.5)]',
      glow: 'rgba(59, 130, 246, 0.25)',
      btn: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/40',
      borderHover: 'hover:border-blue-500/60',
      dot: 'bg-blue-400',
    },
  }[colorTheme];

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setShowMenu(false);
  };

  return (
    <Card3D depth={14} glowColor={themeStyles.glow} className="h-full">
      <div
        id={`tech-card-${id}`}
        className={`relative bg-card/95 backdrop-blur-md rounded-2xl border border-border/90 p-6 sm:p-7 shadow-lg transition-all duration-300 ${themeStyles.borderHover} flex flex-col justify-between h-full group overflow-visible`}
      >
        {/* Card Header: Date & Interactive Ellipsis Menu */}
        <div className="flex items-center justify-between pb-4 border-b border-border/60">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border ${themeStyles.headerBadge}`}>
            <span className={`w-2 h-2 rounded-full ${themeStyles.dot} animate-pulse`} />
            <span>{date}</span>
          </div>

          {/* Ellipsis Menu Button */}
          <div className="relative">
            <button
              id={`tech-card-menu-btn-${id}`}
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              className="p-1.5 rounded-lg bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/50"
              title="Card options"
              aria-label="Card options"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {/* Dropdown Options Popup */}
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-9 w-44 z-50 rounded-xl bg-card border border-border shadow-2xl p-1.5 text-xs font-bold font-mono space-y-1"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-primary" />
                    <span>View Repository</span>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-secondary text-foreground transition-colors text-left"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-primary" />}
                    <span>{copied ? 'Copied Link!' : 'Copy Repo URL'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowTechDetails(!showTechDetails);
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-secondary text-foreground transition-colors text-left"
                  >
                    <Info className="w-3.5 h-3.5 text-primary" />
                    <span>Toggle Tech Stack</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Card Body: Title, Description, Progress Bar */}
        <div className="my-5 space-y-4 flex-1">
          <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
            {title}
          </h3>

          <p className="text-muted-foreground text-xs sm:text-sm font-medium leading-relaxed">
            {description}
          </p>

          {/* Progress Section (Matching the user's requested layout) */}
          <div className="pt-2 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold">
              <span className="text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Progress
              </span>
              <span className="text-foreground">{progressValue}</span>
            </div>

            {/* Progress Track */}
            <div className={`w-full h-2.5 rounded-full p-0.5 border ${themeStyles.progressTrack}`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                className={`h-full rounded-full ${themeStyles.progressBar}`}
              />
            </div>
          </div>

          {/* Collapsible Tech Stack Badges */}
          {showTechDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pt-2 flex flex-wrap gap-1.5"
            >
              {technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-md bg-secondary text-secondary-foreground border border-border">
                  {tech}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Card Footer: Tech Badges Avatars List + Countdown / Action Button */}
        <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3 mt-auto">
          
          {/* Stacked Tech Stack Avatar Icons */}
          <div className="flex items-center -space-x-2 overflow-hidden">
            {technologies.slice(0, 3).map((tech, i) => (
              <div
                key={tech}
                title={tech}
                className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-[10px] font-mono font-extrabold text-foreground shadow-xs group-hover:translate-y-[-2px] transition-transform"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tech.substring(0, 2).toUpperCase()}
              </div>
            ))}

            {/* Plus / Add Tech Stack button */}
            <button
              onClick={() => setShowTechDetails(!showTechDetails)}
              className="w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 border-2 border-card flex items-center justify-center text-primary text-xs font-bold transition-colors cursor-pointer"
              title="Show all technologies"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Action Button / Countdown Badge */}
          <a
            id={`tech-card-btn-${id}`}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-extrabold tracking-wide uppercase flex items-center gap-2 transition-all duration-200 shadow-md cursor-pointer ${themeStyles.btn}`}
          >
            <span>{countdownText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

        </div>
      </div>
    </Card3D>
  );
};
