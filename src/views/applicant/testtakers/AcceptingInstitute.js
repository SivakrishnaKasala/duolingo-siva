import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ApplicantHeaderBar from "../../../component/applicantbar/headerbar/ApplicantHeaderBar";
import ApplicationHeader from "../../../component/applicantbar/headerbar/ApplicationHeader";
import FooterHeader from "../../../component/applicantbar/footerdetails/FooterHeader";

const AcceptingInstitute = () => {
  const theme = useTheme();
  const extraSmallDevice = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(extraSmallDevice);
  console.log(theme.breakpoints.down("xs"));

  const smallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumDevice = useMediaQuery(theme.breakpoints.down("md"));
  const largeDevice = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <ApplicantHeaderBar />
      <Box
        sx={{
          padding: "0px 20px 0px 20px",
        }}
      >
        <ApplicationHeader />
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  padding: "0px 10px 0px 10px",
                }}
              >
                <Grid
                  container
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#083156",
                        fontWeight: "bold",
                        fontSize: smallDevice && "28px",
                      }}
                    >
                      Accepted worldwide
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        marginTop: smallDevice && "20px",
                      }}
                    >
                      The Duolingo English Test is officially accepted by over
                      4500 universities and institutions worldwide, with more
                      joining them every day. Send your test results to as many
                      of them as you want, for free.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      sx={{
                        width: "90%",
                        marginTop: smallDevice && "20px",
                        color: "#FFE5B4",
                        backgroundColor: "#083156",
                        fontWeight: "bold",
                        height: "46px",
                        borderRadius: "5px",
                      }}
                    >
                      Get Started
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: smallDevice && "30px",
                }}
              >
                <Box
                  component="img"
                  src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/cb20d7666fb4ee989e8e.svg"
                  alt="accept"
                  sx={{
                    width: "80%",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <FooterHeader />
      </Box>
    </>
  );
};

export default AcceptingInstitute;
