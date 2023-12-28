import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

//icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HeaderButtons from "../../buttons/HeaderButtons";

const ApplicationHeader = () => {
  const [openTestPopup, setOpenTestPopup] = useState(false);
  const [anchorTest, setAnchorTest] = useState(null);
  const [openAcceptingPopup, setOpenAcceptingPopup] = useState(false);
  const [anchorAccepting, setAnchorAccepting] = useState(null);
  const [openResearchPopup, setOpenResearchPopup] = useState(false);
  const [anchorResearch, setAnchorResearch] = useState(null);
  console.log(openTestPopup);

  const handleTest = (e) => {
    setAnchorTest(e.currentTarget);
    setOpenTestPopup(true);
  };
  const closeTest = () => {
    setAnchorTest(null);
    setOpenTestPopup(false);
  };
  const handleAccepting = (e) => {
    setAnchorAccepting(e.currentTarget);
    setOpenAcceptingPopup(true);
  };
  const closeAccepting = () => {
    setAnchorAccepting(null);
    setOpenAcceptingPopup(false);
  };
  const handleResearch = (e) => {
    setAnchorResearch(e.currentTarget);
    setOpenResearchPopup(true);
  };
  const closeResearch = () => {
    setAnchorResearch(null);
    setOpenResearchPopup(false);
  };

  const [scrolling, setScrolling] = useState(false);

  // Function to change the background based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          position: "sticky",
          top: "20px", // Adjust the top offset as needed
          backgroundColor: scrolling ? "lightgray" : "transparent",
        }}
      >
        <Grid item>
          <Box
            component="img"
            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/59052de6c9e1fcbf2c47.svg"
            alt="website"
          />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Button
                onMouseEnter={handleTest}
                onMouseLeave={closeTest}
                endIcon={
                  openTestPopup ? <ExpandLessIcon /> : <ExpandMoreIcon />
                }
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#083156",
                }}
              >
                Taking the Test
              </Button>
            </Grid>
            <Grid item>
              <Button
                onMouseEnter={handleAccepting}
                onMouseLeave={closeAccepting}
                endIcon={
                  openAcceptingPopup ? <ExpandLessIcon /> : <ExpandMoreIcon />
                }
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#083156",
                }}
              >
                Accepting the Test
              </Button>
            </Grid>
            <Grid item>
              <Button
                onMouseEnter={handleResearch}
                onMouseLeave={closeResearch}
                endIcon={
                  openResearchPopup ? <ExpandLessIcon /> : <ExpandMoreIcon />
                }
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#083156",
                }}
              >
                Test Research
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <HeaderButtons />
        </Grid>
      </Grid>
    </>
  );
};

export default ApplicationHeader;
