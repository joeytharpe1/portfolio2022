import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const LinkComponent = ({ text, linktext }) => {
  return (
    <Typography variant="h5" align="center" padding="7px">
      <Button
        component={Link}
        to={linktext}
        color="inherit"
        size="large"
        sx={{
          ":hover": { textDecoration: "underline", color: "#027e55" },
        }}
      >
        {text}
      </Button>
    </Typography>
  );
};

export default LinkComponent;
