import React from "react";
import ApplicantHeaderBar from "../component/applicantbar/headerbar/ApplicantHeaderBar";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import ScrollItemData from "../component/applicantbar/scrollitem/ScrollItemData";
import ApplicantDetail from "../component/applicantbar/applicantdetail/ApplicantDetail";

const Applicant = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFE5B4",
          width: "100%",
          height: "100%",
        }}
      >
        <ApplicantHeaderBar />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/da0c12bab844e3569971.svg"
              alt="website1"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                subheader={
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#083156",
                          fontWeight: "bold",
                        }}
                      >
                        Certify your English proficiency today.
                      </Typography>
                    </Box>
                  </>
                }
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 0.5,
                    }}
                  >
                    <Box
                      component="img"
                      src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/d611c45a67eaad0deb58.svg"
                      alt="check1"
                    />
                    <Typography
                      sx={{
                        paddingBottom: 1.5,
                        marginLeft: 1,
                      }}
                    >
                      Test online anytime, anywhere
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 0.5,
                    }}
                  >
                    <Box
                      component="img"
                      src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/d611c45a67eaad0deb58.svg"
                      alt="check1"
                    />
                    <Typography
                      sx={{
                        paddingBottom: 1.5,
                        marginLeft: 1,
                      }}
                    >
                      Finish in 1 hour and get results in 2 days
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/d611c45a67eaad0deb58.svg"
                      alt="check1"
                    />
                    <Typography
                      sx={{
                        paddingBottom: 1.5,
                        marginLeft: 1,
                      }}
                    >
                      Accepted by over 4500 universities
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Grid container>
                  <Grid item xs={12} md={2}>
                    <Box
                      sx={{
                        width: "90%",
                        margin: "auto",
                      }}
                    >
                      <Button variant="contained" fullWidth>
                        PRACTICE FREE
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <ScrollItemData />
        <ScrollItemData />
        <ApplicantDetail />
      </div>
    </>
  );
};

export default Applicant;
