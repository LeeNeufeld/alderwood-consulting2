import React from "react";
import { AppBar, Toolbar } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{
        "background-image": "linear-gradient(to right, #3E5294, #7ACCC6)",
        top: "auto",
        bottom: 0,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          alignContent: "center",
          justifyContent: { xs: "space-between", md: "space-around" },
        }}
      ></Toolbar>
    </AppBar>
  );
}
