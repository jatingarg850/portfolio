import { Project, Testimonial, Skill } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Credit Card Validator',
    slug: 'Credit-card-checks',
    tagline: 'Check your credit card is valid or not through lun\'s method',
    category: 'Web',
    year: 2024,
    metrics: {
      lcp: '1.2s',
      conversion: '+40%',
      a11y: 98,
      performance: 95
    },
    stack: ['React.js', 'JavaScript',"Lun's method", 'Tailwind CSS', 'Vercel','node.js'],
    gallery: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg'],
    links: {
      live: 'https://credit-card-validator.vercel.app',
      repo: 'https://github.com/jatingarg850/credit-card-validator'
    },
    caseStudy: {
      overview: 'A sustainable e-commerce platform focused on eco-friendly products with optimized checkout flow.',
      problem: 'High cart abandonment rates and slow loading times were hurting conversions.',
      process: [
        'User research and checkout flow analysis',
        'Performance audit and optimization',
        'A/B testing new checkout design',
        'Implementation with real-time monitoring'
      ],
      outcome: 'Reduced checkout time by 60% and increased conversions by 40%.',
      timeline: [
        {
          date: '2024-01-15',
          title: 'Project Kickoff',
          description: 'Initial requirements gathering and user research',
          type: 'milestone'
        },
        {
          date: '2024-02-01',
          title: 'Design System',
          description: 'Created comprehensive design system and prototypes',
          type: 'decision'
        },
        {
          date: '2024-03-15',
          title: 'Beta Launch',
          description: 'Soft launch with select users for testing',
          type: 'launch'
        }
      ]
    },
    position: { x: 200, y: 150, orbit: 1 }
  },
  {
    id: '2',
    title: 'HealthTech Dashboard',
    slug: 'healthtech-dashboard',
    tagline: 'Real-time patient monitoring with 99.9% uptime',
    category: 'Web',
    year: 2023,
    metrics: {
      lcp: '0.9s',
      a11y: 100,
      performance: 98
    },
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    gallery: ['/projects/health-1.jpg'],
    links: {
      live: 'https://healthtech-demo.com'
    },
    caseStudy: {
      overview: 'Real-time dashboard for healthcare professionals to monitor patient vitals.',
      problem: 'Existing system had delays and poor mobile experience.',
      process: [
        'Stakeholder interviews with doctors and nurses',
        'Technical architecture planning',
        'Progressive web app development',
        'Extensive testing and compliance review'
      ],
      outcome: 'Improved response time by 80% and achieved HIPAA compliance.',
      timeline: []
    },
    position: { x: -150, y: 200, orbit: 1 }
  },
  {
    id: '3',
    title: 'Design System Library',
    slug: 'design-system',
    tagline: 'Scalable components used by 50+ developers',
    category: 'UI/UX',
    year: 2024,
    metrics: {
      a11y: 100,
      performance: 99
    },
    stack: ['React', 'Storybook', 'TypeScript', 'Figma', 'npm'],
    gallery: ['/projects/design-system-1.jpg'],
    links: {
      repo: 'https://github.com/username/design-system'
    },
    caseStudy: {
      overview: 'Comprehensive design system with React components and Figma library.',
      problem: 'Inconsistent UI across products and slow development cycles.',
      process: [
        'Audit existing components and patterns',
        'Design token system creation',
        'Component library development',
        'Documentation and adoption strategy'
      ],
      outcome: 'Reduced development time by 50% and improved consistency.',
      timeline: []
    },
    position: { x: 100, y: -180, orbit: 2 }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    client: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    quote: 'Delivered exactly what we needed, on time and with incredible attention to detail.',
    projectId: '1',
    tags: ['E-commerce', 'Performance', 'UX'],
    avatar: '/avatars/sarah.jpg'
  },
  {
    id: '2',
    client: 'Dr. Michael Rodriguez',
    role: 'CTO',
    company: 'HealthTech Solutions',
    quote: 'The dashboard transformed how our team monitors patients. Exceptional work.',
    projectId: '2',
    tags: ['Healthcare', 'Real-time', 'Compliance']
  }
];

export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    proficiency: 95,
    proof: {
      repos: ['https://github.com/username/react-projects'],
      projects: ['1', '2', '3']
    },
    position: { x: 0, y: 0 }
  },
  {
    id: '2',
    name: 'Next.js',
    category: 'Frontend',
    proficiency: 90,
    proof: {
      repos: ['https://github.com/username/nextjs-apps'],
      projects: ['1']
    },
    position: { x: 100, y: 50 }
  },
  {
    id: '3',
    name: 'Node.js',
    category: 'Backend',
    proficiency: 85,
    proof: {
      repos: ['https://github.com/username/node-apis'],
      projects: ['2']
    },
    position: { x: -80, y: 80 }
  },
  {
    id: '4',
    name: 'UI/UX Design',
    category: 'Design',
    proficiency: 88,
    proof: {
      projects: ['3']
    },
    position: { x: 120, y: -60 }
  }
];