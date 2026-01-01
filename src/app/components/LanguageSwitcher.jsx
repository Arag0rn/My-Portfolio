"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // /en
  const locale = useLocale();

  const switchLocale = (nextLocale) => {
    const hash = window.location.hash; // #about

    const segments = pathname.split("/");
    segments[1] = nextLocale;

    router.push(segments.join("/") + hash);
  };

return (
    <div className="flex gap-4 text-white">
      <button
        onClick={() => switchLocale("en")}
        disabled={locale === "en"}
        className={`${locale === "en" ? "font-bold underline" : "font-normal opacity-70 hover:opacity-100"}`}
      >
        EN
      </button>

      <button
        onClick={() => switchLocale("de")}
        disabled={locale === "de"}
        className={`${locale === "de" ? "font-bold underline" : "font-normal opacity-70 hover:opacity-100"}`}
      >
        DE
      </button>
    </div>
  );
}