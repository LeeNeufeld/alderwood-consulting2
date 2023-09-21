import React from "react";
import Layout from "../components/Layout";
import ContactUsLogo from "../images/ContactUsLogo.png";
import Location from "../images/Location.png";
import {
  Grid,
  Typography,
  Card,
  IconButton,
  CardMedia,
  Link,
} from "@mui/material";
import styled from "@emotion/styled";
import { Fax, Mail, Phone } from "@mui/icons-material";

export default function ContactUs() {
  const StyledLogo = styled.img`
    max-width: 400px;
  `;
  return (
    <Layout>
      <Grid container direction="row">
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
            admin@alderwoodconsulting.ca
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
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid xs={12} mt={5} item sx={{ textAlign: "center" }}>
          <Typography variant="h5">Come Visit Us</Typography>
        </Grid>
        <Grid item>
          <Card
            sx={{
              maxWidth: "1500px",
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            <CardMedia component="img" image={Location} alt="Location" />
          </Card>
        </Grid>
        <Grid xs={12} mb={4} item sx={{ textAlign: "center" }}>
          <Typography variant="h5">
            <Link
              target="_blank"
              href="https://www.google.com/search?q=537+-+9768+170th+Street+N.W.+Edmonton%2C+AB+T3T+5L4&rlz=1C1CHBF_enCA851CA851&oq=537+-+9768+170th+Street+N.W.+Edmonton%2C+AB+T3T+5L4&aqs=chrome.0.69i59j69i64j0i546j0i546i649j0i546.2635j0j7&sourceid=chrome&ie=UTF-8"
            >
              537 - 9768 170th Street N.W. Edmonton, AB T3T 5L4
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
