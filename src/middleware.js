import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en'
});

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|de)/:path*']
};
