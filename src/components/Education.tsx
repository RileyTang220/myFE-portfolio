import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { config } from '../../config';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('education.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('language') === 'zh' 
              ? '我的教育背景和学习经历'
              : 'My educational background and learning journey'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {config.education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                {/* Period */}
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {t('education.period')}:
                    </span>
                    <span className="ml-2 text-gray-900 dark:text-white font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Location:
                    </span>
                    <span className="ml-2 text-gray-900 dark:text-white">
                      {item.location}
                    </span>
                  </div>
                </div>


              </div>

              {/* Degree Badge */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
                  {item.degree.split(' ')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Education;
