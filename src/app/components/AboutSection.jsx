"use client";
import React, { useTransition, useState, useCallback } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslations } from 'next-intl';
import CertModal from "./CertModal";
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
        <ul className="list-disc pl-2">
          <li>Next.js</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Mongo Db</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
          <li>Socket.io</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li className="cursor-pointer hover:text-primary-500" onClick={() => handleOpen(goit)}>Full stack Developer GoIT - start your career in IT</li>
          <li className="cursor-pointer hover:text-primary-500" onClick={() => handleOpen(zer)}>Be On Max - Web-developer</li>
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