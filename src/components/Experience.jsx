import "animate.css";
import * as motion from "motion/react-client";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import useMobile from "../hooks/useMobile";
import cardekhologo from "./../../assets/cardekho-logo.png";
import fareportalLogo from "./../../assets/fareportalLogo.jpg";
import YatraLogo from "./../../assets/YatraLogo.jpg";
import "./Experience.scss";
import ExperienceCards from "./ExperienceCards";

const Experience = () => {
  const { isMobile } = useMobile();
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);

  return (
    <div className="experienceContainer">
      <Helmet>
        <title>Experience | Nishant Mourya</title>
      </Helmet>

      <div className="experienceCardList animate__animated animate__slideInRight">
        <div className="experienceCardsContainer experienceCardsContainerFlex">
          {/* Latest Experience - Scapia */}
          <motion.div className="dragConstraintBox" ref={constraintsRef4}>
            <motion.div
              drag
              dragConstraints={constraintsRef4}
              // dragElastic={0.2}
              // style={{ width: "fit-content" }}
            >
              <ExperienceCards
                company={"Fareportal"}
                role={"Senior Software Development Engineer"}
                duration={"June 2023 - Present"}
                logo={fareportalLogo}
              />
            </motion.div>
          </motion.div>

          {/* eka.care */}
          <motion.div className="dragConstraintBox" ref={constraintsRef3}>
            <motion.div drag dragConstraints={constraintsRef3}>
              <ExperienceCards
                company={"Yatra Online Private Limited"}
                role={"UI Developer"}
                duration={"Jan 2020 - Dec 2021"}
                logo={YatraLogo}
              />
            </motion.div>
          </motion.div>

          {isMobile && (
            <>
              <motion.div className="dragConstraintBox" ref={constraintsRef1}>
                <motion.div drag dragConstraints={constraintsRef1}>
                  <ExperienceCards
                    company={"CarDekho.com"}
                    role={"Frontend Developer"}
                    duration={"Dec 2021 - June 2023"}
                    logo={cardekhologo}
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </div>

        {!isMobile && (
          <div className="experienceCardsContainer experienceCardsContainerFlex inMobile">
            <motion.div className="dragConstraintBox" ref={constraintsRef1}>
              <motion.div drag dragConstraints={constraintsRef1}>
                <ExperienceCards
                  company={"CarDekho.com"}
                  role={"Frontend Developer"}
                  duration={"Dec 2021 - June 2023"}
                  logo={cardekhologo}
                />
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
