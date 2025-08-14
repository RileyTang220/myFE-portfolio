import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { config } from '../../config';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, TypeScript, Next.js' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Prototyping' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, PWA' },
    { name: 'Web Technologies', icon: Globe, description: 'HTML5, CSS3, JavaScript' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t('about.heading')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {config.personal.about}
            </p>
            
            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{config.personal.experience}</div>
                <div className="text-gray-600 dark:text-gray-400">{t('about.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{config.personal.projects}</div>
                <div className="text-gray-600 dark:text-gray-400">{t('about.projectsCompleted')}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card hover:shadow-xl dark:hover:shadow-gray-900/30 transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
