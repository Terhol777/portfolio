'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../i18n/translations';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('');
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    try {
      // Замените на свои ключи из EmailJS
      await emailjs.sendForm(
        'service_xxxxxxx',
        'template_xxxxxxx',
        form.current,
        'public_xxxxxxxx'
      );
      setStatus('success');
      form.current.reset();
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      id="contact"
      className="py-16 border-t border-dark-border"
    >
      <h2 className="text-3xl font-bold mb-12 text-center font-display">
        <span className="text-gradient">{t('contact.title')}</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">{t('contact.subtitle')}</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-primary">📧</span>
              <a href="mailto:alan@khubezhov.dev" className="hover:text-primary transition-colors">
                alan@khubezhov.dev
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">💬</span>
              <a
                href="https://t.me/@Terhol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @Terhol
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">🐙</span>
              <a
                href="https://github.com/Terhol777"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                github.com/Terhol777
              </a>
            </li>
          </ul>
          <p className="mt-6 text-gray-400 text-sm">Открыт для предложений о работе и сотрудничестве.</p>
        </div>
        <div>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="user_name" className="block mb-1 font-medium text-gray-300">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block mb-1 font-medium text-gray-300">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-300">
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 disabled:opacity-50 transition-colors font-medium w-full"
            >
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center">{t('contact.form.success')}</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">{t('contact.form.error')}</p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}