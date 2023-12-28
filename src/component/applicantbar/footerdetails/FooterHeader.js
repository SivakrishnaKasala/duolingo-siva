import {
  Autocomplete,
  Box,
  Grid,
  Icon,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";

const FooterHeader = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
      label: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
      label: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const smallDevice = useMediaQuery(theme.breakpoints.down("md"));
  const mediumDevice = useMediaQuery(theme.breakpoints.down("lg"));
  const largeDevice = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
          marginTop: 3,
        }}
      >
        <Grid item lg={9} md={7}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Grid
              item
              lg={3}
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Taking the test
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Overview
              </Typography>
              <NavLink
                to="/duolingo/test_takers/accepting_institution"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: 1,
                    marginTop: 1,
                    textDecoration: "none",
                  }}
                >
                  Accepting Institutions
                </Typography>
              </NavLink>
              <NavLink
                to="/test_takers/stories"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    //   color: "#D4D4D4",
                    marginBottom: 1,
                    marginTop: 1,
                  }}
                >
                  Student stories
                </Typography>
              </NavLink>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Prepare
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Official test guide
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Resource
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Accommodations
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Practice Free
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Purchase the Test
              </Typography>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                }}
              >
                Accepting the Test
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Overview
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Test Scoring
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Access Program
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Test Readiness Guide
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Resource
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Accepting Resource
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Send Test Invitations
              </Typography>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Test Resource
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Overview
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Publications
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Standards
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Our team
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Grants and Award
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Blog
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Help & Support
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Help center
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Terms
              </Typography>
              <Typography
                sx={{
                  //   color: "#D4D4D4",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Privacy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} md={3} xs={12}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid item xs={12} lg={12} md={12}>
              <Typography>Site Language</Typography>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{
                    width: "90%",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <div
                            style={{
                              position: "absolute",
                              right: 10,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <ExpandMoreIcon />
                          </div>
                          // <React.Fragment>
                          //   <ExpandMoreIcon />
                          // </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              xs={12}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Grid item xs={12} sm={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <YouTubeIcon />
                    <Typography
                      variant="body2"
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      YouTube
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LinkedInIcon />
                    <Typography
                      variant="body2"
                      sx={{
                        marginLeft: 1,
                      }}
                    >
                      LinkedIn
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <TwitterIcon />
                    <Typography
                      variant="body2"
                      sx={{
                        marginLeft: 1,
                      }}
                    >
                      Twitter
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FacebookIcon />
                    <Typography
                      variant="body2"
                      sx={{
                        marginLeft: 1,
                      }}
                    >
                      Facebook
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <InstagramIcon />
                    <Typography
                      variant="body2"
                      sx={{
                        marginLeft: 1,
                      }}
                    >
                      Instagram
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  width: "100%",
                }}
              >
                @2023 Duolingo
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterHeader;
