import React from "react";
import Layout from "../components/Layout";
import { Card, CardMedia, Grid, Link, Typography } from "@mui/material";
import styled from "@emotion/styled";
import BlackLogo from "../images/AlderwoodConsultingLogoBlack.png";
import Banff from "../images/Banff.jpg";
import DualHeadshot2 from "../images/DualHeadshot2.jpg";
import { ConnectWithoutContact, Handshake } from "@mui/icons-material";

const StyledLogo = styled.img`
  padding: 25px;
  max-width: 300px;
`;

export default function Index() {
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
          <StyledLogo src={BlackLogo} alt="Black Logo" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }} paddingBottom={5}>
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
          <Typography
            sx={{ padding: 5, maxWidth: "1500px", color: "#1E1E1E" }}
            textAlign="center"
            variant="subtitle2"
            fontWeight="800"
          >
            Insurance is a lot like oxygen – everyone needs it, very few people
            understand how it works, and the lack of it can take your life away.
            The financial safety net that hovers under nearly every business,
            home, and vehicle in the developed world is an interesting concept;
            hovering below you like a mysterious fog, it can feel like a lot of
            cost for nothing – until you need it to break your fall, and find
            out for the first time what quality of net you’ve been paying for
            all these years. But what if it didn’t have to be that way? What if
            you could understand that net you were paying for, and the best ways
            to use it… or better yet, how to keep from falling in the first
            place?
          </Typography>
        </Grid>
        <Grid item sx={{ marginBottom: 5 }}>
          <Card
            sx={{
              padding: 5,
              mx: 5,
              border: "2px solid black",
              backgroundColor: "#D9D9D9",
              maxWidth: "1500px",
            }}
            variant="outlined"
          >
            <Typography textAlign="center" variant="subtitle2" fontWeight="800">
              Please note that Rod and Danielle don’t sell or promote any type
              of insurance product. That is what brokers are for – and they’re
              great at it. Nor are they affiliated with, or working for, any
              insurance company. Alderwood’s focus is two-fold; partnering with
              companies and individuals to offer risk management and claims
              advocacy services normally reserved for large corporations, and
              offering those same people an engaging and insightful look into
              how to be a better, smarter insurance customer through educational
              presentations.
            </Typography>
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              maxWidth: "1500px",

              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <CardMedia
              component="img"
              image={DualHeadshot2}
              alt="Danielle and Rod 1"
            />
          </Card>
        </Grid>

        <Grid item>
          <Typography
            sx={{ padding: 5, maxWidth: "1500px" }}
            textAlign="center"
            variant="subtitle2"
            fontWeight="800"
          >
            After many years and lots of experience in insurance and risk
            management (and a lot of phone calls and questions at dinner
            parties), Rod and Danielle Ahlskog had come to understand something
            very important – that almost nobody understood insurance and risk
            management, and how to make it work for them. Even most insurance
            professionals tend to stay in one lane throughout their career;
            selling insurance, adjusting claims, working for the insurance
            companies themselves, or doing risk management. Very few people had
            done it all, and so those who understood how all the parts fit
            together in this complex machine were rare finds.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{ padding: 3, maxWidth: "1500px" }}
            textAlign="center"
            variant="subtitle2"
            fontWeight="800"
          >
            Big corporations have dedicated risk managers and insurance
            consultants on staff to handle this very issue – but what about the
            average business owner, or consultant, or family? Alderwood
            Consulting was founded to answer that question, bringing specialized
            education and decades of experience out of the boardroom and into
            the hands of everyday people as they work to build a better future
            for their businesses and families. Because knowledge and support
            power success, and should be within reach for anyone willing to seek
            them out.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "center" }} mb={3}>
          <Link
            underline="hover"
            href="/SpeakingEngagements"
            sx={{ color: "#1E1E1E" }}
          >
            <ConnectWithoutContact sx={{ width: "75px", height: "75px" }} />
            <Typography variant="subtitle1" sx={{ fontWeight: "800" }}>
              Speaking Engagements
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "center" }} mb={3}>
          <Link
            underline="hover"
            href="/ConsultingServices"
            sx={{ color: "#1E1E1E" }}
          >
            <Handshake sx={{ width: "75px", height: "75px" }} />
            <Typography variant="subtitle1" sx={{ fontWeight: "800" }}>
              Consulting Services
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
}
