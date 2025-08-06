import React, { useState } from "react";
import "../styles/portfolio.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";

const projects = [
  { id: 1, title: "Placement Portal", image: project1, category: "TNPC" },
  { id: 2, title: "Recruiters Page", image: project2, category: "TNPC" },
  { id: 3, title: "Dental Lab UI", image: project3, category: "Dental Labs" },
  { id: 4, title: "Appointment Manager", image: project5, category: "App Design" },
  { id: 5, title: "CEO", image: project3, category: "Decision Making" },
  { id: 6, title: "Appointment Manager", image: project6, category: "App Design" },
];

const categories = ["All", "TNPC", "Dental Labs", "App Design", "Decision Making"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio-page">
      <h2 className="portfolio-heading">My Portfolio</h2>
      <p className="portfolio-subheading">
        Explore some of the projects I've worked on. Each one reflects creativity and problem solving.
      </p>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h4>{project.title}</h4>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;