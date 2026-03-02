import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en'
});

export const config = {
  // Добавляем рантайм, чтобы Vercel не гадал
  runtime: 'nodejs', 
  matcher: [
    '/((?!api|_next|favicon.ico|.*\\..*).*)'
  ]
};