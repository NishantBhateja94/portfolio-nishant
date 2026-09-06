import { Tooltip } from "@mui/material";
import "animate.css";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useMobile from "../hooks/useMobile";
import { professionalSkillset, toolsIuse } from "../utils/constants";
import "./Skills.scss";

const Skills = () => {
  const [disp, setDisp] = useState(false);
  const { isMobile } = useMobile();

  useEffect(() => {
    let timeout = setTimeout(() => setDisp(true), 500);
    return () => clearTimeout(timeout); // cleanup on unmount or change
  }, []);

  return (
    <div className="skillsContainer">
      <Helmet>
        <title>Skills | Nishant Bhateja</title>
      </Helmet>
      <div className="skillsList">
        <div className="skillsFlexContainer animate__animated animate__slideInRight">
          <div className="skillHeading">Professional Skillset</div>
          <div className="skillsFlex">
            {professionalSkillset.map(({ title, iconClass, link }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.6 }}
              >
                {isMobile ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <i className={`icon ${iconClass}`} />
                  </a>
                ) : (
                  <Tooltip title={title} arrow followCursor>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <i className={`icon ${iconClass}`} />
                    </a>
                  </Tooltip>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {disp && (
          <div className="skillsFlexContainer animate__animated animate__slideInRight ">
            <div className="skillHeading">Tools I use</div>
            <div className="skillsFlex">
              {toolsIuse.map(({ title, iconClass, link }) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.6 }}
                >
                  {isMobile ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <i className={`icon ${iconClass}`} />
                    </a>
                  ) : (
                    <Tooltip title={title} arrow followCursor>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <i className={`icon ${iconClass}`} />
                      </a>
                    </Tooltip>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
