import React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/whoWeAre">Who We Are</Link>
      <Link to="/speakingEngagements">Speaking Engagements</Link>
      <Link to="/consultingServices">Consulting Services</Link>
      <Link to="/contactUs">Contact Us</Link>
    </div>
  );
}
