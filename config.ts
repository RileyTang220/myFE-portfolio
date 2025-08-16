// Configuration file for the portfolio website

// Type definitions
interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa: string;
  relevantCourses: string[];
  achievements: string[];
}

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  projectHighlight?: string;
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

interface Config {
  site: {
    name: string;
    title: string;
    description: string;
    url: string;
  };
  personal: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    about: string;
    experience: string;
    projects: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  education: Education[];
  workExperience: WorkExperience[];
  skills: {
    categories: SkillCategory[];
    additional: string[];
  };
  projects: Project[];
  contact: {
    formspree: string;
    netlify: boolean;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    ogImage: string;
  };
}

export const config: Config = {
  // Site Information
  site: {
    name: "Riley Tang",
    title: "Frontend Developer & UI/UX Designer",
    description: "I create beautiful, responsive, and user-friendly web experiences using modern technologies like React, TypeScript, and Tailwind CSS.",
    url: "https://ruilingtang.com/",
  },

  // Personal Information
  personal: {
    name: "Riley Tang",
    title: "Frontend Developer & UI/UX Designer",
    location: "Adelaide, SA",
    email: "rileytang19@gmail.com",
    phone: "+61 420693629",
    about: "I'm a passionate frontend developer with over 5 years of experience creating exceptional digital experiences. I specialize in building modern, scalable web applications that not only look great but also provide exceptional user experiences.",
    experience: "5+",
    projects: "50+",
  },

  // Social Media Links
  social: {
    github: "https://github.com/RileyTang220",
    linkedin: "https://linkedin.com/in/RileyTang220",
    twitter: "https://twitter.com/rileytang",
    email: "mailto:rileytang19@gmail.com",
  },

  // Education Configuration
  education: [
    {
      id: 1,
      degree: "Bachelor of Electronic Science and Technology",
      institution: "Chengdu College of University of Electronic Science and Technology of China",
      location: "Chengdu, Sichuan, China",
      period: "2013 - 2017",
      description: "Studied fundamental theories and professional knowledge of electronic science, mastered electronic technology application capabilities. Focused on electronic circuit design, signal processing, and electronic system integration.",
      gpa: "3.8/4.0",
      relevantCourses: ["Electronic Circuit Analysis", "Digital Electronics", "Signal Processing", "Microelectronics", "Electronic System Design"],
      achievements: ["Dean's List", "Electronic Science Honor Society", "Circuit Design Competition Winner"]
    },
    {
      id: 2,
      degree: "Master of Integrated Circuit Engineering",
      institution: "Communication University of China",
      location: "Beijing, China",
      period: "2017 - 2020",
      description: "In-depth research on integrated circuit design theory, mastered advanced chip design technology. Specialized in VLSI design, analog circuit design, and digital signal processing for communication systems.",
      gpa: "3.9/4.0",
      relevantCourses: ["VLSI Design", "Analog Circuit Design", "Digital Signal Processing", "Communication Theory", "IC Layout Design"],
      achievements: ["Outstanding Graduate", "Research Excellence Award", "IC Design Innovation Prize"]
    }
  ],

  // Work Experience Configuration
  workExperience: [
    {
      id: 1,
      company: "Beijing Dedao Information Technology Co., Ltd.",
      position: "Frontend Developer",
      period: "2020.06 - 2022.06",
      location: "Beijing, China",
      description: "Responsible for developing and maintaining enterprise-level backend management systems and CRM platforms.",
      responsibilities: [
        "Developed 70+ page modules in responsive enterprise website backend system, including login/registration, permission configuration, data visualization charts, department management, employee management, course selection and course plan configuration",
        "Built 50+ page modules in enterprise CRM backend project system, including enterprise information entry tracking, customer data management, order management for different course resources, and sales process management",
        "Optimized large data volume loading lists in backend systems, reducing rendering time and improving loading speed; implemented visual configuration for mobile interfaces to avoid secondary development",
        "Implemented authentication and multi-device single sign-on functionality in mobile projects; resolved audio/video compatibility issues and cross-platform mobile adaptation problems"
      ],
      technologies: ["Vue.js", "React", "TypeScript", "Node.js", "WebSocket", "Responsive Design"],
      achievements: ["Improved system performance by 40%", "Reduced development time by 30%", "Enhanced user experience across platforms"]
    },
    {
      id: 2,
      company: "Shanghai Xueersi Online Education Co., Ltd.",
      position: "Senior Frontend Developer",
      period: "2022.09 - 2025.02",
      location: "Shanghai, China",
      description: "Led development of social viral group-buying activities and mobile optimization projects.",
      responsibilities: [
        "Developed and optimized group-buying activity pages based on social viral marketing, where users can initiate product group purchases and invite friends or new users to join within a limited time",
        "Implemented real-time group status refresh using WebSocket (or short polling) to create urgency and improve conversion rates",
        "Developed deep link jump functionality for social sharing links to directly access App activity pages",
        "Built poster generation service based on Node.js + Puppeteer, moving poster generation to server-side rendering to significantly improve rendering speed and performance, avoiding frontend lag",
        "Optimized page performance for high-concurrency mobile scenarios"
      ],
      technologies: ["Vue 3", "TypeScript", "React", "Ant Design", "Node.js", "Puppeteer", "WebSocket"],
      achievements: ["Increased daily active users by 35%", "Improved conversion rate by 25%", "Reduced page load time by 50%"],
      projectHighlight: "The group-buying model combines price attractiveness with social propagation power, effectively improving platform daily activity and conversion rates. Users can enjoy discounted prices when the required number of participants is reached, otherwise the system automatically refunds."
    }
  ],

  // Skills Configuration
  skills: {
    categories: [
      {
        name: "Frontend",
        skills: [
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript", level: 95 },
          { name: "HTML/CSS", level: 90 },
          { name: "Next.js", level: 85 },
        ],
      },
      {
        name: "Styling & Design",
        skills: [
          { name: "Tailwind CSS", level: 90 },
          { name: "CSS3", level: 85 },
          { name: "Figma", level: 80 },
          { name: "Responsive Design", level: 95 },
          { name: "UI/UX Principles", level: 85 },
        ],
      },
      {
        name: "Backend & Tools",
        skills: [
          { name: "Node.js", level: 80 },
          { name: "Git", level: 90 },
          { name: "npm/yarn", level: 85 },
          { name: "Webpack/Vite", level: 80 },
          { name: "REST APIs", level: 85 },
        ],
      },
      {
        name: "Other",
        skills: [
          { name: "Testing", level: 75 },
          { name: "Performance", level: 80 },
          { name: "SEO", level: 70 },
          { name: "Accessibility", level: 75 },
          { name: "PWA", level: 70 },
        ],
      },
    ],
    additional: [
      "Redux", "Zustand", "React Query", "Jest", "Cypress", "Storybook",
      "PostCSS", "Sass", "Styled Components", "Emotion", "Three.js",
      "D3.js", "Chart.js", "Framer Motion", "GSAP", "WebGL"
    ],
  },

  // Projects Configuration
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/rileytang/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/project2.jpg",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/rileytang/taskmanager",
      live: "https://taskmanager-demo.com",
      featured: false,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using OpenWeatherMap API.",
      image: "/project3.jpg",
      technologies: ["React", "TypeScript", "OpenWeatherMap API", "Chart.js"],
      github: "https://github.com/rileytang/weather-dashboard",
      live: "https://weather-demo.com",
      featured: false,
    },
    // {
    //   id: 4,
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and optimal performance.",
    //   image: "/project4.jpg",
    //   technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    //   github: "https://github.com/rileytang/portfolio",
    //   live: "https://portfolio-demo.com",
    //   featured: false,
    // },
  ],

  // Contact Form Configuration
  contact: {
    formspree: "", // Add your Formspree endpoint if using Formspree
    netlify: true, // Set to true if deploying to Netlify
  },

  // SEO Configuration
  seo: {
    title: "Riley Tang - Frontend Developer Portfolio",
    description: "Professional frontend developer portfolio showcasing React, TypeScript, and modern web development projects.",
    keywords: ["frontend developer", "react developer", "typescript", "web development", "portfolio"],
    author: "Riley Tang",
    ogImage: "/og-image.jpg",
  },
};

export default config;
