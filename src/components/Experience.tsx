import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { config } from '../../config';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('language') === 'zh' ? '工作经验' : 'Work Experience'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('language') === 'zh' 
              ? '我的职业发展历程和技术成长'
              : 'My professional journey and technical growth'
            }
          </p>
        </motion.div>

        <div className="space-y-12">
          {config.workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Connector */}
              {index < config.workExperience.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Company Icon */}
                <div className="relative z-10 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {job.position}
                    </h3>
                    <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                      {job.company}
                    </h4>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Project Highlight for specific jobs */}
                  {job.projectHighlight && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                        {job.projectHighlight}
                      </p>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <Code className="w-5 h-5 text-primary-500" />
                      <span>{t('language') === 'zh' ? '主要职责' : 'Key Responsibilities'}</span>
                    </h5>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <Code className="w-5 h-5 text-primary-500" />
                      <span>{t('language') === 'zh' ? '技术栈' : 'Technologies'}</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-primary-500" />
                      <span>{t('language') === 'zh' ? '主要成就' : 'Key Achievements'}</span>
                    </h5>
                    <div className="grid md:grid-cols-3 gap-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                        >
                          <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-green-800 dark:text-green-200 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('language') === 'zh' ? '职业总结' : 'Career Summary'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('language') === 'zh' 
                ? '从企业级后台系统到移动端优化，我在前端开发领域积累了丰富的经验。专注于性能优化、用户体验提升和技术架构设计，致力于为用户创造流畅、高效的数字化体验。'
                : 'From enterprise-level backend systems to mobile optimization, I have accumulated rich experience in frontend development. Focused on performance optimization, user experience enhancement, and technical architecture design, committed to creating smooth and efficient digital experiences for users.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
