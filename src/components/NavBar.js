import React, { useState } from "react";
import {
  Link,
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Divider,
  Grid,
} from "@mui/material";
import {
  Menu,
  ChevronLeft,
  ContactPage,
  People,
  ConnectWithoutContact,
  Handshake,
  Facebook,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import WhiteLogo from "../images/AlderwoodConsultingLogoWhite.png";

const NavLinksLeft = [
  { name: "Who We Are", href: "/WhoWeAre" },
  { name: "Consulting Services", href: "/ConsultingServices" },
];
const NavLinksRight = [
  { name: "Speaking Engagements", href: "/SpeakingEngagements" },
  { name: "Contact Us", href: "/ContactUs" },
];
const MobileLinks = [
  { name: "Who We Are", href: "/WhoWeAre", icon: <People /> },
  {
    name: "Consulting Services",
    href: "/ConsultingServices",
    icon: <Handshake />,
  },
  {
    name: "Speaking Engagements",
    href: "/SpeakingEngagements",
    icon: <ConnectWithoutContact />,
  },
  { name: "Contact Us", href: "/ContactUs", icon: <ContactPage /> },
];

const StyledLink = styled(Link)`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 70px;
  color: white;
  font: roboto;
`;
const StyledMobileLink = styled(Link)`
  padding: 20px;
  color: white;
  font: roboto;
`;
const StyledLogo = styled.img`
  padding: 25px;
  max-width: 200px;
`;

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      style={{
        "background-image": "linear-gradient(to right, #3E5294, #7ACCC6)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          alignContent: "center",
          justifyContent: { xs: "space-between", md: "space-around" },
        }}
      >
        {NavLinksLeft.map((item) => (
          <StyledLink
            sx={{ display: { xs: "none", md: "block" } }}
            variant="body2"
            underline="none"
            href={item.href}
          >
            {item.name}
          </StyledLink>
        ))}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, marginLeft: 2 }}
        >
          <Menu sx={{ fill: "white" }} onClick={() => setOpen(true)} />
        </IconButton>

        <Link href="/" justifyItems={"center"}>
          <StyledLogo src={WhiteLogo} alt="White Logo" />
        </Link>

        {NavLinksRight.map((item) => (
          <StyledLink
            sx={{ display: { xs: "none", md: "block" } }}
            variant="body2"
            underline="none"
            href={item.href}
          >
            {item.name}
          </StyledLink>
        ))}
      </Toolbar>
      <SwipeableDrawer
        PaperProps={{
          sx: {
            backgroundImage: "linear-gradient(to bottom, #3E5294, #7ACCC6)",
            color: "red",
          },
        }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div style={{ marginLeft: "auto", marginRight: 0 }}>
          <IconButton>
            <ChevronLeft
              sx={{ fill: "white" }}
              onClick={() => setOpen(false)}
            />
          </IconButton>
        </div>
        <Divider />
        <Link href="/" justifyItems={"center"}>
          <StyledLogo src={WhiteLogo} alt="White Logo" />
        </Link>
        {MobileLinks.map((item) => (
          <StyledMobileLink variant="body2" underline="none" href={item.href}>
            <Grid container spacing={2}>
              <Grid item>{item.icon}</Grid>
              <Grid item>{item.name}</Grid>
            </Grid>
          </StyledMobileLink>
        ))}
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", marginTop: "auto", marginBottom: 0 }}
        >
          <Grid item>
            <Facebook sx={{ fill: "white", fontSize: 40 }} />
          </Grid>
          <Grid item>
            <LinkedIn sx={{ fill: "white", fontSize: 40 }} />
          </Grid>
          <Grid item>
            <Twitter sx={{ fill: "white", fontSize: 40 }} />
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </AppBar>
  );
}
