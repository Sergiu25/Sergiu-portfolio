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
    cv: '#',
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
}[] = [];

export const skills = [
  {
    group: 'Backend',
    items: ['Java', 'Quarkus', 'REST APIs', 'DTOs', 'validation', 'exception handling'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'Oracle', 'H2', 'SQL'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Maven', 'Swagger/OpenAPI', 'IntelliJ IDEA'],
  },
  {
    group: 'Data/AI',
    items: ['Python', 'pandas', 'scikit-learn', 'BERT', 'TF-IDF'],
  },
  {
    group: 'Frontend basics',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
];
