import React from "react";
import {
  Link,
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Divider,
} from "@mui/material";
import { Menu, ChevronLeft } from "@mui/icons-material";
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
  { name: "Who We Are", href: "/WhoWeAre" },
  { name: "Consulting Services", href: "/ConsultingServices" },
  { name: "Speaking Engagements", href: "/SpeakingEngagements" },
  { name: "Contact Us", href: "/ContactUs" },
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
  return (
    <AppBar
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
        <IconButton sx={{ display: { xs: "block", md: "none" } }}>
          <Menu />
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
        open={true}
      >
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <Divider />
        <Link href="/" justifyItems={"center"}>
          <StyledLogo src={WhiteLogo} alt="White Logo" />
        </Link>
        {MobileLinks.map((item) => (
          <StyledMobileLink variant="body2" underline="none" href={item.href}>
            {item.name}
          </StyledMobileLink>
        ))}
      </SwipeableDrawer>
    </AppBar>
  );
}
