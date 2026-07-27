import React from 'react';
import { Github, ExternalLink, FolderGit2, Layers, Database, Code } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 relative border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">FEATURED WORK</h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">
            Software <span className="text-[#333333] underline decoration-[#333333] decoration-2 underline-offset-4">Projects</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Hands-on software engineering projects demonstrating object-oriented programming, algorithms, database operations, and user interface design.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-2xl border border-gray-200 shadow-xs hover:border-[#333333] transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#18181B] bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                    <FolderGit2 className="w-4 h-4 text-[#333333]" />
                    <span>Project {index + 1}</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">Software Engineering</span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-2xl font-bold text-[#18181B] group-hover:text-[#333333] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies List */}
                <div>
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2.5">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-[#18181B] border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer with GitHub Button */}
              <div className="p-6 sm:p-8 pt-0 border-t border-gray-100 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Open Source Repository</span>
                
                <a
                  id={`project-github-btn-${project.id}`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#18181B] hover:bg-[#333333] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors duration-200 shadow-2xs"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
