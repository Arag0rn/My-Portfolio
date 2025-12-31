import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'de'];
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locales.includes(locale) ? locale : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
});