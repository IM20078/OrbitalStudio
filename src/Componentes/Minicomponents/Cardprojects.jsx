import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            🚀 Ver Proyecto
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
