import { NextResponse } from 'next/server';

export async function GET() {
  const resumeData = {
    _meta: {
      status: "SYSTEM_ONLINE",
      last_updated: new Date().toISOString(),
      profile_type: "FULL_STACK_AI_ENGINEER"
    },
    identity: {
      name: "Martin Lenga Mwapahe",
      location: "Nairobi, Kenya",
      contact: {
        email: "martinlenga003@gmail.com",
        phone: "+254 719 828 354",
        github: "https://github.com/Martinlenga",
        linkedin: "https://www.linkedin.com/in/martin-lenga/"
      }
    },
    summary: "BSc Informatics and Computer Science graduate with hands-on experience in predictive analytics and data-driven systems. Built a final-year machine learning solution for early student dropout risk detection. Strong in Python, scikit-learn, SQL, and Git-based collaboration. Seeking Data/ML roles to develop reliable models and deliver actionable insights.",
    skills: {
      data_and_ml: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib", "Seaborn"],
      backend_and_systems: ["Django", "PostgreSQL", "MySQL", "REST APIs", "M-Pesa API", "Linux"],
      frontend_and_web: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "JavaScript"],
      engineering_and_tools: ["Git/GitHub", "Data Structures", "Algorithms", "EDA", "Cross-validation", "Figma"]
    },
    experience: [
      {
        company: "Mwalimu National SACCO",
        role: "IT Attachment (Networking & Systems Support)",
        location: "Nairobi, Kenya",
        duration: "Feb 2025 - Apr 2025",
        duties: [
          "Assisted with enterprise network configuration, continuous monitoring, and troubleshooting.",
          "Supported LAN/WAN connectivity, router/switch provisioning, and infrastructure diagnostics.",
          "Maintained zero-downtime operations while strictly adhering to secure IT protocols."
        ]
      }
    ],
    projects: [
      {
        name: "BakiDarasani",
        type: "Machine Learning Pipeline",
        tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
        github: "https://github.com/is-project-4th-year/BakiDarasani_Project",
        description: "End-to-end classification system identifying student dropout risks. Benchmarked Random Forest, evaluated via ROC-AUC & confusion matrices, and integrated with a student-facing chatbot."
      },
      {
        name: "TransitCore (Online Bus Booking)",
        type: "Full Stack Architecture",
        tech: ["Django", "PostgreSQL", "M-Pesa API", "Python"],
        github: "https://github.com/Martinlenga/online_bus_booking_system",
        description: "Scalable online bus booking architecture featuring real-time seat confirmations, automated notifications, and seamless mobile money checkout integration."
      },
      {
        name: "JK Ithaguru",
        type: "Frontend & API Integration",
        tech: ["Next.js", "React", "TypeScript", "M-Pesa API", "REST"],
        github: "https://github.com/Martinlenga/JK-Ithaguru",
        description: "High-performance blog platform featuring a custom paywall architecture. Users access premium content via automated M-Pesa API micro-transactions."
      }
    ],
    education: [
      {
        institution: "Strathmore University, Nairobi",
        degree: "BSc Informatics and Computer Science (Hons)",
        duration: "2022 - 2026",
        status: "Completed (Awaiting Graduation)",
        highlights: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming",
          "Engineered machine learning systems for final year capstone."
        ]
      },
      {
        institution: "Alliance High School",
        degree: "KCSE",
        duration: "2018 - 2021",
        highlights: [
          "Grade: A- (79 points out of 84)",
          "Leadership: School Games Captain, Under Secretary of Social Welfare Society Club"
        ]
      }
    ],
    certifications_and_training: [
      "Microsoft Learn Badges in Machine Learning",
      "Cisco Networking Certificate (Intermediate)",
      "Certified Ethical Hacking (CEH) Coursework (iLabAfrica Centre)",
      "Udemy: Data Analysis with Pandas & Python, Django with React, Complete JavaScript Course"
    ]
  };

  return new NextResponse(JSON.stringify(resumeData, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}