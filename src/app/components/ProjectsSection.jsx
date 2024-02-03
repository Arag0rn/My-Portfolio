"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bookshelf",
    description: "Enthusiastically driven by a passion for reading and organization, I led an exciting educational project focused on simplifying the process of finding and adding books to a wishlist. Working collaboratively with a talented team of 7 individuals, we crafted an innovative solution that streamlines the discovery and purchase of books.",
    image: "./projects/Bookshelf.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Arag0rn/project-CodeBusters",
    previewUrl: "https://arag0rn.github.io/project-CodeBusters/",
  },
  {
    id: 2,
    title: "Water Tracker",
    description: "My field project. You can try it yourself. The application counts the water you drink, sends notifications to telegram and does not require complicated registration. You can use Google account. I gladly accept feedback",
    image: "./projects/water-tracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Okimmi/stackNinjas-frontend",
    previewUrl: "https://okimmi.github.io/stackNinjas-frontend/",
  },
  {
    id: 3,
    title: "Argo-Advisory",
    description: "Created for Argo-Advisory and George Chanturia. Design by Fotini Chora",
    image: "./projects/argo-advisory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Arag0rn/ARGO-Advisori",
    previewUrl: "https://argo-advisory.com/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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