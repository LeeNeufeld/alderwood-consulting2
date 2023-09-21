import React from "react";
import Layout from "../components/Layout";
import { Grid, Typography, Paper, Button } from "@mui/material";
import styled from "@emotion/styled";
import WhoWeAreLogo from "../images/WhoWeAreLogo.png";
import DualHeadshot1 from "../images/DualHeadshot1.jpg";
import RodHeadshot from "../images/RodHeadshot.jpg";
import DanielleHeadshot from "../images/DanielleHeadshot.jpg";

export default function WhoWeAre() {
  const StyledLogo = styled.img`
    padding: 25px;
    max-width: 400px;
  `;
  return (
    <Layout>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        minHeight={`calc(100vh - 200px)`}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <StyledLogo src={WhoWeAreLogo} alt="Who We Are" />
        </Grid>
        <Grid item>
          <img
            src={DualHeadshot1}
            alt="Couple"
            style={{
              maxWidth: "100%",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{ padding: 5, maxWidth: "1000px", color: "#1E1E1E" }}
            textAlign="center"
            variant="subtitle2"
            fontWeight="800"
          >
            Rod and Danielle met at work nearly twenty years ago, and have been
            a dynamic duo in their personal lives since 2007. For most of those
            years, they’ve worked together as well; spending eight hours a day
            at separate offices just felt like wasted time. So where you find
            one, you’ll almost always find the other.
          </Typography>
        </Grid>
        <Grid item textAlign="center">
          <Paper
            sx={{
              maxWidth: "1000px",
              textAlign: "center",
              padding: 3,
              backgroundColor: "#E1DFE1",
              mr: 1,
              ml: 1,
            }}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid item xs={12} md={6} mt={5}>
                <img
                  src={DanielleHeadshot}
                  alt="Danielle"
                  style={{ maxWidth: "300px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                mt={5}
                textAlign="center"
                pr={{ xs: 0, md: 5 }}
              >
                <Typography variant="subtitle2" fontWeight="800">
                  Danielle Ahlskog grew up in Hinton, Alberta, juggling a pile
                  of extracurriculars with part-time jobs that ran the gamut
                  from waitressing to bookkeeping. After attending Grant
                  MacEwan’s Insurance & Risk Management program, she landed a
                  job in a small-town insurance sales agency, and the rest is
                  history. Danielle has two decades of experience in the
                  industry, with particular concentration on sales, claims, and
                  risk management. For someone who once thought insurance would
                  be boring, she’s had a lot of adventures – investigating theft
                  rings and international smugglers, busting a “severely
                  injured” fraudster literally doing cartwheels on social media,
                  and selling insurance policies for everything from mopeds to
                  multi-million dollar companies. Danielle loves to read
                  everything that she can get her hands on, traveling to and
                  learning about new places, and that she managed to translate
                  being a nerdy little neurotic pointing out every danger and
                  pitfall to the other kids into a living.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} mt={5}>
                <img
                  src={RodHeadshot}
                  alt="Rod"
                  style={{ maxWidth: "300px" }}
                />
              </Grid>
              <Grid item xs={12} md={6} mt={5} pr={{ xs: 0, md: 5 }}>
                <Typography variant="subtitle2" fontWeight="800">
                  Rod Ahlskog was raised on a farm north of Wildwood, Alberta,
                  and spent his early life doing everything from delivering
                  furniture to grading roads and driving transport trucks. After
                  finding his true calling in his twenties, Rod spent decades
                  exploring every aspect of insurance and risk management; sales
                  for over ten years, another fifteen in claims, and stints at
                  both private and government insurance companies in between.
                  Starting out as simple agent and rising through management
                  roles to ownership of a private insurance claims investigation
                  firm, he has extensive experience with business, personal,
                  farm, automobile, transportation, oil and gas, and liability
                  risks – from perspectives that encompass sales, claims, and
                  underwriting. Rod has a Chartered Insurance Professional
                  designation, a passion for helping the little guy succeed in a
                  big-business world, and a craving for medium-rare steak and a
                  nice scotch.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container mt={3} mb={5}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={9}
          >
            <Grid item textAlign="center">
              <Button
                variant="contained"
                href={`mailto:rod@alderwoodconsulting.ca`}
                sx={{ backgroundColor: "#3E5294", width: "250px" }}
              >
                Contact Rod
              </Button>
            </Grid>
            <Grid item textAlign="center">
              <Button
                variant="contained"
                href={`mailto:danielle@alderwoodconsulting.ca`}
                sx={{ backgroundColor: "#3E5294", width: "250px" }}
              >
                Contact Danielle
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
