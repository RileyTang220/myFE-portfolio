# Frontend Developer Portfolio - Riley Tang

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases professional frontend development skills with a clean design, smooth animations, and a centralized configuration system.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with Vite for fast development and building
- **Accessibility**: Built with accessibility best practices
- **SEO Ready**: Structured for search engine optimization
- **Contact Form**: Interactive contact form for potential clients
- **Smooth Scrolling**: Smooth navigation between sections
- **Dark Mode**: Full dark/light mode support
- **Multi-language**: Chinese and English language support
- **Centralized Config**: Easy customization through configuration files

## 🚀 Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite 5
- **Package Manager**: npm
- **State Management**: React Context API
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience section
│   ├── Education.tsx   # Education background
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills and expertise
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── contexts/            # React contexts
│   ├── LanguageContext.tsx  # Language switching
│   └── ThemeContext.tsx     # Theme switching
├── config/              # Configuration files
│   └── languages-simple.ts  # Language definitions
├── App.tsx             # Main App component
├── index.css           # Global styles
└── main.tsx            # Entry point
```

## 🛠️ Installation

### Prerequisites
- **Node.js**: Version 18.0.0 or higher (required for Vite 5)
- **npm**: Version 8.0.0 or higher

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd myFE-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🎨 Customization

### Centralized Configuration
The project uses a centralized configuration system. Update `config.ts` to customize:

- **Personal Information**: Name, title, location, contact details
- **Work Experience**: Job history, responsibilities, achievements
- **Education**: Academic background, degrees, institutions
- **Projects**: Portfolio projects with descriptions and links
- **Skills**: Technical skills with proficiency levels
- **Social Links**: GitHub, LinkedIn, Twitter profiles
- **SEO**: Meta tags, descriptions, keywords

### Example Configuration
```typescript
export const config = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... more personal info
  },
  workExperience: [
    {
      company: "Company Name",
      position: "Job Title",
      period: "2020 - 2023",
      // ... more job details
    }
  ],
  // ... other configurations
};
```

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update `src/index.css` for different font families
- **Layout**: Adjust component spacing and grid layouts

### Components
All components automatically use the configuration data, so you only need to update `config.ts` to change the content.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed
- High contrast support
- Screen reader compatibility

## 🌍 Internationalization

- **Languages**: Chinese (中文) and English
- **Language Switching**: Toggle between languages with the globe icon
- **Localized Content**: All text content supports both languages

## 🌙 Theme Support

- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Easy on the eyes for low-light environments
- **Theme Toggle**: Switch between themes with the sun/moon icon
- **Persistent**: Theme preference is saved in localStorage

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📋 Content Sections

### 1. Hero Section
- Personal introduction and call-to-action buttons
- Social media links
- Professional photo/avatar

### 2. About Section
- Personal story and experience summary
- Key statistics and achievements
- Professional overview

### 3. Work Experience
- Detailed job history with timelines
- Responsibilities and achievements
- Technologies used in each role
- Project highlights and impact

### 4. Education
- Academic background and degrees
- Relevant courses and achievements
- GPA and honors

### 5. Projects
- Portfolio of work with descriptions
- Technology stacks used
- Live demos and GitHub links
- Featured projects highlighting

### 6. Skills
- Technical skills with proficiency levels
- Categorized by expertise area
- Additional skills and tools

### 7. Contact
- Contact form with validation
- Social media links
- Professional contact information

## 🚨 Troubleshooting

### Node.js Version Issues
If you encounter `crypto.getRandomValues is not a function` error:
1. Check your Node.js version: `node --version`
2. Ensure you have Node.js 18+ installed
3. Use nvm to switch versions: `nvm use 18`

### Build Errors
1. Clear cache: `rm -rf node_modules package-lock.json`
2. Reinstall dependencies: `npm install`
3. Check for TypeScript errors: `npm run build`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

*Last updated: December 2024*
