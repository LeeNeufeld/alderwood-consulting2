import React from "react";
import {
  AppBar,
  Grid,
  Link,
  Toolbar,
  Paper,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Phone } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Grid
        sx={{
          "background-image": "linear-gradient(to right, #3E5294, #7ACCC6)",
          marginTop: "auto",
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        <Phone />
      </Grid>
    </Box>
  );
}
