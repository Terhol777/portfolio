'use client';

import { useTranslation } from '../i18n/translations';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    'React',
    'Next.js',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'GraphQL',
    'Framer Motion',
    'Three.js',
    'Jest',
    'Webpack',
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      id="about"
      className="py-16 border-t border-dark-border"
    >
      <h2 className="text-3xl font-bold mb-8 text-center font-display">
        <span className="text-gradient">{t('about.title')}</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg text-gray-300">{t('about.bio1')}</p>
          <p className="text-lg text-gray-300">{t('about.bio2')}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.skills')}</h3>
          <ul className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="w-2 h-2 bg-gradient rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}