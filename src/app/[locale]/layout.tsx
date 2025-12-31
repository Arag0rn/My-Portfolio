import { NextIntlClientProvider, useMessages } from 'next-intl';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}

const  LocaleLayout = async ({ children, params: { locale } }) => {
 const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <body>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}

export default LocaleLayout