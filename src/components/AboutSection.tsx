import React from 'react';
import { GraduationCap, Target, UserCheck, BookOpen, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50/80 backdrop-blur-sm relative border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-2">GET TO KNOW ME</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            About <span className="text-black underline decoration-black decoration-2 underline-offset-4">Me</span>
          </h2>
          <p className="text-gray-800 mt-3 text-sm sm:text-base font-semibold">
            Software Engineering student with a passion for problem solving, clean code, and modern web application development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Short Introduction & Career Objective */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Short Introduction Card */}
            <div id="about-intro-card" className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-300 shadow-sm hover:border-black transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gray-100 text-black border border-gray-300">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-black">Short Introduction</h3>
              </div>
              <p className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.aboutBio}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-gray-600 block font-mono font-bold">STATUS</span>
                  <span className="text-sm font-extrabold text-black">3rd Year SE Student</span>
                </div>
                <div>
                  <span className="text-xs text-gray-600 block font-mono font-bold">PRIMARY FOCUS</span>
                  <span className="text-sm font-extrabold text-black">Java & Full-Stack</span>
                </div>
              </div>
            </div>

            {/* Career Objective Card */}
            <div id="about-career-card" className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-300 shadow-sm hover:border-black transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gray-100 text-black border border-gray-300">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-black">Career Objective</h3>
              </div>
              <p className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

          </div>

          {/* Right Column: Education Details */}
          <div className="lg:col-span-6">
            <div id="about-education-card" className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-300 shadow-sm hover:border-black transition-colors duration-200 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-gray-100 text-black border border-gray-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-black">Education</h3>
                    <span className="text-xs text-gray-700 font-mono font-bold">Academic Background</span>
                  </div>
                </div>

                {EDUCATION_DATA.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-gray-200">
                      <div>
                        <h4 className="text-lg font-extrabold text-black">{item.degree}</h4>
                        <p className="text-sm text-zinc-900 font-bold">{item.institution}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-black text-xs font-mono font-bold border border-gray-300 self-start sm:self-auto">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-gray-800 font-medium text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-gray-700">
                        <BookOpen className="w-3.5 h-3.5 text-black" />
                        <span>Key Coursework & Competencies</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.coursework.map((course, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-100 border border-gray-300 text-xs text-black font-bold"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between text-xs text-gray-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-black" />
                  Academic Excellence & Practical Projects
                </span>
                <span className="font-mono text-black font-extrabold">SE 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
