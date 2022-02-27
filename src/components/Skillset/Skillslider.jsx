import React from "react";

import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";

import Fade from "react-awesome-reveal";
import "./skill.css";

const Skillslider = () => {
  return (
    <>
      <Paper
        elevation={10}
        className="skill-paper"
        sx={{ backgroundColor: "#000000" }}
      >
        <CardContent>
          <Fade bottom>
            <Typography
              gutterBottom
              variant="body1"
              color="secondary"
              className="skill-text"
            >
              Frontend
            </Typography>

            <Slider
              className="skill-slider"
              color="secondary"
              value={9}
              max={10}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
          </Fade>
          <Fade bottom>
            <Typography
              gutterBottom
              variant="body1"
              color="secondary"
              className="skill-text"
            >
              Backend
            </Typography>
            <Slider
              className="skill-slider"
              color="secondary"
              value={7}
              max={10}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
          </Fade>
          <Fade right>
            <Typography
              gutterBottom
              variant="body1"
              color="secondary"
              className="skill-text"
            >
              React Js
            </Typography>
            <Slider
              className="skill-slider"
              color="secondary"
              value={9}
              max={10}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
          </Fade>
        </CardContent>
      </Paper>
    </>
  );
};

export default Skillslider;
