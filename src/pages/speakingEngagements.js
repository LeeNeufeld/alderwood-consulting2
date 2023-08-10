import React from "react";
import Layout from "../components/Layout";
import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import SpeakingLogo from "../images/SpeakingEngagementsLogo.png";
import SpeakingStock from "../images/SpeakingStock.jpg";

export default function SpeakingEngagements() {
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
          <StyledLogo src={SpeakingLogo} alt="Speaking engagements logo" />
        </Grid>
        <Grid item>
          <img
            src={SpeakingStock}
            alt="Speaking"
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
            Lorem ipsum dolor sit amet. Et molestias laudantium et perspiciatis
            omnis vel omnis totam ut error molestiae hic autem blanditiis ut
            incidunt quod eum aliquam provident! Ad dolor asperiores ut quam
            rerum aut sint molestiae qui dolorem alias ab laboriosam iste. Ex
            asperiores consequatur et reiciendis dicta qui nobis velit? Vel nisi
            delectus et omnis doloremque et cupiditate excepturi qui nihil
            molestiae et repellat galisum aut nobis odio a ipsam molestiae? Et
            laborum illum ad ullam doloribus id internos dolores quo maiores
            tempore non eaque iste et placeat molestiae et commodi ducimus. Et
            ratione internos ad architecto porro qui atque ipsum ut dolor
            commodi. Et numquam eveniet est voluptas recusandae et galisum animi
            non vitae quasi sed dolore accusamus aut delectus necessitatibus.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
