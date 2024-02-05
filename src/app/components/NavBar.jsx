"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from 'next/navigation';
import { useLocale } from "next-intl";
import getCurrentPathname from "../getCurrentPathname";
import { useTranslations } from 'next-intl';





const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const locale = useLocale();
    const pathname = usePathname();
    const [currentPathname, setCurrentPathname] = useState('');
    const t = useTranslations("Navbar");

const navLinks = [
    {
        title: t("first"),
        path:"#about",
    },
    {
        title: t("second"),
        path:"#projects",
    },
    {
        title: t("third"),
        path:"#contact",
    }

]

    console.log(pathname);

  useEffect(() => {
  const path = getCurrentPathname(pathname);
  setCurrentPathname(path)
}, [pathname])
  
    return (
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            LOGO
          </Link>

          <LanguageSwitcher locale={locale} pathname={currentPathname} />
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    );
  };
  
  export default Navbar;