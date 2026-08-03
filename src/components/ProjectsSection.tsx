import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers3, Grid, FolderGit2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { TechDashboardCard, TechCardData } from './TechDashboardCard';
import { ProjectsFanCarousel } from './ProjectsFanCarousel';

export const ProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'fan' | 'grid'>('fan');

  return (
    <section id="projects" className="py-20 bg-muted/30 backdrop-blur-sm relative border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-mono font-bold text-primary border border-border mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Interactive Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            Software <span className="text-primary underline decoration-primary decoration-2 underline-offset-4 font-black">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base font-semibold">
            Interactive software engineering projects with custom 3D fan animations, progress meters, tech stack tags, and repository links.
          </p>

          {/* View Mode Toggle Controls */}
          <div className="mt-6 inline-flex items-center gap-1 p-1 rounded-xl bg-secondary/80 border border-border backdrop-blur-md">
            <button
              id="projects-view-fan-btn"
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
              id="projects-view-grid-btn"
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
            <ProjectsFanCarousel projects={PROJECTS_DATA} />
          </div>
        ) : (
          /* Project Cards Grid with Floating Motion Effect & 3D Tilt */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project, index) => {
              const cardData: TechCardData = {
                id: project.id,
                date: project.date || 'Active Project',
                title: project.title,
                description: project.description,
                progressPercent: project.progressPercent || 90,
                progressValue: project.progressValue || '90% Complete',
                technologies: project.technologies,
                githubUrl: project.githubUrl,
                countdownText: project.statusBadge || 'View Source',
                colorTheme: project.colorTheme || (index % 4 === 0 ? 'emerald' : index % 4 === 1 ? 'cyan' : index % 4 === 2 ? 'violet' : 'amber'),
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: 'easeOut',
                  }}
                  className="h-full"
                >
                  <TechDashboardCard data={cardData} index={index} />
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
