export interface Skill {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: "web" | "backend" | "database";
}

export interface Reason {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const personalInfo = {
  name: "Jhon Alex Luna",
  firstName: "Jhon Alex",
  title: "Desarrollador de Software",
  bio: "Desarrollador de software en constante evolución. Mi formación técnica en Cibertec me ha permitido consolidar una base sólida en el ciclo de vida de desarrollo de software.",
  aboutBio: "Desarrollador de software egresado de Cibertec en la carrera de Computación e Informática. Especializado en el desarrollo de aplicaciones web y backend con tecnologías modernas.",
  education: {
    institution: "Cibertec",
    degree: "Computación e Informática",
    status: "Egresado",
  },
  objective: {
    title: "En búsqueda de oportunidades",
    description: "Interesado en aplicar mis conocimientos en desarrollo de software backend y frontend para crear soluciones eficientes y escalables.",
  },
  social: {
    instagram: "https://www.instagram.com/jhonalexlunacanchihuaman/",
    linkedin: "https://www.linkedin.com/in/jhon-luna-451206315/",
    github: "https://github.com/JhonLunaDev",
  },
  email: "jhonalexlunacanchihuaman@gmail.com",
};

export const skills: Skill[] = [
  { name: "Java", color: "#ED8B00" },
  { name: "Spring Boot", color: "#6DB33F" },
  { name: ".NET", color: "#512BD4" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "SQL Server", color: "#CC2927" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Desarrollo Web", color: "#000000" },
  { name: "Git", color: "#F05032" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gimnasio",
    description: "Aplicación web para la gestión de gimnasios: control de miembros, pagos, horarios y rutinas personalizadas.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    demo: "https://github.com/JhonLunaDev",
    image: "/proyecto1.png",
  },
  {
    id: 2,
    title: "Landing Page",
    description: "Landing page moderna y responsiva para negocio o servicio, optimizada para conversión y SEO.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://github.com/JhonLunaDev",
    image: "/proyecto2.png",
  },
  {
    id: 3,
    title: "API REST Backend",
    description: "API RESTful construida con Spring Boot y PostgreSQL, con autenticación JWT y documentación Swagger.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/JhonLunaDev",
    image: "/proyecto3.png",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo Web",
    description: "Creación de aplicaciones web modernas, responsivas y optimizadas con las últimas tecnologías frontend y backend.",
    icon: "web",
  },
  {
    id: 2,
    title: "Backend con Spring Boot",
    description: "Desarrollo de APIs REST robustas y escalables con Java y Spring Boot, integradas con bases de datos relacionales.",
    icon: "backend",
  },
  {
    id: 3,
    title: "Bases de Datos",
    description: "Diseño, administración y optimización de bases de datos SQL Server, PostgreSQL y MySQL para aplicaciones empresariales.",
    icon: "database",
  },
];

export const reasons: Reason[] = [
  {
    icon: "🎯",
    title: "Compromiso Total",
    description: "Cada proyecto lo trato como si fuera propio. Me involucro al 100% desde el primer día hasta la entrega final.",
  },
  {
    icon: "🚀",
    title: "Tecnología Moderna",
    description: "Utilizo stacks actualizados y buenas prácticas de desarrollo para garantizar código limpio y mantenible.",
  },
  {
    icon: "📱",
    title: "Diseño Responsive",
    description: "Todas mis aplicaciones se adaptan perfectamente a cualquier dispositivo, garantizando la mejor experiencia.",
  },
  {
    icon: "💬",
    title: "Comunicación Clara",
    description: "Mantengo una comunicación constante y transparente durante todo el desarrollo del proyecto.",
  },
];

export const stats: Stat[] = [
  { value: "3+", label: "Proyectos" },
  { value: "Java", label: "Principal" },
  { value: "3", label: "BDs" },
  { value: "2", label: "Años Formación" },
];

export const contactInfo = {
  title: "Hablemos",
  subtitle: "Estoy disponible para proyectos freelance y oportunidades laborales. Completa el formulario y te responderé a la brevedad.",
};
