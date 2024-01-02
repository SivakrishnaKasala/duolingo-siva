import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Popover,
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
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Navigate } from "react-router-dom";
// import { useTheme } from "@emotion/react"

const DuoHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorElPopover, setAnchorElPopover] = useState(null);
  const [goToSettings, setGoToSettings] = useState(false);

  const handleOpenPopover = (event) => {
    // setOpenPopover(true);
    setAnchorElPopover(event.currentTarget);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const renderHeaderPage = () => {
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
                    onClick={handleOpenPopover}
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
        <Popover
          open={Boolean(anchorElPopover)}
          anchorEl={anchorElPopover}
          id={Boolean(anchorElPopover) ? "simple-popover" : undefined}
          onClose={() => setAnchorElPopover(false)}
          PaperProps={{
            style: {
              width: "320px",
              borderTopLeftRadius: "6px",
              borderBottomLeftRadius: "6px",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <List
              sx={{
                padding: "0!important",
              }}
            >
              <ListItem
                sx={{
                  padding: "18px 20px",
                }}
              >
                <ListItemButton
                  disableRipple
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0!important",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => setGoToSettings(true)}
                >
                  <Typography>Settings</Typography>
                  <ChevronRightOutlinedIcon />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem
                sx={{
                  padding: "18px 20px",
                }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0!important",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  disableRipple
                >
                  <Typography>Site Language</Typography>
                  <ChevronRightOutlinedIcon />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem
                sx={{
                  padding: "18px 20px",
                }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0!important",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  disableRipple
                >
                  <Typography>Log Out</Typography>
                  <LogoutOutlinedIcon />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Popover>
      </>
    );
  };
  const render = () => {
    if (goToSettings) {
      return <Navigate to="/duolingo/settings" />;
    } else {
      return renderHeaderPage();
    }
  };

  return render();
};

export default DuoHeader;
