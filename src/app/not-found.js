'use client';

import Link from 'next/link';
import { useTranslation } from '../i18n/translations';
import { motion } from 'framer-motion';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-8xl font-bold text-gradient mb-4">
        404
      </motion.h1>
      <h2 className="text-2xl mb-6">{t('notfound.title')}</h2>
      <p className="text-gray-400 mb-8 max-w-md">{t('notfound.message')}</p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
        {t('notfound.home')}
      </Link>
    </div>
  );
}