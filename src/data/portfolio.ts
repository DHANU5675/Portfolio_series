/**
 * Central portfolio data — sourced from Landa Dhanu Vara Prasad's resume.
 * Keep resume-backed content in this file so every section stays consistent.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Landa Dhanu Vara Prasad',
  displayName: 'Dhanu Vara Prasad',
  firstName: 'DHANU',
  seriesTag: 'THE SERIES',
  originalLabel: 'A DHANU ORIGINAL',
  role: 'Fresher | Full-Stack Developer (MERN)',
  tagline: ['MERN Stack', 'DevOps & Cloud', 'AWS'],
  intro:
    'A fresher and full-stack developer experienced in building and deploying responsive MERN applications, REST APIs and cloud-ready multi-tier systems, with a focus on learning continuously and solving problems analytically.',
  location: 'India',
  email: 'landa.dhanu7@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/dhanuvaraprasad',
    github: 'https://github.com/DHANU5675',
  },
  resumePdf: '/assets/L_DHANU_VARA_PRASAD.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Landa Dhanu Vara Prasad',
  },
  interests: ['DevOps', 'Cloud Computing (AWS)', 'Problem Solving'],
};

export const education = [
  {
    school: 'SRKR Engineering College',
    place: 'Bhimavaram',
    degree: 'B.Tech in Electronics and Communication Engineering',
    period: '2022 – 2026',
    score: '80.4%',
  },
  {
    school: 'Sasi Junior College',
    place: 'Tadepalligudem',
    degree: 'Intermediate Education (MPC)',
    period: '2020 – 2022',
    score: '94.6%',
  },
  {
    school: 'Ushodya High School',
    place: 'Narayanapuram',
    degree: 'Secondary School Education (10th Class)',
    period: '2019 – 2020',
    score: '95.0%',
  },
];

export const experience = [
  {
    company: 'Blackbucks',
    role: 'Full Stack Software Developer (MERN)',
    place: '',
    period: 'June 2025 – July 2025',
    points: [
      'Built and deployed responsive web applications using React.js for the frontend and Node.js with Express.js for the backend.',
      'Created REST APIs and managed application data with MongoDB Atlas, writing efficient queries to keep page load times fast.',
      'Took features from initial concept to production, managing code with Git and setting up automated testing.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'recipe-sharing',
    title: 'Recipe Sharing Web Application',
    year: 'Recent',
    genre: 'Full-Stack • Social • MERN',
    logline: 'A community-focused recipe platform with real-time communication and practical sharing tools.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Render'],
    github: 'https://github.com/DHANU5675',
    build: [
      'Built a full-stack social recipe platform using React and TypeScript for the frontend, powered by a Node.js backend.',
      'Added real-time chat, story feeds, friend connections and live notifications to support community engagement.',
      'Included mini-games and a utility shopping list, then deployed the live application using Render.',
    ],
    features: ['Real-time chat', 'Story feeds', 'Friend connections', 'Live notifications', 'Mini-games', 'Shopping list'],
    metrics: [
      { value: 'MERN', label: 'full-stack application' },
      { value: 'Live', label: 'deployed with Render' },
      { value: 'Real-time', label: 'community features' },
    ],
    palette: { from: '#241007', via: '#8a4310', to: '#0b0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'vprofile-deployment',
    title: 'vProfile Multi-Tier Application Deployment',
    year: 'Recent',
    genre: 'DevOps • AWS • Java',
    logline: 'An automated deployment workflow for a scalable multi-tier Java application.',
    stack: ['Java', 'Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    github: 'https://github.com/DHANU5675',
    build: [
      'Set up an automated Jenkins CI/CD pipeline to handle builds, testing and deployments for a multi-tier Java application.',
      'Containerized microservices with Docker and deployed them to an Amazon EKS cluster for scalable, highly available operation.',
      'Wrote Terraform scripts to provision AWS infrastructure including EC2 servers, RDS databases and ElastiCache.',
    ],
    features: ['Jenkins CI/CD', 'Dockerized microservices', 'Amazon EKS', 'Terraform infrastructure', 'EC2', 'RDS', 'ElastiCache'],
    metrics: [
      { value: 'CI/CD', label: 'automated delivery' },
      { value: 'EKS', label: 'container orchestration' },
      { value: 'IaC', label: 'Terraform provisioning' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'iete-forum',
    title: 'Executive Body Member',
    org: 'IETE Student Forum',
    detail: 'Organized technical seminars, embedded hardware hackathons and mentored junior peers in C programming and circuit design.',
    laurel: 'Leadership',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Cisco Networking Academy', name: 'Network Addressing and Troubleshooting', link: '' },
  { issuer: 'Cisco Networking Academy', name: 'CCNA: Introduction to Networks', link: '' },
  { issuer: 'IBM', name: 'SQL and Relational Databases Certificate', link: '' },
  { issuer: 'HackerRank', name: 'Python Programming Certificate', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    subtitle: 'Automation, infrastructure & deployment',
    skills: [
      { name: 'AWS', mono: 'Aw', note: 'Cloud' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'Jenkins', mono: 'Je' },
      { name: 'Terraform', mono: 'Tf' },
      { name: 'Ansible', mono: 'An' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages & Scripting',
    subtitle: 'Programming and automation',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Bash Scripting', mono: 'Ba' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'web-databases',
    title: 'Web & Databases',
    subtitle: 'Full-stack application development',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'React.js', mono: 'Re' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'os-tools',
    title: 'OS & Tools',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Linux/Unix', mono: 'Lu' },
      { name: 'Git', mono: 'Gi' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    subtitle: 'How I work',
    skills: [
      { name: 'Attention to Detail', mono: 'Ad' },
      { name: 'Analytical Problem-Solving', mono: 'Ps' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  AWS: ['vProfile Multi-Tier Application Deployment'],
  Docker: ['vProfile Multi-Tier Application Deployment'],
  Kubernetes: ['Amazon EKS deployment'],
  Jenkins: ['Automated CI/CD pipeline'],
  Terraform: ['AWS infrastructure provisioning'],
  Ansible: ['Resume skills'],
  Python: ['HackerRank Python Programming Certificate'],
  'Bash Scripting': ['Resume skills'],
  SQL: ['IBM SQL and Relational Databases Certificate'],
  'Node.js': ['Recipe Sharing Web Application', 'Blackbucks'],
  'React.js': ['Recipe Sharing Web Application', 'Blackbucks'],
  MongoDB: ['Recipe Sharing Web Application', 'MongoDB Atlas at Blackbucks'],
  'Linux/Unix': ['Resume skills'],
  Git: ['Blackbucks'],
  GitHub: ['Resume skills'],
  'Attention to Detail': ['Resume soft skills'],
  'Analytical Problem-Solving': ['Resume soft skills'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2022',
    synopsis: 'School and intermediate education in Narayanapuram and Tadepalligudem.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Early Arc',
        description: 'Completed secondary school education at Ushodya High School with 95.0%, followed by MPC at Sasi Junior College with 94.6%.',
        tags: ['MPC', 'Academics'],
        runtime: '2019 – 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineer',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Electronics and Communication Engineering at SRKR Engineering College.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Builder',
        description: 'Pursuing a B.Tech in Electronics and Communication Engineering with an academic score of 80.4%.',
        tags: ['B.Tech', 'ECE'],
        runtime: '2022 – 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The Developer',
    period: 'June 2025 – July 2025',
    synopsis: 'Full-stack software development experience at Blackbucks.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The MERN Stack',
        description: 'Built and deployed responsive React applications with Node.js, Express.js and MongoDB Atlas, taking features from concept to production.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        runtime: 'June – July 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'The Cloud Arc',
    period: 'Recent',
    synopsis: 'Two portfolio projects focused on community applications and DevOps automation.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Community Builder',
        description: 'Recipe Sharing Web Application with chat, stories, friendships, notifications, mini-games and a shopping list, deployed on Render.',
        tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        runtime: 'Live project',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The DevOps Engineer',
        description: 'vProfile multi-tier Java deployment using Jenkins, Docker, Amazon EKS and Terraform-managed AWS infrastructure.',
        tags: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
        runtime: 'Multi-tier deployment',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary stack', title: 'MERN', detail: 'React.js • Node.js • Express.js • MongoDB', palette: crimson },
  { label: 'Cloud platform', title: 'AWS', detail: 'EKS • EC2 • RDS • ElastiCache', palette: ocean },
  { label: 'Deployment', title: 'Jenkins + Docker', detail: 'Automated builds, testing and deployments', palette: amber },
  { label: 'Infrastructure', title: 'Terraform', detail: 'Infrastructure as code for AWS', palette: violet },
  { label: 'Academic score', title: '80.4%', detail: 'B.Tech in Electronics and Communication Engineering', palette: jade },
  { label: 'Live project', title: 'Recipe Sharing', detail: 'Community features deployed with Render', palette: crimson },
  { label: 'Orchestration', title: 'Kubernetes', detail: 'Microservices deployed to Amazon EKS', palette: ocean },
  { label: 'Leadership', title: 'IETE Student Forum', detail: 'Executive Body Member', palette: amber },
  { label: 'Database', title: 'MongoDB', detail: 'MongoDB Atlas and full-stack applications', palette: jade },
  { label: 'Present status', title: 'Fresher', detail: 'Ready to begin a full-time software career', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['SRKR Engineering College', '2022 – 2026'],
    chips: ['80.4%'],
  },
  {
    kicker: 'Skills',
    title: 'MERN meets DevOps.',
    lines: ['Python, Bash, SQL · React.js, Node.js', 'AWS, Docker, Kubernetes · Jenkins, Terraform, Ansible'],
    chips: ['AWS', 'Docker', 'React.js', 'Node.js', 'MongoDB'],
  },
  {
    kicker: 'Experience',
    title: 'From concept to production.',
    lines: ['Full Stack Software Developer (MERN)', 'Blackbucks · June 2025 – July 2025', 'React.js · Node.js · Express.js · MongoDB Atlas · Git'],
  },
  {
    kicker: 'Projects',
    title: 'Two practical builds.',
    lines: ['Recipe Sharing Web Application — social features and live deployment', 'vProfile — Jenkins, Docker, EKS and Terraform on AWS'],
  },
  {
    kicker: 'Certified',
    title: 'Four credentials.',
    lines: ['Cisco Networking Academy · IBM · HackerRank', 'Networking · SQL · Python'],
  },
  {
    kicker: 'Leadership',
    title: 'Build and share.',
    lines: ['Executive Body Member · IETE Student Forum', 'Technical seminars · embedded hardware hackathons · peer mentoring'],
  },
  {
    kicker: 'Present status',
    title: 'Fresher',
    lines: ['Ready to begin a full-time software career', 'Focused on full-stack development, DevOps and cloud systems'],
  },
];

export type ProfileId = 'dhanu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'dhanu',
    name: 'Dhanu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & deployment first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
