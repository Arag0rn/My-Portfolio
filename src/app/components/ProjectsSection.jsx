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
      title: "Bookshelf",
      description: t("description1"),
      image: "./projects/Bookshelf.png",
      tag: ["All", "HTML/CSS/JS"],
      gitUrl: "https://github.com/Arag0rn/project-CodeBusters",
      previewUrl: "https://arag0rn.github.io/project-CodeBusters/",
    },
    {
      id: 2,
      title: "Water Tracker",
      description: t("description2"),
      image: "./projects/water-tracker.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Okimmi/stackNinjas-frontend",
      previewUrl: "https://okimmi.github.io/stackNinjas-frontend/",
    },
      {
      id: 3,
      title: "ENG For Uarmy",
      image: "./projects/eng-for-ua.png",
      description: t("description3"),
      tag: ["All", "Next"],
      gitUrl: "https://github.com/baza-trainee/eng-for-uarmy",
      previewUrl: "https://engforuarmy.org/",
    },
    {
      id: 4,
      title: "Argo-Advisory",
      description: t("description4"),
      image: "./projects/argo-advisory.png",
      tag: ["All", "HTML/CSS/JS"],
      gitUrl: "https://github.com/Arag0rn/ARGO-Advisori",
      previewUrl: "https://argo-advisory.com/",
    },
    {
      id: 5,
      title: "Cinema Monster",
      description: t("description5"),
      image: "/projects/Cinema.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Arag0rn/goit-react-hw-05-movies",
      previewUrl: "https://arag0rn.github.io/goit-react-hw-05-movies/",
    },
    {
      id: 6,
      title: "Watch Sport",
      description: t("description6"),
      image: "/projects/watch.png",
      tag: ["All", "HTML/CSS/JS"],
      gitUrl: "https://github.com/Arag0rn/The-Watch-Spot",
      previewUrl: "https://arag0rn.github.io/The-Watch-Spot/",
    },
    {
      id: 7,
      title: "Portfolio",
      description: t("description7"),
      image: "/projects/Port.png",
      tag: ["All", "Next"],
      gitUrl: "https://github.com/Arag0rn/My-Portfolio",
      previewUrl: "https://khabuzovs-portfolio.vercel.app/",
    },
    {
      id: 8,
      title: "Car Rental",
      description: t("description8"),
      image: "/projects/CarRental.png",
      tag: ["All", "React"],
      gitUrl: "https://github.com/Arag0rn/Car-Rental",
      previewUrl: "https://arag0rn.github.io/Car-Rental/home",
    },
    {
      id: 9,
      title: "Friend Rate",
      description: t("description9"),
      image: "/projects/FriendRate.png",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/FirstGrayCoder/FriendRate_Front",
      previewUrl: "https://friend-rate-front.vercel.app/",
    },
    {
      id: 10,
      title: "TODOcalendar",
      description: t("description10"),
      image: "/projects/Calendar.jpeg",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/Arag0rn/TODOcalendar",
      previewUrl: "https://arag0rn.github.io/TODOcalendar",
    },
  ];
  

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
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
          isSelected={tag === "Web"}
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
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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