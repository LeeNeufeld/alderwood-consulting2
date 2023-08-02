import React from "react";
import Layout from "../components/Layout";
import { Box, Card, Grid, Paper, Typography } from "@mui/material";
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
          <Grid item>
            <Typography sx={{ padding: 5 }} textAlign="center">
              Insurance is a lot like oxygen – everyone needs it, very few
              people understand how it works, and the lack of it can take your
              life away. The financial safety net that hovers under nearly every
              business, home, and vehicle in the developed world is an
              interesting concept; hovering below you like a mysterious fog, it
              can feel like a lot of cost for nothing – until you need it to
              break your fall, and find out for the first time what quality of
              net you’ve been paying for all these years. But what if it didn’t
              have to be that way? What if you could understand that net you
              were paying for, and the best ways to use it… or better yet, how
              to keep from falling in the first place?
            </Typography>
          </Grid>
          <Grid item>
            <Card
              sx={{
                padding: 5,
                mx: 5,
                border: "2px solid black",
                backgroundColor: "#D9D9D9",
              }}
              variant="outlined"
            >
              <Typography textAlign="center">
                Please note that Rod and Danielle don’t sell or promote any type
                of insurance product. That is what brokers are for – and they’re
                great at it. Nor are they affiliated with, or working for, any
                insurance company. Alderwood’s focus is two-fold; partnering
                with companies and individuals to offer risk management and
                claims advocacy services normally reserved for large
                corporations, and offering those same people an engaging and
                insightful look into how to be a better, smarter insurance
                customer through educational presentations.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
