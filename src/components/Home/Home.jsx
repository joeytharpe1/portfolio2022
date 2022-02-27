import React from "react";
import Skillslider from "../Skillset/Skillslider";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./home.css";
import SkillText from "../Skillset/SkillText";

const Home = () => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid
        container
        alignText="center"
        justifyContent="center"
        sx={{ backgroundColor: "#fff", color: "black" }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" component="h3" gutterBottom align="center">
            Hello i'm Joseph Tharpe
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            A software engineer who loves technology and jiu jitsu
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            I am a California and remote-capable full stack web developer,
            specializing in user experience to give customers the best value for
            their requested project. I create successful responsive websites
            that are fast, easy to use, and built with best practices. The main
            area of my expertise is front-end development,
            <span className="skill-text"> HTML</span>,
            <span className="skill-text"> CSS</span>,
            <span className="skill-text"> Javascript</span>, and
            <span className="skill-text"> ReactJS</span> building small and
            medium web apps, features, animations, and coding interactive
            layouts. I also have full-stack developer experience with handling
            things like database operations, user authentication, and
            application logic using <span className="skill-text">NodeJs</span>,{" "}
            <span className="skill-text">Sql</span> and{" "}
            <span className="skill-text">noSql</span> .
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            My passion for full stack development is electric, in the truest
            sense. In a previous life, I was a low voltage junior electrician,
            where I would work with hooking up computers to IDF rooms, strip
            coax cables, install cat5 and cat6 cables, etc. I was jolted into
            the amazing power of computers from my frequent interactions with
            them. I am obsessed with creating projects and trying to debug
            difficult problems. I look forward to helping you find the most from
            your existing or future website. Schedule a call with me, via link:
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            My <span className="linkedin-text">Linkedin</span> profile for more
            details or just Contact Me
          </Typography>
        </Grid>
      </Grid>

      <Grid
        spacing={1}
        container
        alignText="center"
        justifyContent="center"
        sx={{ backgroundColor: "white", color: "white", marginTop: "10px"}}
      >
        <Grid item xs={12} md={8}>
          <Skillslider />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillText />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
