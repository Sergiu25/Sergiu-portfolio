export const profile = {
  name: 'Sergiu-Catalin Petris',
  title: 'Junior Software Developer',
  summary:
    'Economic Informatics graduate from Babe\u0219-Bolyai University, interested in building practical software across backend, data, AI and web projects.',
  about: [
    'I\u2019m Sergiu, a recent Economic Informatics graduate from Babe\u0219-Bolyai University, interested in software development, problem-solving, and building applications that are useful, clear, and well-structured.',
    'My background sits somewhere between technology and business, which helps me look at software not only from a technical point of view, but also from the perspective of the people who will actually use it. I enjoy understanding how things work, breaking problems down, and finding practical solutions through code.',
    'I\u2019ve worked mostly with Java and backend development so far, but I don\u2019t see myself limited to one technology or one area. I\u2019m open to learning new tools, working on different types of projects, and growing based on the problems I get to solve.',
    'Outside of programming, I enjoy football, good conversations, and spending time with people. I\u2019m not trying to present myself as someone who only writes code all day. I like learning, asking questions, working with others, and improving through real experience.',
    'Right now, I\u2019m focused on becoming a better software developer and finding opportunities where I can learn, contribute, and grow in a healthy technical environment.',
  ],
  contactText:
    'I am open to new opportunities where I can explore, grow, contribute to meaningful work and keep learning exciting things along the way.',
  links: {
    email: 'mailto:sergiu.petris25@gmail.com',
    github: 'https://github.com/Sergiu25',
    linkedin: 'https://www.linkedin.com/in/sergiu-petris-b52958286/',
    cv: '/Sergiu-Catalin-Petris-CV.pdf',
  },
};

export const experience = {
  role: 'Software Developer Java',
  company: 'BMW TechWorks Academy',
  description:
    'Worked on backend features for employee management modules, focusing on REST endpoints, DTOs, validation logic, exception handling, API documentation and code consistency inside a BCE-style architecture.',
  technologies: [
    'Java',
    'Quarkus',
    'REST APIs',
    'DTOs',
    'validation',
    'exception handling',
    'OpenAPI/Swagger',
    'Git',
    'Maven',
    'Hibernate/Panache',
  ],
};

export const projects: {
  title: string;
  description: string;
  technologies: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}[] = [
  {
    title: 'Essences MCP',
    description:
      'University Semantic Web project that combines an MCP-style JSON-RPC tool layer, LLM routing, REST, GraphQL and RDF/SPARQL into a conversational perfume review platform.',
    technologies: ['Node.js', 'Express', 'MCP', 'LLM', 'REST', 'GraphQL', 'RDF4J', 'SPARQL'],
    links: {
      github: 'https://github.com/Sergiu25/Essences-MCP',
    },
  },
  {
    title: 'Medical Decision Support ML/LLM',
    description:
      'Bachelor thesis research project focused on medical text classification for decision support, comparing TF-IDF machine learning baselines, neural models and fine-tuned BERT approaches.',
    technologies: ['Python', 'ML', 'LLM', 'BERT', 'TF-IDF', 'scikit-learn', 'PyTorch'],
    links: {
      github: 'https://github.com/Sergiu25/medical-decision-support-ml-llm',
    },
  },
  {
    title: 'Gym Management System',
    description:
      'Gym management solution with an ASP.NET Core backend/admin portal, REST API endpoints and a .NET MAUI mobile app for member sessions, subscriptions and attendance.',
    technologies: ['.NET 9', 'ASP.NET Core', '.NET MAUI', 'SQLite', 'Entity Framework Core', 'JWT'],
    links: {
      github: 'https://github.com/Sergiu25/GymManagementProiectMedii',
    },
  },
  {
    title: 'Sergiu Portfolio',
    description:
      'Personal portfolio website built to present experience, skills, contact links and selected projects in a clean responsive interface.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Sergiu25/Sergiu-portfolio',
    },
  },
  {
    title: 'Explain Like I5',
    description:
      'LLM-powered educational chatbot that explains complex topics in simple language through a Flask backend and React frontend.',
    technologies: ['Python', 'Flask', 'React', 'LLM', 'Gemini API'],
    links: {
      github: 'https://github.com/Sergiu25/ExplainLikeI5',
    },
  },
  {
    title: 'Image To ASCII',
    description:
      'Flask web app that converts uploaded images into ASCII art by mapping pixel brightness values to text characters.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'Image processing'],
    links: {
      github: 'https://github.com/Sergiu25/ImageToASCII',
    },
  },
  {
    title: 'Reddit Bot',
    description:
      'Python automation bot that monitors Reddit comments, calls external APIs and stores processed comments to avoid duplicate replies.',
    technologies: ['Python', 'REST APIs', 'Automation', 'Database'],
    links: {
      github: 'https://github.com/Sergiu25/RedditBot',
    },
  },
  {
    title: 'Dashboard',
    description:
      'Dashboard project focused on building a practical interface for organizing and presenting information in a structured layout.',
    technologies: ['Frontend', 'Dashboard UI'],
    links: {
      github: 'https://github.com/Sergiu25/Dashboard',
    },
  },
];

export const skills = [
  {
    group: 'Backend',
    items: [
      'Java',
      'Quarkus',
      'REST APIs',
      'DTOs',
      'Validation',
      'Exception handling',
      'Hibernate ORM',
      'Panache',
    ],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'Oracle', 'SQLite', 'SQL'],
  },
  {
    group: 'Testing',
    items: ['Unit tests', 'Mockito', 'H2'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Maven', 'Swagger/OpenAPI', 'Postman', 'Insomnia', 'IntelliJ IDEA'],
  },
  {
    group: 'Data/AI',
    items: ['Python', 'ML', 'LLM', 'MCP', 'BERT', 'TF-IDF'],
  },
  {
    group: 'Frontend basics',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
];
