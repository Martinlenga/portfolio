export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    role: "IT Intern – Networking & Systems Support",
    company: "Mwalimu National SACCO, Nairobi",
    duration: "FEB 2025 – APR 2025",
    description: [
      "Assisted with enterprise network configuration, continuous monitoring, and troubleshooting.",
      "Executed LAN/WAN diagnostics, router/switch provisioning, and infrastructure support.",
      "Maintained zero-downtime operations while strictly adhering to secure IT protocols.",
    ],
  },
  {
    role: "BSc Informatics and Computer Science (Hons)",
    company: "Strathmore University, Nairobi",
    duration: "2022 – 2026",
    description: [
      "Engineered an end-to-end machine learning system (BakiDarasani) for capstone.",
      "Completed Certified Ethical Hacking (CEH) coursework at iLabAfrica Centre.",
      "Specialized in Data Structures, Algorithms, and Object-Oriented System Design.",
    ],
  }
];