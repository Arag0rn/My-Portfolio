import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'de'] as const;
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {

  const resolvedLocale = locales.includes(locale as any) 
    ? (locale as string) 
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
});