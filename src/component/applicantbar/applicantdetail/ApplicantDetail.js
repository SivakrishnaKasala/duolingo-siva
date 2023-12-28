// import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FooterHeader from "../footerdetails/FooterHeader";

const ApplicantDetail = () => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
  console.log(smallDevice);
  const mediumDevice = useMediaQuery(theme.breakpoints.down("lg"));
  // console.log(theme);
  // const isExtraSmall = Boolean(extraSmall);
  // console.log(isExtraSmall);
  console.log(extraSmall);
  const detailData = [
    {
      image:
        "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/7f3afeb8d03858f5e1af.svg",
      title: "Convenient",
      description:
        "Take the test online anywhere, anytime — no traveling to a test center or appointment needed",
    },
    {
      image:
        "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e7259a1effee7e8b96a0.svg",
      title: "Fast",
      description:
        "Get your results within 2 days of completing the test, and share it with anyone, immediately",
    },
    {
      image:
        "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e2b4d673643684d90a33.svg",
      title: "Affordable",
      description:
        "A fraction of the cost of other tests. Send your scores to an unlimited number of institutions for free!",
    },
  ];
  const testData = [
    {
      image:
        "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/102dfeffeafe6a17ca3d.svg",
      title: "Quick setup",
      time: "5 MINUTES",
      description:
        "An introduction that walks you through the test and requirements",
    },
    {
      image:
        "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/975cbea55c0df9e6524d.svg",
      title: "Adaptive test",
      time: "45 MINUTES",
      description:
        "A series of different questions that evaluate your English skills",
    },
    {
      image:
        "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/6a5452121aee94ada310.svg",
      title: "Writing and speaking sample",
      time: "10 MINUTES",
      description:
        "Open-ended prompts that are shared with institutions alongside your score",
    },
  ];

  const largeObject = () => {
    return (
      <Grid container>
        {testData.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginRight: 2,
              }}
            >
              <Box component="img" src={item.image} alt={`image${index}`} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginRight: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: "#B0D6F5",
                    borderRadius: 2,
                    marginLeft: 2,
                  }}
                >
                  {item.time}
                </Typography>
              </Box>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };
  const smallObject = () => {
    return (
      <Grid container spacing={2}>
        {testData.map((item, index) => (
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              minHeight: "150px",
            }}
          >
            <Box>
              <Box component="img" src={item.image} alt={`image${index}`} />
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "inline-block",
                  backgroundColor: "#B0D6F5",
                  maxHeight: "auto",
                  textAlign: "center",
                  borderRadius: 2,
                  padding: "2px 3px",
                }}
              >
                {item.time}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#3d4d5c",
                display: "flex",
                textAlign: "center",
              }}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    );
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "100%",

          margin: 0,
        }}
      >
        <Grid
          container
          sx={{ padding: "0px 25px 0px 25px", position: "static" }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              On demand, anywhere in the world
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {detailData.map((item, index) => (
                <Grid item key={index} xs={12} md={3.5}>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        marginBottom: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src={item.image}
                          alt={`Image${index}`}
                          sx={{
                            width: extraSmall ? "60%" : "100%",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 2,
                      }}
                    >
                      <Typography variant="h6">{item.title}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "40px 0px 0px 0px",
            }}
          >
            <Box
              sx={{
                marginBottom: -5,
                position: "relative",
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/c0577127d555bd3e4f44.svg"
                alt="website"
              />
            </Box>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "70px 20px 40px 20px",
                backgroundColor: "#FFE5B4",
                borderRadius: 2,
                position: "relative",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  Send results to every school on your list for free
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    width: "80%",
                    marginBottom: "16px",
                    marginTop: "16px",
                  }}
                >
                  Thousands of universities around the world accept the Duolingo
                  English Test. You can send your results to as many of them as
                  you want, for free.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF7518",
                    color: "#083156",
                    fontWeight: "bold",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#FF7518",
                      color: "#083156",
                    },
                  }}
                >
                  View Institutions
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginBottom: 2,
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: extraSmall && "center",
                      }}
                      variant="h5"
                    >
                      Accurate results in minutes
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {extraSmall ? smallObject() : largeObject()}
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Button variant="contained" startIcon={<YouTubeIcon />}>
                        WATCH WALKTHROUGH VIDEO
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              {!extraSmall && (
                <Grid
                  item
                  sm={6}
                  style={{
                    maxHeight: "400px",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/060e8f82f5cbe6aebee8.svg"
                      alt="details"
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              backgroundColor: "#083156",
              marginTop: 3,
              borderRadius: "10px",
              padding: "20px 10px 20px 10px",
            }}
          >
            <Grid
              container
              sx={{
                textAlign: "center",
                width: "90%",
                margin: "auto",
              }}
              spacing={3}
            >
              <Grid item xs={12}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Get started
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    Sign up now and certify your English proficiency today. Test
                    online anytime, anywhere. Finish in 1 hour and get results
                    in 2 days. Share your results with 4,000+ institutions.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  margin: "auto",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F8D568",
                    color: "#083156",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    marginBottom: 1.5,
                    height: "46px",
                    padding: "0px 28px 0px 28px",
                    width: extraSmall ? "95%" : "230px",
                    marginRight: extraSmall ? "0px" : "5px",

                    "&:hover": {
                      backgroundColor: "#F8D568",
                    },
                  }}
                >
                  Practice free
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F8D568",
                    color: "#083156",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    marginBottom: 1.5,
                    height: "46px",
                    width: extraSmall ? "95%" : "230px",

                    "&:hover": {
                      backgroundColor: "#F8D568",
                    },
                  }}
                >
                  Purchase a test
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FooterHeader />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ApplicantDetail;
