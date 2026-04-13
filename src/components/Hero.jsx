'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/translations';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), { ssr: false });

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 py-16">
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
          {t('hero.greeting')}{' '}
          <span className="text-gradient">Алан Хубежов</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">{t('hero.role')}</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl">{t('hero.description')}</p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            href="/#projects"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors font-medium"
          >
            {t('hero.cta.projects')}
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 border border-dark-border rounded-lg hover:bg-dark-card transition-colors font-medium"
          >
            {t('hero.cta.contact')}
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex justify-center z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
          <Image
            src="https://sun2-22.userapi.com/s/v1/ig1/J8qZllzAgkCcp2KPUuYztGh02I6rggUlWwSwSz2IevRraD0YnzmgcgdTcyVrbwUCQ2DDzFBb.jpg?quality=96&crop=0,0,899,899&blur=5,10&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=oKSZt1rdkYlha5q2Ly_qdAUOmgR32KWFTeFoXts7xOY&cs=200x200"
  alt="Алан Хубежов"
  fill
  className="object-cover"
  priority
          />
        </div>
      </motion.div>
    </section>
  );
}