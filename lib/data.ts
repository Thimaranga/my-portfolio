export const profile = {
  name: "Thushal Himaranga",
  title: "Software Engineer",
  subtitle: "Full-Stack · Systems Architecture · Microservices",
  location: "Al Nahda, Dubai",
  phone: "+97 1 522 278 552",
  email: "thushalhimaranga@live.com",
  linkedin: "t-himaranga-ponnamperuma",
  linkedinUrl: "https://linkedin.com/in/t-himaranga-ponnamperuma",
  availability: "Immediately Available",
  degree: "B.ICT (Hons)",
  summary:
    "Results-driven software engineer with 5+ years building scalable, high-performance enterprise applications across logistics, telecommunications, and real estate. Experienced leading development teams, driving technical decisions, and shipping reliable, business-focused systems, including workflow automation with tools like n8n.",
  yearsExperience: "5+",
};

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Production Systems Shipped", value: "9" },
  { label: "Domains Covered", value: "3" },
  { label: "Latest Team Role", value: "Tech Lead" },
];

export const experience = [
  {
    role: "Associate Tech Lead – Full Stack",
    company: "Digiratina Technology Solutions Pte Ltd",
    location: "Singapore (Remote)",
    period: "Apr 2025 – Mar 2026",
    current: false,
    points: [
      "Led architecture reviews and collaborated with stakeholders to deliver scalable, business-aligned solutions.",
      "Integrated AI/NLP models for intelligent data query processing.",
      "Optimized PostgreSQL performance through indexing and query tuning.",
      "Implemented Docker-based containerization with Jenkins and Bitbucket CI/CD to automate scalable, reliable deployments.",
      "Worked with workflow automation tools such as n8n to automate business processes.",
      "Mentored junior developers through code reviews and technical guidance.",
    ],
    stack: ["Docker", "Jenkins", "Bitbucket CI/CD", "PostgreSQL", "AI/NLP", "n8n"],
  },
  {
    role: "Senior Software Engineer",
    company: "Digiratina Technology Solutions Pte Ltd",
    location: "Singapore (Remote)",
    period: "Apr 2024 – Mar 2025",
    current: false,
    points: [
      "Built responsive UI using Angular and TypeScript.",
      "Developed REST APIs with Spring Boot across MongoDB and Oracle databases.",
      "Implemented microservices with Eureka service discovery.",
      "Containerized applications using Docker.",
    ],
    stack: ["Angular", "TypeScript", "Spring Boot", "MongoDB", "OracleDB", "Eureka"],
  },
  {
    role: "Software Engineer",
    company: "Digiratina Technology Solutions Pte Ltd",
    location: "Singapore (Remote)",
    period: "Nov 2021 – Mar 2024",
    current: false,
    points: [
      "Developed scalable backend services using Spring Boot within a microservices architecture.",
      "Built frontend modules and responsive interfaces using Angular.",
      "Participated in client requirement gathering, solution discussions, and UAT/SIT sessions to ensure successful delivery.",
    ],
    stack: ["Spring Boot", "Angular", "Microservices"],
  },
  {
    role: "Mobile Application Developer – Intern",
    company: "Mahapola Ports & Maritime Academy — Sri Lanka Port Authority",
    location: "Sri Lanka",
    period: "Mar 2021 – Sep 2021",
    current: false,
    points: [
      "Built a mobile application using React Native and Expo.",
      "Developed mobile UI components for cross-platform compatibility.",
      "Designed wireframes and interactive UI/UX prototypes in Figma.",
    ],
    stack: ["React Native", "Expo", "Figma"],
  },
];

export const projects = [
  {
    name: "FreightExchange",
    region: "Australia",
    stack: ["React", "Python", "Spring Boot", "Redis", "PostgreSQL"],
    description:
      "Real-time courier comparison platform with automated booking/tracking and shipment management via integrated courier services.",
    points: [
      "Acted as technical lead for the project.",
      "Owned system architecture design, requirement gathering, and high-performance feature development.",
      "Used AWS services including ECS, Lambda, CloudWatch, and S3 for deployment, monitoring, and infrastructure.",
      "Built an n8n workflow to automate the customer onboarding process.",
    ],
    role: "Technical Lead",
    figmaUrl: "https://www.figma.com/deck/G6SzvkccJKMrMbDnF2ky7x/Untitled?node-id=1-42&t=sQXfAaYA229HHWeL-1"
  },
  {
    name: "Digiratina AI",
    region: "Singapore (Remote)",
    stack: ["React", "Python", "FastAPI", "Redis", "PostgreSQL"],
    description:
      "AI agent that connects to company databases and answers natural-language questions for users regardless of technical or database knowledge.",
    points: [
      "Led the team as Technical Team Lead, guiding development and technical decisions.",
      "Designed and built core system components and overall architecture.",
      "Implemented CI/CD pipelines using Jenkins and Bitbucket with Docker-based containerization.",
    ],
    role: "Technical Team Lead",
    figmaUrl:
      "https://www.figma.com/proto/Q6Fgz7132pRr5bymAul3Sr/HUBBED-AI-Assistant--Copy-?node-id=311-8787&p=f&t=vcodGdIrfRpGjKIw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=311%3A8787"
  },
  {
    name: "Hutly (Bondable / Platform)",
    region: "Australia",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    description:
      "Fintech and proptech project digitizing real estate contracts and streamlining property transactions.",
    points: [
      "Acted as Senior Developer, contributing as a full-stack developer across the project.",
    ],
    role: "Senior Developer",
    figmaUrl:
      "https://www.figma.com/proto/ApCEXkBjtlZci9daewFqX5/Bondable?node-id=458-3091&p=f&t=h5J3vmtIkfKCvL51-0&scaling=scale-down&content-scaling=fixed&page-id=248%3A1920&starting-point-node-id=458%3A3091&show-proto-sidebar=1"
  },
  {
    name: "Ooredoo",
    region: "Maldives",
    stack: ["Angular", "Spring Boot", "MongoDB", "OracleDB", "Prometheus", "Grafana", "Eureka", "Opsgenie"],
    description:
      "Telecom number management system managing internal number allocation, tracking, and workflow operations.",
    points: [
      "Acted as Senior Full-Stack Developer on the project.",
      "Involved in requirement gathering, system analysis, UAT, and SIT testing.",
      "Provided production support and server/service-level monitoring for reliability.",
      "Implemented Docker-based containerization with Jenkins and Bitbucket CI/CD.",
    ],
    role: "Senior Full-Stack Developer",
    figmaUrl:
      "https://www.figma.com/proto/3iAcwllRctEcWrArS0VZFB/Ooredoo-Phase-2--Copy-?node-id=7-45&p=f&t=jyIR7tDPPXwKpmPq-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=174%3A69",
  },
  {
    name: "Dialog Workflow",
    region: "Sri Lanka",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
    description:
      "One of the most complex projects handling the end-to-end delivery flow of an enterprise solution.",
    points: ["Full stack development.", "Code reviewing and managing team.", "Managed service deployments and release orchestration."],
    role: "Full-Stack Developer",
  },
  {
    name: "EMS — Employee Management System",
    region: "Internal",
    stack: ["React", "Spring WebFlux", "PostgreSQL"],
    description: "Enterprise employee management platform built on a reactive Spring backend.",
    points: ["Full stack development.", "Engineered and deployed reactive REST endpoints, streamlining internal deployment cycles."],
    role: "Full-Stack Developer",
    figmaUrl:
      "https://www.figma.com/proto/Ad9xg6iPMrlehsS6ctDgG4/Enterprise-Management-System?node-id=9228-17862&starting-point-node-id=136%3A265&scaling=contain&content-scaling=fixed",
  },
];

export const skillGroups = [
  {
    label: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "FastAPI (Python)", "Node.js"],
  },
  {
    label: "Frontend",
    skills: ["Angular", "React", "Next.js", "TypeScript", "React Native"],
  },
  {
    label: "Architecture",
    skills: ["Microservices", "Scalable System Design", "API Design", "Service Discovery (Eureka)"],
  },
  {
    label: "DevOps",
    skills: ["Docker", "Jenkins", "Bitbucket CI/CD", "Nexus", "Containerization"],
  },
  {
    label: "Observability & Cloud",
    skills: ["Grafana", "Prometheus", "Opsgenie", "AWS EC2", "AWS ECS", "CloudWatch", "Lambda", "S3"],
  },
  {
    label: "AI Integration",
    skills: ["AI Agents", "NLP Integration (GPT, Gemini, DeepSeek)", "LLM-Based Database Query Systems"],
  },
];

// Derived from how central each skill is across the roles in `experience`.
export const topSkills = [
  { name: "Java / Spring Boot", value: 90 },
  { name: "Angular / React / Next.js", value: 85 },
  { name: "Microservices & System Design", value: 88 },
  { name: "Docker & CI/CD", value: 85 },
  { name: "PostgreSQL / MongoDB", value: 80 },
  { name: "AI / NLP Integration", value: 72 },
];

// Three broad pillars distilled from skillGroups, for the "core competencies" band.
export const competencies = [
  {
    label: "Full-Stack Development",
    icon: "code",
    description: "End-to-end delivery across Angular, React, Next.js on the front end and Spring Boot, FastAPI on the back end.",
  },
  {
    label: "System Architecture",
    icon: "server",
    description: "Microservices, service discovery, and scalable API design for high-traffic enterprise systems.",
  },
  {
    label: "DevOps & Cloud",
    icon: "cloud",
    description: "Docker-based CI/CD with Jenkins & Bitbucket, plus AWS ECS/Lambda and Grafana/Prometheus observability.",
  },
];

export const education = {
  degree: "Bachelor of Information Communication Technology (Hons)",
  school: "University of Jaffna",
  period: "2017 – 2021",
};

export const courses = [
  { name: "Introduction to Cyber Security", org: "Cisco Network Academy" },
  { name: "Cyber Security Essentials", org: "Cisco Networking Academy" },
];

export const volunteer = [
  { role: "Treasurer", org: "D-Club, Digiratina Technology Pte Ltd" },
  { role: "Outreach Ambassador", org: "IEEE Computer Society" },
  { role: "Brand Ambassador", org: "IEEE Computer Society" },
  { role: "Treasurer", org: "IEEE Student Branch, University of Jaffna" },
];

export const references = [
  {
    name: "Mr. Nuwan Peshala",
    role: "Event Executive, dmg events LLC",
    phone: "+971 54 420 7286",
    email: "nuwansayakkara@dmgevents.com",
  },
  {
    name: "Mr. Shazan Hisham",
    role: "IT Support Executive, The Choice Marketing Management & Events LLC",
    phone: "+971 50 129 0737",
    email: "support@thechoiceuae.com",
  },
];
