export const personalInfo = {
  name: "Sujal Anant Supekar",
  role: "Electronics & Computer Technology Undergrad",
  headline: "Engineering Ideas Into Software.",
  bio: "Electronics and Computer Technology undergraduate at PICT Pune, interested in software development, backend engineering, problem-solving, and building practical applications.",
  location: "Pune, Maharashtra, India",
  email: "sujalsupekar6289@gmail.com",
  phone: "8766457435",
  formattedPhone: "+91 87664 57435",
  college: "Pune Institute of Computer Technology (PICT), Pune",
  degree: "B.E. in Electronics and Computer Technology",
  gradYear: "2024–2028",
  cgpa: "8.83/10",
  resumePath: "/Sujal-Supekar-Resume.pdf",
  socials: {
    github: "https://github.com/sujal6289",
    linkedin: "https://www.linkedin.com/in/sujal-supekar-121981339/",
    leetcode: "https://leetcode.com/u/sujalsupekar/",
    codechef: "https://www.codechef.com/users/sujal6289",
    codeforces: "https://codeforces.com/profile/sujal_supekar",
  }
};

export const stats = [
  { label: "Current CGPA", value: "8.83", sub: "PICT Pune" },
  { label: "Problems Solved", value: "1000+", sub: "DSA & CP Platforms" },
  { label: "CodeChef Rating", value: "3-Star", sub: "Competitive Coding" },
  { label: "Codeforces Rank", value: "Pupil", sub: "Global Contests" },
];

export const educationData = [
  {
    institution: "Pune Institute of Computer Technology (PICT), Pune",
    degree: "B.E. in Electronics and Computer Technology",
    period: "2024 – 2028",
    score: "CGPA: 8.83 / 10",
    badge: "Undergraduate",
    details: "Focusing on core computer science foundations, backend systems, data structures, algorithms, and hardware-software integration.",
    current: true,
  },
  {
    institution: "Yashwantrao Mohite College, Pune",
    degree: "Higher Secondary Certificate (HSC / Class XII)",
    period: "2022 – 2024",
    score: "87.33%",
    badge: "HSC Board",
    details: "Strong academic foundation in Mathematics, Physics, and Computer Science.",
    current: false,
  },
  {
    institution: "New English Medium School",
    degree: "Secondary School Certificate (SSC / Class X)",
    period: "2021 – 2022",
    score: "90.80%",
    badge: "SSC Board",
    details: "Distinction in academics and early leadership in extracurricular school activities.",
    current: false,
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    description: "Core languages for systems, algorithms, and backend services",
    skills: ["C++", "Java", "Python", "SQL"],
  },
  {
    category: "Backend Technologies",
    iconName: "Server",
    description: "Robust service engineering, API design, and security",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Databases & Libraries",
    iconName: "Database",
    description: "Relational data modeling, querying, and ORM/drivers",
    skills: ["PostgreSQL", "MySQL", "pg"],
  },
  {
    category: "Cloud Computing",
    iconName: "Cloud",
    description: "Cloud fundamentals and scalable infrastructure",
    skills: ["AWS", "Cloud Computing Fundamentals"],
  },
  {
    category: "Cybersecurity",
    iconName: "ShieldCheck",
    description: "Secure data transit, cryptosystems, and protocol integrity",
    skills: ["Network Security", "Cryptography", "TLS/SSL", "Encryption", "Digital Signatures"],
  },
  {
    category: "Core Computer Science",
    iconName: "Cpu",
    description: "Theoretical bedrock and high-performance computing principles",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

export const projectsData = [
  {
    id: "bunk-buddy",
    title: "Bunk Buddy — Smart Attendance Optimizer",
    category: "Backend Development",
    tagline: "Intelligent attendance planning and class-skip optimization engine",
    description: "An attendance-planning application that recommends classes to skip while helping students meet user-defined attendance targets.",
    features: [
      "REST APIs for attendance records, timetables, and academic calendars built with Node.js & Express.js.",
      "Rule-based forecasting algorithm to simulate future attendance outcomes across varying semester schedules.",
      "Personalized attendance recommendations tailored to custom student threshold percentages.",
      "PostgreSQL integration with pg client for transactional persistence and query performance."
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "pg", "JWT", "REST APIs"],
    workflow: [
      { step: "01", title: "Input Ingestion", desc: "Timetable, current attendance logs & target threshold" },
      { step: "02", title: "Simulation Core", desc: "Rule-based forecast engine calculates margin of allowable skips" },
      { step: "03", title: "Optimization", desc: "Generates personalized, safe skip recommendations" }
    ],
    github: "https://github.com/sujal6289",
    featured: true,
  },
  {
    id: "ai-classroom-assistant",
    title: "AI Classroom Assistant",
    category: "Academic Project",
    tagline: "Whisper-based lecture transcription and automated study synthesis pipeline",
    description: "A Whisper-based lecture transcription workflow that converts recorded lectures into structured study materials.",
    features: [
      "Speech-to-text pipeline transforming long classroom audio recordings into accurate text transcripts.",
      "Audio preprocessing and chunking techniques to handle lengthy recordings and boost transcription reliability.",
      "Automated concise lecture summaries and revision notes extraction using NLP.",
      "Dynamic flashcard generation to support efficient spaced-repetition exam review for missed lectures."
    ],
    techStack: ["Python", "Whisper", "NLP", "Speech Recognition"],
    workflow: [
      { step: "01", title: "Audio Preprocessing", desc: "Normalization and windowed chunking of classroom recordings" },
      { step: "02", title: "Whisper Transcription", desc: "High-accuracy acoustic modeling into textual transcripts" },
      { step: "03", title: "Study Artifacts", desc: "NLP pipeline generates summaries, flashcards & notes" }
    ],
    github: "https://github.com/sujal6289",
    featured: true,
  }
];

export const experienceData = [
  {
    role: "Universal Human Values (UHV) Head",
    organization: "ECE Department, PICT",
    period: "PICT Pune",
    type: "Departmental Leadership",
    description: "Coordinated student engagement activities and departmental initiatives promoting Universal Human Values, fostering community leadership and ethics among peers.",
    highlights: [
      "Coordinated student engagement initiatives and workshops across the department.",
      "Facilitated ethical leadership and peer collaboration forums."
    ]
  },
  {
    role: "Class Representative",
    organization: "PICT",
    period: "PICT Pune",
    type: "Student Governance",
    description: "Acted as a communication link between classmates and faculty, helping coordinate class activities, lab schedules, and academic announcements.",
    highlights: [
      "Bridge between faculty members and 70+ engineering classmates.",
      "Coordinated daily schedules, academic updates, and departmental announcements."
    ]
  },
  {
    role: "Management Team Member",
    organization: "INC, PICT",
    period: "PICT Pune",
    type: "Institutional Event Management",
    description: "Supported team coordination and the planning and execution of organizational activities for PICT's flagship initiatives.",
    highlights: [
      "Supported logistics, inter-team scheduling, and operational execution.",
      "Contributed to large-scale campus events and student participation."
    ]
  }
];

export const achievementsData = [
  {
    title: "3-Star Rated on CodeChef",
    category: "Competitive Programming",
    description: "Demonstrated consistent algorithm design, speed, and mathematical problem-solving in rated division contests.",
    link: "https://www.codechef.com/users/sujal6289",
    badge: "CodeChef",
    highlight: "Rating: 3-Star"
  },
  {
    title: "Pupil Rank on Codeforces",
    category: "Competitive Programming",
    description: "Competed in high-stakes worldwide rated rounds, solving complex combinatorics and data structure challenges.",
    link: "https://codeforces.com/profile/sujal_supekar",
    badge: "Codeforces",
    highlight: "Rank: Pupil"
  },
  {
    title: "1000+ Algorithmic Problems Solved",
    category: "Data Structures & Algorithms",
    description: "Extensive problem-solving across LeetCode, CodeChef, and Codeforces spanning graphs, dynamic programming, trees, and system logic.",
    link: "https://leetcode.com/u/sujalsupekar/",
    badge: "LeetCode & Beyond",
    highlight: "1000+ Solved"
  },
  {
    title: "1st Prize at Avishkar AlgoBid",
    category: "Algorithmic Contest",
    description: "Secured first place in algorithmic problem-solving competition testing optimal time complexity and strategic problem selection.",
    badge: "1st Prize Winner",
    highlight: "Champion"
  },
  {
    title: "Top 5 Finalist — HACK-O-BIT",
    category: "National Hackathon",
    description: "Ranked among the Top 5 Teams at HACK-O-BIT, a national-level hackathon supported by the Google Developer Community.",
    badge: "National Finalist",
    highlight: "Top 5 Nationwide"
  },
  {
    title: "Inter-College Sports Representation",
    category: "Athletics & Team Sports",
    description: "Represented PICT in competitive inter-college volleyball and basketball tournaments, cultivating resilience and team synergy.",
    badge: "PICT Sports",
    highlight: "Volleyball & Basketball"
  }
];

// Reusable certifications section ready for future additions.
// Kept empty according to resume truth; when items are added, the component automatically renders them.
export const certificationsData = [];
