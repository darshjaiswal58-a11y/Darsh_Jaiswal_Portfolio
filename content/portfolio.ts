export type Chapter = {
  id: string;
  index: string;
  label: string;
  title: string;
  summary?: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  keyFeatures: readonly string[];
  technologies: readonly string[];
  learningOrImpact?: string;
  image: string;
  githubUrl?: string;
};

export type EducationEntry = {
  number: string;
  stage: string;
  institution: string;
  boardOrYears: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export type Certification = {
  number: string;
  id: string;
  title: string;
  issuer: string;
  image: string;
};

export type InternshipReportGroup = {
  title: string;
  items: readonly string[];
};

export type Internship = {
  company: string;
  location: string;
  department: string;
  role: string;
  period: string;
  reportGroups: readonly InternshipReportGroup[];
  image?: string;
};

export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

export const portfolio = {
  identity: {
    name: "Darsh Jaiswal",
    role: "Computer Science / AI / Web / Creative Technology",
    headline: "Engineering thoughtful products at the intersection of AI, web, and creative technology.",
    introduction:
      "Computer Science student building practical systems that combine engineering depth, product thinking, and strong design instincts.",
  },
  about: {
    title: "Engineering + AI + Web + Product Thinking",
    paragraphs: [
      "I am a Computer Science student with a strong interest in building products that connect technical depth with real user value. My work centers on AI systems, web experiences, and interfaces that are useful as well as clear and deliberate.",
      "My focus spans machine learning, intelligent workflows, frontend engineering, and product thinking. I enjoy translating ideas into systems that are practical, fast, and grounded in a clear problem statement.",
      "I also carry a visual and creative lens into my work through photography, editing, and digital storytelling, which helps me shape experiences that feel coherent, intentional, and memorable.",
    ],
  },
  projects: [
    {
      id: "client-intelligence",
      number: "01",
      title: "Client Intelligence Copilot",
      category: "AI / Explainable Intelligence",
      description: "A prototype AI system that transforms messy client-coach conversations into structured, evidence-backed intelligence.",
      overview: "Rather than simply summarizing conversations, the system analyzes them across multiple layers to help coaches understand what is happening, why the system reached a conclusion, and what information may still be missing.",
      keyFeatures: [
        "Extracts key information such as sleep, nutrition, exercise, stress, symptoms and weight.",
        "Generates an Intelligence Dashboard with Weekly Health Score, Burnout Risk, Engagement Level and Coach Priority Score.",
        "Identifies missing information and detects contradictions between statements.",
        "Builds a reasoning graph connecting observations with conclusions.",
        "Suggests coach actions while retaining the original conversation as evidence.",
        "Produces structured JSON output.",
      ],
      technologies: ["AI / Explainable Intelligence"],
      learningOrImpact: "Observation -> Evidence -> Reasoning -> Confidence -> Action. Learning: workflow design, structured outputs, explainability, hallucination awareness, and human-in-the-loop AI systems.",
      image: "/images/projects/client-intelligence.png",
    },
    {
      id: "lazy-autotuner",
      number: "02",
      title: "Lazy Autotuner",
      category: "Automation / Python",
      description: "A lightweight desktop automation utility that keeps the Downloads folder organized automatically.",
      overview: "The application monitors the Downloads directory and automatically sorts incoming files into appropriate folders based on their extensions.",
      keyFeatures: [
        "Monitors the Downloads directory for file-system events.",
        "Detects newly added or modified files and parses file extensions.",
        "Maps files to appropriate destination folders and automatically moves them.",
        "Runs silently in the background / startup workflow.",
      ],
      technologies: ["Python"],
      learningOrImpact: "Learning: file-system events, automation workflows, background execution, and safe file handling.",
      image: "/images/projects/lazy-autotuner.png",
    },
    {
      id: "flowzen",
      number: "03",
      title: "FlowZen",
      category: "JavaScript / Gamification",
      description: "A Solo Leveling-inspired productivity system that turns everyday task completion into an RPG-style experience.",
      overview: "The application introduces progression, rewards and persistence so productivity feels more like progressing through a game.",
      keyFeatures: [
        "Earn Gold for completed tasks.",
        "Dynamic E-Rank to S-Rank progression with ranking logic based on consistency.",
        "Shop and Inventory system with a virtual economy for real-life rewards.",
        "Persistent progress across browser refreshes.",
      ],
      technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "DOM Manipulation", "Audio API", "LocalStorage"],
      learningOrImpact: "Learning: application state without a backend and immersive UI/UX design.",
      image: "/images/projects/flowzen.png",
    },
    {
      id: "travelx",
      number: "04",
      title: "TravelX / DreamFlow",
      category: "Flutter / AI",
      description: "An AI-powered travel assistant that generates structured, day-by-day itineraries from a destination and travel vibe.",
      overview: "The goal is to turn trip planning from a collection of tabs and notes into a structured travel plan in seconds.",
      keyFeatures: [
        "Enter a destination and select a travel vibe such as Relaxing, Adventure or Culture.",
        "Generate Morning / Afternoon / Evening activities and multi-day itineraries.",
        "Save favorite trips and handle structured itinerary data.",
      ],
      technologies: ["Flutter / Dart", "Google Gemini API", "State Management"],
      learningOrImpact: "Learning: transforming LLM-generated responses into predictable, structured application data that a real interface can consume reliably.",
      image: "/images/projects/travelx.png",
    },
    {
      id: "habit-tracker",
      number: "05",
      title: "Habit Tracker",
      category: "Next.js / Firebase / Productivity",
      description: "A habit-tracking application designed around visual consistency rather than simple task lists.",
      overview: "The system visualizes daily progress and protects the integrity of the streak by preventing users from retroactively faking progress.",
      keyFeatures: [
        "Visual consistency graphs and daily win-rate tracking.",
        "Anti-cheat time locking and progress visualization.",
        "Installable PWA with secure Google Sign-in and Firebase integration.",
      ],
      technologies: ["Next.js", "Firebase", "Google Authentication", "PWA"],
      learningOrImpact: "Learning: authentication, persistent cloud data, installable web experiences, and data-integrity mechanisms.",
      image: "/images/projects/habit-tracker.png",
    },
    {
      id: "tata-motors-inventory-intelligence",
      number: "06",
      title: "Tata Motors Inventory Intelligence",
      category: "AI / Inventory Systems / Full Stack",
      description: "An AI-based inventory criteria checker and inventory intelligence dashboard developed during a Tata Motors internship.",
      overview: "The system automates inventory monitoring and replaces a manual Excel-based workflow with a browser-accessible application.",
      keyFeatures: [
        "Automated inventory analysis across operational inventory areas with Excel upload and processing.",
        "Large dataset processing using pandas and openpyxl, with column validation and duplicate prevention.",
        "Minimum-stock criteria checking with low-stock and no-criteria identification.",
        "Red / Yellow / Green inventory classification and interactive filtering.",
        "Role-based Admin / Staff access, stock override, upload history and age-wise inventory analysis.",
        "Downloadable Excel reports.",
      ],
      technologies: ["Python", "Flask", "Pandas", "OpenPyXL", "HTML", "CSS", "JavaScript", "GitHub", "Render"],
      learningOrImpact: "A project-focused inventory workflow for operational analysis and reporting.",
      image: "/images/projects/tata-internship.png",
    },
  ] satisfies readonly Project[],
  education: [
    {
      number: "01",
      stage: "School",
      institution: "St. Francis School",
      boardOrYears: "ICSE",
      detail: "Class 10th",
    },
    {
      number: "02",
      stage: "School",
      institution: "Lucknow Public School",
      boardOrYears: "CBSE",
      detail: "Class 12th",
    },
    {
      number: "03",
      stage: "University",
      institution: "VIT Bhopal University",
      boardOrYears: "2024–2028",
      detail: "Bachelor in Computer Science and Engineering",
    },
  ] satisfies readonly EducationEntry[],
  skills: [
    { title: "AI / ML", items: ["LLM workflows", "Model thinking", "Computer vision", "Generative AI"] },
    { title: "Web", items: ["Next.js", "TypeScript", "UI systems", "Product UX"] },
    { title: "DSA", items: ["Problem solving", "Data structures", "Algorithms", "System design"] },
    { title: "Creative Tech", items: ["Motion design", "Visual storytelling", "Editing", "Digital craft"] },
  ] satisfies readonly SkillGroup[],
  certifications: [
    {
      number: "01",
      id: "ibm-generative-ai",
      title: "Introduction to Generative AI",
      issuer: "IBM SkillsBuild",
      image: "/images/certificates/ibm-generative-ai.png",
    },
    {
      number: "02",
      id: "google-bits-and-bytes",
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google / Coursera",
      image: "/images/certificates/google-bits-and-bytes.png",
    },
    {
      number: "03",
      id: "ea-job-simulation",
      title: "Software Engineering Job Simulation",
      issuer: "Electronic Arts / Forage",
      image: "/images/certificates/ea-job-simulation.jpg",
    },
    {
      number: "04",
      id: "google-ai-brainstorming",
      title: "AI for Brainstorming and Planning",
      issuer: "Google / Coursera",
      image: "/images/certificates/google-ai-brainstorming.png",
    },
    {
      number: "05",
      id: "oracle-database-foundations",
      title: "Databases for Developers: Foundations",
      issuer: "Oracle Dev Gym",
      image: "/images/certificates/oracle-database-foundations.png",
    },
  ] satisfies readonly Certification[],
  internship: {
    company: "Tata Motors Limited",
    location: "Lucknow Plant",
    department: "Materials Management Department",
    role: "Software Development Intern — AI & Inventory Systems",
    period: "May 2026 – June 2026",
    reportGroups: [
      {
        title: "System",
        items: [
          "Full-stack Flask and Python backend with an HTML, CSS, and JavaScript frontend.",
          "Inventory coverage across Machinery Spare, Tools, Plant 3003, and Plant 3005.",
          "Replaced a manual Excel workflow for more than 7,500 material codes.",
        ],
      },
      {
        title: "Data Pipeline",
        items: [
          "Excel upload processing with pandas and openpyxl.",
          "Column validation including SAP-style headerless files and duplicate prevention.",
          "Progress feedback with configurable plant and material-group filtering.",
        ],
      },
      {
        title: "Stock Controls",
        items: [
          "Minimum-stock criteria with low-stock and no-criteria flags.",
          "Red, Yellow, and Green stock classification with horizontal-bar click filtering.",
          "Admin and Staff roles, including Admin Stock Override, upload history, agewise stock, and downloadable Excel reports.",
        ],
      },
      {
        title: "Delivery",
        items: [
          "Tested with more than 3,392 live plant entries.",
          "Cloud-hosted browser service that eliminated VPN-restricted desktop tooling.",
        ],
      },
    ] satisfies readonly InternshipReportGroup[],
  } satisfies Internship,
  contact: {
    statement: "Let's build something thoughtful.",
    email: "darshjaiswal58@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/darshjaiswal58-a11y", display: "GitHub" },
      { label: "LinkedIn", href: "https://linkedin.com/in/darsh-jaiswal-54969b373/?skipRedirect=true", display: "LinkedIn" },
      { label: "Phone", href: "tel:951680907", display: "951680907" },
    ] satisfies readonly ContactLink[],
  },
  chapters: [
    { id: "home", index: "00", label: "Darsh Jaiswal", title: "Darsh Jaiswal" },
    { id: "about", index: "01", label: "Origin Story", title: "About Myself" },
    { id: "projects", index: "02", label: "Build Gallery", title: "My Projects" },
    { id: "education", index: "03", label: "Learning Path", title: "My Education" },
    { id: "certifications", index: "04", label: "Proof of Craft", title: "My Certifications" },
    { id: "internship", index: "05", label: "Field Notes", title: "My Internship" },
    { id: "contact", index: "06", label: "Connect", title: "Let us build something thoughtful." },
  ] satisfies Chapter[],
} as const;
