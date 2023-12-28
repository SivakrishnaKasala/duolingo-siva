import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import * as Icons from "@mui/icons-material";
import React, { useState } from "react";

// import routes from "./../../routes";

//icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../SideBar/SideBar";
// import { useTheme } from "@emotion/react"

const DuoHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          position: "static",
          borderBottom: "1px solid #ccc",
        }}
        elevation={0}
      >
        <Toolbar>
          {!isSmallScreen && (
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid item xs={2}>
                <Box
                  component="img"
                  src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
                />
              </Grid>
              <Grid item xs={7}>
                <Box>
                  <Typography
                    variant="text"
                    sx={{
                      color: "black",
                    }}
                  >
                    Home
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid
              item
              xs={2}
              sx={{
                margin: "0!important",
                padding: "0!important",
              }}
            >
              <Box
                component={List}
                sx={{
                  margin: "0!important",
                  padding: "0!important",
                }}
              >
                <ListItem
                  sx={{
                    // margin: "0!important",
                    padding: "0!important",
                  }}
                >
                  <ListItemButton>
                    <ListItemAvatar
                      sx={{
                        width: "auto",
                        marginLeft: 1,
                        marginRight: 1,
                      }}
                    >
                      <AccountCircleOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText>My Account</ListItemText>
                    <ListItemAvatar
                      sx={{
                        width: "auto",
                        marginLeft: 1,
                        marginRight: 1,
                      }}
                    >
                      <ExpandMoreIcon />
                    </ListItemAvatar>
                  </ListItemButton>
                </ListItem>
              </Box>
            </Grid> */}
              {/* <Grid item xs={2}>
              <Button
                variant="text"
                startIcon={<AccountCircleOutlinedIcon />}
                endIcon={<ExpandMoreIcon />}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  My Account
                </Typography>
              </Button>
            </Grid> */}
              <Grid item xs={1.8}>
                <Box
                  component={Button}
                  variant="text"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    color: "black",
                  }}
                >
                  <AccountCircleOutlinedIcon
                    sx={{
                      width: "auto",
                      display: "flex",
                      alignContent: "center",
                      paddingRight: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    My Account
                  </Typography>

                  <ExpandMoreIcon
                    fontSize="small"
                    sx={{
                      width: "auto",
                      display: "flex",
                      alignContent: "center",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
          {isSmallScreen && (
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuIcon
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <Box>
                  <Box
                    component="img"
                    src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
                  />
                </Box>
              </Grid>
              <Grid item>
                <IconButton>
                  <AccountCircleOutlinedIcon
                    sx={{
                      fontSize: "28px",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={() => closeDrawer()}>
        <Box
          sx={{
            width: "185px",
            padding: "5px 10px 25px 20px ",
            overflowY: "hidden", // Prevent vertical scrolling
          }}
        >
          <SideBar />
        </Box>
      </Drawer>
    </>
  );
};

export default DuoHeader;
