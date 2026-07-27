import React from 'react';
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
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

// Helper to render matching icon dynamically
const getSkillIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 text-[#18181B]' };
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
  return (
    <section id="skills" className="py-20 bg-white/70 backdrop-blur-sm relative border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-2">Technical Arsenal</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Technical <span className="text-black underline decoration-black decoration-2 underline-offset-4">Skills</span>
          </h2>
          <p className="text-gray-800 mt-3 text-sm sm:text-base font-semibold">
            Core programming languages, frameworks, databases, and version control tools I utilize in software engineering.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-gray-300 shadow-sm hover:border-black transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-100 border border-gray-300 group-hover:border-black transition-colors">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-gray-100 text-xs font-mono font-bold text-black border border-gray-300">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Title */}
                <h3 className="text-xl font-extrabold text-black group-hover:text-zinc-800 transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-gray-800 text-sm font-medium leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-700">
                <span className="flex items-center gap-1.5 font-bold text-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  Proficient
                </span>
                <span className="font-mono text-xs text-black font-bold">Core Skill</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
