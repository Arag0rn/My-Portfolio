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
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale("en")}
        disabled={locale === "en"}
      >
        EN
      </button>

      <button
        onClick={() => switchLocale("de")}
        disabled={locale === "de"}
      >
        DE
      </button>
    </div>
  );
}
