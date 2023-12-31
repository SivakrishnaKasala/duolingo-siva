import React, { useState } from "react";
import CheckHeader from "../../component/duoheader/CheckHeader";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

//icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { LiaUniversitySolid } from "react-icons/lia";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import DuoHeader from "../../component/duoheader/DuoHeader";

const UniversitiesFav = () => {
  const [sendUniversitiesList, setSendUniversitiesList] = useState(false);

  const top100Films = [
    "Result",
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
  const [inputValueUni, setInputValueUni] = useState("");
  const renderUniversity = () => {
    return (
      <>
        <DuoHeader />
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              color: "#083156",
                              fontSize: "30px",
                              fontWeight: "bold",
                              // marginBottom: "15px", // Add margin here
                            }}
                          >
                            Find Universities
                          </Typography>
                        </Grid>
                        <Grid item sx={12}>
                          <a
                            href="/duolingo/accepting_institute"
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            VIEW ALL UNIVERSITIES
                            <ChevronRightOutlinedIcon
                              sx={{
                                fontSize: "16px",
                              }}
                            />
                          </a>
                        </Grid>
                      </Grid>
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
                      <Box
                        component="img"
                        src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/30e654f5372e0c594a8d.svg"
                        alt="university"
                        sx={{
                          maxHeight: "180px",
                          textAlign: "center",
                          maxWidth: "100%",
                          mx: "auto", // Horizontal centering
                          my: "15px", // Vertical centering with a margin of 15px
                          //display: "block", // Ensures the image is centered horizontally
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Autocomplete
                            fullWidth
                            placeholder="University Name"
                            clearIcon={null} //set clearIcon to null to hide the clear icon
                            id="combo-box-demo"
                            options={top100Films}
                            freeSolo
                            inputValue={inputValueUni}
                            onInputChange={(event, newInputValue) => {
                              setInputValueUni(newInputValue);
                            }}
                            open={inputValueUni.length > 0}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            renderInput={(params) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  height: "48px",
                                  alignItems: "center",
                                  border: "1px solid #ccc",
                                }}
                              >
                                <Icon
                                  sx={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <LiaUniversitySolid />
                                </Icon>
                                <TextField
                                  placeholder="University Name"
                                  {...params}
                                  sx={{
                                    borderColor: "white",
                                    "& .MuiInputBase-root": {
                                      height: "48px",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                      "& fieldset": {
                                        borderColor: "transparent",
                                      },
                                      "&:hover fieldset": {
                                        borderColor: "transparent",
                                      },
                                      "&.Mui-focused fieldset": {
                                        borderColor: "transparent",
                                      },
                                    },
                                  }}
                                />
                                <Icon
                                  sx={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <ExpandLessOutlinedIcon />
                                </Icon>
                                <IconButton>
                                  <ClearIcon />
                                </IconButton>
                              </Box>
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid item></Grid>
                            <Grid item></Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth>
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  const render = () => {
    return renderUniversity();
  };
  return render();
};

export default UniversitiesFav;
