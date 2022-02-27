import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Project from "../Projects/Project";
import Footer from "../Footer/Footer";

import { Switch, Route, Redirect } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#027e55",
    },
    secondary: {
      main: "#fff",
    },
    type: "dark",
  },
  typography: {
    fontFamily: "Garamond",
    alignText: "center",
  },
  root: {
    marginBottom: "20px",
  },
  // spacing: 2,
  // overrides: {
  //   MuiInputLabel: {
  //     root: {
  //       color: "black",
  //       // border: "1px solid red"
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     root: {
  //       backgroundColor: "#BCA88E",
  //       opacity: 0.5,
  //     },
  //   },
  // },
});

const Main = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <div style={{ marginBottom: "10px" }}>
          <Header />
        </div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </ThemeProvider>
    </CssBaseline>
  );
};

export default Main;
