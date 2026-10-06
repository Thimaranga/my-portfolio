export const profile = {
  name: "Thushal Himaranga",
  title: "Full-Stack & AI Engineer",
  subtitle: "Full-Stack · AI Integration · Systems Architecture",
  location: "Al Nahda, Dubai",
  phone: "+97 1 581 503 537",
  email: "thushalhimaranga@live.com",
  linkedin: "t-himaranga-ponnamperuma",
  linkedinUrl: "https://linkedin.com/in/t-himaranga-ponnamperuma",
  availability: "Open to work · Immediately available",
  degree: "B.ICT (Hons)",
  summary:
    "Full-stack engineer and tech lead with 5+ years building scalable enterprise applications across logistics, telecommunications, and real estate. I lead teams and client engagements, from requirement gathering and client presentations to architecture decisions and deployment, and ship AI features that hold up in production: LLM-powered database querying, retrieval-augmented support assistants, and workflow automation with n8n.",
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
    role: "Associate Tech Lead",
    company: "Devetern Solutions LLC",
    location: "Dubai",
    period: "Apr 2026 – Aug 2026",
    current: false,
    points: [
      "Architected a robust backend using Spring Boot and PostgreSQL to securely interface with live POS databases and process real-time transactions.",
      "Implemented Redis caching to minimize database query latency and delivered a responsive React interface for intuitive business reporting.",
      "Integrated OpenAI's GPT-4o to translate conversational user queries into complex database searches for non-technical retail staff.",
    ],
    stack: ["Spring Boot", "PostgreSQL", "Redis", "React", "OpenAI GPT-4o"],
  },
  {
    role: "Associate Tech Lead – Full Stack",
    company: "Digiratina Technology Solutions Pte Ltd",
    location: "Singapore (Remote)",
    period: "Apr 2025 – Mar 2026",
    current: false,
    points: [
      "Led architecture reviews and stakeholder alignment to translate business needs into scalable system designs.",
      "Architected and deployed high-performance platforms on AWS (ECS, Lambda, CloudWatch, S3).",
      "Spearheaded an in-house AI agent integrating GPT and Gemini to enable natural-language database querying for non-technical users.",
      "Optimized PostgreSQL latency through indexing and query tuning, and standardized CI/CD workflows (Docker, Jenkins, Bitbucket) to accelerate deployments.",
      "Orchestrated data pipelines and business process automation using n8n.",
      "Mentored engineering teams through code reviews and technical guidance to elevate code quality and delivery velocity.",
    ],
    stack: ["AWS", "Docker", "Jenkins", "Bitbucket CI/CD", "PostgreSQL", "GPT / Gemini", "n8n"],
  },
  {
    role: "Senior Software Engineer",
    company: "Digiratina Technology Solutions Pte Ltd",
    location: "Singapore (Remote)",
    period: "Apr 2024 – Mar 2025",
    current: false,
    points: [
      "Delivered a scalable telecom management system for Ooredoo and contributed to the Hutly fintech platform using Next.js and Node.js.",
      "Built distributed backend services and REST APIs using Spring Boot, MongoDB and Oracle, with Eureka for service discovery.",
      "Designed responsive, production-grade interfaces with Angular and TypeScript, collaborating closely with UX and QA teams.",
      "Containerized services with Docker and streamlined deployments using Jenkins and Bitbucket pipelines.",
      "Configured monitoring (Grafana, Prometheus, Opsgenie) and owned production support to accelerate incident resolution and minimize downtime.",
    ],
    stack: ["Angular", "TypeScript", "Spring Boot", "Next.js", "Node.js", "MongoDB", "OracleDB", "Eureka", "Grafana", "Prometheus"],
  },
  {
    role: "Software Engineer",
    company: "Digiratina Technology Solutions Pte Ltd",
    location: "Singapore (Remote)",
    period: "Mar 2022 – Mar 2024",
    current: false,
    points: [
      "Promoted to Software Engineer on Dialog Workflow, taking greater ownership of full-stack development, code reviews and release management.",
      "Moved to the Employee Management System (EMS), building core features with React and Spring WebFlux on PostgreSQL for a reactive, non-blocking backend.",
      "Developed and maintained scalable Spring Boot services within a microservices architecture, with reusable Angular interfaces across both projects.",
      "Allocated 50% to Advantis (Hayleys Group) to lead the UI revamp of a shipping crew management system from a legacy stack to React.",
      "Took part in client requirement gathering and UAT/SIT cycles, and mentored newly onboarded Associate Software Engineers.",
    ],
    stack: ["Spring Boot", "Spring WebFlux", "Angular", "React", "PostgreSQL", "Microservices"],
  },
  {
    role: "Associate Software Engineer",
    company: "Digiratina Technology Solutions Pte Ltd",
    location: "Singapore (Remote)",
    period: "Nov 2021 – Mar 2022",
    current: false,
    points: [
      "Started as a full-stack developer on the Dialog Workflow project, one of the company's most complex enterprise workflow solutions.",
      "Contributed to backend development with Spring Boot and frontend modules with Angular under senior engineer guidance.",
      "Assisted with requirement clarification, testing and bug fixing, and joined code reviews and pair programming in an Agile team.",
    ],
    stack: ["Spring Boot", "Angular", "Microservices", "Agile"],
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
    name: "AI Assist powered by Devetern",
    region: "Dubai",
    stack: ["React", "Spring Boot", "Redis", "PostgreSQL", "OpenAI GPT-4o"],
    description:
      "Natural-language AI assistant for Point-of-Sale systems, letting business owners query sales analytics, inventory and transaction history without SQL knowledge.",
    points: [
      "Integrated OpenAI's GPT-4o to translate conversational queries into complex database searches for non-technical retail staff.",
      "Architected an enterprise-grade Spring Boot and PostgreSQL backend that securely interfaces with live POS databases and real-time transaction data.",
      "Implemented Redis caching to cut query latency and keep responses fast during peak retail hours.",
      "Delivered a responsive React interface for business intelligence and real-time reporting.",
    ],
    role: "Associate Tech Lead",
  },
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
      "Directed end-to-end delivery as Technical Lead: client presentations, requirement gathering, and guiding both development and BA teams.",
      "Architected high-performance backend features and managed deployment across AWS (ECS, Lambda, S3, CloudWatch).",
      "Optimized LLM token usage and API integrations to improve performance while significantly reducing operating costs.",
      "Implemented CI/CD pipelines using Jenkins and Bitbucket with Docker-based containerization.",
    ],
    role: "Technical Team Lead",
    figmaUrl:
      "https://www.figma.com/proto/Q6Fgz7132pRr5bymAul3Sr/HUBBED-AI-Assistant--Copy-?node-id=311-8787&p=f&t=vcodGdIrfRpGjKIw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=311%3A8787"
  },
  {
    name: "Hutly (Bondable / Platform)",
    region: "Australia",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "FrankieOne", "Equifax"],
    description:
      "Fintech and proptech project digitizing real estate contracts and streamlining property transactions.",
    points: [
      "Acted as Senior Developer, contributing as a full-stack developer across the project.",
      "Developed and maintained Node.js backend APIs for contract data, transaction workflows and user account management.",
      "Implemented secure handling of sensitive financial and tenancy data in line with fintech-grade data protection standards.",
      "Delivered bug fixes, performance improvements and feature releases across both platforms in an agile team.",
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
      "Acted as Senior Full-Stack Developer and took on the Lead Developer role, guiding technical decisions and overseeing delivery.",
      "Involved in requirement gathering, system analysis, UAT, and SIT testing.",
      "Provided production support and worked with the client on security patches and maintenance of production servers.",
      "Implemented Docker-based containerization with Jenkins and Bitbucket CI/CD.",
      "Set up service- and server-level monitoring with Prometheus, Grafana and Opsgenie.",
      "Conducted code reviews to keep code quality consistent across the team.",
    ],
    role: "Lead Developer",
    figmaUrl:
      "https://www.figma.com/proto/3iAcwllRctEcWrArS0VZFB/Ooredoo-Phase-2--Copy-?node-id=7-45&p=f&t=jyIR7tDPPXwKpmPq-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=174%3A69",
  },
  {
    name: "Dialog Workflow",
    region: "Sri Lanka",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
    description:
      "One of the most complex projects handling the end-to-end delivery flow of an enterprise solution.",
    points: [
      "Full stack development.",
      "Peer-to-peer code reviews and team coordination to maintain code quality.",
      "Deployed the frontend and managed releases.",
      "Participated in SIT and UAT sessions before production releases.",
      "Fixed production bugs under strict SLA timelines with minimal disruption to live operations.",
    ],
    role: "Full-Stack Developer",
  },
  {
    name: "Crew Management System (UI Revamp)",
    region: "Hayleys Group / Advantis",
    stack: ["React", "REST APIs", "Legacy Migration"],
    description:
      "Shipping crew management platform for seafarer records, crew deployment, onboarding and vessel assignment.",
    points: [
      "Led the platform's UI revamp at 50% allocation alongside EMS.",
      "Migrated the legacy frontend to a modern, responsive React architecture.",
      "Built modular components and state management for seafarer records, onboarding and vessel assignments.",
      "Integrated REST APIs and improved UI performance with code splitting and memoization.",
      "Participated in SIT/UAT testing and code reviews.",
    ],
    role: "UI Revamp Lead",
  },
  {
    name: "EMS — Employee Management System",
    region: "Internal",
    stack: ["React", "Spring WebFlux", "PostgreSQL"],
    description: "Enterprise platform that streamlines the management of projects, stakeholders and employees, built on a reactive Spring backend.",
    points: [
      "Full stack development, including requirement gathering and system analysis.",
      "Engineered and deployed reactive REST endpoints, streamlining internal deployment cycles.",
      "Implemented Docker-based containerization with Jenkins and Bitbucket CI/CD.",
      "Participated in UAT/SIT, provided production support, and monitored servers and services.",
    ],
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
    skills: ["Java", "Spring Boot", "Spring WebFlux", "REST APIs", "Microservices", "FastAPI (Python)", "Node.js", "Redis"],
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
    skills: ["Docker", "Jenkins", "Bitbucket CI/CD", "Nexus", "Containerization", "n8n Workflow Automation"],
  },
  {
    label: "Observability & Cloud",
    skills: ["Grafana", "Prometheus", "Opsgenie", "AWS EC2", "AWS ECS", "CloudWatch", "Lambda", "S3"],
  },
  {
    label: "Testing",
    skills: ["JUnit 5", "Mockito", "PyTest", "Jest", "React Testing Library", "Unit, Integration, Regression & E2E"],
  },
  {
    label: "AI Integration",
    skills: ["AI Agents", "NLP Integration (GPT-4o, Gemini, DeepSeek)", "LLM-Based Database Query Systems"],
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
