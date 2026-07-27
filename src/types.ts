export interface Skill {
  id: string;
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Tools';
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  coursework: string[];
}
