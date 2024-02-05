
import Link from "next/link";

const LanguageSwitcher = ({ locale, pathname }) => {


  return (
    <div className="flex space-x-4 text-white">
      <Link href={locale === 'de' ? `/en/${pathname}` : `/${pathname}`}>
        <p style={{ fontWeight: locale === 'en' ? 'bold' : 'normal' }} className="text-white">
          EN
        </p>
      </Link>
      <Link href={locale === 'en' ? `/de/${pathname}` : `/${pathname}`}>
        <p style={{ fontWeight: locale === 'de' ? 'bold' : 'normal' }} className="text-white">
          DE
        </p>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;