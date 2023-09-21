import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { FaxOutlined, Mail, Phone } from "@mui/icons-material";

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
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          p={3}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <IconButton href="tel:+7809753896">
              <Phone sx={{ marginRight: 2, color: "white" }} />

              <Typography sx={{ color: "white" }}>780-975-3896</Typography>
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <IconButton href="mailto:admin@alderwoodconsulting.ca">
              <Mail sx={{ marginRight: 2, color: "white" }} />

              <Typography sx={{ color: "white" }}>
                admin@alderwoodconsulting.ca
              </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <IconButton href="fax:+8552875513">
              <FaxOutlined sx={{ marginRight: 2, color: "white" }} />
              <Typography sx={{ color: "white" }}>855-287-5513</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
