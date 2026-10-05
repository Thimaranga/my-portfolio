export const profile = {
  name: "Thushal Himaranga",
  title: "Full-Stack & AI Engineer",
  subtitle: "Full-Stack · AI Integration · Systems Architecture",
  location: "Al Nahda, Dubai",
  phone: "+97 1 522 278 552",
  email: "thushalhimaranga@live.com",
  linkedin: "t-himaranga-ponnamperuma",
  linkedinUrl: "https://linkedin.com/in/t-himaranga-ponnamperuma",
  availability: "Open to work · Immediately available",
  degree: "B.ICT (Hons)",
  summary:
    "Full-stack engineer and tech lead with 5+ years building scalable enterprise applications across logistics, telecommunications, and real estate. I lead teams, own architecture decisions, and ship AI features that hold up in production: LLM-powered database querying, retrieval-augmented support assistants, and workflow automation with n8n.",
  yearsExperience: "5+",
};

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Production Systems Shipped", value: "9" },
  { label: "Recent AI & SaaS Builds", value: "4" },
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

// Personal builds with public demos. Shown in the "Recent builds" section.
export const builds = [
  {
    name: "Holdfast",
    kind: "Multi-tenant SaaS",
    description:
      "Booking platform for salons and clinics: public booking pages, a staff calendar, owner dashboards, card deposits and a platform admin.",
    points: [
      "Double bookings made impossible at the database level with a Postgres exclusion constraint on (staff, time range).",
      "Stripe Checkout deposits with signed-webhook verification and a server-side re-check on return.",
      "Tenant-scoped queries, scrypt password hashing, HttpOnly signed sessions and login lockout.",
      "AI-written weekly business summary with a rule-based fallback; 21 API tests against real Postgres.",
    ],
    stack: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "Stripe", "OpenAI", "Vercel"],
    liveUrl: "https://demo.shiftbook.thushalhimaranga.site/",
  },
  {
    name: "AI Support Assistant",
    kind: "RAG chatbot · Web + WhatsApp",
    description:
      "Customer support assistant that answers only from a business's own documents, on a website widget and on WhatsApp.",
    points: [
      "Hybrid retrieval (pgvector similarity + keyword search) with the source document cited in every answer.",
      "Refuses to guess: unanswerable questions turn into a call-back request with a Telegram alert to the team.",
      "Drop-in widget in a Shadow DOM (about 6 KB), right-to-left support, replies in the customer's language.",
      "Provider-agnostic LLM layer: Gemini by default, OpenAI with one setting.",
    ],
    stack: ["FastAPI", "PostgreSQL + pgvector", "Gemini / OpenAI", "WhatsApp Cloud API", "JavaScript"],
    liveUrl: "https://demo.ai-chatbot.thushalhimaranga.site/",
  },
  {
    name: "AI Database Assistant",
    kind: "Natural language to SQL",
    description:
      "Ask a business database questions in plain English and get the answer, a chart and the SQL that ran, on a 45,000-order retail dataset.",
    points: [
      "LLM generates SQL from the schema and a business glossary; never sees customer personal data.",
      "Layered safety: SQL validator (single SELECT, known tables), read-only role, read-only transaction, 8 s timeout.",
      "Self-correction: a failed query's error is fed back to the model once before giving up.",
      "Redis answer cache to keep repeat questions fast and model costs low.",
    ],
    stack: ["React", "Recharts", "FastAPI", "PostgreSQL", "Redis", "OpenAI", "Docker"],
    liveUrl: "https://demo.ai-assistant.thushalhimaranga.site/",
  },
  {
    name: "AI Lead Automation",
    kind: "n8n workflows",
    description:
      "One n8n pipeline that captures leads from a web form and WhatsApp, qualifies them with AI and follows up automatically.",
    points: [
      "AI extracts intent, budget, timeline and language, scores leads hot/warm/cold and drafts a reply in the lead's language.",
      "Hot-lead and failure alerts to Telegram; automatic 24-hour follow-ups.",
      "Invoice reader: PDF email to structured rows (vendor, dates, VAT, total) in Google Sheets.",
      "Workflows generated from code, with test copies that mock every external service.",
    ],
    stack: ["n8n", "Gemini / OpenAI", "WhatsApp Cloud API", "Google Sheets", "Docker"],
    liveUrl: "",
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

// Referee contact details are shared privately with employers on request.
export const references = { onRequest: true, note: "Professional references available on request." };
