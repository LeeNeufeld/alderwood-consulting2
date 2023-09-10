import React from "react";
import Layout from "../components/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import SpeakingLogo from "../images/SpeakingEngagementsLogo.png";
import SpeakingStock from "../images/SpeakingStock.jpg";
import { ExpandMore } from "@mui/icons-material";

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
            Let us come shine a light on the ins and outs of insurance and risk
            management! Whether you are a group of business owners, a private or
            government municipal organization, or a collection of private
            citizens looking to get the best value for your insurance dollar, we
            have a presentation for you. Choose from one of the categories
            below, and Rod and Danielle will tailor an engaging experience to
            match your interests and time allotment. Learn what to do and not do
            to protect your interests, ask all of your most burning questions,
            unravel the mysterious pile of words that is your insurance policy,
            and put all that new savvy to work for you. We promise a meeting
            full of useful tips, entertaining stories, and eye-opening advice
            for anyone looking to protect that most precious of assets – their
            financial future.
          </Typography>
        </Grid>
        <Grid item maxWidth="1000px" mb={2}>
          <Accordion sx={{ mr: 3, ml: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ mr: 1, ml: 1 }}
            >
              <Typography fontWeight="800">
                What You Don’t Know About Insurance Can Bite You In The Assets –
                Business Insurance
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mr: 3, ml: 3 }}>
              <Typography>
                There is one thing that every business, from the tiniest startup
                to the world’s largest corporation, needs – the protection that
                insurance and risk assessment provides. One improperly insured
                loss can be the difference between thriving and closing the
                doors. And yet the very thing that stands between a business and
                financial ruin is often a mystery to its owners.
              </Typography>
              <br />
              <Typography>
                Almost no one truly understands their insurance policies; what
                they will and won’t cover, and how to make the most of that
                coverage when it counts. And the most important information of
                all – how to prevent claims from happening in the first place,
                by seeing the risks and vulnerabilities before a problem
                happens, and using simple and affordable solutions as
                prevention.
              </Typography>
              <br />
              <Typography>
                Rod and Danielle will use their years of experience to walk your
                group through the ins and outs of insurance for business, using
                real-life examples and accessible language to open people up to
                a new understanding of insurance and risk management. Get
                informed about risks common to every type of business, and
                inspired to better protect your future with forward thinking.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px" mb={2}>
          <Accordion sx={{ mr: 3, ml: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ mr: 1, ml: 1 }}
            >
              <Typography fontWeight="800">
                When Someone Has Fallen & Can’t Get Up, & Other Misadventures –
                Claims
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mr: 3, ml: 3 }}>
              <Typography>
                No matter how carefully you plan, sometimes things go wrong. The
                same is true for insurance claims; the world is a complicated
                place, and events happen that are beyond anyone’s control. What
                can be controlled, however, is how often things go wrong and
                what happens when they do.
              </Typography>
              <br />
              <Typography>
                Whether it’s a slip and fall, a car accident, or a building
                burned to the ground, what people do before, during, and after a
                loss can make a big difference in the outcome.
              </Typography>
              <br />
              <Typography>
                Rod and Danielle will help you navigate these three phases using
                engaging and often comical real-life examples, because you see
                some crazy things over decades of adjusting claims – and every
                one is a lesson in what to do (and not do) when things go
                sideways. Learn what steps to take before a claim occurs, how to
                protect yourself and your property in the moment of loss, and
                your rights and responsibilities in the aftermath. Understanding
                the process, and where to turn when you need help, can be the
                difference between smooth sailing and a rough ride… so get
                empowered, and learn how to take the wheel.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px" mb={2}>
          <Accordion sx={{ mr: 3, ml: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ mr: 1, ml: 1 }}
            >
              <Typography fontWeight="800">
                Where The Rubber Meets The Road – Auto Insurance
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mr: 3, ml: 3 }}>
              <Typography>
                Nearly every adult in Canada owns at least one vehicle, whether
                it be for work, personal use, or a combination of both. And
                nearly every business relies in some way upon vehicles;
                commuting to work, delivering your products or transporting your
                crew to the jobsite, that Friday morning Timmie’s run for the
                office. So many wheels spinning, so little understanding of what
                protects them and their users from a financial crash.
              </Typography>
              <br />
              <Typography>
                Auto insurance is a complex and often confusing thing, with
                rules and regulations that vary widely by province, vehicle use,
                and driver experience. It’s also dynamic, and a lot has changed
                recently. Rates are all over the map – leaving the average
                insurance customer wondering what the heck is happening, and
                why, and what to do about it.
              </Typography>
              <br />
              <Typography>
                Rod and Danielle can help your group find those answers. They
                have years of experience with both personal and commercial auto
                insurance; both selling it, and guiding people through the
                process of using it when a claim occurs. In explaining auto
                insurance using real-world examples and accessible language,
                they will offer your group a map through the labyrinth;
                practical solutions and advice on understanding your own auto
                policy, how to get the best coverage for cost, and the
                prevention of and protection after a claim – information that
                puts you in the driver’s seat.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px" mb={5}>
          <Accordion sx={{ mr: 3, ml: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ mr: 1, ml: 1 }}
            >
              <Typography fontWeight="800">
                How To Protect Your Home Sweet Home & Other Stuff That You Own –
                Personal Insurance
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mr: 3, ml: 3 }}>
              <Typography>
                At the end of the day, there’s nothing like kicking back on your
                own couch… or feeling the wind in your hair as you motor down
                the road, or nursing a cold one with friends out at the cabin.
                People work hard to earn the life that they live and the things
                that they own, and take care to protect them.
              </Typography>
              <br />
              <Typography>
                Locking doors, arming an alarm system; these things become
                second nature in the quest for security. But not many people
                understand the single most effective thing standing between them
                and the loss of everything they’ve built – their insurance
                coverage. And it’s time to get educated, because what you don’t
                know about insuring your personal property can change your life
                in a heartbeat.
              </Typography>
              <br />
              <Typography>
                Rod and Danielle do know about it, and want to guide you into a
                better understanding of your policies; the real protections that
                they offer, insight into common limitations and
                misunderstandings that can leave you vulnerable, and practical
                advice on how to keep loss from landing on your doorstep. Using
                actual examples and understandable explanations, they will lead
                your group through the property, auto, and liability aspects of
                personal insurance, and how to put them to their best use doing
                what they’re meant to do – covering your assets.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} textAlign="center" mb={5} sx={{ mr: 3, ml: 3 }}>
          <Button
            variant="contained"
            href="/ContactUs"
            sx={{ backgroundColor: "#3E5294" }}
          >
            Contact Rod & Danielle to Speak At Your Event
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}
