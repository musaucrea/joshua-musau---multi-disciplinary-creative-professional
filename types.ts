
export interface Project {
  id: string;
  title: string;
  role: string;
  focus: string;
  overview: string;
  tasks: string[];
  impact: string;
  imageUrl: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}
