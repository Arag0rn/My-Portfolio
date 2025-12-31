import createNextIntlPlugin from 'next-intl/plugin';

// Указываем реальный путь к твоему файлу
const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Твои настройки Next.js (если есть)
};

export default withNextIntl(nextConfig);