"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";



const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations("Projects");


  const projectsData = [
    {
      id: 1,
      title: "Cabinet CRM",
      description: t("description13"),
      image: "/projects/cabinet.webp",
      tag: ["All", "Next"],
      previewUrl: "https://cabinet.com.ua/",
    },
    {
      id: 2,
      title: "Cabinet Business (Android)",
      description: t("description14"),
      image: "/projects/cabinet-mobile.webp",
      tag: ["All", "Mobile"],
    },
    {
      id: 3,
      title: "Mini-Fleet Monitor",
      description: t("description15"),
      image: "/projects/mini-fleet.webp",
      tag: ["All", "React", "FullStack"],
      gitUrl: "https://github.com/Arag0rn/mini-fleet-monitor",
    },
    {
      id: 4,
      title: "Vue Sneakers Shop",
      description: t("description12"),
      image: "/projects/vueShop.webp",
      tag: ["All", "FullStack", "Vue"],
      gitUrl: "https://github.com/Arag0rn/shopFront",
      previewUrl: "https://shop-front-omega.vercel.app/",
    },
    {
      id: 5,
      title: "Water Tracker",
      description: t("description2"),
      image: "/projects/water-tracker.webp",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Okimmi/stackNinjas-frontend",
      previewUrl: "https://okimmi.github.io/stackNinjas-frontend/",
    },
    {
      id: 6,
      title: "ENG For Uarmy",
      image: "/projects/eng-for-ua.webp",
      description: t("description3"),
      tag: ["All", "Next"],
      gitUrl: "https://github.com/baza-trainee/eng-for-uarmy",
      previewUrl: "https://engforuarmy.org/",
    },
    {
      id: 7,
      title: "Friend Rate",
      description: t("description9"),
      image: "/projects/FriendRate.webp",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/Arag0rn/Fiend-Rate",
      previewUrl: "https://fiend-rate.vercel.app/",
    },
    {
      id: 8,
      title: "Crystall nails studio",
      description: t("description11"),
      image: "/projects/CrystalNails.webp",
      tag: ["All", "Next", "FullStack"],
      gitUrl: "https://github.com/Arag0rn/crystall-nails-studio",
      previewUrl: "https://crystal-studio-nails.vercel.app",
    },
    {
      id: 9,
      title: "Argo-Advisory",
      description: t("description4"),
      image: "/projects/argo-advisory.webp",
      tag: ["All", "HTML/CSS/JS"],
      gitUrl: "https://github.com/Arag0rn/ARGO-Advisori",
      previewUrl: "https://argo-advisory.com/",
    },
    {
      id: 10,
      title: "Watch Sport",
      description: t("description6"),
      image: "/projects/watch.webp",
      tag: ["All", "HTML/CSS/JS"],
      gitUrl: "https://github.com/Arag0rn/The-Watch-Spot",
      previewUrl: "https://arag0rn.github.io/The-Watch-Spot/",
    },
    {
      id: 11,
      title: "Portfolio",
      description: t("description7"),
      image: "/projects/Port.webp",
      tag: ["All", "Next"],
      gitUrl: "https://github.com/Arag0rn/My-Portfolio",
      previewUrl: "https://khabuzovs-portfolio.vercel.app/",
    },
    {
      id: 12,
      title: "Car Rental",
      description: t("description8"),
      image: "/projects/CarRental.webp",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Arag0rn/Car-Rental",
      previewUrl: "https://arag0rn.github.io/Car-Rental/home",
    },
    {
      id: 13,
      title: "TODOcalendar(bd is not active)",
      description: t("description10"),
      image: "/projects/Calendar.webp",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/Arag0rn/TODOcalendar",
      previewUrl: "https://arag0rn.github.io/TODOcalendar",
    },
    {
      id: 14,
      title: "Bookshelf",
      description: t("description1"),
      image: "/projects/Bookshelf.webp",
      tag: ["All", "HTML/CSS/JS"],
      gitUrl: "https://github.com/Arag0rn/project-CodeBusters",
      previewUrl: "https://arag0rn.github.io/project-CodeBusters/",
    },
    {
      id: 15,
      title: "Cinema Monster",
      description: t("description5"),
      image: "/projects/Cinema.webp",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Arag0rn/goit-react-hw-05-movies",
      previewUrl: "https://arag0rn.github.io/goit-react-hw-05-movies/",
    },
  ];
  

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const sortedProjects = projectsData
    .filter((project) => project.tag.includes(tag))
    .sort((a, b) => a.id - b.id);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t("title")}
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
           <ProjectTag
          onClick={handleTagChange}
          name="Vue"
          isSelected={tag === "Vue"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML/CSS/JS"
          isSelected={tag === "HTML/CSS/JS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
            <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {sortedProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;