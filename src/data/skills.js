export const skillCategories = [
  {
    id: "languages",
    label: "Programming Languages",
    items: ["Python", "C", "Java", "JavaScript"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js", "Python Flask"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Vercel", "Replit"],
  },
];

export const allSkills = skillCategories.flatMap((cat) =>
  cat.items.map((name) => ({ name, category: cat.id }))
);
