import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  
  postgresql,
  
  graphql,
  komikult,
  alxforum,
  abe,
  schoolsmart,
  math,
 
  
  mysql,
  python,
  coverhunt,
 
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'python',
    icon: python,
  },
];

const experiences = [
  {
    title: "NILE TECHNOLOGY SOLUTIONS",
    company_name: "Internship",
    icon: coverhunt,
    iconBg: "#333333",
    date: " March - May 2025",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Abegarge",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: abe,
    repo: "",
    demo: "",
  },
  {
    id: "project-2",
    name: "School Management",
    description:
      "A modern, full-stack MERN application designed to streamline school administration and enhance the educational experience for administrators, teachers, students, and staff.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: schoolsmart,
    repo: "https://github.com/Abdi0947/Nile-Internship-Project",
    demo: "http://51.21.182.82/",
  },
  {
    id: "project-3",
    name: "Alx Forum",
    description:
      "ALX Forum is a community-driven Q&A platform for ALX students to ask and answer programming-related questions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: alxforum,
    repo: "https://github.com/Marufomer/Portfolio-Project",
    demo: "https://alx-forum.netlify.app/login",
  },
];

export { services, technologies, experiences, projects };
