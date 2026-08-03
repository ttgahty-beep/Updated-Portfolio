import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  FileCode2,
  Layout,
  Server,
  Layers,
  Database,
  GitBranch,
  Github,
  CheckCircle2,
  Layers3,
  Grid,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { SkillsFanCarousel } from './SkillsFanCarousel';

// Helper to render matching icon dynamically
const getSkillIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 text-primary' };
  switch (iconName) {
    case 'Code2':
      return <Code2 {...props} />;
    case 'Terminal':
      return <Terminal {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'FileCode2':
      return <FileCode2 {...props} />;
    case 'Layout':
      return <Layout {...props} />;
    case 'Server':
      return <Server {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'Database':
      return <Database {...props} />;
    case 'GitBranch':
      return <GitBranch {...props} />;
    case 'Github':
      return <Github {...props} />;
    default:
      return <Code2 {...props} />;
  }
};

export const SkillsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'fan' | 'grid'>('fan');

  return (
    <section id="skills" className="py-20 bg-card/60 backdrop-blur-sm relative border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-mono font-bold text-primary border border-border mb-3">
            <Layers3 className="w-3.5 h-3.5" />
            <span>Interactive 3D Skill Fan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            Technical <span className="text-primary underline decoration-primary decoration-2 underline-offset-4">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base font-semibold">
            Explore my core programming languages, frameworks, databases, and version control tools with interactive 3D fan animations.
          </p>

          {/* View Mode Toggle Controls */}
          <div className="mt-6 inline-flex items-center gap-1 p-1 rounded-xl bg-secondary/80 border border-border backdrop-blur-md">
            <button
              id="skills-view-fan-btn"
              onClick={() => setViewMode('fan')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-extrabold transition-all cursor-pointer ${
                viewMode === 'fan'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers3 className="w-4 h-4" />
              <span>3D Fan View</span>
            </button>
            <button
              id="skills-view-grid-btn"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-extrabold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>3D Grid View</span>
            </button>
          </div>
        </div>

        {/* Render View Mode */}
        {viewMode === 'fan' ? (
          <div className="w-full">
            <SkillsFanCarousel skills={SKILLS_DATA} />
          </div>
        ) : (
          /* Skills Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((skill) => (
              <Card3D key={skill.id} depth={12} className="h-full">
                <div
                  id={`skill-card-${skill.id}`}
                  className="bg-card/95 backdrop-blur-md p-6 rounded-2xl border border-border shadow-sm group-hover:border-primary transition-all duration-200 group flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Header with Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-secondary border border-border group-hover:border-primary transition-colors">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono font-bold text-secondary-foreground border border-border">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-xl font-extrabold text-card-foreground group-hover:text-primary transition-colors mb-2">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-bold text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      Proficient
                    </span>
                    <span className="font-mono text-xs text-muted-foreground font-bold">Core Skill</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


