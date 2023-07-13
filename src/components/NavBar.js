import React from "react";
import { Link, AppBar, Toolbar } from "@mui/material";
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

const StyledLink = styled(Link)`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 70px;
  color: white;
  font: roboto;
`;
const StyledLogo = styled.img`
  padding: 25px;
  width: 200px;
`;

export default function NavBar() {
  return (
    <AppBar
      style={{
        "background-image": "linear-gradient(to right, #3E5294, #7ACCC6)",
      }}
    >
      <Toolbar style={{ justifyContent: "center" }}>
        {NavLinksLeft.map((item) => (
          <StyledLink variant="body2" underline="none" href={item.href}>
            {item.name}
          </StyledLink>
        ))}
        <Link style={{ marginRight: "50px", marginLeft: "50px" }} href="/">
          <StyledLogo src={WhiteLogo} alt="White Logo" />
        </Link>
        {NavLinksRight.map((item) => (
          <StyledLink variant="body2" underline="none" href={item.href}>
            {item.name}
          </StyledLink>
        ))}
      </Toolbar>
    </AppBar>
  );
}
