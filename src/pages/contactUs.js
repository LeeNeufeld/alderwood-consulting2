import React from "react";
import Layout from "../components/Layout";
import ContactUsLogo from "../images/ContactUsLogo.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
  Card,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { Fax, Mail, Phone } from "@mui/icons-material";

export default function ContactUs() {
  const StyledLogo = styled.img`
    max-width: 400px;
  `;
  return (
    <Layout>
      <Grid container direction="row" minHeight={`calc(100vh - 200px)`}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <StyledLogo src={ContactUsLogo} alt="Contact Us logo" />
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <IconButton href="tel:+7809753896">
            <Phone sx={{ fontSize: 100, color: "#3E5294" }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: "#3E5294" }}>
            780-975-3896
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <IconButton href="mailto:admin@alderwoodconsulting.ca">
            <Mail sx={{ fontSize: 100, color: "#3E5294" }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: "#3E5294" }}>
            780-975-3896
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <IconButton href="fax:+8552875513">
            <Fax sx={{ fontSize: 100, color: "#3E5294" }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: "#3E5294" }}>
            855-287-5513
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
