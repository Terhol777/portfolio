'use client';

import { useLanguage } from '../i18n/translations';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === 'ru' ? 'en' : 'ru')}
      className="px-2 py-1 text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase"
    >
      {locale === 'ru' ? 'EN' : 'RU'}
    </button>
  );
}