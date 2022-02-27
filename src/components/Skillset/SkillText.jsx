import React from "react";
import SkillButton from "../Reuseables/buttons/SkillButton";

import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import "./skilltext.css";

const SkillText = () => {
  return (
    <>
      <Card className="skilltext-card" elevation={10}>
        <CardHeader
          align="center"
          className="skilltext-header"
          title="Developer SkillSet"
        />
        <CardContent>
          <CardActions>
            <Container>
              <Grid container className="skill-container">
                <Grid item className="skill-container">
                  <SkillButton text="React" />
                  <SkillButton text="Nodejs" />
                  <SkillButton text="SQL" />
                  <SkillButton text="noSQL" />
                </Grid>
              </Grid>
              <Grid container className="skill-container">
                <Grid item className="skill-container">
                  <SkillButton text="CSS" />
                  <SkillButton text="HTML" />
                  <SkillButton text="OOP" />
                  <SkillButton text="C#" />
                </Grid>
              </Grid>
            </Container>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default SkillText;
