import { Skill, Project, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ahtesham',
  title: 'Software Engineering Student',
  shortBio: 'Passionate software engineering student focused on building clean, efficient, and scalable applications. Enthusiastic about data structures, algorithms, and full-stack web development.',
  aboutBio: 'I am a dedicated Software Engineering student driven by a curiosity to understand how complex software systems operate under the hood. From developing object-oriented Java solutions to building responsive web applications using React and Node.js, I enjoy transforming ideas into working, well-structured software.',
  careerObjective: 'To secure a Software Engineering Internship where I can leverage my foundational skills in Java, Web Technologies, and Data Structures to build impactful solutions while collaborating with senior engineers and expanding my industry expertise.',
  email: 'ahteshamarian48@gmail.com',
  githubUrl: 'https://github.com/ttgahty-beep',
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University School of Engineering',
    period: '2023 - Present (Expected 2026)',
    description: 'Pursuing coursework focused on core computer science foundations, software design patterns, database architecture, and web systems.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java)',
      'Database Management Systems (SQL)',
      'Web Application Development',
      'Software Architecture & Engineering Principles',
      'Operating Systems',
    ],
  },
];

export const SKILLS_DATA: Skill[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'Languages',
    description: 'Object-Oriented Programming, Data Structures, Collections Framework',
    iconName: 'Code2',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    description: 'Scripting, Automation, Data Processing, Fundamental Problem Solving',
    iconName: 'Terminal',
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Languages',
    description: 'Memory Management, STL, High-Performance Algorithms',
    iconName: 'Cpu',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Languages',
    description: 'Strong Type Systems, Interfaces, Generics, Modern JavaScript Standards',
    iconName: 'FileCode2',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Component Architecture, Hooks, Single Page Applications, UI Styling',
    iconName: 'Layout',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description: 'Event-driven Architecture, REST APIs, Asynchronous I/O',
    iconName: 'Server',
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    description: 'HTTP Server Routing, Middleware Pipeline, API Validation',
    iconName: 'Layers',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Database',
    description: 'Relational Schema Design, Complex Queries, Joins, Indexing, MySQL',
    iconName: 'Database',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    description: 'Version Control, Branching Workflows, Commit Discipline',
    iconName: 'GitBranch',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    description: 'Repository Hosting, Issue Tracking, Open Source Collaboration',
    iconName: 'Github',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'student-system',
    title: 'Smart Student Management System',
    description: 'A comprehensive Java application engineered to streamline student record administration, course registrations, and academic transcript tracking with full CRUD operations and MySQL database persistence.',
    technologies: ['Java', 'CRUD Operations', 'MySQL'],
    githubUrl: 'https://github.com/ttgahty-beep',
    featured: true,
  },
  {
    id: 'dsa-visualizer',
    title: 'DSA Visualizer',
    description: 'An interactive software tool built in Java designed to visualize core Data Structures (Arrays, Linked Lists, Trees) and Algorithms (Sorting, Searching) step-by-step for educational comprehension.',
    technologies: ['Java', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/ttgahty-beep',
    featured: true,
  },
];
