import React from 'react';
import { Github, ExternalLink, FolderGit2, Layers, Database, Code } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50/80 backdrop-blur-sm relative border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-2">FEATURED WORK</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Software <span className="text-black underline decoration-black decoration-2 underline-offset-4">Projects</span>
          </h2>
          <p className="text-gray-800 mt-3 text-sm sm:text-base font-semibold">
            Hands-on software engineering projects demonstrating object-oriented programming, algorithms, database operations, and user interface design.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white/95 backdrop-blur-md rounded-2xl border border-gray-300 shadow-sm hover:border-black transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-black bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
                    <FolderGit2 className="w-4 h-4 text-black" />
                    <span>Project {index + 1}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-700">Software Engineering</span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-2xl font-extrabold text-black group-hover:text-zinc-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies List */}
                <div>
                  <h4 className="text-xs font-mono text-gray-700 font-bold uppercase tracking-wider mb-2.5">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-bold rounded-md bg-gray-100 text-black border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer with GitHub Button */}
              <div className="p-6 sm:p-8 pt-0 border-t border-gray-200 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-700 font-mono font-bold">Open Source Repository</span>
                
                <a
                  id={`project-github-btn-${project.id}`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors duration-200 shadow-xs cursor-pointer"
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
