'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  'nav.home': { ru: 'Главная', en: 'Home' },
  'nav.projects': { ru: 'Проекты', en: 'Projects' },
  'nav.contact': { ru: 'Контакты', en: 'Contact' },
  'hero.greeting': { ru: 'Привет, я', en: 'Hi, I am' },
  'hero.role': { ru: 'Frontend-архитектор', en: 'Frontend Architect' },
  'hero.description': {
    ru: 'Создаю быстрые, доступные и визуально впечатляющие веб-приложения. Специализируюсь на React и Next.js.',
    en: 'I build fast, accessible, and visually stunning web applications. Specialized in React and Next.js.',
  },
  'hero.cta.projects': { ru: 'Мои работы', en: 'My Work' },
  'hero.cta.contact': { ru: 'Связаться', en: 'Contact Me' },
  'about.title': { ru: 'Обо мне', en: 'About Me' },
  'about.bio1': {
    ru: 'Я занимаюсь веб-разработкой более 5 лет. Начинал с вёрстки и постепенно перешёл к архитектуре сложных frontend-систем. Люблю превращать дизайн в живой, отзывчивый интерфейс.',
    en: 'I have been doing web development for over 5 years. Started with layout and gradually moved to architecting complex frontend systems. I love turning design into a living, responsive interface.',
  },
  'about.bio2': {
    ru: 'В свободное время изучаю новые технологии, участвую в open-source и делюсь опытом с сообществом.',
    en: 'In my free time, I explore new technologies, contribute to open-source, and share knowledge with the community.',
  },
  'about.skills': { ru: 'Навыки', en: 'Skills' },
  'projects.title': { ru: 'Проекты', en: 'Projects' },
  'projects.demo': { ru: 'Демо', en: 'Demo' },
  'projects.code': { ru: 'Код', en: 'Code' },
  'contact.title': { ru: 'Контакты', en: 'Contact' },
  'contact.subtitle': { ru: 'Свяжитесь со мной', en: 'Get in touch' },
  'contact.form.name': { ru: 'Имя', en: 'Name' },
  'contact.form.email': { ru: 'Email', en: 'Email' },
  'contact.form.message': { ru: 'Сообщение', en: 'Message' },
  'contact.form.send': { ru: 'Отправить', en: 'Send' },
  'contact.form.sending': { ru: 'Отправка...', en: 'Sending...' },
  'contact.form.success': { ru: 'Сообщение отправлено!', en: 'Message sent!' },
  'contact.form.error': { ru: 'Ошибка. Попробуйте позже.', en: 'Error. Try again later.' },
  'footer.copyright': { ru: 'Все права защищены.', en: 'All rights reserved.' },
  'notfound.title': { ru: 'Страница не найдена', en: 'Page not found' },
  'notfound.message': {
    ru: 'Возможно, вы ошиблись адресом или страница была перемещена.',
    en: 'Maybe you mistyped the address or the page has been moved.',
  },
  'notfound.home': { ru: 'На главную', en: 'Go Home' },
};

export const LanguageContext = createContext({
  locale: 'ru',
  setLocale: () => {},
  t: () => '',
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('ru');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'ru' || saved === 'en')) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('lang', newLocale);
  };

  const t = (key) => {
    return translations[key]?.[locale] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
export const useTranslation = () => {
  const { t } = useLanguage();
  return { t };
};