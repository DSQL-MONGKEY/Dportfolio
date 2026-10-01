import { Code2, Cpu, Smartphone, type LucideIcon } from 'lucide-react'

export const aboutFacts = [
   'Fullstack Software Engineer',
   '2+ years experience',
   'Depok, West Java, Indonesia',
]

export const aboutBio = [
   'Results-driven fullstack software engineer with 2+ years building production-grade web platforms, mobile backends, and IoT-integrated cloud systems. I work mainly with TypeScript, Node.js, Next.js, NestJS, React, and Flutter, and I am comfortable deploying containerized architectures on Google Cloud Platform.',
   'I care about shipping on time and with quality — from multi-tenant database schemas and real-time MQTT protocols to high-throughput REST APIs. This site is my corner of the web to share that work, plus a sandbox for experimenting with design and interaction.',
]

export const aboutStats = [
   { label: 'Years experience', value: '2+' },
   { label: 'On-time delivery', value: '98%' },
   { label: 'Students taught', value: '200+' },
]

export interface AboutFocusArea {
   title: string
   description: string
   icon: LucideIcon
   accent: string
}

export const focusAreas: AboutFocusArea[] = [
   {
      title: 'Fullstack Web',
      description:
         'Production web platforms with Next.js, NestJS, and PostgreSQL — from schema design to polished UI.',
      icon: Code2,
      accent: '#F4CE14',
   },
   {
      title: 'Mobile & Backend',
      description:
         'Cross-platform apps with Flutter and React Native, backed by secure REST APIs and role-based access control.',
      icon: Smartphone,
      accent: '#25F4EE',
   },
   {
      title: 'IoT & Cloud',
      description:
         'Real-time MQTT pipelines, ESP32/LoRa devices, and containerized services running on Google Cloud Platform.',
      icon: Cpu,
      accent: '#E1306C',
   },
]

export interface AboutEducation {
   school: string
   degree: string
   period: string
   gpa: string
   notes: string[]
}

export const education: AboutEducation[] = [
   {
      school: 'Universitas Gunadarma',
      degree: 'Bachelor of Computer System',
      period: 'Jul 2025 – Aug 2026',
      gpa: '3.74 / 4.00',
      notes: [
         'Full Bachelor Academic Scholarship recipient',
         'Thesis: LoRa-based Mountain Climber Tracking System as a GSM Alternative in Remote Areas',
      ],
   },
   {
      school: 'Universitas Gunadarma',
      degree: 'Diploma in Computer Engineering',
      period: 'Sep 2022 – Jun 2025',
      gpa: '3.65 / 4.00',
      notes: [
         'Full Diploma Academic Scholarship recipient',
         'National Finalist — IoT Branch, GEMASTIK XVII 2024',
      ],
   },
]

export const achievements = [
   'National finalist in the IoT branch at GEMASTIK XVII 2024 (Puspresnas / Ministry of Education).',
   'Selected among the top ~8% of 57,000+ applicants for Bangkit Academy 2024.',
   'Delivered 98% on-time across freelance and internship engagements.',
   'Taught JavaScript and fullstack workshops to 200+ students at LepKom UG.',
   '3 BNSP certifications: Junior Web Programmer, Junior Network Engineer, and Electronics Prototyping & Programming.',
]

export interface AboutSkillGroup {
   label: string
   items: string[]
}

export const skillGroups: AboutSkillGroup[] = [
   {
      label: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Go (Golang)', 'C/C++', 'Python', 'SQL', 'PHP', 'Java'],
   },
   {
      label: 'Frameworks & Libraries',
      items: [
         'Node.js',
         'Express.js',
         'NestJS',
         'Next.js',
         'React',
         'React Native',
         'Flutter',
         'Laravel',
         'Go-Fiber',
      ],
   },
   {
      label: 'Backend & Cloud',
      items: [
         'RESTful APIs',
         'GraphQL',
         'Microservices',
         'DDD',
         'Docker',
         'GCP (Cloud Run, Compute Engine)',
         'Linux Administration',
         'CI/CD',
         'n8n',
      ],
   },
   {
      label: 'Databases & Messaging',
      items: ['PostgreSQL', 'MySQL', 'MariaDB', 'Prisma ORM', 'Redis', 'MQTT'],
   },
   {
      label: 'Tools & Utilities',
      items: ['Git', 'Postman', 'PlatformIO', 'FreeRTOS', 'Excel VBA / Macros', 'Figma'],
   },
]
