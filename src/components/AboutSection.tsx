import React from 'react';
import { GraduationCap, Target, UserCheck, BookOpen, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/40 backdrop-blur-sm relative border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-2">GET TO KNOW ME</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            About <span className="text-primary underline decoration-primary decoration-2 underline-offset-4">Me</span>
          </h2>
          <p className="text-foreground/80 mt-3 text-sm sm:text-base font-semibold">
            Software Engineering student with a passion for problem solving, clean code, and modern web application development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Short Introduction & Career Objective */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Short Introduction Card */}
            <Card3D depth={10}>
              <div id="about-intro-card" className="bg-card/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-border shadow-sm group-hover:border-primary transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary text-secondary-foreground border border-border">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-card-foreground">Short Introduction</h3>
                </div>
                <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-base">
                  {PERSONAL_INFO.aboutBio}
                </p>
                <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground block font-mono font-bold">STATUS</span>
                    <span className="text-sm font-extrabold text-foreground">3rd Year SE Student</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block font-mono font-bold">PRIMARY FOCUS</span>
                    <span className="text-sm font-extrabold text-primary">Java & Full-Stack</span>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Career Objective Card */}
            <Card3D depth={10}>
              <div id="about-career-card" className="bg-card/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-border shadow-sm group-hover:border-primary transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary text-secondary-foreground border border-border">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-card-foreground">Career Objective</h3>
                </div>
                <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-base">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>
            </Card3D>

          </div>

          {/* Right Column: Education Details */}
          <div className="lg:col-span-6">
            <Card3D depth={8} className="h-full">
              <div id="about-education-card" className="bg-card/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-border shadow-sm group-hover:border-primary transition-colors duration-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-secondary text-secondary-foreground border border-border">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-card-foreground">Education</h3>
                      <span className="text-xs text-muted-foreground font-mono font-bold">Academic Background</span>
                    </div>
                  </div>

                  {EDUCATION_DATA.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-border">
                        <div>
                          <h4 className="text-lg font-extrabold text-foreground">{item.degree}</h4>
                          <p className="text-sm text-primary font-bold">{item.institution}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono font-bold border border-border self-start sm:self-auto">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div>
                        <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-muted-foreground">
                          <BookOpen className="w-3.5 h-3.5 text-primary" />
                          <span>Key Coursework & Competencies</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.coursework.map((course, cIdx) => (
                            <div
                              key={cIdx}
                              className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/80 border border-border text-xs text-foreground font-bold hover:border-primary/40 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-primary" />
                    Academic Excellence & Practical Projects
                  </span>
                  <span className="font-mono text-primary font-extrabold">SE 2026</span>
                </div>
              </div>
            </Card3D>
          </div>

        </div>
      </div>
    </section>
  );
};

