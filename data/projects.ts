export interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "BakiDarasani",
    role: "Machine Learning Pipeline",
    year: "2024",
    description: "End-to-end classification system identifying student dropout risks. Built with Random Forest, evaluated via ROC-AUC & confusion matrices, and integrated with a student-facing chatbot for targeted interventions.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter"],
    github: "https://github.com/is-project-4th-year/BakiDarasani_Project",
  },
  {
    title: "TransitCore",
    role: "Full Stack Engineer",
    year: "2023",
    description: "Scalable online bus booking architecture. Features real-time seat confirmations, automated notifications, and seamless M-Pesa (Daraja) API checkout integration.",
    tech: ["Django", "PostgreSQL", "M-Pesa API", "Python"],
    github: "https://github.com/Martinlenga/online_bus_booking_system",
  },
  {
    title: "JK Ithaguru",
    role: "Frontend & API Integration",
    year: "2024",
    description: "High-performance blog platform featuring a custom paywall architecture. Users access premium content via automated M-Pesa API micro-transactions and interact through integrated social modules.",
    tech: ["Next.js", "React", "TypeScript", "M-Pesa API", "REST"],
    github: "https://github.com/Martinlenga/JK-Ithaguru",
    live: "#", 
  },
];