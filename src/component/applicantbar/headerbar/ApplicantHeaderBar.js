import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Hidden,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ApplicantHeaderBar = () => {
  const [anchorMenu, setAnchorMenu] = useState(null);
  const handleMenu = (e) => {
    setAnchorMenu(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchorMenu(null);
  };
  const openMenu = Boolean(anchorMenu);
  const menuId = openMenu ? "menuId" : undefined;
  const [anchorTakingTest, setAnchorTakingTest] = useState(false);
  const handleTakingTest = (e) => {
    setAnchorTakingTest(true);
  };
  const closeTakingTest = () => {
    setAnchorTakingTest(!anchorTakingTest);
  };
  const takingTestId = anchorTakingTest ? "takingTestId" : undefined;

  const isExtraSmallObject = useMediaQuery("(max-width:472px)");
  console.log(isExtraSmallObject);
  const smallObject = () => {
    return (
      <Grid container>
        <Grid item xs={5.8}>
          <Box
            component="img"
            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/59052de6c9e1fcbf2c47.svg"
            alt="website"
          />
        </Grid>
        <Grid item xs={5.8}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #191970",

                  width: "40px", // Adjust width to fit the content
                  height: "30px",
                  padding: "0px 16px",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  fontSize: "12px", // Adjust font size if needed
                  "&:hover": {
                    border: "2px solid #191970",
                    backgroundColor: "white",
                  },
                  backgroundColor: "white",
                  color: "#191970",
                  fontWeight: "bold",
                }}
              >
                Log in
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  color: "#FFE5B4",
                  backgroundColor: "#083156",
                  width: "40px",
                  height: "30px",
                  // padding: "0px 16px",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  boxSizing: "border-box",
                  "&:hover": {
                    color: "#FFE5B4",
                    backgroundColor: "#083156",
                  },
                }}
              >
                sign up
              </Button>
            </Grid>
            <Grid item>
              <IconButton onClick={handleMenu} aria-describedby={menuId}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#EEE8AA",
          position: "static",
        }}
      >
        <Toolbar>
          {isExtraSmallObject ? (
            smallObject()
          ) : (
            <Grid
              container
              sx={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Box
                  component="img"
                  src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
                  alt="duolingo"
                />
              </Grid>
              <Grid item>
                <Hidden mdDown>
                  <Button
                    endIcon={<ExpandMoreIcon />}
                    sx={{
                      color: "black",
                      textTransform: "none",
                    }}
                    size="small"
                  >
                    Site language
                  </Button>
                </Hidden>
                <Hidden mdUp>
                  <IconButton onClick={handleMenu} aria-describedby={menuId}>
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Popover
        id={menuId}
        open={openMenu}
        onClose={closeMenu}
        anchorReference="anchorPosition"
        anchorPosition={{
          top: "50%",
          left: "50%",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        // sx={{
        //   "& .MuiPaper-root": {
        //     height: "50%",
        //     width: "90%",
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     justifyContent: "center",
        //   },
        // }}
        PaperProps={{
          sx: {
            width: "100%", // Set the width
            height: "60%", // Set the height
            // Set margin
            margin: "20px",
            marginLeft: "20px!important",
          },
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <CardContent>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Grid item>
                    <Box
                      component="img"
                      src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
                      alt="website"
                      fontSize="small"
                    />
                    {/* <IconButton>
                      <CloseIcon />
                    </IconButton> */}
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => {
                      handleTakingTest();
                      closeMenu();
                    }}
                    aria-describedby={takingTestId}
                    sx={{
                      fontWeight: "bold",
                      color: "#083156;",
                    }}
                  >
                    Taking the Test
                  </Button>
                  <ChevronRightIcon fontSize="small" />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#083156",
                    }}
                  >
                    Accepting the Test
                  </Typography>
                  <ChevronRightIcon fontSize="small" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#083156",
                    }}
                  >
                    Test Research
                  </Typography>
                  <ChevronRightIcon fontSize="small" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "small",
                      color: "#083156;",
                    }}
                  >
                    Site language
                  </Typography>
                  <ChevronRightIcon fontSize="small" />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} sm={6} md={2}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#083156",
                    fontWeight: "bold",
                    borderColor: "#083156",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  LOG IN
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    color: "#fbe56d",
                    backgroundColor: "#083156",
                    "&:hover": {
                      color: "#fbe56d",
                      backgroundColor: "#083156",
                    },
                  }}
                >
                  SIGN UP
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Popover>
      <Popover
        id={takingTestId}
        open={anchorTakingTest}
        onClose={closeTakingTest}
        anchorReference="anchorPosition"
        anchorPosition={{
          top: "50%",
          left: "50%",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            width: "100%",
            height: "40%",
            margin: "20px",
          },
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <CardContent>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button startIcon={<ArrowBackIosIcon fontSize="small" />}>
                  BACK
                </Button>

                <CloseIcon />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid
                    item
                    xs={3.5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "20px 10px 20px 10px",
                      }}
                      variant="body2"
                    >
                      DISCOVER
                    </Typography>
                    <Typography>Overview</Typography>
                    <Typography>Accepting the institutions</Typography>
                    <Typography>Student Stories</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3.5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "20px 10px 20px 10px",
                      }}
                      variant="body2"
                    >
                      PREPARE
                    </Typography>
                    <Typography>Getting Ready</Typography>
                    <Typography>Testing Score</Typography>
                    <Typography>Practice Free</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3.5}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: "20px 10px 20px 10px",
                      }}
                      variant="body2"
                    >
                      SUPPORT
                    </Typography>
                    <Typography>FAQ</Typography>
                    <Typography>Accommodations</Typography>
                    <Typography>Create an account</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Popover>
    </>
  );
};

export default ApplicantHeaderBar;
