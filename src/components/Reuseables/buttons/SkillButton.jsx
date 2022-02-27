import React from "react";
import Button from "@mui/material/Button";

import Fade from "react-awesome-reveal";
import { TextLoop } from "react-text-loop-next";

const SkillButton = ({ text }) => {
  return (
    <Fade bottom>
      <Button color="primary" size="small" className="skillbutton-btn">
        <TextLoop>
          <span style={{ color: "grey" }}>{text}</span>
          <span style={{ color: "#027e55" }}>{text}</span>
          <span style={{ color: "#000000" }}>{text}</span>
        </TextLoop>
      </Button>
    </Fade>
  );
};

export default SkillButton;
