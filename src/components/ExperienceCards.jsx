import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import "./Experience.scss";

const ExperienceCards = ({ company, role, duration, logo }) => {
  return (
    <Tooltip
      className="tooltipTxt"
      title="You can Drag Me!"
      slots={{
        transition: Zoom,
      }}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: "1rem", // This will correctly apply the font size
          },
        },
      }}
    >
      <div className="experienceCard">
        <img src={logo} className="experienceCardImg" />
        <div className="experienceCardText">
          <div className="experienceCardText_mainTxt">{company}</div>
          <div className="experienceCardText_subTxt">{role}</div>
          <div className="experienceCardText_subTxt">{duration}</div>
        </div>
      </div>
    </Tooltip>
  );
};

export default ExperienceCards;
