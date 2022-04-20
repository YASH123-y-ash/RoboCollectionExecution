import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { CssBaseline, Grid, Paper } from "@mui/material";
import { SearchComponent } from "./SearchComponent";
import AppsIcon from "@mui/icons-material/Apps";
import EmailIcon from "@mui/icons-material/Email";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { height, textAlign } from "@mui/system";
import All from "./images/icons/All.png";
import email from "./images/icons/email.png";
import analytics from "./images/icons/analytics.png";
import briefcase from "./images/icons/briefcase.png";
import Cap from "./images/icons/Cap.png";
import Car from "./images/icons/Car.png";
import dash from "./images/icons/dash.png";

import exportss from "./images/icons/exportss.png";
import ivr from "./images/icons/ivr.png";
import law from "./images/icons/law.png";
import location from "./images/icons/location.png";
import monitor from "./images/icons/monitor.png";
import percent from "./images/icons/percent.png";

import phone from "./images/icons/phone.png";
import search from "./images/icons/search.png";
import sms from "./images/icons/sms.png";
import tree from "./images/icons/tree.png";
import usermanage from "./images/icons/usermanage.png";
import watsapp from "./images/icons/watsapp.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Content({ open11 }) {
  const [icons, seticons] = useState({
    All: All,
    email: email,
    analytics: analytics,
    briefcase: briefcase,
    Cap: Cap,
    Car: Car,
    dash: dash,
    ivr: ivr,
    law: law,
    location: location,
    monitor: monitor,
    percent: percent,
    phone: phone,
    search: search,
    sms: sms,
    tree: tree,
    usermanage: usermanage,
    watsapp: watsapp,
    exportss: exportss,
  });

  return (
    <div
      style={{
        backgroundColor: "#f8f9f9",
        boxSizing: "border-box",
        marginLeft: "4%",
      }}
    >
      <div>
        <div className="d-flex justify-content-start">
          <h1
            style={{
              color: "#272a2d",
              fontFamily: "sans-serif open",
              fontWeight: "bold",
            }}
          >
            Robo collection actions
          </h1>
        </div>
        <div className="d-flex justify-content-start">
          <p style={{ color: "#919497", fontWeight: "thin" }}>
            Amet minim-mollit non deserunt ullamco est sit aliqua dolor do amet
            sint .
          </p>
        </div>
        <div
          style={{ height: "0.3vh", width: "95%", backgroundColor: "#ebeced" }}
        ></div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "4vh",
            justifyContent: "center",
            marginLeft: "-1.3rem",
          }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "none",
              height: "25vh",
              width: `${open11 ? "157px" : "225px"}`,
              backgroundColor: "#eff1f1",
              mr: "1.5vw",
              ml: `${open11 ? "-1vw" : "-2vw"}`,
              mt: "1vh",
              color: "#8b8f92",
            }}
          >
            <CardContent style={{ marginTop: "1rem", fontSize: "14px" }}>
              {/* <AppsIcon sx={{ fontSize: "2rem", marginTop: "10%" }} /> */}
              <img src={icons.All} alt="all"></img>
              <p style={{ fontSize: "1.5rem", marginTop: "0.9rem" }}>
                {" "}
                <b>53.82K </b>
              </p>
              <p style={{ marginTop: "-0.8rem" }}>All</p>
            </CardContent>
          </Card>

          <Card
            sx={{
              borderRadius: "10% / 10%",
              boxShadow: "none",
              backgroundColor: "#143a4b",
              width: `${open11 ? "157px" : "225px"}`,

              height: "25vh",
              mr: "1.5vw",
              mt: "1vh",
              color: "#fdfdfd",
              // marginLeft:"0.4rem"
            }}
          >
            <CardContent style={{ marginTop: "1rem", fontSize: "14px" }}>
              {/* <EmailIcon sx={{ fontSize: "2rem", marginTop: "10%" }} /> */}
              <img src={icons.email} alt="email"></img>

              <p style={{ fontSize: "1.5rem", marginTop: "0.9rem" }}>
                {" "}
                <b>45.73K </b>
              </p>
              <p style={{ marginTop: "-0.8rem" }}>Email</p>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "none",
              height: "25vh",
              width: `${open11 ? "157px" : "225px"}`,

              backgroundColor: "#eff1f1",
              mr: "1.5vw",
              mt: "1vh",
              color: "#8b8f92",
              // marginLeft:"0.4rem"
            }}
          >
            <CardContent style={{ marginTop: "1rem", fontSize: "14px" }}>
              {/* <ContactPhoneRoundedIcon
                sx={{ fontSize: "2rem", marginTop: "10%" }}
              /> */}

              <img src={icons.ivr} alt="ivr"></img>

              <p style={{ fontSize: "1.5rem", marginTop: "0.9rem" }}>
                {" "}
                <b color="white">6.98K </b>
              </p>

              <p style={{ marginTop: "-0.8rem" }}>IVR</p>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "none",
              height: "25vh",
              width: `${open11 ? "157px" : "225px"}`,

              backgroundColor: "#eff1f1",
              mr: "1.5vw",
              mt: "1vh",
              color: "#8b8f92",
              // marginLeft:"0.4rem"
            }}
          >
            <CardContent style={{ marginTop: "0.8rem", fontSize: "14px" }}>
              {/* <WhatsappRoundedIcon
                sx={{ fontSize: "2rem", marginTop: "10%" }}
              /> */}

              <img src={icons.watsapp} alt="whatsapp"></img>

              <p style={{ fontSize: "1.5rem", marginTop: "0.7rem" }}>
                {" "}
                <b>2.07K </b>
              </p>

              <p style={{ marginTop: "-0.8rem" }}>WhatsApp</p>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "none",
              height: "25vh",
              width: `${open11 ? "157px" : "225px"}`,

              backgroundColor: "#eff1f1",
              mr: "1.1vw",
              // color: "#bbbdbf",
              color: "#8b8f92",
              mt: "1vh",
              // marginLeft:"0.4rem",
            }}
          >
            <CardContent style={{ marginTop: "0.6rem", fontSize: "14px" }}>

              <img src={icons.sms} alt="sms"></img>

              <p style={{ fontSize: "1.5rem", marginTop: "0.6rem" }}>
                {" "}
                <b>349 </b>
              </p>
              <p style={{ marginTop: "-0.8rem" }}>SMS</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <CssBaseline />
      <Box sx={{ mt: 4, width: "97%", textAlign: "center" }}>
        <Grid container item sx={{ width: "98%" }}>
          <Grid
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <Item style={{ borderRadius: 8, boxShadow: "none" }}>
              <Grid
                container
                style={{
                  marginTop: "4vh",
                  marginLeft: "13px",
                }}
              >
                <Grid
                  item
                  style={{ marginRight: "16px" }}
                  xs={11}
                  sm={5}
                  md={2}
                >
                  <Button
                    style={{
                      backgroundColor: "#ffdd64",
                      color: "#26292c",
                      borderRadius: "0.4rem",
                      boxShadow: "none",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      padding: "0.6rem",
                      // width given in responsive 9.5 = 152px
                      // width: "9.5rem",
                      width: `${open11 ? "152px" : "195px"}`,
                    }}
                  >
                    Executed 3,567
                  </Button>
                </Grid>
                <Grid
                  item
                  style={{ marginRight: "16px" }}
                  xs={11}
                  sm={5}
                  md={2}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#eff1f1",
                      color: "#919598",
                      borderRadius: "0.4rem",
                      boxShadow: "none",
                      textTransform: "capitalize",
                      padding: "0.6rem",
                      // width: "9.5rem",
                      width: `${open11 ? "152px" : "195px"}`,

                      // marginLeft: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Pending 1,467
                  </Button>
                </Grid>
                <Grid item sx={{ marginRight: "39px" }} xs={11} sm={5} md={2}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#eff1f1",
                      color: "#919598",
                      borderRadius: "0.4rem",
                      boxShadow: "none",
                      textTransform: "capitalize",
                      padding: "0.6rem",
                      // width: "9.5rem",
                      width: `${open11 ? "152px" : "195px"}`,

                      // marginLeft: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Cancelled 1,89
                  </Button>
                </Grid>
                {/* <Grid item xs={11} sx={0} sm={3} md={1}></Grid> */}
                <Grid item xs={11} sm={7} md={3}>
                  <SearchComponent />
                </Grid>
                <Grid item xs={11} sm={5} md={2}>
                  <Button
                    style={{
                      backgroundColor: "white",
                      color: "#24282b",
                      textTransform: "capitalize",
                    }}
                  >
                    {/* <DownloadIcon sx={{ mr: 1, color: "#242829" }} /> */}
                    <img
                      src={icons.exportss}
                      alt="exports"
                      style={{ marginRight: "0.5rem", color: "#272a2d" }}
                    ></img>
                    Export
                  </Button>
                </Grid>
              </Grid>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "4vh",
                  // marginLeft: "1.2vw",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "none",
                    height: "25vh",
                    width: "30vw",
                    backgroundColor: "#f8f9f9",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          letterSpacing: 0.8,
                          color: "#313436",
                          textAlign: "left",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Deshmukh Dairy Milk
                      </Typography>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#8c64ff",
                          borderRadius: 10,
                        }}
                      ></div>
                    </div>
                    <Typography
                      sx={{
                        mb: 1.5,
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: "regular",
                      }}
                      color="#9b9fa2"
                    >
                      AHMEDABAD
                    </Typography>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {" "}
                        <SchoolIcon />
                      </span>
                      <span>
                        {" "}
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          $3,68,980.00
                        </Typography>
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "none",
                    height: "25vh",
                    width: "30vw",
                    backgroundColor: "#f8f9f9",
                    marginLeft: "1rem",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          letterSpacing: 0.8,
                          color: "#313436",
                          textAlign: "left",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Vaishnavi Caterers
                      </Typography>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#58d056",
                          borderRadius: 10,
                        }}
                      ></div>
                    </div>
                    <Typography
                      sx={{
                        mb: 1.5,
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: "regular",
                      }}
                      color="#9b9fa2"
                    >
                      NEW DELHI
                    </Typography>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {" "}
                        <HomeIcon />
                      </span>
                      <span>
                        {" "}
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          $9,15,020.00
                        </Typography>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "4vh",
                  // marginLeft: "1.2vw",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "none",
                    height: "25vh",
                    width: "30vw",
                    backgroundColor: "#f8f9f9",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          letterSpacing: 0.8,
                          color: "#313436",
                          textAlign: "left",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Mr Surinder Kumar{" "}
                      </Typography>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#ff4646",
                          borderRadius: 10,
                        }}
                      ></div>
                    </div>
                    <Typography
                      sx={{
                        mb: 1.5,
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: "regular",
                      }}
                      color="#9b9fa2"
                    >
                      AHMEDABAD
                    </Typography>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {" "}
                        <LocalShippingIcon />
                      </span>
                      <span>
                        {" "}
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          $3,68,980.00
                        </Typography>{" "}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "none",
                    height: "25vh",
                    width: "30vw",
                    backgroundColor: "#f8f9f9",
                    marginLeft: "1rem",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          letterSpacing: 0.8,
                          color: "#313436",
                          textAlign: "left",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Jain Warehousing
                      </Typography>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#58d056",
                          borderRadius: 10,
                        }}
                      ></div>
                    </div>

                    <Typography
                      sx={{
                        mb: 1.5,
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: "regular",
                      }}
                      color="#9b9fa2"
                    >
                      MUMBAI
                    </Typography>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {" "}
                        <SchoolIcon />
                      </span>
                      <span>
                        {" "}
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          $68,980.00
                        </Typography>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "4vh",
                  // marginLeft: "1.2vw",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "none",
                    height: "25vh",
                    width: "30vw",
                    backgroundColor: "#f8f9f9",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          letterSpacing: 0.8,
                          color: "#313436",
                          textAlign: "left",
                          mb: 1,
                        }}
                        color="#9b9fa2"
                        gutterBottom
                      >
                        Deshmukh Dairy Milk
                      </Typography>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#8c64ff",
                          borderRadius: 10,
                        }}
                      ></div>
                    </div>
                    <Typography
                      sx={{
                        mb: 1.5,
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: "regular",
                      }}
                      color="#9b9fa2"
                    >
                      AHMEDABAD
                    </Typography>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {" "}
                        <LocalShippingIcon />
                      </span>
                      <span>
                        {" "}
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          $68,980.00
                        </Typography>
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "none",
                    height: "25vh",
                    width: "30vw",
                    backgroundColor: "#f8f9f9",
                    marginLeft: "1rem",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          letterSpacing: 0.8,
                          color: "#313436",
                          textAlign: "left",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Vaishnavi Caterers{" "}
                      </Typography>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#58d056",
                          borderRadius: 10,
                        }}
                      ></div>
                    </div>

                    <Typography
                      sx={{
                        mb: 1.5,
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: "regular",
                      }}
                      color="#9b9fa2"
                    >
                      NEW DELHI
                    </Typography>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {" "}
                        <SchoolIcon />
                      </span>
                      <span>
                        {" "}
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          $3,68,980.00
                        </Typography>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Content;
