import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Code, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = React.useState(false);

  if (!isOpen) return null;

  const handleDownloadCV = () => {
    const resumeText = `===================================================
${PERSONAL_INFO.name.toUpperCase()} - ${PERSONAL_INFO.title.toUpperCase()}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl}
===================================================

SUMMARY:
${PERSONAL_INFO.shortBio}

CAREER OBJECTIVE:
${PERSONAL_INFO.aboutBio}

EDUCATION:
${EDUCATION_DATA.map(ed => `${ed.degree} | ${ed.institution} (${ed.period})
Relevant Coursework: ${ed.coursework.join(', ')}`).join('\n\n')}

TECHNICAL SKILLS:
Languages: Java, Python, C++, TypeScript
Frontend: React, HTML5/CSS3, Tailwind CSS
Backend: Node.js, Express.js
Databases & Version Control: SQL (MySQL), Git, GitHub

PROJECTS:
${PROJECTS_DATA.map(p => `• ${p.title}
  Technologies: ${p.technologies.join(', ')}
  Description: ${p.description}
  GitHub: ${p.githubUrl}`).join('\n\n')}
===================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.name}_Resume_Software_Engineering.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        id="cv-modal-container"
        className="bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-secondary text-primary">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground">{PERSONAL_INFO.name}'s Resume</h3>
              <p className="text-xs text-muted-foreground font-semibold">{PERSONAL_INFO.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Close CV Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content / Resume Preview */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-foreground">
          {/* Header Info */}
          <div className="border-b border-border pb-4">
            <h4 className="text-2xl font-extrabold text-foreground">{PERSONAL_INFO.name}</h4>
            <p className="text-primary font-bold mt-0.5">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-muted-foreground font-medium mt-2">Email: {PERSONAL_INFO.email} | GitHub: {PERSONAL_INFO.githubUrl}</p>
          </div>

          {/* Career Objective */}
          <div>
            <h5 className="text-primary font-extrabold uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
              <span>Career Objective</span>
            </h5>
            <p className="text-foreground/90 font-medium leading-relaxed bg-muted/60 p-3.5 rounded-lg border border-border">
              {PERSONAL_INFO.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h5 className="text-primary font-extrabold uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Education</span>
            </h5>
            {EDUCATION_DATA.map((ed, idx) => (
              <div key={idx} className="bg-muted/60 p-3.5 rounded-lg border border-border">
                <div className="flex justify-between font-extrabold text-foreground">
                  <span>{ed.degree}</span>
                  <span className="text-muted-foreground text-xs font-mono font-bold">{ed.period}</span>
                </div>
                <p className="text-primary text-xs mt-0.5 font-bold">{ed.institution}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {ed.coursework.map((cw, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-card text-foreground font-bold border border-border">
                      {cw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Skills */}
          <div>
            <h5 className="text-primary font-extrabold uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              <span>Technical Skills</span>
            </h5>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 text-xs rounded-md bg-secondary border border-border text-secondary-foreground font-bold"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h5 className="text-primary font-extrabold uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-primary" />
              <span>Featured Projects</span>
            </h5>
            <div className="space-y-3">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="bg-muted/60 p-3.5 rounded-lg border border-border">
                  <div className="font-extrabold text-foreground">{p.title}</div>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{p.description}</p>
                  <div className="mt-2 text-xs text-primary font-bold">
                    Tech: {p.technologies.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-4 border-t border-border bg-muted/50 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Plain text resume file ready for download</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              id="download-cv-modal-btn"
              onClick={handleDownloadCV}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-primary text-primary-foreground hover:opacity-90 flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-2xs"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Resume (.txt)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
