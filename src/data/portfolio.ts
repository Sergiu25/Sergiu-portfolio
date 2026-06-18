export const profile = {
  name: 'Sergiu-Catalin Petris',
  title: 'Junior Java Backend Developer',
  summary:
    'Economic Informatics graduate from Babe\u0219-Bolyai University, focused on Java backend development, REST APIs, databases and clean backend architecture.',
  about:
    'I am an Economic Informatics graduate from Babe\u0219-Bolyai University, with a strong interest in backend development, especially Java, REST APIs, databases, validation, exception handling and software architecture. I like understanding the problem before writing code and I prefer building practical, clear and maintainable solutions.',
  contactText:
    'I am open to junior Java/backend roles, internships and projects where I can build practical backend systems and keep improving as a developer.',
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
