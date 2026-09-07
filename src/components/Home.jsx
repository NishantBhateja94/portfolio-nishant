import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "animate.css";
import * as motion from "motion/react-client";
import { Helmet } from "react-helmet-async";
import nishantImg from "../../assets/nishantImg.jpg";
import useTyped from "../hooks/useTyped";
import "./Home.scss";

const Home = () => {
  const typedRef = useTyped();

  return (
    <div className="homeContainer">
      <Helmet>
        <title>Portfolio | Nishant Bhateja</title>
      </Helmet>
      <div className="homeTextContainer animate__animated animate__slideInRight ">
        <div className="homeTextParent">
          <span className="homeText" ref={typedRef} />
          <br />
          <span className="homeSubText">
            a MCA post graduate from{" "}
            <a href="https://www.iiitkota.ac.in" target="_blank">
              <span className="college">
                Bharati Vidyapeeth's Institute of Computer Applications and
                Management
              </span>
            </a>
            , working as Senior Software Engineer, specializing in scalable
            frontend applications and modern JavaScript/TypeScript technologies.
            <br />
            <a
              href="https://drive.google.com/file/d/1LlM3tg0Z59AqsOHWUKEpb5xHOel79hft/view?usp=drive_link"
              target="_blank"
            >
              <span className="college">
                Resume <OpenInNewIcon />
              </span>
            </a>
          </span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img className="homeImg" src={nishantImg} alt="Home" />
      </motion.div>
    </div>
  );
};

export default Home;
