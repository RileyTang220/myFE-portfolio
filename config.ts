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
    title: "Fullstack-oriented Frontend Developer",
    description: "I deliver scalable, high-performance web applications in the education and enterprise domains, with expertise in Vue, React, TypeScript, and Node.js.",
    url: "https://ruilingtang.com/",
  },

  // Personal Information
  personal: {
    name: "Riley Tang",
    title: "Fullstack-oriented Frontend Developer",
    location: "Adelaide, SA",
    email: "rileytang19@gmail.com",
    phone: "+61 420693629",
    about: "I'm a passionate fullstack-oriented frontend developer with over 6 years of experience creating exceptional digital experiences. I specialize in building modern, scalable web applications that not only look great but also provide exceptional user experiences.",
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
  // workExperience: [
  //   {
  //     id: 1,
  //     company: "Beijing Dedao Information Technology Co., Ltd.",
  //     position: "Frontend Developer",
  //     period: "2020.06 - 2022.06",
  //     location: "Beijing, China",
  //     description: "Responsible for developing and maintaining enterprise-level backend management systems and CRM platforms.",
  //     responsibilities: [
  //       "Developed 70+ page modules in responsive enterprise website backend system, including login/registration, permission configuration, data visualization charts, department management, employee management, course selection and course plan configuration",
  //       "Built 50+ page modules in enterprise CRM backend project system, including enterprise information entry tracking, customer data management, order management for different course resources, and sales process management",
  //       "Optimized large data volume loading lists in backend systems, reducing rendering time and improving loading speed; implemented visual configuration for mobile interfaces to avoid secondary development",
  //       "Implemented authentication and multi-device single sign-on functionality in mobile projects; resolved audio/video compatibility issues and cross-platform mobile adaptation problems"
  //     ],
  //     technologies: ["Vue.js", "React", "TypeScript", "Node.js", "WebSocket", "Responsive Design"],
  //     achievements: ["Improved system performance by 40%", "Reduced development time by 30%", "Enhanced user experience across platforms"]
  //   },
  //   {
  //     id: 2,
  //     company: "Shanghai Xueersi Online Education Co., Ltd.",
  //     position: "Senior Frontend Developer",
  //     period: "2022.09 - 2025.02",
  //     location: "Shanghai, China",
  //     description: "Led development of social viral group-buying activities and mobile optimization projects.",
  //     responsibilities: [
  //       "Developed and optimized group-buying activity pages based on social viral marketing, where users can initiate product group purchases and invite friends or new users to join within a limited time",
  //       "Implemented real-time group status refresh using WebSocket (or short polling) to create urgency and improve conversion rates",
  //       "Developed deep link jump functionality for social sharing links to directly access App activity pages",
  //       "Built poster generation service based on Node.js + Puppeteer, moving poster generation to server-side rendering to significantly improve rendering speed and performance, avoiding frontend lag",
  //       "Optimized page performance for high-concurrency mobile scenarios"
  //     ],
  //     technologies: ["Vue 3", "TypeScript", "React", "Ant Design", "Node.js", "Puppeteer", "WebSocket"],
  //     achievements: ["Increased daily active users by 35%", "Improved conversion rate by 25%", "Reduced page load time by 50%"],
  //     projectHighlight: "The group-buying model combines price attractiveness with social propagation power, effectively improving platform daily activity and conversion rates. Users can enjoy discounted prices when the required number of participants is reached, otherwise the system automatically refunds."
  //   }
  // ],

  // Work Experience Configuration
workExperience: [
    {
      id: 1,
      company: "Shanghai Xueersi Online Education Co., Ltd.",
      position: "Senior Frontend Developer",
      period: "Sep 2022 - Feb 2025",
      location: "Shanghai, China",
      description: "Led development of social viral group-buying activities and mobile optimization projects.",
      responsibilities: [
        "Developed C-end (Vue2+ JavaScript) and admin system (Vue3 + TypeScript) for a group-buying campaign platform. Implemented group purchase flows, invitation mechanisms, and an auto-refund feature.",
        "Designed and developed a 'Cube' Low-code H5 Campaign Builder, a drag-and-drop platform enabling operations staff to build H5 campaign pages independently. This reduced the development cycle from 5 days to 1 day, resulting in a 5x faster delivery speed and 80% time saved.",
        "Built a data visualization dashboard using Vue3 + TS + Vite + ECharts, integrating ECharts/AntV for multidimensional real-time monitoring of education KPIs like retention rate and live-stream analytics.",
        "Made fullstack contributions by implementing backend APIs with Node.js and Express, collaborating on schema design, and integrating with CI/CD pipelines using AWS and Docker to streamline deployment and monitoring."
      ],
      technologies: ["Vue2/3", "TypeScript", "Node.js", "ECharts/AntV", "AWS", "Docker"],
      achievements: [
        "Improved H5 delivery speed by 400%, reducing the cycle from 5 days to 1 day.",
        "Achieved 80% time savings for operations staff by enabling independent page building.",
        "Used component-based architecture and Pinia to boost efficiency.",
      ],
      projectHighlight: "The 'Cube' Low-code H5 Campaign Builder significantly accelerated campaign delivery and empowered non-technical staff, demonstrating a direct impact on operational efficiency."
    },
    {
      id: 2,
      company: "Beijing Dedao Information Technology Co., Ltd.",
      position: "Frontend Developer",
      period: "Oct 2019 - Jun 2022",
      location: "Beijing, China",
      description: "Responsible for developing and maintaining enterprise-level backend management systems and CRM platforms.",
      responsibilities: [
        "Developed 70+ modules for an enterprise admin system, covering authentication, permissions, dashboards, and course management.",
        "Built 50+ modules for an enterprise CRM system, including client tracking, order management, and sales workflow.",
        "Optimized large data list rendering with virtual scrolling, reducing load time from 6s to under 1s.",
        "Designed and maintained a component library with 40+ reusable components, achieving a 70% reuse rate.",
        "Implemented multi-end Single Sign-On (SSO) and resolved audio/video playback compatibility issues for cross-platform projects."
      ],
      technologies: ["Vue.js", "React", "TypeScript", "Node.js", "Virtual Scrolling"],
      achievements: [
        "Reduced large data list load time from 6s to <1s through virtual scrolling.",
        "Achieved a 70% component reuse rate by designing and maintaining a comprehensive component library.",
        "Successfully implemented multi-device SSO and resolved cross-platform compatibility issues."
      ],
      projectHighlight: "Demonstrated a strong ability to optimize system performance and efficiency, from improving data loading speeds to creating a reusable component library."
    },
    {
      id: 3,
      company: "Didi Chuxing",
      position: "Frontend Developer Intern",
      period: "Mar 2019 - Oct 2019",
      location: "Beijing, China",
      description: "Contributed to the development of frontend applications and dashboards.",
      responsibilities: [
        "Built a nationwide EV charging station dashboard using Bootstrap and Amap API.",
        "Developed WeChat mini-program pages based on UI designs for DidiPark."
      ],
      technologies: ["Bootstrap", "Amap API", "WeChat Mini Program"],
      achievements: [
        "Successfully implemented dashboard functionality for visualizing EV charging stations.",
        "Contributed to the development of user-facing pages for a major mini-program."
      ],
    }
  ],

  // Skills Configuration
  // skills: {
  //   categories: [
  //     {
  //       name: "Frontend",
  //       skills: [
  //         { name: "React", level: 95 },
  //         { name: "TypeScript", level: 90 },
  //         { name: "JavaScript", level: 95 },
  //         { name: "HTML/CSS", level: 90 },
  //         { name: "Next.js", level: 85 },
  //       ],
  //     },
  //     {
  //       name: "Styling & Design",
  //       skills: [
  //         { name: "Tailwind CSS", level: 90 },
  //         { name: "CSS3", level: 85 },
  //         { name: "Figma", level: 80 },
  //         { name: "Responsive Design", level: 95 },
  //         { name: "UI/UX Principles", level: 85 },
  //       ],
  //     },
  //     {
  //       name: "Backend & Tools",
  //       skills: [
  //         { name: "Node.js", level: 80 },
  //         { name: "Git", level: 90 },
  //         { name: "npm/yarn", level: 85 },
  //         { name: "Webpack/Vite", level: 80 },
  //         { name: "REST APIs", level: 85 },
  //       ],
  //     },
  //     {
  //       name: "Other",
  //       skills: [
  //         { name: "Testing", level: 75 },
  //         { name: "Performance", level: 80 },
  //         { name: "SEO", level: 70 },
  //         { name: "Accessibility", level: 75 },
  //         { name: "PWA", level: 70 },
  //       ],
  //     },
  //   ],
  //   additional: [
  //     "Redux", "Zustand", "React Query", "Jest", "Cypress", "Storybook",
  //     "PostCSS", "Sass", "Styled Components", "Emotion", "Three.js",
  //     "D3.js", "Chart.js", "Framer Motion", "GSAP", "WebGL"
  //   ],
  // Skills Configuration
skills: {
    categories: [
      {
        name: "Frontend",
        skills: [
          { name: "Vue2/3", level: 95 },
          { name: "React", level: 90 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript (ES6+)", level: 95 },
          { name: "Next.js", level: 85 },
        ],
      },
      {
        name: "Backend",
        skills: [
          { name: "Node.js", level: 85 },
          { name: "Express", level: 80 },
          { name: "Koa", level: 80 },
          { name: "RESTful API", level: 90 },
          { name: "GraphQL", level: 75 },
        ],
      },
      {
        name: "DevOps & Cloud",
        skills: [
          { name: "AWS (EC2, S3, Lambda)", level: 80 },
          { name: "Docker", level: 85 },
          { name: "CI/CD Pipelines", level: 80 },
        ],
      },
      {
        name: "Engineering & Tools",
        skills: [
          { name: "Webpack", level: 85 },
          { name: "Vite", level: 90 },
          { name: "Git", level: 95 },
          { name: "Babel", level: 80 },
          { name: "ESLint/Prettier", level: 90 },
        ],
      },
    ],
    additional: [
      "Micro-frontend", "SSR", "Responsive Design", "WeChat Mini Programs", "Electron", "MySQL",
    ],
  },

  // Projects Configuration
  projects: [
    {
      id: 1,
      title: " Data Visualization Dashboard",
      description: "A modern, responsive data visualization dashboard delivering multi-dimensional analytics, geospatial heatmaps, and real-time monitoring, with an enterprise-grade RBAC admin console. Supports both desktop and H5 with device-aware routing and multiple entry points.",
      image: "/project2.jpg",
      technologies: ["Vue3", "TypeScript", "ECharts", "Vite", "Tailwind CSS", "Pinia"],
      github: "https://github.com/RileyTang220/DataVisualizationDashboard",
      live: "https://datavisualizationdashboardttt.netlify.app/",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/rileytang/ecommerce",
      live: "https://ecommerce-demo.com",
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
