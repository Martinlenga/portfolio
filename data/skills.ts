export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export const skills: SkillCategory[] = [
  {
    title: "Data & Machine Learning",
    skills: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib", "Seaborn"],
    color: "border-neon text-neon"
  },
  {
    title: "Backend & Systems",
    skills: ["Django", "PostgreSQL", "MySQL", "REST APIs", "M-Pesa API", "Linux"],
    color: "border-stark text-stark"
  },
  {
    title: "Frontend & Web",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "JavaScript"],
    color: "border-muted text-stark"
  },
  {
    title: "Engineering & Tools",
    skills: ["Git/GitHub", "Data Structures", "Algorithms", "EDA", "Cross-validation", "Figma"],
    color: "border-stark/30 text-muted"
  }
];

// We export a flat list for the infinite scrolling marquee
export const flatSkills = skills.flatMap(c => c.skills);