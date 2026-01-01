
import { Project, Service, BlogPost, Skill } from './types';

export const SERVICES: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX & Product Design',
    icon: '🎨',
    items: [
      'User research & usability testing',
      'Wireframing & prototyping (Figma)',
      'Web & mobile UI design',
      'Design systems & accessibility'
    ]
  },
  {
    id: 'frontend',
    title: 'Front-End Development',
    icon: '💻',
    items: [
      'Responsive websites (HTML, CSS, React)',
      'UI implementation from design to code',
      'Performance & usability optimization'
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Growth',
    icon: '📈',
    items: [
      'Social media strategy & management',
      'SEO & Google Ads',
      'Content marketing & storytelling',
      'Lead generation & conversion'
    ]
  },
  {
    id: 'branding',
    title: 'Brand & Visual Design',
    icon: '🧩',
    items: [
      'Brand identity & visual systems',
      'Marketing creatives & campaigns',
      'Digital asset design'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'celestial',
    title: 'Celestial Dental & Orthodontic Centre',
    role: 'Digital Marketer',
    focus: 'Healthcare Marketing, Lead Generation',
    overview: 'Led digital marketing initiatives to increase patient bookings and brand visibility across social media, SEO, and paid ads.',
    tasks: [
      'Social media content & campaign strategy',
      'SEO optimization for dental services',
      'Google Ads & WhatsApp marketing automation',
      'Analytics & performance reporting'
    ],
    impact: 'Increased patient inquiries and appointment bookings through targeted campaigns and optimized digital channels.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    category: 'Marketing'
  },
  {
    id: 'foti',
    title: 'Foundations of Tourism Institute (FoTI)',
    role: 'IT Lead & UI/UX Designer',
    focus: 'EdTech, Research Platforms',
    overview: 'Led the end-to-end design and development of FoTI’s digital platforms, supporting tourism students and industry stakeholders.',
    tasks: [
      'User research & stakeholder interviews',
      'UI/UX design for student research',
      'Platform integration (web, app, media)',
      'Agile collaboration with developers'
    ],
    impact: 'Created a scalable digital ecosystem that supports academic research and professional growth in tourism.',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    category: 'Design & Dev'
  },
  {
    id: 'iris',
    title: 'Iris Development Studios',
    role: 'Integrated Marketing & Design Executive',
    focus: 'Multi-Brand Digital Growth',
    overview: 'Managed marketing strategies across three business divisions, strengthening brand alignment and conversion.',
    tasks: [
      'Led marketing strategies for 3 divisions',
      'Managed SEO, PPC, and ad campaigns',
      'Collaborated on UI/UX improvements',
      'Strengthened digital brand presence'
    ],
    impact: 'Unified digital messaging and improved performance across varied marketing funnels.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Strategy'
  },
  {
    id: 'giktek',
    title: 'Giktek-HQ',
    role: 'UI/UX Designer',
    focus: 'Product Design & Usability',
    overview: 'Designed and improved interfaces for websites and applications, focusing on usability, clarity, and conversion.',
    tasks: [
      'High-fidelity UI design',
      'Information architecture',
      'Interactive prototyping',
      'User journey mapping'
    ],
    impact: 'Streamlined complex workflows resulting in higher user satisfaction scores.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    category: 'Design'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Design',
    items: ['UI/UX Design', 'Figma & Prototyping', 'Human-Centered Design', 'Gestalt Psychology']
  },
  {
    category: 'Marketing',
    items: ['Social Media Marketing', 'SEO & Google Ads', 'Lead Nurturing', 'Performance Analytics']
  },
  {
    category: 'Development',
    items: ['Front-End Development', 'React & Tailwind', 'Responsive Design', 'Accessibility']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Designing Digital Products That Convert',
    excerpt: 'How to combine design aesthetics with conversion-focused strategy to drive real business growth.',
    date: 'May 12, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'UI/UX Principles Every Marketer Should Know',
    excerpt: 'Understanding the user journey can drastically improve the performance of your marketing campaigns.',
    date: 'Apr 28, 2024',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'How Psychology Improves Design Performance',
    excerpt: 'Diving deep into human behavior to create more intuitive and engaging user interfaces.',
    date: 'Mar 15, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800'
  }
];
