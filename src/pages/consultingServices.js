import React from "react";
import Layout from "../components/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
  Card,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import ConsultingLogo from "../images/ConsultingServicesLogo.png";
import ConsultingStock from "../images/ConsultingStock.jpg";
import { ExpandMore } from "@mui/icons-material";

export default function ConsultingServices() {
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
          <StyledLogo src={ConsultingLogo} alt="Speaking engagements logo" />
        </Grid>
        <Grid item>
          <img
            src={ConsultingStock}
            alt="Consulting"
            style={{
              maxWidth: "100%",
            }}
          />
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
          <Typography
            sx={{ padding: 5, maxWidth: "1000px", color: "#1E1E1E" }}
            textAlign="center"
            variant="subtitle2"
            fontWeight="800"
          >
            Maybe you’ve caught one of our insurance talks, or you heard about
            us from a friend or business associate. No matter how you found your
            way here, this is the place to get the unparalleled peace of mind
            that comes with a customized insurance and risk assessment
            consultation. Rod and Danielle’s wealth of insurance education and
            experience will be applied across your entire operation, resulting
            in a thorough, personalized assessment aimed at helping you prevent
            losses, utilize your insurance dollars to best effect, and protect
            the financial life that you’ve worked so hard to build.
          </Typography>
        </Grid>
        <Grid item mb={2} xs={12}>
          <Typography variant="h5" textAlign="center">
            Risk Management Services
          </Typography>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion sx={{ maxWidth: "1500px" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight="800">
                Home-Based Business/Contractor
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={6}>
                  <List
                    subheader={
                      <ListSubheader
                        sx={{ fontStyle: "italic", fontWeight: "bold" }}
                      >
                        Included in this package:
                      </ListSubheader>
                    }
                  >
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Review of all existing policies and/or new policy recommendations"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Assessment profile of operations and potential risks"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "30 minute phone/Zoom advisory session (customer’s choice)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Summary report of findings and recommendations"
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <List
                    subheader={
                      <ListSubheader
                        sx={{ fontStyle: "italic", fontWeight: "bold" }}
                      >
                        Customer Criteria:
                      </ListSubheader>
                    }
                  >
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "No Business Premises – Home, Online, or Customer Visit-Based Operations"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Operations Less Than $200,000 Annually"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Maximum Two Employees"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "National Operation (Sales/E-Commerce Businesses)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Single Province Operation (Service Businesses)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Maximum One Company Vehicle"}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion sx={{ maxWidth: "1500px" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight="800">Small Business</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={6}>
                  <List
                    subheader={
                      <ListSubheader
                        sx={{ fontStyle: "italic", fontWeight: "bold" }}
                      >
                        Included in this package:
                      </ListSubheader>
                    }
                  >
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Review of all existing policies and/or new policy recommendations"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Assessment profile of operations and potential risks"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"On-site inspection of business premises"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "60 minute phone/Zoom advisory session (customer’s choice)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Summary report of findings and recommendations"
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <List
                    subheader={
                      <ListSubheader
                        sx={{ fontStyle: "italic", fontWeight: "bold" }}
                      >
                        Customer Criteria:
                      </ListSubheader>
                    }
                  >
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Single Business Premises Less Than 5000 Sq. Ft."
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Single Location Rental Properties Less Than Six Units"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Operations Less Than $1,000,000 Annually"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Maximum Ten Employees"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "National Operation (Sales/E-Commerce Businesses)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Single Province Operation (Service Businesses) "
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Maximum Two Company Vehicles "}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Family Farm Operation "}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Typography
                  mb={2}
                  sx={{ fontStyle: "italic", fontWeight: "bold" }}
                >
                  Excludes Any Of The Following (Must Be Quoted As Mid-Size
                  Operation):
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                  Liquor Sales/Service, International Operations (Sales or
                  Service Businesses), Historic Building Occupation, Automobile
                  Fleet Policy Holder, Hazardous Goods Handling/Exposure,
                  Aircraft/Watercraft Exposure, Environmental Exposure
                </Typography>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion sx={{ maxWidth: "1500px" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight="800">Multi-Location/Mid-Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={6}>
                  <List
                    subheader={
                      <ListSubheader
                        sx={{ fontStyle: "italic", fontWeight: "bold" }}
                      >
                        Included in this package:
                      </ListSubheader>
                    }
                  >
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Review of all existing policies and/or new policy recommendations"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Assessment profile of operations and potential risks for each business premises"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"On-site inspection of business premises"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "60 minute phone/Zoom advisory session (customer’s choice)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Summary report of findings and recommendations"
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <List
                    subheader={
                      <ListSubheader
                        sx={{ fontStyle: "italic", fontWeight: "bold" }}
                      >
                        Customer Criteria:
                      </ListSubheader>
                    }
                  >
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Multiple Business Premises"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Business Premises Over 5000 Sq. Ft."}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Multiple Location/Greater Than Six Unit Rental Properties"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Operations Greater Than $1,000,000 Annually"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Greater Than Ten Employees"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Large Fleet/Auto Policy Holder "}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "Multi Province Operation (Service Businesses)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={
                          "International Operation (Sales/E-Commerce Businesses)"
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Commercial Farm Operation"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Liquor Sales/ Service"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Historic Building Occupancy"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Hazardous Goods Handling/Exposure"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Aircraft/Watercraft Exposure"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        sx={{ fontStyle: "oblique" }}
                        primary={"Environmental Exposure"}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item mt={2} mb={2} xs={12}>
          <Typography variant="h5" textAlign="center">
            Additional Services (Quoted on Hourly Basis)
          </Typography>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                3D Imaging Of Business Premises
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                One of the best ways to avoid struggling to remember what you
                had after a loss is to properly document your premises and its
                contents before something happens. In addition to the regular
                photography included in our service packages, we are able to
                create a full 3D photographic record of your property – making
                remembering what you have and where it was so much easier.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                Ongoing Risk Management Support
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Things change in business; you may be growing, or have different
                needs than the last time Alderwood profiled your operations. For
                past customers looking for updated advice on new property or
                practices, special rates are available.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                Updated Insurance Policy Review & Recommendations
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If your insurance rates are suddenly in flux or your claims
                history has become an issue, we can work with you and your
                broker on ideas for restructuring your risk profile –
                potentially saving you money or avoiding the inconvenience and
                cost of changing insurers.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                Liaising With Insurance Company/Broker For New Policy/Renewal
                Recommendations
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Taking out a new insurance policy, or renegotiating your current
                ones, can be stressful or confusing. If you’re feeling a little
                at sea, or want help discussing your new risk management
                solutions with your insurance provider, help is at hand.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                Risk Management Consultation & Policy Review For Personal
                Property Clients
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Protecting yourself and preventing losses isn’t just a smart
                idea for businesses; we offer the same risk management
                strategies and services for individuals.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item mt={2} mb={2} xs={12}>
          <Typography variant="h5" textAlign="center">
            Claims Advocacy Services
          </Typography>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">Claim Advice & Guidance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No matter how carefully you plan, a loss can still happen. And
                if it does, there are questions to be answered and actions to be
                taken. Whether it’s the proper way to protect your premises
                after it suffers damage, the pros and cons of putting in a
                smaller claim, or a review of whether or not the insurance
                company is offering you a fair settlement, Alderwood can help.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                Specialist Advice & Recommendations
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                While insurers can have preferences on body shops or building
                contractors, ultimately the choice of who to hire rests with the
                owner. Knowing your options, and how to choose a service
                professional that is right for you and your claim, can make a
                big difference to the outcome. It’s advice that can really pay
                off in the long run.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                Liaising With Your Adjuster, Insurance Company, or Legal
                Representation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sometimes a claim goes sideways – your adjuster or insurance
                company isn’t responding to your calls in a timely manner (or at
                all), the settlement or service that you’ve been offered doesn’t
                seem fair to you, or you’re debating getting a lawyer involved
                after an injury. Our many years of experience with the claims
                process can help you find a path through these issues or
                questions, and offers a bridge of expertise between a stalled
                claim and successful resolution.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item maxWidth="1000px" mb={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              s
            >
              <Typography fontWeight="800">
                Umpire Services During Claim Disputes
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                When every avenue has been explored, and you and the insurance
                company can’t seem to come to terms, arbitration can be the last
                step in settling a dispute. The claims resolution process can be
                confusing and stressful, but whether it’s explaining the process
                and potential outcomes or acting as an umpire between sides, we
                are able to help.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} textAlign="center" mb={5} sx={{ mr: 3, ml: 3 }}>
          <Button
            variant="contained"
            href={`mailto:admin@alderwoodconsulting.ca`}
            sx={{ backgroundColor: "#3E5294" }}
          >
            Contact Rod & Danielle For A Custom Quote
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}
