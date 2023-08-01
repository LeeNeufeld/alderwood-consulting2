import React from "react";
import Layout from "../components/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import BlackLogo from "../images/AlderwoodConsultingLogoBlack.png";
import Banff from "../images/Banff.jpg";

const StyledLogo = styled.img`
  padding: 25px;
  max-width: 300px;
`;

export default function Index() {
  return (
    <Layout>
      <Box>
        <Grid container spacing={0} direction="column" alignItems="center">
          <Grid item xs={12}>
            <StyledLogo src={BlackLogo} alt="Black Logo" />
          </Grid>
          <Grid item xs={12} paddingBottom={5}>
            <Typography fontFamily="cursive">
              Your Insurance & Risk Management Specialists
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={Banff}
              alt="Banff Pic"
              style={{
                maxWidth: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
