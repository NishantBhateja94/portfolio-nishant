import ProjectsCard from "./ProjectsCard";
import { projects } from "../utils/constants";
import { Helmet } from "react-helmet-async";
import "./Projects.scss";
import "animate.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <Helmet>
        <title>Projects | Nishant Mourya</title>
      </Helmet>
      <div className="projectsCardList animate__animated animate__slideInRight">
        {projects?.map((project, idx) => {
          return (
            <ProjectsCard
              key={idx}
              projName={project?.projName}
              projDesc={project?.projDesc}
              projUrl={project?.projUrl}
              projImg={project?.projImg}
              projUrlTxt={project?.projUrlTxt}
              projTech={project?.projTech}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
