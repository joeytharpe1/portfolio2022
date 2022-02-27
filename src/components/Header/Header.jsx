import React from "react";
import LinkComponent from "../Reuseables/Links/LinkComponent";
import "./header.css";

import AppBar from "@mui/material//AppBar";
import Toolbar from "@mui/material//Toolbar";
import LaptopTwoToneIcon from "@mui/icons-material/LaptopTwoTone";

import { TextLoop } from "react-text-loop-next";

const Header = () => {
  return (
    <div className="header-div">
      <AppBar
        position="fixed"
        color="primary"
        elevation={5}
        className="header-appbar"
      >
        <Toolbar className="header-appbar">
          <div className="header-icon">
            <LaptopTwoToneIcon size="large" />
            <TextLoop className="header-text-loop">
              <span style={{ color: "white" }}>Learning..</span>
              <span style={{ color: "white" }}>Developing..</span>
              <span style={{ color: "white" }}>Debugging..</span>
            </TextLoop>
          </div>
          <div className="header-toolbar">
            <LinkComponent text="Home" linktext="/home" />
            <LinkComponent text="Projects" linktext="/project" />
            <LinkComponent text="Contact" linktext="/contact" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
