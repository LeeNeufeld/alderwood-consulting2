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
  CssBaseline,
  Stack,
} from "@mui/material";
import { Business, Email, Fax, Phone } from "@mui/icons-material";

export default function Footer() {
  return (
    <AppBar
      sx={{
        top: "auto",
        bottom: 0,
      }}
      position="sticky"
    >
      <CssBaseline />
      <Toolbar
        container
        sx={{
          "background-image": "linear-gradient(to right, #3E5294, #7ACCC6)",
        }}
      >
        <Grid container>
          <Grid xs={2} item>
            <Phone />
            <Typography>780-975-3896</Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <Phone />
          </Grid>
          <Grid item>
            <Typography>780-975-3896</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
