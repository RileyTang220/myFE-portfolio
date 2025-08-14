export const languages = {
  en: {
    nav: { home: 'Home', about: 'About', education: 'Education', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hero: { greeting: "Hi, I'm", title: 'Frontend Developer' },
    about: { title: 'About Me' },
    education: { 
      title: 'Education',
      bachelor: 'Bachelor',
      master: 'Master',
      bachelorDegree: 'Bachelor of Engineering',
      masterDegree: 'Master of Engineering',
      major: 'Major',
      period: 'Period'
    },
    projects: { title: 'My Projects' },
    skills: { title: 'Skills' },
    contact: { title: 'Contact' },
    footer: { backToTop: 'Back to Top' }
  },
  zh: {
    nav: { home: '首页', about: '关于', education: '教育', projects: '项目', skills: '技能', contact: '联系' },
    hero: { greeting: '你好，我是', title: '前端开发工程师' },
    about: { title: '关于我' },
    education: { 
      title: '教育背景',
      bachelor: '本科',
      master: '硕士',
      bachelorDegree: '工学学士',
      masterDegree: '工学硕士',
      major: '专业',
      period: '时间'
    },
    projects: { title: '我的项目' },
    skills: { title: '技能' },
    contact: { title: '联系' },
    footer: { backToTop: '返回顶部' }
  }
};

export type Language = keyof typeof languages;
