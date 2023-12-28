import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

//icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ApplicantHeaderBar from "../../../component/applicantbar/headerbar/ApplicantHeaderBar";
import ApplicationHeader from "../../../component/applicantbar/headerbar/ApplicationHeader";
import FirstCardDetails from "../../../component/applicantbar/firstcard/FirstCardDetails";
import LastCard from "../../../component/applicantbar/lastCard/LastCard";

const imageData = [
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/video/stories/thumbnail/scott.png",
    title: "Scott",
    college: "Georgia Institute of Technology",
  },
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/video/stories/thumbnail/yein.png",
    title: "Yein",
    college: "University of Pennsylvania",
  },
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/video/stories/thumbnail/serena.png",
    title: "Serena",
    college: "Barnard College",
  },
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/video/stories/thumbnail/Franck-thumb-redesign.png",
    title: "Franck",
    college: "Columbia University",
  },
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/video/stories/thumbnail/olha.png",
    title: "Olha",
    college: "Columbia University",
  },
];

const blogData = [
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/2c8019b41c0bd4c26730.svg",
    title: "Real students share their advice for studying abroad in English",

    profileData: [
      {
        profile:
          "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/14695a1f068305bb8cc4.png",
        name: "Caroline Fisher",
      },
    ],
    time: "September 17, 2021",
    description:
      "Every year, millions of students worldwide choose to study abroad. While the experience is very rewarding, it can also be challenging to live in a new place, speak a different language, and experience a new culture, in addition to navigating day-to-day university life.",
    button: "READ MORE",
  },
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/685fac7d863e3cbbe02c.svg",
    title:
      "Young people want to work and study abroad—but testing makes it difficult",
    profileData: [
      {
        profile:
          "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/331805b5a9b0d1cc5fe4.png",
        name: "Sophie Wodzak",
      },
      {
        profile:
          "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/51b1bdb7ee348d6a2c03.png",
        name: "Tamsin Thomas",
      },
    ],
    time: "May 11, 2022",
    description:
      "The pandemic has forever altered how we approach learning, at every level of education. But how has it affected how talented young people feel about studying and working overseas? How do they feel about the proficiency tests needed for applying to international study or work opportunities? The Duolingo English Test team was particularly interested in the perspective of young people migrating to the UK and partnered with Public First to learn more. We polled more than 1,900 students in China and India and learned more about what they hope to gain from international study and work, as well as the obstacles they face when applying for opportunities abroad.",
    button: "READ MORE",
  },
  {
    image:
      "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/f78df02bb45f6558e3b4.svg",
    title:
      "International education trends via the world's most accessible English test",
    profileData: [
      {
        profile:
          "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/1f037974fd51b9277d36.png",
        name: "Mark Pavic",
      },
      {
        profile:
          "	https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/3e7d31efd4b01ee87bd5.png",
        name: "Jennifer Dewar",
      },
    ],
    time: "May 6, 2021",
    description:
      "We launched the Duolingo English Test in 2016 with a mission to use technology to lower barriers to higher education for students everywhere. As we reflect on our five year journey, we are proud that our original mission endures. Delivering a secure assessment any time, anywhere in the world for $49, was once a North Star goal; today, with hundreds of thousands of test takers and over 3,000 accepting institutions, it's clear the Duolingo English Test has made an impact on access to higher education. We lead the testing industry in implementing technology that is student-centered and provides more timely results for institutions—all while remaining reliable and secure.",
    button: "READ MORE",
  },
];

const Stories = () => {
  const theme = useTheme();
  const extraDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const smallDevice = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(extraDevice);
  console.log(smallDevice);
  const smallDevice1 = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(smallDevice1);
  const isSmallScreen = useMediaQuery("(max-width:470px)");
  console.log(isSmallScreen);

  const getFullName = (item) => {
    const str1 = "";

    const getFullName = (data) => {
      const listName = [];
      if (item.length === 1) {
        str1 = item[0].name;
      } else {
      }
    };
    return (
      <Grid item>
        <Box>
          <Typography>getNames(item)</Typography>
        </Box>
      </Grid>
    );
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0px!important",
      }}
    >
      <ApplicantHeaderBar />
      <ApplicationHeader />
      <Box
        sx={{
          padding: "0px 12px 0px 12px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
            }}
          >
            <FirstCardDetails />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "20px",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  marginTop: -5,
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/0e0a6a95a2d2cbfd1e37.svg"
                  alt="data"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/530bd8e3902cb47c1de5.svg"
                      alt="data"
                      sx={{}}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      In their own words
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      We talked to students who took the Duolingo English Test
                      on their path to higher education. These are their
                      stories.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {imageData.map((item, index) => (
                        <Grid item xs={12} key={index}>
                          <Card
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              border: "5px solid 000",
                              padding: "15px",
                              marginBottom: "10px", // Add margin to create space between cards
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={item.image}
                              alt={`video${index}`}
                              sx={{
                                width: "100%",
                              }}
                            />
                            <CardContent
                              sx={{
                                width: "100%",
                                padding: "0px!important",
                                marginTop: "10px",
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
                                    sx={{
                                      color: "#083156",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {item.title}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography>{item.college}</Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gridGap: "20px",
                      }}
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
                        <Box
                          component="img"
                          src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/25b90ee17d96d20b6572.svg"
                          alt="website"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                          }}
                        >
                          Blog posts
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Visit our blog to learn more.</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider
                          sx={{
                            height: "5px",
                          }}
                        />
                      </Grid>
                      {blogData.map((each, index) => (
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                component="img"
                                src={each.image}
                                alt={`blog${index}`}
                                sx={{
                                  width: isSmallScreen ? "38%" : "100%",
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Grid
                                container
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  gridGap: "20px",
                                }}
                              >
                                <Grid
                                  item
                                  xs={12}
                                  sx={{
                                    textAlign: "center",
                                    marginTop: isSmallScreen && "22px",
                                  }}
                                >
                                  <Typography>{each.title}</Typography>
                                </Grid>
                                {!isSmallScreen && (
                                  <Grid item>
                                    <Grid container>
                                      <Grid item>
                                        <Grid container>
                                          {each.profileData.map(
                                            (item, index) => (
                                              <Grid item key={index}>
                                                <Box
                                                  component="img"
                                                  src={item.profile}
                                                  alt={`profile${index}`}
                                                />
                                              </Grid>
                                            )
                                          )}
                                        </Grid>
                                      </Grid>
                                      <Grid item>
                                        <Grid container>
                                          <Grid item>
                                            <Grid container>
                                              {/* {getFullName(each.profileData)} */}
                                            </Grid>
                                          </Grid>
                                          <Grid item>{each.time}</Grid>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                )}
                                {!isSmallScreen && (
                                  <Grid item>
                                    <Typography>{each.description}</Typography>
                                  </Grid>
                                )}
                                <Grid
                                  item
                                  xs={12}
                                  sx={{
                                    textAlign: "center",
                                    marginTop: isSmallScreen && "22px",
                                  }}
                                >
                                  <Button
                                    variant="contained"
                                    sx={{
                                      backgroundColor: "#DAA520",
                                      color: "#083156",
                                      fontWeight: "bold",
                                      "&:hover": {
                                        backgroundColor: "#DAA520",
                                      },
                                      borderRadius: "10px",
                                    }}
                                    endIcon={
                                      <ArrowForwardIosIcon
                                        sx={{
                                          fontSize: "12px!important",
                                        }}
                                      />
                                    }
                                  >
                                    {each.button}
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <LastCard />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Stories;
