"use client";
import React, { useTransition, useState, useCallback } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslations } from 'next-intl';
import CertModal from "./CertModal";
import { skillIcons } from "./skillIcons";
import goit from "../../../public/GOIT.jpeg";
import zer from "../../../public/Zer.jpeg";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("About");

  const handleOpen = useCallback((url) => {
    setImageUrl(url);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
          {skillIcons.map(({ label, path, fillRule }) => (
            <li key={label} className="flex flex-col items-center gap-2 text-center">
              <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current text-white" aria-hidden="true" focusable="false">
                <path d={path} fillRule={fillRule} />
              </svg>
              <span className="text-sm text-[#ADB7BE]">{label}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li><button type="button" className="text-left hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded" onClick={() => handleOpen(goit)}>Full stack Developer GoIT - start your career in IT</button></li>
          <li><button type="button" className="text-left hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded" onClick={() => handleOpen(zer)}>Be On Max - Web-developer</button></li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>III YEPS Hackaton(1 place)</li>
          <li>Future Simple Hack(1 place)</li>
          <li>D.T.Z. Deutsch B1</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="aboutMe" src="/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {t("about_me")}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {t("skills")}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {t("education")}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {t("certifications")}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <CertModal open={open} onClose={handleClose} imageUrl={imageUrl} />
    </section>
  );
};

export default AboutSection;