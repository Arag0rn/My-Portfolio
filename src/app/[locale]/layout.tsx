import { NextIntlClientProvider } from "next-intl";

const  LocaleLayout = async ({ children, params: { locale } }) => {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    return console.log(error);
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <body>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}

export default LocaleLayout