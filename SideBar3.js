import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Content from "./Content";
import {
  Checkbox,
  Collapse,
  InputBase,
  ListItemButton,
  Slider,
} from "@mui/material";
import { alpha } from "@material-ui/core";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Content2 from "./Content2";
import MediaQueryContent from "./MediaQueryContent";
import { makeStyles } from '@material-ui/core';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(5),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  width: "auto",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 120;

export default function SideBar3() {
  // from sidebar component
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [secondary1, setSecondary1] = React.useState(false);
  const [secondary2, setSecondary2] = React.useState(false);
  const [secondary3, setSecondary3] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  const style = {
    color: "red",
  };
  const theme = useTheme();
  const [open11, setOpen11] = React.useState(true);

  //for opening the drawer SideBar Component
  const handleDrawerOpen = () => {
    setOpen11(true);
  };

  // for closeing the drawer from SideBar3 Component
  const handleDrawerClose = () => {
    setOpen11(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        // changes made for making open drawer to get it to top
        style={{ display: "flex", alignItems: "start", padding: "1rem" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: "297px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            // overflowX hidden for making x axis scroll disable.
            overflowX: "hidden",
          },
        }}
        variant="persistent"
        // to open right or left side
        anchor="left"
        open={open11}
      >
        {/* <Divider style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }} /> */}

        {/* Box and list for Hide Filters, reset and Preset list */}
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <DrawerHeader>
              <ListItemButton style={{ marginTop: 20 }}>
                <IconButton onClick={handleDrawerClose}>
                  <FilterAltIcon style={{ marginLeft: "-1vw" }} />
                  {theme.direction === "ltr" ? (
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "'#323538'",
                        fontWeight: "540",
                      }}
                      primary="Hide Filters"
                    />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>

                <ListItemText
                  primary="Reset"
                  style={{ marginLeft: "9vw", color: "#5cb5eb" }}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    color: "'#323538'",
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            </DrawerHeader>

            <Divider
              style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }}
            />
            <ListItemButton>
              <li
                style={{
                  color: "#919597",
                  fontSize: "0.9rem",
                  fontWeight: "medium",
                }}
              >
                PRESETS
              </li>
            </ListItemButton>
            <ListItemButton>
              <li
                style={{
                  color: "#5cb5eb",
                  fontSize: "0.9rem",
                  fontWeight: "medium",
                }}
              >
                Preset one
              </li>
            </ListItemButton>
            <ListItemButton>
              <li
                style={{
                  color: "#5cb5eb",
                  fontSize: "0.9rem",
                  fontWeight: "medium",
                }}
              >
                Preset two
              </li>
            </ListItemButton>
            <ListItemButton>
              <li
                style={{
                  color: "#5cb5eb",
                  fontSize: "0.9rem",
                  fontWeight: "medium",
                }}
              >
                Preset three
              </li>
            </ListItemButton>
          </List>
        </Box>
        <Divider style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }} />

        {/* Box for second list which is having Date range */}
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            component="div"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton sx={{ fontSize: "0.9rem" }} onClick={handleClick}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: "#999d9f",
                  fontWeight: "540",
                }}
                primary="DATE RANGE"
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List>
                <ListItemButton sx={{ pl: 1, mb: -2 }}>
                  <Checkbox
                    checked={secondary ? { style } : ""}
                    onChange={(event) => setSecondary(event.target.checked)}
                  />

                  <li
                    style={{
                      color: "#313437",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Today
                  </li>
                </ListItemButton>
                <ListItemButton sx={{ pl: 1, mb: -2 }}>
                  <Checkbox
                    checked={secondary1}
                    onChange={(event) => setSecondary1(event.target.checked)}
                  />
                  <li
                    style={{
                      color: "#323538",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Yestrday
                  </li>
                </ListItemButton>
                <ListItemButton sx={{ pl: 1, mb: -2 }}>
                  <Checkbox
                    checked={secondary2}
                    onChange={(event) => setSecondary2(event.target.checked)}
                  />
                  <li
                    style={{
                      color: "#323538",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Last 7 days
                  </li>
                </ListItemButton>
                <ListItemButton sx={{ pl: 1, mb: -2 }}>
                  <Checkbox
                    checked={secondary3}
                    onChange={(event) => setSecondary3(event.target.checked)}
                  />
                  <li
                    style={{
                      color: "#323538",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Last 30 days
                  </li>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText
                    sx={{ marginLeft: "-0.9rem" }}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      color: "#5cb5eb",
                      fontWeight: "540",
                    }}
                    primary="Custom range"
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
        <Divider style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }} />

        {/* Box for Amount slider component */}
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            component="div"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick1}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: "#999d9f",
                  fontWeight: "540",                }}
                primary="AMOUNT"
              />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List>
                <ListItemButton
                  sx={{
                    pl: 2,
                    width: "250px",
                    height: "1rem",
                    backgroundColor: "white",
                    marginBottom: 2,
                  }}
                >
                  <Slider
                    size="large"
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                  />
                </ListItemButton>
                <h6
                  style={{
                    textAlign: "left",
                    marginLeft: "1rem",
                    fontSize: "0.9rem",
                    color: "#242829",
                  }}
                >
                  $2000-$5000
                </h6>
              </List>
            </Collapse>
          </List>
        </Box>
        <Divider style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }} />

        {/* Box for Searching city having City and search input field inside it */}
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
            component="div"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick2}
              style={{ backgroundColor: "#ffffff" }}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: "#999d9f",
                  fontWeight: "540",
                }}
                primary="CITY"
              />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List style={{ backgroundColor: "white" }}>
                <ListItemButton
                  sx={{ pl: 4 }}
                  style={{
                    // marginRight: "-3vw",
                    marginLeft: "0.6rem",
                    backgroundColor: "#eef0ef",
                    // border: "1px solid green",
                    width: "90%",
                    borderRadius: "10px",
                    height: "2.2rem",
                  }}
                >
                  {/* <SearchComponent /> */}

                  <Search
                    style={{
                      //   border: "1px solid black",
                      //   color: "#232929",
                      width: "100%",
                      marginLeft: "-2rem",
                    }}
                  >
                    <SearchIconWrapper>
                      <SearchIcon
                        style={{ color: "#8b8f92", fontSize: "1.2rem" }}
                      />
                    </SearchIconWrapper>
                    <StyledInputBase
                      sx={{
                        color: "#8a8e92",
                        textTransform: "capitalize",
                        fontSize: "small",
                      }}
                      placeholder="Search city…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
        <Divider style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }} />

        {/* Box for State component list */}
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="div"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick3}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: "#999d9f",
                  fontWeight: "540",
                }}
                primary="State"
              />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List></List>
            </Collapse>
          </List>
        </Box>
        <Divider style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }} />

        {/* Box for Segment component */}
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="div"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick4}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: "#999d9f",
                  fontWeight: "540",
                }}
                primary="Segment"
              />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List></List>
            </Collapse>
          </List>
        </Box>
        <Divider style={{ width: "91%", marginLeft: "5%", marginTop: "2%" }} />
        <Box >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="div"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick5}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: "#999d9f",
                  fontWeight: "540",
                }}
                primary="Branch"
              />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List></List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
      <Main open={open11}>
        <DrawerHeader />
        {/* <Content open11={open11} /> */}
        {/* <Content2 open11={open11} /> */}
        <MediaQueryContent open11={open11} />
      </Main>
    </Box>
  );
}
